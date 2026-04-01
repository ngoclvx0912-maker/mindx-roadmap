#!/usr/bin/env python3
"""MindX Expert Q&A Server — runs on port 8001.
Two modes: AI (Perplexity sonar-pro) and Telegram forwarding.
Features RAG: keyword-based chunk retrieval from full knowledge base (~900K chars).
"""
import asyncio
import json
import os
import re
import time
import uuid
import httpx
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# ── Config ──────────────────────────────────────────────────────────
TELEGRAM_BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "8631874779:AAHbwLnMa8tigGpc5F70O0jgqKyzQlockDg")
TELEGRAM_CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID", "-4991206966")
PERPLEXITY_API_KEY = os.environ.get("PERPLEXITY_API_KEY", "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")

# ── RAG: Load chunked knowledge base ────────────────────────────────
CHUNKS = []
CHUNK_INDEX = []

# Try project dir first, then workspace root
_base = Path(__file__).parent
chunks_path = _base / "mindx-knowledge-chunks.json"
if not chunks_path.exists():
    chunks_path = Path("/home/user/workspace/mindx-knowledge-chunks.json")
index_path = _base / "mindx-knowledge-index.json"
if not index_path.exists():
    index_path = Path("/home/user/workspace/mindx-knowledge-index.json")

if chunks_path.exists():
    CHUNKS = json.loads(chunks_path.read_text(encoding="utf-8"))
if index_path.exists():
    CHUNK_INDEX = json.loads(index_path.read_text(encoding="utf-8"))

print(f"[KB] Loaded {len(CHUNKS)} chunks from {len(CHUNK_INDEX)} files")

# ── Also load slide content for product knowledge ────────────────────
slide_files = [
    "/home/user/workspace/mindx-roadmap/xmember.js",
    "/home/user/workspace/mindx-roadmap/xmember2.js",
    "/home/user/workspace/mindx-roadmap/xart.js",
]
PRODUCT_KNOWLEDGE = ""
for f in slide_files:
    p = Path(f)
    if p.exists():
        content = p.read_text(encoding="utf-8")
        templates = re.findall(r'innerHTML\s*=\s*`([^`]{50,})`', content)
        if templates:
            PRODUCT_KNOWLEDGE += f"\n\n# SLIDE CONTENT: {p.name}\n"
            for t in templates:
                clean = re.sub(r'<[^>]+>', ' ', t)
                clean = re.sub(r'\s+', ' ', clean).strip()
                if len(clean) > 30:
                    PRODUCT_KNOWLEDGE += clean + "\n---\n"

# Limit slide content
MAX_PROD = 15000
prod_text = PRODUCT_KNOWLEDGE[:MAX_PROD] if len(PRODUCT_KNOWLEDGE) > MAX_PROD else PRODUCT_KNOWLEDGE

# ── RAG: Keyword-based retrieval ─────────────────────────────────────
# Vietnamese keyword mapping for better matching
KEYWORD_ALIASES = {
    "coding": ["coding", "lập trình", "code", "python", "javascript", "web", "x-coding", "xcoding", "tech spine"],
    "art": ["art", "nghệ thuật", "thiết kế", "design", "đồ họa", "3d", "ui/ux", "animation", "x-art", "xart"],
    "robotics": ["robotics", "robot", "rbt", "phần cứng", "arduino", "iot", "stem"],
    "du_hoc": ["du học", "留学", "x-global", "tech seed", "art seed", "học bổng", "visa", "nước ngoài", "quốc tế", "study abroad", "tư vấn du học"],
    "bf": ["bf", "business foundation", "business", "marketing", "finance", "accounting", "communication", "operation", "sale", "kỹ năng mềm", "tuyển dụng", "nhân sự"],
    "roadmap": ["roadmap", "lộ trình", "chương trình", "curriculum", "syllabus", "module", "bảo trợ", "multi-career", "đa ngành", "career guarantee"],
    "thi_truong": ["thị trường", "lao động", "AI", "xu hướng", "công nghệ", "việt nam", "tương lai", "nghề nghiệp", "thất nghiệp", "giáo dục"],
    "alumni": ["alumni", "cựu học viên", "case study", "thành công", "câu chuyện", "khởi nghiệp", "thành tích"],
    "internship": ["internship", "thực tập", "doanh nghiệp", "việc làm", "career", "tuyển dụng"],
    "hoc_phi": ["học phí", "giá", "chi phí", "đầu tư", "pricing"],
    "review": ["review", "nhận xét", "feedback", "đánh giá", "comment"],
}

def retrieve_relevant_chunks(question: str, context: str = "", max_chars: int = 80000) -> str:
    """Retrieve the most relevant knowledge chunks for a question using keyword matching."""
    query = (question + " " + context).lower()

    # Score each chunk based on keyword matches
    scored_chunks = []
    for chunk in CHUNKS:
        score = 0
        chunk_topics = [t.lower() for t in chunk.get("topics", [])]
        chunk_source = chunk.get("source", "").lower()
        chunk_content_lower = chunk.get("content", "")[:500].lower()

        # Direct keyword match in question
        for category, keywords in KEYWORD_ALIASES.items():
            category_match = False
            for kw in keywords:
                if kw.lower() in query:
                    category_match = True
                    break
            if category_match:
                # Check if chunk belongs to this category
                for kw in keywords:
                    if kw.lower() in " ".join(chunk_topics) or kw.lower() in chunk_source:
                        score += 10
                        break
                # Also check content
                for kw in keywords:
                    if kw.lower() in chunk_content_lower:
                        score += 3
                        break

        # Word-level matching: score chunks that contain question words
        query_words = set(re.findall(r'\w{3,}', query))
        for word in query_words:
            if word in chunk_content_lower:
                score += 1

        # Priority boost for key files
        priority_sources = {
            "roadmap-bt-2026": 5,
            "research-market-education": 3,
            "research-mindx-casestudies": 3,
            "bf_syllabus": 2,
        }
        for src_key, boost in priority_sources.items():
            if src_key in chunk_source:
                score += boost

        if score > 0:
            scored_chunks.append((score, chunk))

    # Sort by score descending
    scored_chunks.sort(key=lambda x: -x[0])

    # Collect chunks up to max_chars
    result_parts = []
    total_chars = 0
    seen_sources = set()

    for score, chunk in scored_chunks:
        content = chunk["content"]
        if total_chars + len(content) > max_chars:
            # Try to fit partial
            remaining = max_chars - total_chars
            if remaining > 500:
                result_parts.append(f"[{chunk['source']}]\n{content[:remaining]}...")
                total_chars += remaining
            break
        result_parts.append(f"[{chunk['source']}]\n{content}")
        total_chars += len(content)
        seen_sources.add(chunk["source"])

    # If we have very few results, add some general context from priority files
    if total_chars < 20000:
        for chunk in CHUNKS:
            if chunk["source"] not in seen_sources:
                for src_key in ["Roadmap-BT-2026", "research-market-education", "research-mindx-casestudies"]:
                    if src_key in chunk["source"]:
                        content = chunk["content"]
                        if total_chars + len(content) <= max_chars:
                            result_parts.append(f"[{chunk['source']}]\n{content}")
                            total_chars += len(content)
                            seen_sources.add(chunk["source"])

    print(f"[RAG] Query: '{question[:60]}...' → {len(result_parts)} chunks, {total_chars:,} chars from {len(seen_sources)} sources")
    return "\n\n---\n\n".join(result_parts)


# ── System prompt builder ────────────────────────────────────────────
SYSTEM_PROMPT_TEMPLATE = """Bạn là chuyên gia tư vấn giáo dục của MindX Technology School — trường học công nghệ lớn nhất Đông Nam Á.

PHONG CÁCH TRẢ LỜI:
- Trả lời bằng tiếng Việt, thân thiện, chuyên nghiệp
- KHÔNG bao giờ nói mình là AI, chatbot, hay trợ lý ảo
- Luôn xưng hô: gọi phụ huynh là "Quý PH", xưng là "MindX"
  Ví dụ: "MindX xin chia sẻ với Quý PH...", "Quý PH có thể yên tâm..."
- Ngắn gọn, đi thẳng vào vấn đề (tối đa 300 từ)
- Sử dụng dữ liệu cụ thể khi có thể (số liệu, tên học viên, thành tích)
- Luôn đề cập 3 hệ giá trị: Tư Duy, Kỹ Năng, Kiến Thức
- Giọng văn ấm áp, đáng tin cậy
- KHÔNG dùng markdown headers (#), không dùng bullet dài — viết tự nhiên như chat

CÂU HỎI TƯƠNG TỰ ĐÃ ĐƯỢC BAN LÃNH ĐẠO MINDX TRẢ LỜI (uu tiên tham khảo nếu phù hợp):
{qa_kb_text}

VỀ MINDX:
- Thành lập 2015, hơn 50 cơ sở toàn quốc
- 3 hướng K12: Coding (lập trình), Art (nghệ thuật số), Robotics
- Chương trình bảo trợ du học: X-Global Tech Seed (CNTT) và X-Global Art Seed (Art)
- Chương trình 18+: X-Coding, X-Art
- Business Foundation (BF): chương trình đào tạo kỹ năng kinh doanh, chia 3 level:
  + LV1: MKT & Communication
  + LV2: Sale & Operation
  + LV3: Finance & Accounting
- Hệ giá trị cốt lõi: Tư Duy → Kỹ Năng → Kiến Thức
- ROADMAP MỚI 2025-2026: "Multi-Career Guarantee" — bảo trợ việc làm đa ngành
  + Tech Spine: Nền tảng CNTT + AI xuyên suốt
  + 4 Domain Tracks: Tech, Marketing, Finance, Business & Operation
  + Career outcomes rõ ràng cho từng track
  + Không chỉ dạy IT mà còn đào tạo nhân lực đa ngành biết AI

THÔNG TIN SẢN PHẨM TỪ SLIDES:
{prod_text}

DỮ LIỆU NỘI BỘ MINDX (đã được lọc theo câu hỏi — ưu tiên sử dụng):
{kb_text}

QUY TẮC:
1. Ưu tiên dữ liệu nội bộ MindX khi trả lời — đặc biệt roadmap mới 2025-2026
2. Nếu không có thông tin, nói: "MindX sẽ chuyển câu hỏi này cho đội ngũ chuyên gia để tư vấn chi tiết hơn cho Quý PH ạ"
3. KHÔNG bịa số liệu hoặc thông tin
4. Với câu hỏi về học phí — nói học phí tùy chương trình, mời Quý PH liên hệ trực tiếp để được tư vấn chi tiết
5. Với câu hỏi ngoài giáo dục — nhẹ nhàng chuyển hướng về giáo dục công nghệ
6. Luôn kết thúc bằng câu hỏi mở hoặc gợi ý hành động tiếp theo cho Quý PH
"""


def build_system_prompt(question: str, context: str = "") -> str:
    """Build system prompt with relevant knowledge chunks + leadership Q&A."""
    kb_text = retrieve_relevant_chunks(question, context, max_chars=80000)
    qa_kb_text = retrieve_qa_knowledge(question)
    if not qa_kb_text:
        qa_kb_text = "(Ch\u01b0a c\u00f3 Q&A t\u1eeb Ban l\u00e3nh \u0111\u1ea1o)"
    return SYSTEM_PROMPT_TEMPLATE.format(prod_text=prod_text, kb_text=kb_text, qa_kb_text=qa_kb_text)


# ── In-memory store for Telegram Q&A ───────────────────────────────
telegram_questions: dict = {}
last_update_id = 0

# ── Persistent Q&A Knowledge Base (from Telegram replies) ─────────
QA_KB_PATH = _base / "telegram-qa-knowledge.json"
QA_KNOWLEDGE: list = []
if QA_KB_PATH.exists():
    try:
        QA_KNOWLEDGE = json.loads(QA_KB_PATH.read_text(encoding="utf-8"))
    except Exception:
        QA_KNOWLEDGE = []
print(f"[QA-KB] Loaded {len(QA_KNOWLEDGE)} verified Q&A pairs from leadership")

def save_qa_to_knowledge(question: str, answers: list, context: str = ""):
    """Save answered Telegram Q&A to persistent knowledge base."""
    global QA_KNOWLEDGE
    combined = "\n---\n".join([f"{a['name']}: {a['text']}" for a in answers])
    entry = {
        "q": question,
        "a": combined,
        "by": ", ".join(set(a["name"] for a in answers)),
        "context": context,
        "time": time.time(),
    }
    QA_KNOWLEDGE = [e for e in QA_KNOWLEDGE if e["q"].strip().lower() != question.strip().lower()]
    QA_KNOWLEDGE.append(entry)
    try:
        QA_KB_PATH.write_text(json.dumps(QA_KNOWLEDGE, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"[QA-KB] Saved: '{question[:50]}...' by {entry['by']}")
    except Exception as e:
        print(f"[QA-KB] Save failed: {e}")

def retrieve_qa_knowledge(question: str, max_pairs: int = 5) -> str:
    """Retrieve relevant Q&A pairs from leadership knowledge base."""
    if not QA_KNOWLEDGE:
        return ""
    query_words = set(question.lower().split())
    scored = []
    for entry in QA_KNOWLEDGE:
        entry_words = set(entry["q"].lower().split()) | set(entry["a"].lower().split())
        overlap = len(query_words & entry_words)
        if overlap >= 2:
            scored.append((overlap, entry))
    scored.sort(key=lambda x: -x[0])
    if not scored:
        return ""
    parts = [f"Q: {e['q']}\nA ({e['by']}): {e['a']}" for _, e in scored[:max_pairs]]
    return "\n\n".join(parts)

# ── App setup ───────────────────────────────────────────────────────
@asynccontextmanager
async def lifespan(app):
    task = asyncio.create_task(telegram_poll_loop())
    yield
    task.cancel()

app = FastAPI(lifespan=lifespan)
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

# ── Models ──────────────────────────────────────────────────────────
class AskAIRequest(BaseModel):
    question: str
    context: str = ""

class TelegramAskRequest(BaseModel):
    question: str
    parent_name: str = "Phụ huynh"
    context: str = ""

# ── AI Mode — Perplexity API (sonar-pro) ────────────────────────────
@app.post("/api/expert/ai")
async def ask_ai(req: AskAIRequest):
    """Answer using Perplexity sonar-pro with RAG knowledge base."""
    try:
        user_msg = req.question

        # Build prompt with relevant knowledge (no context bias)
        system_prompt = build_system_prompt(req.question)

        async with httpx.AsyncClient(timeout=60) as client:
            resp = await client.post(
                "https://api.perplexity.ai/chat/completions",
                headers={
                    "Authorization": f"Bearer {PERPLEXITY_API_KEY}",
                    "Content-Type": "application/json",
                },
                json={
                    "model": "sonar-pro",
                    "messages": [
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_msg},
                    ],
                    "max_tokens": 1024,
                    "temperature": 0.5,
                    "search_recency_filter": "month",
                },
            )

            if resp.status_code != 200:
                error_detail = resp.text[:200]
                raise HTTPException(status_code=422, detail=f"Perplexity API error: {error_detail}")

            data = resp.json()
            answer = data["choices"][0]["message"]["content"]
            return {"answer": answer, "mode": "ai", "model": "sonar-pro"}

    except httpx.HTTPError as e:
        raise HTTPException(status_code=422, detail=f"Network error: {str(e)}")
    except KeyError as e:
        raise HTTPException(status_code=422, detail=f"Response parse error: {str(e)}")

# ── Telegram Mode ───────────────────────────────────────────────────
@app.post("/api/expert/telegram")
async def ask_telegram(req: TelegramAskRequest):
    """Forward question to Telegram group, return question_id for polling."""
    if not TELEGRAM_BOT_TOKEN or not TELEGRAM_CHAT_ID:
        raise HTTPException(status_code=422, detail="Telegram chưa được cấu hình")

    question_id = str(uuid.uuid4())[:8]

    tg_text = (
        f"📩 CÂU HỎI TỪ PHỤ HUYNH\n"
        f"━━━━━━━━━━━━━━━━━━\n"
        f"👤 {req.parent_name}\n"
    )
    if req.context:
        tg_text += f"📋 Đang xem: {req.context}\n"
    tg_text += (
        f"━━━━━━━━━━━━━━━━━━\n"
        f"❓ {req.question}\n"
        f"━━━━━━━━━━━━━━━━━━\n"
        f"🔑 ID: #{question_id}\n\n"
        f"💡 Trả lời bằng cách reply tin nhắn này"
    )

    try:
        async with httpx.AsyncClient() as client:
            resp = await client.post(
                f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage",
                json={
                    "chat_id": TELEGRAM_CHAT_ID,
                    "text": tg_text,
                    "parse_mode": "HTML",
                }
            )
            data = resp.json()

            if not data.get("ok"):
                raise HTTPException(status_code=422, detail=f"Telegram error: {data}")

            msg_id = data["result"]["message_id"]

            telegram_questions[question_id] = {
                "question": req.question,
                "parent_name": req.parent_name,
                "asked_at": time.time(),
                "answer": None,
                "answered_at": None,
                "answered_by": None,
                "telegram_msg_id": msg_id,
                "answers": [],  # list of all replies
            }

            return {"question_id": question_id, "status": "sent"}

    except httpx.HTTPError as e:
        raise HTTPException(status_code=422, detail=f"Network error: {str(e)}")

@app.get("/api/expert/telegram/poll/{question_id}")
async def poll_telegram_answer(question_id: str):
    """Poll for answer to a specific question."""
    if question_id not in telegram_questions:
        raise HTTPException(status_code=404, detail="Question not found")

    q = telegram_questions[question_id]
    if q["answers"]:
        return {
            "status": "answered",
            "answer": q["answers"][-1]["text"],
            "answered_by": q["answers"][-1]["name"],
            "answered_at": q["answers"][-1]["time"],
            "answers": q["answers"],
            "answer_count": len(q["answers"]),
        }

    if time.time() - q["asked_at"] > 1800:
        return {"status": "timeout"}

    return {"status": "waiting"}

@app.get("/api/expert/telegram/status")
async def telegram_status():
    """Check if Telegram is configured."""
    return {
        "configured": bool(TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID),
        "has_token": bool(TELEGRAM_BOT_TOKEN),
        "has_chat_id": bool(TELEGRAM_CHAT_ID),
    }

# ── Telegram polling loop ──────────────────────────────────────────
async def telegram_poll_loop():
    """Poll Telegram for replies to forwarded questions."""
    global last_update_id

    if not TELEGRAM_BOT_TOKEN:
        return

    # Initial delay to let server start
    await asyncio.sleep(3)

    while True:
        try:
            async with httpx.AsyncClient() as client:
                resp = await client.get(
                    f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/getUpdates",
                    params={"offset": last_update_id + 1, "timeout": 5},
                    timeout=10,
                )
                data = resp.json()

                if data.get("ok") and data.get("result"):
                    for update in data["result"]:
                        last_update_id = update["update_id"]
                        msg = update.get("message", {})

                        reply_to = msg.get("reply_to_message", {})
                        reply_msg_id = reply_to.get("message_id")

                        if reply_msg_id and msg.get("text"):
                            for qid, q in telegram_questions.items():
                                if q["telegram_msg_id"] == reply_msg_id:
                                    sender = msg.get("from", {})
                                    name = sender.get("first_name", "Chuyên gia")
                                    if sender.get("last_name"):
                                        name += " " + sender["last_name"]

                                    reply_entry = {
                                        "text": msg["text"],
                                        "name": name,
                                        "time": time.time(),
                                    }
                                    q["answers"].append(reply_entry)
                                    # Keep legacy fields updated to latest
                                    q["answer"] = msg["text"]
                                    q["answered_by"] = name
                                    q["answered_at"] = time.time()
                                    # Save to persistent Q&A knowledge base
                                    save_qa_to_knowledge(
                                        question=q["question"],
                                        answers=q["answers"],
                                        context=q.get("context", ""),
                                    )
                                    break
        except Exception:
            pass

        await asyncio.sleep(2)

# ── Q&A Knowledge Base API ──────────────────────────────────────────
@app.get("/api/expert/qa-knowledge")
def get_qa_knowledge():
    """View all Q&A pairs from leadership."""
    return {"count": len(QA_KNOWLEDGE), "pairs": QA_KNOWLEDGE}

# ── Health check ────────────────────────────────────────────────────
@app.get("/api/expert/health")
def health():
    return {
        "status": "ok",
        "telegram_configured": bool(TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID),
        "ai_model": "perplexity/sonar-pro",
        "knowledge_chunks": len(CHUNKS),
        "knowledge_files": len(CHUNK_INDEX),
        "knowledge_sources": [idx["file"] for idx in CHUNK_INDEX],
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
