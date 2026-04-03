// ============================================================================
// roleplay-data.js — MindX AI Role-Play Lab — Seed Data (v1.0)
// Generated: 2026-04-03
// Contains: academies, personas, scenarios, knowledgeBase, scoringRubric, promptTemplates
// ============================================================================

window.RolePlayData = {

// ============================================================================
// 1. ACADEMIES — 2 Product Academies with 6 lessons each
// ============================================================================
academies: [
  {
    id: "duhoc",
    name: "Bảo trợ Du học Mastery",
    icon: "✈️",
    color: "#4A90D9",
    description: "Master kiến thức và kỹ năng tư vấn chương trình Bảo trợ Du học MindX — Lò luyện Portfolio Công nghệ và Storytelling.",
    whyMatters: `• Du học là khoản đầu tư lớn nhất của gia đình — PH cần Sale am hiểu, đáng tin cậy
• Thị trường 3.400+ tổ chức cạnh tranh — Sale phải truyền tải được USP "Portfolio Công nghệ" rõ ràng
• Sản phẩm MỚI launch — Sale là người đầu tiên tạo niềm tin cho khách hàng
• Mỗi deal thành công = 1 học sinh có cơ hội đổi đời, 1 gia đình tin tưởng MindX
• Chương trình kết hợp Tech + Storytelling + AI — Sale cần hiểu sâu để tư vấn chuẩn xác`,
    lessons: [
      {
        id: "duhoc_L01",
        title: "Tổng quan chương trình Du Học MindX",
        icon: "🎯",
        content: `<h3>🎯 Tổng quan chương trình Bảo trợ Du Học MindX</h3>

<p><strong>Định vị:</strong> MindX Du Học KHÔNG phải dịch vụ du học truyền thống. MindX là <em>"Lò luyện Portfolio Công nghệ và Storytelling"</em> — giúp học sinh xây hồ sơ ĐỘC BẢN, khác biệt hoàn toàn so với 3.400+ tổ chức du học chỉ làm giấy tờ hành chính.</p>

<h4>📌 2 Mảnh Ghép Hồ Sơ Du Học</h4>
<table style="width:100%;border-collapse:collapse;margin:12px 0;">
  <tr style="background:#4A90D9;color:#fff;">
    <th style="padding:8px;text-align:left;">Mảnh 1: Đối tác Du học</th>
    <th style="padding:8px;text-align:left;">Mảnh 2: MindX phụ trách (ĐIỂM NHẤN)</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ddd;">GPA, bằng cấp<br>IELTS/TOEFL<br>SAT/ACT<br>Tài chính, visa</td>
    <td style="padding:8px;border:1px solid #ddd;"><strong>Tech Portfolio:</strong> Web/Data Dashboard/App → GitHub/Figma<br><strong>Leadership Portfolio:</strong> Hackathon KÉP (BTC + Thí sinh)<br><strong>Personal Statement:</strong> AI brainstorm → bài luận chân thực<br><strong>Recommendation Letter:</strong> Từ Mentor MindX</td>
  </tr>
</table>

<h4>📌 3 Phân Hệ Chuyên Môn</h4>
<ul>
  <li><strong>Web Coding:</strong> Lớp 8-9 → Website tĩnh xã hội | Lớp 10-12 → Web App MVP, JS, API, GitHub</li>
  <li><strong>Data Analysis:</strong> Lớp 8-9 → Infographic/Báo cáo | Lớp 10-12 → Interactive Dashboard, BI Tools</li>
  <li><strong>UI/UX Design:</strong> Lớp 8-9 → App Concept | Lớp 10-12 → Interactive Prototype Figma</li>
</ul>

<h4>📌 Capstone Hackathon — Điểm nhấn khác biệt</h4>
<p>Học viên đóng vai trò KÉP: vừa là Ban Tổ Chức (ứng dụng AI lập kế hoạch, truyền thông) vừa là Thí sinh (hoàn thiện dự án, thuyết trình tiếng Anh, phản biện). Media ghi hình toàn bộ → tư liệu hồ sơ du học.</p>

<h4>📌 Cấu trúc giá</h4>
<ul>
  <li>HV VIP Bảo Trợ: <strong>MIỄN PHÍ 100%</strong></li>
  <li>HV đang học MindX: <strong>theo bảng học phí lộ trình Bảo trợ</strong> (giảm 30%)</li>
  <li>Khách mới: <strong>theo bảng học phí lộ trình Bảo trợ</strong></li>
</ul>

<h4>📌 Workflow 6 bước</h4>
<ol>
  <li><strong>Onboarding & Chốt Scope</strong> — Chọn vấn đề xã hội + ý tưởng dự án</li>
  <li><strong>Build & Storytelling cùng AI</strong> — Thực thi + Mock Interview</li>
  <li><strong>Capstone Hackathon</strong> — BTC + thi đấu + Media ghi hình</li>
  <li><strong>Bàn giao</strong> — Đóng gói hồ sơ (Web/Dashboard/Figma, GitHub, Bài luận, LOR, Chứng nhận)</li>
  <li><strong>Check-in & Tracking</strong> — Cập nhật Visa</li>
  <li><strong>Thu hoạch</strong> — Vinh danh + Case Study</li>
</ol>

<h4>📌 Cam kết & KHÔNG cam kết</h4>
<p><strong>Cam kết:</strong> Dự án thực tế, Storytelling, Mentor uy tín, Kết nối 05+ đối tác du học, Danh sách 20 trường Top, Workshop + Alumni, Bảo trợ việc làm 06 tháng sau tốt nghiệp ĐH, Career Coaching 1-1.</p>
<p style="color:#c0392b;"><strong>KHÔNG cam kết:</strong> Tỷ lệ đỗ 100% | Thay đổi chính sách nhập cư | Khả năng tài chính gia đình.</p>`,
        quiz: [
          {
            q: "MindX Du Học định vị là gì?",
            options: ["Dịch vụ du học trọn gói A-Z", "Lò luyện Portfolio Công nghệ và Storytelling", "Trung tâm tư vấn visa", "Đại lý tuyển sinh quốc tế"],
            correct: 1,
            explanation: "MindX KHÔNG làm dịch vụ giấy tờ. MindX là 'Lò luyện Portfolio Công nghệ và Storytelling' — giúp học sinh xây hồ sơ Độc bản."
          },
          {
            q: "Mảnh ghép nào MindX phụ trách?",
            options: ["GPA, IELTS, visa", "Tech Portfolio, Leadership, Personal Statement, LOR", "Chỉ viết essay", "Chỉ dạy coding"],
            correct: 1,
            explanation: "MindX phụ trách Mảnh 2: Tech Portfolio, Leadership Portfolio (Hackathon), Personal Statement (AI brainstorm), Recommendation Letter."
          },
          {
            q: "Giá chương trình Du Học cho khách mới là bao nhiêu?",
            options: ["Miễn phí", "theo bảng học phí lộ trình Bảo trợ", "theo bảng học phí lộ trình Bảo trợ", "50.000.000 VNĐ"],
            correct: 2,
            explanation: "Khách mới: theo bảng học phí lộ trình Bảo trợ. HV đang học MindX: theo bảng học phí lộ trình Bảo trợ (giảm 30%). HV VIP Bảo Trợ: Miễn phí."
          }
        ]
      },
      {
        id: "duhoc_L02",
        title: "Vì sao Du Học Portfolio quan trọng?",
        icon: "💡",
        content: `<h3>💡 Vì sao sản phẩm Du Học Portfolio quan trọng?</h3>

<h4>🌍 Bối cảnh thị trường</h4>
<ul>
  <li><strong>Đại dương đỏ:</strong> 3.400+ tổ chức tư vấn du học tại Việt Nam — chủ yếu chỉ làm thủ tục hành chính</li>
  <li><strong>Nhu cầu STEM tăng 10.4% toàn cầu</strong> — AI, Data Science, Cybersecurity dẫn đầu</li>
  <li><strong>Holistic Review:</strong> Trường Top đánh giá TOÀN DIỆN — Portfolio > GPA/IELTS</li>
  <li><strong>35% sinh viên trúng tuyển Caltech</strong> nộp dự án/nghiên cứu thực tế</li>
</ul>

<h4>😰 Nỗi đau hồ sơ điển hình</h4>
<ol>
  <li><strong>Lạm phát điểm số:</strong> IELTS 7.0+ và GPA 8.0+ chỉ là tiêu chuẩn TỐI THIỂU</li>
  <li><strong>Ngoại khóa rập khuôn:</strong> Chứng nhận từ thiện/CLB thiếu chiều sâu</li>
  <li><strong>Hồ sơ cào bằng:</strong> Thiếu dấu ấn cá nhân — trường Top nhận 5-8% thí sinh</li>
  <li><strong>Thiếu thực hành:</strong> Không có minh chứng năng lực thực tế</li>
</ol>

<h4>🚀 3 Lợi thế cạnh tranh MindX</h4>
<ol>
  <li><strong>Portfolio Thực Chiến:</strong> Deploy lên Cloud (AWS/Heroku), phục vụ người dùng thật — không phải bài tập lý thuyết</li>
  <li><strong>Storytelling + AI:</strong> Rèn Prompting + AI Agent để thiết kế bài luận cá nhân hóa — con là tác giả, AI là công cụ</li>
  <li><strong>Hackathon KÉP:</strong> BTC + Thi đấu = Chứng minh Leadership + Bản lĩnh thuyết trình trước ban giám khảo</li>
</ol>

<h4>💰 USP bán hàng — 4 điểm mấu chốt</h4>
<ol>
  <li><strong>Hồ sơ Độc bản:</strong> Tech Portfolio + GitHub/Dashboard/Figma → thứ trường Top tìm kiếm</li>
  <li><strong>Học thật - Làm thật - Đón đầu AI:</strong> Kỹ năng Prompting + AI Agent xuyên suốt</li>
  <li><strong>Đầu tư 1 được 2:</strong> Năng lực Code/Data/Design + Storytelling — dù có du học hay không</li>
  <li><strong>A-Z Tracking:</strong> Từ ý tưởng → bàn giao hồ sơ → theo dõi đến Visa</li>
</ol>

<p style="background:#fff3cd;padding:12px;border-radius:8px;"><strong>⚡ Ghi nhớ:</strong> Sale KHÔNG bán "gói đỗ visa". Sale bán SỰ ĐỘT PHÁ NĂNG LỰC. Portfolio là tài sản tồn tại mãi, dù con có du học hay ở Việt Nam.</p>`,
        quiz: [
          {
            q: "Tại sao GPA 8.0+ và IELTS 7.0+ không đủ để đỗ trường Top?",
            options: ["Vì trường Top không cần điểm", "Vì đó chỉ là tiêu chuẩn tối thiểu — 90% thí sinh đều có", "Vì IELTS không quan trọng", "Vì trường Top chỉ xem portfolio"],
            correct: 1,
            explanation: "GPA và IELTS cao là baseline. Trường Top nhận 5-8% — cần yếu tố KHÁC BIỆT như portfolio thực tế."
          },
          {
            q: "Lợi thế cạnh tranh LỚN NHẤT của MindX so với dịch vụ du học truyền thống?",
            options: ["Giá rẻ hơn", "Lo visa nhanh hơn", "Portfolio Công nghệ thực tế + Storytelling + Hackathon Leadership", "Có nhiều trường liên kết"],
            correct: 2,
            explanation: "MindX làm thứ dịch vụ truyền thống KHÔNG làm được: xây portfolio tech thật, với mentor thật, có sản phẩm thật."
          }
        ]
      },
      {
        id: "duhoc_L03",
        title: "Kiến thức sản phẩm chi tiết",
        icon: "📚",
        content: `<h3>📚 Kiến thức sản phẩm Du Học MindX — Chi tiết</h3>

<h4>🎓 3 Track chuyên môn — Chi tiết</h4>

<div style="background:#e8f4fd;padding:12px;border-radius:8px;margin:8px 0;">
<h5>1️⃣ Web Coding</h5>
<ul>
  <li><strong>Vai trò:</strong> Product Owner của Mini Tech Startup</li>
  <li><strong>Công cụ:</strong> Google Antigravity (Agentic AI)</li>
  <li><strong>Quy trình:</strong> Design Thinking → Giải quyết bài toán xã hội → Coding → Deploy → Real Users</li>
  <li><strong>Lớp 8-9:</strong> Website tĩnh nâng cao nhận thức xã hội (HTML/CSS)</li>
  <li><strong>Lớp 10-12:</strong> Web Application MVP — JavaScript, API, GitHub</li>
  <li><strong>Output:</strong> Core Portfolio trên GitHub + Live Website</li>
</ul>
</div>

<div style="background:#fef9e7;padding:12px;border-radius:8px;margin:8px 0;">
<h5>2️⃣ Data Analysis</h5>
<ul>
  <li><strong>Vai trò:</strong> Data Analyst của Tổ chức Nghiên cứu</li>
  <li><strong>Công cụ:</strong> CRISP-DM + Google Antigravity</li>
  <li><strong>Quy trình:</strong> Business Questions → Insight Validation → Data Storytelling</li>
  <li><strong>Lớp 8-9:</strong> Infographic / Báo cáo Google Sheets</li>
  <li><strong>Lớp 10-12:</strong> Interactive Dashboard, BI Tools</li>
  <li><strong>Output:</strong> Interactive Dashboard + Báo cáo phân tích</li>
</ul>
</div>

<div style="background:#fdedec;padding:12px;border-radius:8px;margin:8px 0;">
<h5>3️⃣ UI/UX Design</h5>
<ul>
  <li><strong>Vai trò:</strong> Product Designer (Human-centered Design)</li>
  <li><strong>Công cụ:</strong> Design Thinking + Google Antigravity, Figma</li>
  <li><strong>AI hỗ trợ:</strong> Mock Persona, Sitemap tự động, tư vấn hệ màu</li>
  <li><strong>Lớp 8-9:</strong> App Concept (bản thiết kế)</li>
  <li><strong>Lớp 10-12:</strong> Interactive Prototype trên Figma → Behance</li>
  <li><strong>Output:</strong> Interactive Prototype + Case Study</li>
</ul>
</div>

<h4>📦 Gói bàn giao cuối khoá</h4>
<ul>
  <li>Website / Dashboard / Figma Prototype</li>
  <li>GitHub Repository hoàn chỉnh</li>
  <li>Personal Statement (AI-assisted brainstorm)</li>
  <li>Recommendation Letter từ Mentor</li>
  <li>Chứng nhận Hackathon (KÉP: BTC + Thí sinh)</li>
  <li>Media ghi hình (video highlight)</li>
  <li>Bảng điểm kỹ thuật (nhấn mạnh React/Python/AWS)</li>
</ul>

<h4>🤝 Đối tác & Hệ sinh thái</h4>
<ul>
  <li>Kết nối tối thiểu 05 đối tác du học uy tín</li>
  <li>Danh sách 20 trường Top ngành Tech</li>
  <li>Cộng đồng MindX Alumni</li>
  <li>Career Coaching 1-1</li>
  <li>Bảo trợ kết nối việc làm 06 tháng sau tốt nghiệp ĐH</li>
</ul>

<h4>🏗️ Chứng thực từ chuyên gia</h4>
<ul>
  <li>Bảng điểm chuyên ngành: Nhấn mạnh React/Python/AWS</li>
  <li>LOR: Viết bởi Quản lý/Senior. GPA > 9.0 → LOR từ CEO</li>
  <li>Chứng nhận đào tạo: Xác nhận kinh nghiệm dự án thực tế</li>
</ul>`,
        quiz: [
          {
            q: "Học sinh lớp 8 thích vẽ, sáng tạo nên gợi ý track nào?",
            options: ["Web Coding", "Data Analysis", "UI/UX Design", "Cả 3 track đều giống nhau"],
            correct: 2,
            explanation: "UI/UX Design phù hợp nhất cho học sinh thiên về nghệ thuật, sáng tạo — dùng Figma, thiết kế prototype, không cần giỏi Toán."
          },
          {
            q: "Gói bàn giao cuối khoá bao gồm bao nhiêu thành phần chính?",
            options: ["3 (portfolio, CV, LOR)", "5 (Web, GitHub, Essay, LOR, Chứng nhận)", "7 (Web/Dashboard/Figma, GitHub, Essay, LOR, Chứng nhận, Media, Bảng điểm)", "Chỉ có portfolio trên GitHub"],
            correct: 2,
            explanation: "Gói bàn giao đầy đủ 7 thành phần: sản phẩm (Web/Dashboard/Figma), GitHub, Personal Statement, LOR, Chứng nhận Hackathon, Media ghi hình, Bảng điểm kỹ thuật."
          }
        ]
      },
      {
        id: "duhoc_L04",
        title: "Tâm lý phụ huynh & cách tiếp cận",
        icon: "🧠",
        content: `<h3>🧠 Tâm lý phụ huynh Du Học & Cách tiếp cận</h3>

<h4>👥 5 Nhóm phụ huynh Du Học điển hình</h4>

<div style="background:#f8f9fa;padding:12px;border-radius:8px;margin:8px 0;">
<h5>1. Nhóm "ROI-focused" (Doanh nhân, quản lý cấp cao)</h5>
<ul>
  <li><strong>Đặc điểm:</strong> Hỏi thẳng số liệu, so sánh chi phí, ra quyết định nhanh</li>
  <li><strong>Nỗi lo:</strong> "theo bảng học phí lộ trình Bảo trợ có xứng đáng? ROI là gì?"</li>
  <li><strong>Cách tiếp cận:</strong> Nói số liệu cụ thể, so sánh ROI (30tr vs chi phí du học 500tr-2 tỷ/năm), nêu deliverable rõ ràng</li>
  <li><strong>Tránh:</strong> Nói chung chung, marketing fancy, kéo dài cuộc tư vấn</li>
</ul>
</div>

<div style="background:#f8f9fa;padding:12px;border-radius:8px;margin:8px 0;">
<h5>2. Nhóm "Lo lắng" (Giáo viên, nhân viên văn phòng)</h5>
<ul>
  <li><strong>Đặc điểm:</strong> Lo con không theo nổi, lo áp lực, hỏi nhiều về phương pháp</li>
  <li><strong>Nỗi lo:</strong> "Con yếu Toán có học được không? Con bị stress?"</li>
  <li><strong>Cách tiếp cận:</strong> Trấn an, giải thích từng bước, nhấn mạnh mentor 1-1, lớp nhỏ, gamified</li>
  <li><strong>Tránh:</strong> Nói nhanh, bỏ qua lo lắng, push đăng ký sớm</li>
</ul>
</div>

<div style="background:#f8f9fa;padding:12px;border-radius:8px;margin:8px 0;">
<h5>3. Nhóm "So sánh" (Marketing, trưởng phòng)</h5>
<ul>
  <li><strong>Đặc điểm:</strong> Đã tìm hiểu 3-5 nơi, có bảng so sánh, hỏi deliverable cụ thể</li>
  <li><strong>Nỗi lo:</strong> "MindX khác gì nơi khác? Differentiator thật sự?"</li>
  <li><strong>Cách tiếp cận:</strong> Nêu khác biệt rõ (tech portfolio vs giấy tờ), offer sample work, tôn trọng đối thủ</li>
  <li><strong>Tránh:</strong> Nói xấu đối thủ, nói chung chung "bên em tốt hơn"</li>
</ul>
</div>

<div style="background:#f8f9fa;padding:12px;border-radius:8px;margin:8px 0;">
<h5>4. Nhóm "Tech-savvy" (Kỹ sư IT, developer)</h5>
<ul>
  <li><strong>Đặc điểm:</strong> Hiểu tech, test kiến thức Sale, nghi ngờ giá trị, con đã biết code</li>
  <li><strong>Nỗi lo:</strong> "MindX dạy thêm được gì? Mentor có giỏi?"</li>
  <li><strong>Cách tiếp cận:</strong> Shift focus sang storytelling, social impact, Product Thinking — thứ code thuần không đủ</li>
  <li><strong>Tránh:</strong> Bluff kiến thức tech, nói dạy code từ zero cho con đã giỏi</li>
</ul>
</div>

<div style="background:#f8f9fa;padding:12px;border-radius:8px;margin:8px 0;">
<h5>5. Nhóm "Cần dẫn dắt" (Nội trợ, nhân viên hành chính)</h5>
<ul>
  <li><strong>Đặc điểm:</strong> Không hiểu tech/du học, nghe bạn bè giới thiệu, cần Sale chủ động</li>
  <li><strong>Nỗi lo:</strong> "Con có bị áp lực? Chị không biết gì về tech"</li>
  <li><strong>Cách tiếp cận:</strong> Kiên nhẫn giải thích, chủ động educate, tạo cảm giác an toàn, dẫn dắt từng bước</li>
  <li><strong>Tránh:</strong> Dùng thuật ngữ phức tạp, nói nhanh, giả định PH đã hiểu</li>
</ul>
</div>

<h4>🎯 Framework xử lý tâm lý: A-R-E</h4>
<ol>
  <li><strong>Acknowledge (Thừa nhận):</strong> "Em hiểu lo lắng của anh/chị..." — LUÔN thừa nhận trước</li>
  <li><strong>Reframe (Đặt lại vấn đề):</strong> "Thật ra vấn đề không phải X, mà là Y..." — Chuyển góc nhìn</li>
  <li><strong>Evidence (Bằng chứng):</strong> "Cụ thể, case study WarmTech..." — Đưa proof</li>
</ol>`,
        quiz: [
          {
            q: "Khi phụ huynh doanh nhân hỏi 'ROI là gì?', Sale nên làm gì ĐẦU TIÊN?",
            options: ["Nói giá ngay", "Hỏi lại mục tiêu du học của con để cá nhân hóa câu trả lời", "So sánh với đối thủ", "Gửi brochure"],
            correct: 1,
            explanation: "Với nhóm ROI-focused, Sale cần hiểu mục tiêu cụ thể (trường nào, ngành gì) trước khi nói về giá trị — cá nhân hóa ROI cho từng gia đình."
          },
          {
            q: "Framework A-R-E là gì?",
            options: ["Ask - Research - Explain", "Acknowledge - Reframe - Evidence", "Attract - Retain - Expand", "Assess - Resolve - Evaluate"],
            correct: 1,
            explanation: "Acknowledge (thừa nhận lo lắng) → Reframe (đặt lại vấn đề) → Evidence (đưa bằng chứng). Luôn acknowledge TRƯỚC khi phản hồi."
          }
        ]
      },
      {
        id: "duhoc_L05",
        title: "FAQ & Xử lý phản đối Du Học",
        icon: "🛡️",
        content: `<h3>🛡️ FAQ & Xử lý phản đối — Du Học</h3>

<h4>🔥 Top 8 Objection thường gặp nhất</h4>

<div style="border-left:4px solid #e74c3c;padding:12px;margin:8px 0;background:#fdf2f2;">
<h5>❓ "theo bảng học phí lộ trình Bảo trợ đắt quá!"</h5>
<p><strong>✅ Nên nói:</strong> "Đúng là khoản đầu tư không nhỏ. Nhưng so với tổng chi phí du học (500 triệu - 2 tỷ/năm), theo bảng học phí lộ trình Bảo trợ cho phần TẠO KHÁC BIỆT lớn nhất trong hồ sơ — rất đáng cân nhắc. Nếu con đang là HV MindX, chỉ theo bảng học phí lộ trình Bảo trợ."</p>
<p><strong>❌ Không được nói:</strong> "Em xin giảm giá" / "Em check khuyến mãi"</p>
</div>

<div style="border-left:4px solid #e74c3c;padding:12px;margin:8px 0;background:#fdf2f2;">
<h5>❓ "Trượt visa thì mất theo bảng học phí lộ trình Bảo trợ?"</h5>
<p><strong>✅ Nên nói:</strong> "Trọng tâm: anh/chị đầu tư MUA SỰ TRƯỞNG THÀNH, không mua vé máy bay. Portfolio apply được VinUni, RMIT, BUV ngay tại VN. Năng lực công nghệ là tài sản tồn tại MÃI — đầu tư 1 được 2."</p>
<p><strong>❌ Không được nói:</strong> "Visa chắc chắn OK" / "Em bảo đảm không reject"</p>
</div>

<div style="border-left:4px solid #e74c3c;padding:12px;margin:8px 0;background:#fdf2f2;">
<h5>❓ "GPA không cao, Portfolio có cứu được không?"</h5>
<p><strong>✅ Nên nói:</strong> "Hội đồng quốc tế đánh giá toàn diện (holistic review). Năng lực kỹ thuật mạnh là đòn bẩy bù đắp xuất sắc nhất. Portfolio chứng minh ứng viên có khả năng THỰC THI — thứ điểm số không thể hiện."</p>
<p><strong>❌ Không được nói:</strong> "Portfolio thay thế GPA" / "Không cần điểm cao nữa"</p>
</div>

<div style="border-left:4px solid #e74c3c;padding:12px;margin:8px 0;background:#fdf2f2;">
<h5>❓ "Học kinh tế có cần biết Tech không?"</h5>
<p><strong>✅ Nên nói:</strong> "Kinh doanh toàn cầu = Data-Driven. Portfolio tech biến sinh viên kinh tế → Nhà quản trị tư duy hệ thống. Data Dashboard cho bài luận kinh tế = hồ sơ gây ấn tượng đột phá."</p>
<p><strong>❌ Không được nói:</strong> "Kinh tế không cần tech" / "Chỉ ngành CS mới cần"</p>
</div>

<div style="border-left:4px solid #e74c3c;padding:12px;margin:8px 0;background:#fdf2f2;">
<h5>❓ "Chương trình mới, chưa có kết quả"</h5>
<p><strong>✅ Nên nói:</strong> "Đúng, chương trình Du Học mới. Nhưng MindX 80.000+ alumni, đội ngũ tech mạnh, HV đang ở 12 quốc gia. First-mover advantage: lớp nhỏ, support cá nhân hóa cao. Cam kết bằng hợp đồng deliverable cụ thể."</p>
<p><strong>❌ Không được nói:</strong> "Nhiều người đỗ rồi" / "Bên em chưa ai trượt"</p>
</div>

<div style="border-left:4px solid #e74c3c;padding:12px;margin:8px 0;background:#fdf2f2;">
<h5>❓ "MindX lo visa, giấy tờ luôn chứ?"</h5>
<p><strong>✅ Nên nói:</strong> "MindX lo portfolio + storytelling (Mảnh 2). Giấy tờ + visa do đối tác uy tín phụ trách (Mảnh 1). Hai mảnh bổ sung nhau. MindX kết nối anh/chị với 05+ đối tác — phân vai rõ ràng."</p>
<p><strong>❌ Không được nói:</strong> "MindX lo hết" / "Visa do em handle"</p>
</div>

<div style="border-left:4px solid #e74c3c;padding:12px;margin:8px 0;background:#fdf2f2;">
<h5>❓ "Bên khác cam kết đỗ 100%"</h5>
<p><strong>✅ Nên nói:</strong> "Anh/chị nên cẩn thận với cam kết 100%. Không ai kiểm soát được quyết định của trường. MindX cam kết về CHẤT LƯỢNG portfolio + kỹ năng. Đó mới là thứ anh/chị kiểm soát được."</p>
<p><strong>❌ Không được nói:</strong> "Bên đó nói xạo" / "Bên em cũng cam kết đỗ"</p>
</div>

<div style="border-left:4px solid #e74c3c;padding:12px;margin:8px 0;background:#fdf2f2;">
<h5>❓ "AI viết luận cho con à?"</h5>
<p><strong>✅ Nên nói:</strong> "Không phải AI viết thay. Con dùng AI Agent brainstorm ý tưởng, sau đó TỰ viết câu chuyện của mình. Giống dùng Google Research — AI là công cụ, con là tác giả. Đây chính là kỹ năng trường Top đánh giá."</p>
<p><strong>❌ Không được nói:</strong> "Yên tâm, trường không phát hiện được đâu"</p>
</div>`,
        quiz: [
          {
            q: "Khi PH nói 'Trượt visa thì mất theo bảng học phí lộ trình Bảo trợ?', đâu là thông điệp CHÍNH?",
            options: ["Visa chắc chắn OK", "Đầu tư mua SỰ TRƯỞNG THÀNH, portfolio apply được cả VN", "Đổi trả tiền nếu trượt", "Giảm giá nếu rủi ro"],
            correct: 1,
            explanation: "Thông điệp cốt lõi: đầu tư vào năng lực, không phải vé máy bay. Portfolio dùng được cả ở VN (VinUni, RMIT, BUV). Đầu tư 1 được 2."
          },
          {
            q: "Khi PH hỏi 'MindX lo visa luôn chứ?', Sale trả lời sai nếu nói gì?",
            options: ["MindX lo portfolio, đối tác lo visa", "2 mảnh ghép bổ sung nhau", "MindX kết nối 05 đối tác uy tín", "Vâng, MindX lo hết từ A-Z"],
            correct: 3,
            explanation: "Nói 'MindX lo hết' là OVERCLAIM — vi phạm Red Line. MindX CHỈ lo Mảnh 2 (portfolio + storytelling), Mảnh 1 (visa, giấy tờ) do đối tác."
          }
        ]
      },
      {
        id: "duhoc_L06",
        title: "Kịch bản tư vấn mẫu Du Học",
        icon: "🎬",
        content: `<h3>🎬 Kịch bản tư vấn mẫu — Du Học</h3>

<h4>📞 Kịch bản 1: Cold Call — PH thấy quảng cáo Facebook</h4>
<div style="background:#f0f0f0;padding:12px;border-radius:8px;">
<p><strong>PH:</strong> "Alo, tôi thấy quảng cáo chương trình du học gì đó trên Facebook. Cho tôi hỏi thêm."</p>
<p><strong>Sale:</strong> "Dạ chào anh/chị! Em là [tên], tư vấn viên MindX. Cảm ơn anh/chị đã quan tâm ạ. Để em tư vấn chính xác nhất, em hỏi nhanh: anh/chị đang tìm hiểu cho con lớp mấy ạ? Và con đã có định hướng du học ở đâu chưa?"</p>
<p style="color:#27ae60;"><em>→ Mở đầu bằng CÂU HỎI, không trình bày ngay</em></p>
</div>

<h4>🏢 Kịch bản 2: Walk-in — PH đưa con đến học Coding, hỏi Du Học</h4>
<div style="background:#f0f0f0;padding:12px;border-radius:8px;">
<p><strong>PH:</strong> "Chị thấy banner du học kia. MindX giờ có cả du học à?"</p>
<p><strong>Sale:</strong> "Dạ đúng rồi chị! MindX vừa ra mắt chương trình Bảo trợ Du Học — tập trung giúp con xây Portfolio Công nghệ cho hồ sơ du học. Rất phù hợp cho bạn nhỏ đang học Coding bên em! Con chị đang học khóa nào ạ?"</p>
<p style="color:#27ae60;"><em>→ Link ngay với context hiện tại (con đang học Coding) → cá nhân hóa</em></p>
</div>

<h4>💰 Kịch bản 3: Xử lý phản đối giá</h4>
<div style="background:#f0f0f0;padding:12px;border-radius:8px;">
<p><strong>PH:</strong> "theo bảng học phí lộ trình Bảo trợ?! Đắt quá! Bên ABC 40 triệu lo A-Z."</p>
<p><strong>Sale:</strong> "Dạ em hiểu lo ngại của anh/chị. [Acknowledge] Thật ra so sánh trực tiếp thì không chính xác vì scope khác nhau. [Reframe] Bên ABC lo giấy tờ + visa (Mảnh 1). MindX lo Portfolio Công nghệ + Storytelling (Mảnh 2) — thứ mà bên ABC KHÔNG làm. Hai mảnh bổ sung nhau, không thay thế nhau. [Evidence] Và so với tổng chi phí du học 500 triệu - 2 tỷ/năm, theo bảng học phí lộ trình Bảo trợ cho phần TẠO KHÁC BIỆT lớn nhất — rất đáng cân nhắc."</p>
<p style="color:#27ae60;"><em>→ Framework A-R-E hoàn hảo: Acknowledge → Reframe → Evidence</em></p>
</div>

<h4>🎯 Kịch bản 4: Chốt CTA</h4>
<div style="background:#f0f0f0;padding:12px;border-radius:8px;">
<p><strong>PH:</strong> "Nghe hay đấy em. Vậy bước tiếp theo là gì?"</p>
<p><strong>Sale:</strong> "Dạ, bước tiếp theo rất đơn giản ạ: em đặt cho anh/chị buổi Onboarding — con sẽ gặp Mentor, chọn vấn đề xã hội mình quan tâm, và sketch ý tưởng dự án đầu tiên. Buổi này miễn phí, khoảng 60 phút. Anh/chị rảnh thứ 7 hay Chủ nhật tuần này ạ?"</p>
<p style="color:#27ae60;"><em>→ CTA cụ thể (Onboarding miễn phí) + thời gian cụ thể (thứ 7/CN) + lowbar (60 phút)</em></p>
</div>

<h4>⚠️ Những sai lầm thường gặp</h4>
<ul>
  <li style="color:#c0392b;">❌ Nói giá TRƯỚC khi build value</li>
  <li style="color:#c0392b;">❌ Trình bày tính năng mà không liên kết với nhu cầu PH</li>
  <li style="color:#c0392b;">❌ Cam kết 'đỗ chắc chắn' / 'visa OK'</li>
  <li style="color:#c0392b;">❌ Nói xấu đối thủ</li>
  <li style="color:#c0392b;">❌ Không hỏi câu hỏi — chỉ trình bày 1 chiều</li>
  <li style="color:#c0392b;">❌ Push đăng ký khi PH chưa sẵn sàng</li>
</ul>`,
        quiz: [
          {
            q: "Khi mở đầu cuộc tư vấn, Sale nên làm gì ĐẦU TIÊN?",
            options: ["Giới thiệu chương trình chi tiết", "Nói giá ngay", "Hỏi thông tin về con (lớp, mục tiêu)", "Gửi brochure"],
            correct: 2,
            explanation: "Luôn mở đầu bằng CÂU HỎI để hiểu nhu cầu. Không trình bày ngay — Sale cần biết PH cần gì trước."
          },
          {
            q: "CTA tốt nhất khi PH interested nhưng chưa muốn đăng ký ngay?",
            options: ["Ép đăng ký vì hết slot", "Đặt lịch Onboarding miễn phí cụ thể ngày giờ", "Gửi tài liệu rồi chờ PH gọi lại", "Giảm giá để PH đăng ký ngay"],
            correct: 1,
            explanation: "CTA tốt = cụ thể + low commitment + có thời gian rõ ràng. Onboarding miễn phí + chọn thứ 7/CN = easy yes."
          }
        ]
      }
    ]
  },
  {
    id: "danghanh",
    name: "Bảo trợ Đa ngành Mastery",
    icon: "🎯",
    color: "#E67E22",
    description: "Master kiến thức và kỹ năng tư vấn lộ trình Coding 5 năm cho trẻ 9-17 tuổi — từ Scratch đến Computer Scientist.",
    whyMatters: `• Coding là kỹ năng thế kỷ 21 — PH cần hiểu giá trị dài hạn, không chỉ 'trend'
• MindX có lộ trình 5 năm liền mạch — Sale phải truyền tải được big picture
• Đối thủ nhiều (Robosta, Teky, FPT) — Sale cần differentiate bằng value, không bằng giá
• Mỗi học viên là 5 năm đồng hành — lifetime value rất lớn
• Tích hợp AI vào mọi level — Sale cần hiểu AI4L, NextGen, Hackathon`,
    lessons: [
      {
        id: "danghanh_L01",
        title: "Tổng quan Lộ trình Coding MindX",
        icon: "🗺️",
        content: `<h3>🗺️ Tổng quan Lộ trình Coding 5 năm MindX</h3>

<h4>🎯 Định vị: MindX Technology School</h4>
<p>Lộ trình Coding 5 năm cho trẻ 9-17 tuổi — từ kéo thả Scratch đến AI/ML chuyên sâu. Không chỉ dạy code — dạy TƯ DUY giải quyết vấn đề + sáng tạo với AI.</p>

<h4>📋 Lộ trình 5 Năm</h4>
<table style="width:100%;border-collapse:collapse;">
  <tr style="background:#E67E22;color:#fff;">
    <th style="padding:8px;">Năm</th><th style="padding:8px;">Tên khóa</th><th style="padding:8px;">Tuổi</th><th style="padding:8px;">Công cụ</th><th style="padding:8px;">Sản phẩm</th>
  </tr>
  <tr><td style="padding:8px;border:1px solid #ddd;"><strong>1</strong></td><td style="padding:8px;border:1px solid #ddd;">Scratch Creator</td><td style="padding:8px;border:1px solid #ddd;">9-11</td><td style="padding:8px;border:1px solid #ddd;">Scratch, Teachable Machine</td><td style="padding:8px;border:1px solid #ddd;">Mini game + Game có AI</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;"><strong>2</strong></td><td style="padding:8px;border:1px solid #ddd;">Game Creator</td><td style="padding:8px;border:1px solid #ddd;">11-13</td><td style="padding:8px;border:1px solid #ddd;">GameMaker Studio 2, GML</td><td style="padding:8px;border:1px solid #ddd;">Game chuyên nghiệp + xuất bản web</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;"><strong>3</strong></td><td style="padding:8px;border:1px solid #ddd;">App Producer</td><td style="padding:8px;border:1px solid #ddd;">12-14</td><td style="padding:8px;border:1px solid #ddd;">Python, PyQt, Qt Designer</td><td style="padding:8px;border:1px solid #ddd;">App quản lý + AI giọng nói</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;"><strong>4</strong></td><td style="padding:8px;border:1px solid #ddd;">Web Developer</td><td style="padding:8px;border:1px solid #ddd;">14-16</td><td style="padding:8px;border:1px solid #ddd;">HTML, CSS, JS, Bootstrap, API, GitHub</td><td style="padding:8px;border:1px solid #ddd;">Website + chatbot + AI</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;"><strong>5</strong></td><td style="padding:8px;border:1px solid #ddd;">Computer Scientist</td><td style="padding:8px;border:1px solid #ddd;">15-17</td><td style="padding:8px;border:1px solid #ddd;">Python nâng cao, pandas, ML, AI, NLP</td><td style="padding:8px;border:1px solid #ddd;">App AI + chatbot + NLP</td></tr>
</table>

<h4>📐 Format mỗi khóa</h4>
<ul>
  <li><strong>42 buổi/khóa</strong>, chia 3 level (Basic → Advanced → Intensive), 14 buổi/level</li>
  <li><strong>1 buổi/tuần, 2h/buổi</strong></li>
  <li><strong>6-8 học sinh/lớp</strong> — mentor kèm sát</li>
  <li>Cuối mỗi level: <strong>sản phẩm thật</strong> (game/app/web)</li>
</ul>

<h4>🌟 Chương trình đặc biệt</h4>
<ul>
  <li><strong>AI4L:</strong> Sử dụng AI hỗ trợ học tập — tích hợp xuyên suốt</li>
  <li><strong>NextGen:</strong> Khởi nghiệp công nghệ, Hackathon — gọi vốn, đàm phán</li>
  <li><strong>Internship Tech Project:</strong> Dự án công nghệ giống doanh nghiệp</li>
  <li><strong>Internship PM:</strong> Quản lý dự án</li>
  <li><strong>X-Global:</strong> Portfolio, LOR, thực tập</li>
</ul>

<h4>📊 Thống kê</h4>
<ul>
  <li>80.000+ học viên tốt nghiệp</li>
  <li>Học viên đang ở 12 quốc gia</li>
  <li>Lương tiềm năng: $600-$1.650/tháng</li>
</ul>`,
        quiz: [
          { q: "Lộ trình MindX có bao nhiêu năm?", options: ["3 năm", "4 năm", "5 năm", "6 năm"], correct: 2, explanation: "Lộ trình 5 năm: Scratch → Game → App → Web → CS. Năm 6 là Business Foundation (tùy chọn)." },
          { q: "Mỗi khóa có bao nhiêu buổi?", options: ["14 buổi", "28 buổi", "42 buổi", "56 buổi"], correct: 2, explanation: "42 buổi/khóa, chia 3 level × 14 buổi. 1 buổi/tuần, 2h/buổi." },
          { q: "Sĩ số lớp tối đa?", options: ["10-12", "6-8", "15-20", "4-5"], correct: 1, explanation: "6-8 học sinh/lớp — tỷ lệ mentor cao, kèm sát từng bạn." }
        ]
      },
      {
        id: "danghanh_L02",
        title: "Vì sao Coding quan trọng cho trẻ?",
        icon: "💡",
        content: `<h3>💡 Vì sao Coding quan trọng cho trẻ em?</h3>
<h4>🌍 Xu hướng toàn cầu</h4>
<ul>
  <li>World Economic Forum: Coding là 1 trong 10 kỹ năng quan trọng nhất 2025+</li>
  <li>Chính phủ VN: Đưa tin học vào chương trình bắt buộc từ lớp 3</li>
  <li>Code.org: "Every student should have the opportunity to learn computer science"</li>
  <li>Nhu cầu STEM tăng 10.4% toàn cầu — AI, Data Science dẫn đầu</li>
</ul>
<h4>🧠 Lợi ích coding cho trẻ (không chỉ là 'nghề')</h4>
<ol>
  <li><strong>Tư duy logic:</strong> Phân tích vấn đề → chia nhỏ → giải quyết từng bước</li>
  <li><strong>Sáng tạo:</strong> Tạo sản phẩm từ ý tưởng — game, app, website</li>
  <li><strong>Kiên trì:</strong> Debug code = rèn khả năng thất bại → sửa → thành công</li>
  <li><strong>Teamwork:</strong> Làm dự án nhóm, code review, thuyết trình</li>
  <li><strong>Ứng dụng AI:</strong> Hiểu AI để DÙNG AI, không bị AI thay thế</li>
  <li><strong>Tự tin:</strong> Hoàn thành sản phẩm = niềm tự hào, tự tin thuyết trình</li>
</ol>
<h4>📌 Tại sao MindX, không phải tự học?</h4>
<table style="width:100%;border-collapse:collapse;">
  <tr style="background:#E67E22;color:#fff;"><th style="padding:8px;">Tự học YouTube</th><th style="padding:8px;">MindX</th></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;">Syntax only</td><td style="padding:8px;border:1px solid #ddd;">Tư duy + Project + Soft skills</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;">90% bỏ dở</td><td style="padding:8px;border:1px solid #ddd;">100% có sản phẩm cuối khóa</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;">Không mentor</td><td style="padding:8px;border:1px solid #ddd;">Mentor 1-kèm-6</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;">Không bạn bè</td><td style="padding:8px;border:1px solid #ddd;">Lớp 6-8 bạn, làm nhóm</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;">Không soft skills</td><td style="padding:8px;border:1px solid #ddd;">Thuyết trình + Hackathon + NextGen</td></tr>
</table>
<p style="background:#fff3cd;padding:12px;border-radius:8px;"><strong>⚡ Key message:</strong> Coding không chỉ là nghề — là TƯ DUY giải quyết vấn đề + sáng tạo. Giống tiếng Anh, bắt đầu sớm = lợi thế tích lũy.</p>`,
        quiz: [
          { q: "Coding dạy trẻ điều gì QUAN TRỌNG NHẤT?", options: ["Viết code Python", "Tư duy giải quyết vấn đề", "Kiếm tiền online", "Sửa máy tính"], correct: 1, explanation: "Coding là phương tiện dạy TƯ DUY LOGIC + SÁNG TẠO + KIÊN TRÌ, không chỉ là nghề." },
          { q: "So với tự học YouTube, lợi thế LỚN NHẤT của MindX?", options: ["Rẻ hơn", "Mentor kèm sát + Project thật + Soft skills + Bạn bè", "Video hay hơn", "Dạy nhiều ngôn ngữ hơn"], correct: 1, explanation: "MindX dạy toàn diện: tư duy + project + teamwork + thuyết trình + AI. YouTube chỉ dạy syntax." }
        ]
      },
      {
        id: "danghanh_L03",
        title: "Kiến thức sản phẩm Coding chi tiết",
        icon: "📚",
        content: `<h3>📚 Kiến thức sản phẩm Coding — Chi tiết từng năm</h3>
<h4>🎮 Năm 1: Scratch Creator (9-11 tuổi)</h4>
<ul>
  <li><strong>Basic:</strong> Làm quen lập trình kéo thả, tư duy logic cơ bản → 01 Mini game sáng tạo</li>
  <li><strong>Advanced:</strong> Teachable Machine (AI nhận diện hình ảnh, âm thanh) → 01 Game có AI</li>
  <li><strong>Intensive:</strong> Dự án game hoàn chỉnh, gắn chủ đề xã hội → 01 Game tích hợp AI + yếu tố xã hội</li>
  <li><strong>Soft skills:</strong> Thuyết trình, tư duy sáng tạo, lắng nghe, tranh luận</li>
</ul>
<h4>🎮 Năm 2: Game Creator (11-13 tuổi)</h4>
<ul>
  <li><strong>Basic:</strong> GameMaker, AI tạo nguyên liệu → 01 mini game phiêu lưu</li>
  <li><strong>Advanced:</strong> Game nhiều màn, NPC có AI → 01 game hoàn chỉnh nhiều cấp độ</li>
  <li><strong>Intensive:</strong> Xuất bản web, bảng xếp hạng → 01 game AI chuyên sâu</li>
  <li><strong>Soft skills:</strong> Tự tin, quản lý thời gian, làm việc nhóm, quản lý dự án, lãnh đạo</li>
</ul>
<h4>📱 Năm 3: App Producer (12-14 tuổi)</h4>
<ul>
  <li><strong>Basic:</strong> Python cơ bản, kiểu dữ liệu, vòng lặp, hàm → app đơn giản</li>
  <li><strong>Advanced:</strong> OOP, PyQt, giao diện GUI → phần mềm có GUI hoàn chỉnh</li>
  <li><strong>Intensive:</strong> JSON, API Google, AI giọng nói → app quản lý + AI</li>
  <li><strong>Soft skills:</strong> Thuyết trình, phân biệt AI, NextGen, gọi vốn, đàm phán</li>
</ul>
<h4>🌐 Năm 4: Web Developer (14-16 tuổi)</h4>
<ul>
  <li><strong>Basic:</strong> HTML, CSS, responsive, Bootstrap → website portfolio</li>
  <li><strong>Advanced:</strong> JavaScript, DOM, API, GitHub → website thương mại + AI</li>
  <li><strong>Intensive:</strong> Deploy cloud, Firebase, team work → website quản lý + chatbot + AI</li>
  <li><strong>Soft skills:</strong> Thuyết trình, quản lý dự án, giải quyết vấn đề</li>
</ul>
<h4>🤖 Năm 5: Computer Scientist (15-17 tuổi)</h4>
<ul>
  <li><strong>Basic:</strong> Python OOP, thuật toán, cấu trúc dữ liệu → app học tập/giải trí</li>
  <li><strong>Advanced:</strong> Data analysis, pandas, biểu đồ, dự đoán → dashboard phân tích</li>
  <li><strong>Intensive:</strong> AI nhận diện hình ảnh, chatbot, NLP, prompt engineering → app AI hoàn chỉnh</li>
  <li><strong>Soft skills:</strong> Làm việc nhóm, quản lý dự án, kinh doanh, lãnh đạo</li>
</ul>`,
        quiz: [
          { q: "Năm 2 tên chính thức là gì?", options: ["Game Maker", "Game Creator", "Game Designer", "Game Builder"], correct: 1, explanation: "Tên chính thức: Game Creator (KHÔNG phải Game Maker). Dùng GameMaker Studio 2 làm công cụ." },
          { q: "Con 14 tuổi mới bắt đầu nên học từ đâu?", options: ["Scratch Creator", "Game Creator", "Web Developer hoặc App Producer", "Computer Scientist"], correct: 2, explanation: "14 tuổi bắt đầu từ Web Developer (14-16) hoặc App Producer (12-14). Scratch quá đơn giản cho tuổi này." }
        ]
      },
      {
        id: "danghanh_L04",
        title: "Tâm lý phụ huynh Coding & cách tiếp cận",
        icon: "🧠",
        content: `<h3>🧠 Tâm lý phụ huynh Coding & Cách tiếp cận</h3>
<h4>👥 5 Nhóm PH Coding điển hình</h4>
<div style="background:#f8f9fa;padding:12px;border-radius:8px;margin:8px 0;">
<h5>1. "Coding là trend" — Hoài nghi giá trị dài hạn</h5>
<p><strong>Cách tiếp cận:</strong> Nêu dẫn chứng toàn cầu (WEF, Chính phủ VN bắt buộc lớp 3). Coding = tư duy, không phải nghề đơn lẻ. AI cần người biết tư duy logic.</p>
</div>
<div style="background:#f8f9fa;padding:12px;border-radius:8px;margin:8px 0;">
<h5>2. "Con còn nhỏ" — Lo học sớm quá</h5>
<p><strong>Cách tiếp cận:</strong> 9-11 tuổi là window lý tưởng não phát triển logic. Scratch = kéo thả, như chơi LEGO. Không viết code dòng lệnh. Con chơi mà học.</p>
</div>
<div style="background:#f8f9fa;padding:12px;border-radius:8px;margin:8px 0;">
<h5>3. "Giá đắt" — So sánh với lớp Toán/Anh</h5>
<p><strong>Cách tiếp cận:</strong> Chia nhỏ: ~700k/buổi, 2h. Toán dạy kiến thức, coding dạy TẠO SẢN PHẨM. Mỗi buổi con có output cụ thể. Lớp 6-8 bạn với mentor riêng.</p>
</div>
<div style="background:#f8f9fa;padding:12px;border-radius:8px;margin:8px 0;">
<h5>4. "AI thay thế coder" — Lo nghề lỗi thời</h5>
<p><strong>Cách tiếp cận:</strong> AI thay thế code MÁY MÓC. MindX dạy tư duy + ứng dụng AI. Người biết coding DÙNG AI tốt hơn. Calculator không thay thế toán → AI không thay thế tư duy coding.</p>
</div>
<div style="background:#f8f9fa;padding:12px;border-radius:8px;margin:8px 0;">
<h5>5. "Tiger Mom" — Kỳ vọng cao, muốn kết quả</h5>
<p><strong>Cách tiếp cận:</strong> Nêu lộ trình rõ ràng, deliverable từng giai đoạn, milestone cụ thể. Đề xuất trao đổi với mentor về roadmap cá nhân. Nêu con đường: Coding → Business Foundation → Internship → Career.</p>
</div>
<h4>💬 Nguyên tắc vàng khi tư vấn Coding</h4>
<ol>
  <li>Luôn hỏi tuổi con TRƯỚC → gợi ý khóa phù hợp</li>
  <li>Không nói "dạy code" — nói "dạy tư duy + tạo sản phẩm + soft skills"</li>
  <li>Show sản phẩm thật của HV (demo game, app, web)</li>
  <li>Liên kết coding với mục tiêu PH (du học, thi ĐH, khởi nghiệp, phát triển toàn diện)</li>
</ol>`,
        quiz: [
          { q: "Khi PH nói 'AI thay hết coder rồi', Sale nên trả lời thế nào?", options: ["Lo gì xa vậy", "AI không bao giờ thay được", "MindX dạy tư duy + ứng dụng AI — coding là NỀN TẢNG để dùng AI", "Đúng, nên học nghề khác"], correct: 2, explanation: "Coding = nền tảng để DÙNG AI, không phải bị AI thay. Calculator không thay Toán → AI không thay tư duy coding." },
          { q: "Khi tư vấn Coding, Sale nên hỏi gì ĐẦU TIÊN?", options: ["PH có bao nhiêu tiền", "Con bao nhiêu tuổi", "PH biết coding không", "Con học trường nào"], correct: 1, explanation: "Tuổi quyết định khóa phù hợp. 9-11: Scratch. 11-13: Game. 12-14: App. 14-16: Web. 15-17: CS." }
        ]
      },
      {
        id: "danghanh_L05",
        title: "FAQ & Xử lý phản đối Coding",
        icon: "🛡️",
        content: `<h3>🛡️ FAQ & Xử lý phản đối — Coding</h3>
<h4>🔥 Top 8 Objection Coding</h4>
<div style="border-left:4px solid #E67E22;padding:12px;margin:8px 0;background:#fef5e7;">
<h5>❓ "Giá đắt, bên khác rẻ hơn"</h5>
<p><strong>✅</strong> "So sánh giá + giá trị: lớp 6-8 bạn (không phải 20+), 42 buổi có 3 sản phẩm thật, mentor kèm sát, soft skills + AI tích hợp. Chi phí/buổi ~700k cho 2h mentor riêng — rất đáng."</p>
<p><strong>❌</strong> "Bên rẻ thì chất lượng kém"</p>
</div>
<div style="border-left:4px solid #E67E22;padding:12px;margin:8px 0;background:#fef5e7;">
<h5>❓ "Tự học YouTube được, sao phải đóng tiền?"</h5>
<p><strong>✅</strong> "Video dạy syntax. MindX dạy TƯ DUY + PROJECT + TEAMWORK. Tự học: 90% bỏ dở. MindX: 100% con có sản phẩm cuối khóa. Giống tự xem video toán vs học với thầy."</p>
<p><strong>❌</strong> "YouTube dạy sai"</p>
</div>
<div style="border-left:4px solid #E67E22;padding:12px;margin:8px 0;background:#fef5e7;">
<h5>❓ "AI thay thế lập trình viên"</h5>
<p><strong>✅</strong> "AI thay người code MÁY MÓC. MindX dạy con tư duy + ứng dụng AI. Coding là nền tảng để DÙNG AI. MindX tích hợp AI vào mọi level."</p>
<p><strong>❌</strong> "AI không bao giờ thay thế được"</p>
</div>
<div style="border-left:4px solid #E67E22;padding:12px;margin:8px 0;background:#fef5e7;">
<h5>❓ "Con không thích / đã học chỗ khác rồi bỏ"</h5>
<p><strong>✅</strong> "Trải nghiệm khác rất nhiều. MindX project-based: con LÀM game/app. Lớp 6-8 bạn, thầy kèm sát. Hỏi: chỗ cũ con chán vì code khó hay vì nhàm?"</p>
<p><strong>❌</strong> "Bên cũ dạy không hay"</p>
</div>
<div style="border-left:4px solid #E67E22;padding:12px;margin:8px 0;background:#fef5e7;">
<h5>❓ "Con cần tập trung học văn hóa"</h5>
<p><strong>✅</strong> "1 buổi/tuần, 2h — bằng 1 buổi học thêm. Coding tăng tư duy logic → giúp cả toán. Nếu 'để sau' đến lớp 10-11 sẽ khó chen vào lịch."</p>
<p><strong>❌</strong> "Coding quan trọng hơn toán"</p>
</div>
<div style="border-left:4px solid #E67E22;padding:12px;margin:8px 0;background:#fef5e7;">
<h5>❓ "Con ngồi máy tính nhiều"</h5>
<p><strong>✅</strong> "2h coding SÁNG TẠO khác 2h scroll TikTok. Ở MindX: suy nghĩ, giải quyết vấn đề, thuyết trình, làm nhóm — active screen time."</p>
<p><strong>❌</strong> "Screen time không hại"</p>
</div>
<div style="border-left:4px solid #E67E22;padding:12px;margin:8px 0;background:#fef5e7;">
<h5>❓ "Robosta có robot thật, hấp dẫn hơn"</h5>
<p><strong>✅</strong> "Robot + coding là 2 hướng. MindX: software, tư duy, AI. Sản phẩm con làm deploy + share được. Câu hỏi: muốn con làm kỹ sư robot hay có tư duy giải quyết vấn đề?"</p>
<p><strong>❌</strong> "Robot là đồ chơi"</p>
</div>
<div style="border-left:4px solid #E67E22;padding:12px;margin:8px 0;background:#fef5e7;">
<h5>❓ "FPT thương hiệu lớn hơn"</h5>
<p><strong>✅</strong> "FPT lớn ở nhiều lĩnh vực. MindX chỉ focus dạy coding cho trẻ. 80.000+ HV. Lớp 6-8 bạn, project-based, AI tích hợp. Đưa con học thử cả 2 rồi quyết định."</p>
<p><strong>❌</strong> "FPT chỉ giỏi outsource"</p>
</div>`,
        quiz: [
          { q: "Khi PH nói 'bên khác rẻ hơn', Sale nên so sánh dựa trên gì?", options: ["Giá tổng", "Giá/buổi + sĩ số lớp + sản phẩm đầu ra + soft skills", "Thương hiệu", "Số lượng khóa học"], correct: 1, explanation: "So sánh VALUE, không chỉ PRICE: ~700k/buổi, lớp 6-8 bạn, 3 sản phẩm thật, mentor kèm sát, soft skills + AI." },
          { q: "Khi PH so sánh MindX vs Robosta, Sale KHÔNG được nói gì?", options: ["Robot và coding là 2 hướng khác nhau", "MindX focus software + tư duy", "Robot là đồ chơi, Robosta không tốt", "Con có thể học thử cả 2 nơi"], correct: 2, explanation: "KHÔNG được nói xấu đối thủ — đây là Red Line. Nên nêu sự khác biệt (hardware vs software) một cách tôn trọng." }
        ]
      },
      {
        id: "danghanh_L06",
        title: "Kịch bản tư vấn mẫu Coding",
        icon: "🎬",
        content: `<h3>🎬 Kịch bản tư vấn mẫu — Coding</h3>
<h4>📞 Kịch bản 1: PH hỏi "Coding là gì?"</h4>
<div style="background:#f0f0f0;padding:12px;border-radius:8px;">
<p><strong>PH:</strong> "Coding là gì vậy em? Mọi người nói cho con đi học mà chị không hiểu."</p>
<p><strong>Sale:</strong> "Dạ chị! Coding đơn giản là dạy con TẠO sản phẩm trên máy tính — từ game, app đến website. Giống như học vẽ nhưng vẽ bằng logic. Con 10 tuổi sẽ bắt đầu bằng Scratch — kéo thả blocks như xếp LEGO, không phải gõ dòng lệnh phức tạp. Chị cho em hỏi: con thích game hay thích vẽ hơn ạ?"</p>
<p style="color:#27ae60;"><em>→ Giải thích đơn giản + link với thứ PH hiểu (LEGO) + kết bằng câu hỏi</em></p>
</div>
<h4>💰 Kịch bản 2: Xử lý "giá đắt"</h4>
<div style="background:#f0f0f0;padding:12px;border-radius:8px;">
<p><strong>PH:</strong> "theo bảng học phí lộ trình Bảo trợ/năm? Lớp Toán tư duy chỉ 3-4 triệu/tháng."</p>
<p><strong>Sale:</strong> "Dạ em hiểu anh/chị. [Acknowledge] Nếu chia nhỏ: 42 buổi × ~700k/buổi, 2h mỗi buổi với thầy kèm sát 1-kèm-6 — tương đương 1 buổi Toán cao cấp. [Reframe] Khác biệt: Toán dạy kiến thức, coding dạy TẠO SẢN PHẨM. Cuối khóa con có game/app thật, không chỉ bài tập. [Evidence] Và kỹ năng tư duy logic từ coding còn giúp con học Toán tốt hơn — nhiều PH feedback vậy."</p>
</div>
<h4>🤖 Kịch bản 3: "AI thay hết coder"</h4>
<div style="background:#f0f0f0;padding:12px;border-radius:8px;">
<p><strong>PH:</strong> "AI viết code giỏi hơn người rồi. Cho con học coding còn ý nghĩa gì?"</p>
<p><strong>Sale:</strong> "Dạ câu hỏi rất hay! [Acknowledge] Đúng là AI code ngày càng giỏi. [Reframe] Nhưng anh thử nghĩ: Calculator giỏi tính hơn người, nhưng ta vẫn dạy con Toán. Vì Toán dạy TƯ DUY, không chỉ tính toán. Coding cũng vậy — MindX dạy con tư duy giải quyết vấn đề + ứng dụng AI. [Evidence] Thực tế, MindX tích hợp AI vào mọi level: Teachable Machine ở Năm 1, AI Agent ở Năm 4-5. Con học coding VÀ học dùng AI cùng lúc."</p>
</div>
<h4>🎯 Kịch bản 4: Chốt sau học thử</h4>
<div style="background:#f0f0f0;padding:12px;border-radius:8px;">
<p><strong>PH:</strong> "Con vừa học thử xong thích lắm. Nhưng chị muốn hỏi thêm."</p>
<p><strong>Sale:</strong> "Dạ tuyệt vời! Em thấy bạn nhỏ rất hào hứng luôn ạ. Chị muốn hỏi thêm gì, em giải đáp ngay ạ? [Trả lời xong] Lớp Scratch Creator sắp tới khai giảng [ngày], hiện còn [X] slot. Con bạn nhỏ vừa thích, chị muốn giữ chỗ luôn không ạ? Em hỗ trợ đăng ký ngay, con bắt đầu từ tuần sau."</p>
<p style="color:#27ae60;"><em>→ Tận dụng momentum + thông tin cụ thể (ngày, slot) + CTA rõ ràng</em></p>
</div>`,
        quiz: [
          { q: "Khi giải thích 'coding là gì' cho PH không biết tech, Sale nên dùng ví dụ nào?", options: ["Giống học lập trình Python", "Giống xếp LEGO bằng logic — kéo thả blocks", "Giống viết văn trên máy tính", "Giống sửa chữa máy tính"], correct: 1, explanation: "Dùng ví dụ PH hiểu: LEGO, kéo thả. Tránh thuật ngữ phức tạp. Scratch = visual, không viết code dòng lệnh." },
          { q: "Khi chốt sau học thử, yếu tố nào quan trọng nhất?", options: ["Giảm giá ngay", "Tận dụng momentum + thông tin cụ thể (ngày khai giảng, số slot)", "Ép PH ký hợp đồng", "Gửi email follow-up"], correct: 1, explanation: "Momentum sau trial rất mạnh — con vừa thích + PH đang positive. CTA cụ thể: ngày, slot, đăng ký ngay." }
        ]
      }
    ]
  }
],

// ============================================================================
// 2. PERSONAS — 10 personas (5 Du Học + 5 Đa Ngành)
// ============================================================================
personas: [
  // ===== DU HỌC PERSONAS =====
  {
    id: "p1", name: "Anh Minh", product: "duhoc", difficulty: "hard", avatar: "👔",
    tagline: "Doanh nhân, hỏi ROI",
    profile: {
      familyDesc: "CEO công ty xuất nhập khẩu, doanh thu ~50 tỷ/năm. Vợ là giảng viên ĐH. 2 con, con trai lớp 10 chuyên Ams muốn du học Mỹ ngành CS. Thu nhập rất cao (>100tr/tháng).",
      childAge: "Lớp 10",
      mainConcern: "theo bảng học phí lộ trình Bảo trợ có xứng đáng không? ROI cụ thể là gì? Portfolio giúp con đỗ thật không?",
      mainFear: "Mất tiền mà hồ sơ vẫn không nổi bật. MindX hứa nhiều delivery kém.",
      trustLevel: 2,
      willingnessToPay: 4,
      communicationStyle: "Thẳng thắn, hỏi số liệu, ngắt lời nếu nói vòng vo, ra quyết định nhanh khi thấy value"
    },
    objections: [
      "theo bảng học phí lộ trình Bảo trợ để làm mỗi cái portfolio? Dịch vụ du học trọn gói chỉ 40-50 triệu lo A-Z luôn.",
      "Có data không? Bao nhiêu % học viên MindX đỗ trường Top?",
      "Con anh giỏi Toán rồi, thêm portfolio coding có cần thiết không?",
      "Cho anh xem case cụ thể, học viên nào đã có kết quả?"
    ],
    systemPromptExtra: "Bạn là doanh nhân thành đạt, quen tư duy ROI. Hỏi thẳng số liệu, không chấp nhận câu trả lời mơ hồ. Nếu Sale nói 'nhiều học viên thành công' mà không nêu case cụ thể → nghi ngờ ngay. Bạn đang so sánh 3-4 dịch vụ du học. Thời gian hạn chế, giao tiếp ngắn gọn. Nếu Sale ấn tượng → quyết nhanh."
  },
  {
    id: "p2", name: "Chị Hương", product: "duhoc", difficulty: "medium", avatar: "👩‍🏫",
    tagline: "Giáo viên, lo con không theo nổi",
    profile: {
      familyDesc: "Giáo viên Văn cấp 2, 15 năm kinh nghiệm. Chồng kế toán. 1 con gái lớp 8 thiên nghệ thuật, yếu Toán. Thu nhập trung bình (15-25tr/tháng).",
      childAge: "Lớp 8",
      mainConcern: "Con yếu Toán có học được coding không? Chương trình có quá nặng không?",
      mainFear: "Con chán giữa chừng mất tiền. Con bị áp lực, ảnh hưởng tâm lý.",
      trustLevel: 3,
      willingnessToPay: 2,
      communicationStyle: "Lịch sự, hỏi chi tiết, cần được trấn an, dễ cảm động khi thấy con phù hợp"
    },
    objections: [
      "Con chị yếu Toán lắm, chị sợ con không theo nổi.",
      "theo bảng học phí lộ trình Bảo trợ tương đương 2 tháng lương, cần suy nghĩ kỹ.",
      "Học thêm ngoại khóa có ảnh hưởng việc học chính khóa không?"
    ],
    systemPromptExtra: "Bạn là giáo viên tâm huyết, lo lắng cho con. Hỏi nhiều về phương pháp, lộ trình, support cá nhân. Con gái thích vẽ, yếu Toán — bạn lo con không hợp tech. Nếu Sale giải thích UI/UX phù hợp con nghệ thuật → bạn sẽ hứng thú. Nếu Sale chỉ nói code code code → bạn lo lắng hơn."
  },
  {
    id: "p3", name: "Chị Lan", product: "duhoc", difficulty: "medium", avatar: "👩‍💻",
    tagline: "Đang so sánh nhiều trung tâm",
    profile: {
      familyDesc: "Trưởng phòng Marketing tập đoàn FMCG. 1 con trai lớp 9 trường Marie Curie. Thu nhập cao (50-80tr/tháng). Thạc sĩ Marketing RMIT.",
      childAge: "Lớp 9",
      mainConcern: "MindX khác gì 5 nơi khác đã tìm hiểu? Deliverable cụ thể? Timeline bao lâu?",
      mainFear: "Chọn sai nơi, mất thời gian quý giá. Chất lượng không đúng quảng cáo.",
      trustLevel: 2,
      willingnessToPay: 4,
      communicationStyle: "Hỏi rất cụ thể, hay so sánh, ghi chép, yêu cầu deliverable list, muốn xem sample work"
    },
    objections: [
      "Trung tâm ABC cũng làm portfolio mà họ bao luôn essay và recommendation, MindX chỉ portfolio thôi à?",
      "Cho chị xem sample portfolio của học viên trước?",
      "Timeline cụ thể thế nào? Con lớp 9, deadline nộp lớp 11, còn 2 năm.",
      "Chị đang xem thêm vài nơi, sẽ liên hệ lại sau."
    ],
    systemPromptExtra: "Bạn rất kỹ tính, hay lập bảng so sánh. Đã liên hệ 5 nơi, ghi chép ưu nhược từng nơi. Hỏi cụ thể deliverable, timeline, cam kết. Muốn tìm giải pháp TỐT NHẤT chứ không rẻ nhất. Nếu Sale nói chung chung → mất kiên nhẫn. Nếu Sale cụ thể, có sample → ấn tượng."
  },
  {
    id: "p4", name: "Anh Tuấn", product: "duhoc", difficulty: "hard", avatar: "👨‍💻",
    tagline: "Kỹ sư IT, nghi ngờ giá trị",
    profile: {
      familyDesc: "Senior Software Engineer FPT, 15 năm kinh nghiệm. Vợ bác sĩ. 1 con trai lớp 11 chuyên Tin KHTN, biết Python/JS/React. Thu nhập cao (60-90tr/tháng).",
      childAge: "Lớp 11",
      mainConcern: "Con biết code rồi, MindX dạy thêm được gì? Portfolio có đủ academic cho MIT/Stanford?",
      mainFear: "Mất thời gian quý giá (lớp 11 gấp). Portfolio template, không unique. Sale không hiểu tech.",
      trustLevel: 1,
      willingnessToPay: 5,
      communicationStyle: "Test kiến thức Sale, hỏi technical, nghi ngờ mọi claim, tôn trọng nếu Sale am hiểu"
    },
    objections: [
      "Con anh có GitHub 50+ repos, biết React nữa. MindX dạy từ Scratch — quá cơ bản.",
      "Mentor MindX background thế nào? Cụ thể ai dạy con anh?",
      "theo bảng học phí lộ trình Bảo trợ, anh thuê mentor riêng từ Stanford cũng được.",
      "Chương trình mới, chưa alumni đỗ Top. Anh không muốn con làm chuột bạch."
    ],
    systemPromptExtra: "Bạn là IT senior, hiểu tech rất sâu. Sẽ test kiến thức Sale bằng câu hỏi technical. Con giỏi code nhưng thiếu 'story' — chỉ code thuần, chưa có dự án xã hội. Nếu Sale shift focus sang storytelling + product thinking thành công → bạn sẽ thấy value. Nếu Sale cố nói dạy code → bạn nghi ngờ ngay."
  },
  {
    id: "p5", name: "Bà Nga", product: "duhoc", difficulty: "boss", avatar: "👵",
    tagline: "Bà ngoại nuôi cháu, bảo thủ, sợ rủi ro",
    profile: {
      familyDesc: "Bà ngoại 68 tuổi, giáo viên về hưu. Nuôi cháu gái lớp 10 (bố mẹ đi làm xa). Rất bảo thủ, lo cháu đi xa. Quyết định tài chính cho cháu.",
      childAge: "Lớp 10",
      mainConcern: "Du học có an toàn không? Cháu đi xa bà lo. Tiền nhiều thế ai đảm bảo?",
      mainFear: "Cháu đi xa gặp chuyện. Mất hết tiền tiết kiệm. Bị lừa.",
      trustLevel: 1,
      willingnessToPay: 3,
      communicationStyle: "Nói chậm, cần giải thích đơn giản, không thích thuật ngữ, cần sự tôn trọng tuyệt đối, dễ mất kiên nhẫn"
    },
    objections: [
      "Bà không hiểu portfolio là cái gì. Nói đơn giản cho bà nghe.",
      "Du học nguy hiểm, cháu gái đi một mình. Bà không yên tâm.",
      "theo bảng học phí lộ trình Bảo trợ là tiền bà để dành mấy năm. Lỡ mất thì sao?",
      "Ngày xưa không cần mấy cái này, học giỏi là đủ.",
      "Thôi, bà không muốn nghe nữa. Khi nào bố mẹ cháu về bà bảo gọi lại."
    ],
    systemPromptExtra: "Bạn là bà ngoại 68 tuổi, rất thương cháu nhưng bảo thủ. KHÔNG hiểu tech, KHÔNG biết portfolio/GitHub là gì. Nói chậm, hay hỏi lại. Rất coi trọng sự tôn trọng — nếu Sale vô lễ hoặc nói nhanh → tức giận ngay. Nếu Sale kiên nhẫn, giải thích đơn giản, tôn trọng → bà sẽ dần mở lòng. Bà hay so sánh 'thời xưa'. Có thể muốn kết thúc sớm — Sale phải win back."
  },

  // ===== ĐA NGÀNH PERSONAS =====
  {
    id: "p6", name: "Chị Thảo", product: "danghanh", difficulty: "easy", avatar: "👩‍💼",
    tagline: "Nhân viên văn phòng, lo con lớp 8 học sớm quá",
    profile: {
      familyDesc: "Nhân viên văn phòng công ty bảo hiểm. Chồng tài xế công nghệ. 1 con trai lớp 8, thích game Roblox. Thu nhập trung bình (20-30tr/tháng).",
      childAge: "Lớp 8",
      mainConcern: "Con lớp 8 học coding có muộn không? Có phù hợp không? Bạn bè con đã học từ lớp 4.",
      mainFear: "Con theo không kịp bạn bè. Chi tiền mà con không thích.",
      trustLevel: 4,
      willingnessToPay: 3,
      communicationStyle: "Hỏi đơn giản, cần được trấn an, dễ thuyết phục khi thấy con phù hợp"
    },
    objections: [
      "Con lớp 8 rồi, bạn bè đã học từ lớp 4. Có muộn quá không?",
      "Con chỉ thích chơi game, ngồi code chắc chán lắm."
    ],
    systemPromptExtra: "Bạn là PH bình thường, lo con muộn so với bạn bè. Khá dễ thuyết phục. Nếu Sale giải thích con 12-13 tuổi bắt đầu từ Game Creator rất phù hợp (con thích game) → bạn sẽ hào hứng. Bạn hỏi đơn giản, không khó tính."
  },
  {
    id: "p7", name: "Anh Đức", product: "danghanh", difficulty: "medium", avatar: "👨‍💼",
    tagline: "Quản lý, muốn con lớp 9 có lộ trình rõ ràng",
    profile: {
      familyDesc: "Quản lý showroom ô tô Toyota. 2 con, con lớn lớp 9 khá giỏi các môn. Thu nhập khá (30-45tr/tháng).",
      childAge: "Lớp 9",
      mainConcern: "Lộ trình 5 năm cụ thể thế nào? Coding có phải chỉ là trend? So với Toán tư duy cái nào đáng?",
      mainFear: "Chi tiền đắt mà con kéo thả vài block rồi chán. 5 năm dài quá, nhỡ bỏ ngang.",
      trustLevel: 3,
      willingnessToPay: 3,
      communicationStyle: "Thực dụng, muốn kết quả cụ thể, so sánh giá trị, không thích marketing fancy"
    },
    objections: [
      "1 năm 42 buổi gần theo bảng học phí lộ trình Bảo trợ? Lớp Toán tư duy 3-4 triệu thôi.",
      "Vài năm nữa AI code hết rồi, con học code để làm gì?",
      "Con anh dễ chán, học 1 tháng mà chán thì sao?"
    ],
    systemPromptExtra: "Bạn là quản lý, thực dụng. Muốn thấy ROI rõ ràng. So sánh coding vs Toán tư duy. Lo con dễ chán. Nếu Sale chia nhỏ giá + show sản phẩm con sẽ làm + nêu gamified approach → bạn sẽ cân nhắc. Nếu Sale chỉ nói chung chung → bạn hết hứng."
  },
  {
    id: "p8", name: "Chị Phương", product: "danghanh", difficulty: "medium", avatar: "👩‍🦱",
    tagline: "Kinh doanh online, hỏi con học xong làm được gì",
    profile: {
      familyDesc: "Kinh doanh online (shop quần áo). Chồng nhân viên ngân hàng. 1 con gái lớp 6 thích vẽ character game. Thu nhập khá (35-50tr/tháng).",
      childAge: "Lớp 6",
      mainConcern: "Con 12 tuổi nên bắt đầu từ đâu? Lớp coding có bạn gái không? Con thích vẽ hơn code.",
      mainFear: "Lớp toàn con trai, con gái ngại. Học code mà thiếu soft skills.",
      trustLevel: 4,
      willingnessToPay: 4,
      communicationStyle: "Cởi mở, hỏi về trải nghiệm, muốn nghe story thành công, quan tâm soft skills"
    },
    objections: [
      "Chị thấy lớp coding toàn con trai, con gái có bị lẻ loi không?",
      "Con thích vẽ character hơn code, MindX có dạy phần design không?",
      "Game Creator hay Game Maker? Trên mạng thấy tên khác nhau."
    ],
    systemPromptExtra: "Bạn là mẹ hiện đại, ủng hộ con. Con gái 12 tuổi thích game + vẽ character. Bạn lo lớp thiếu bạn nữ. Nếu Sale gợi ý Game Creator (con vừa code vừa design) và nói tỷ lệ nữ đang tăng → bạn hào hứng. Cởi mở, dễ nói chuyện."
  },
  {
    id: "p9", name: "Anh Hải", product: "danghanh", difficulty: "hard", avatar: "👨‍💻",
    tagline: "Giám đốc, hỏi vì sao MindX mà không phải trường khác",
    profile: {
      familyDesc: "Phó GĐ chi nhánh ngân hàng BIDV. Vợ GĐ công ty xây dựng. 1 con trai lớp 10 đã học MindX 3 năm. Thu nhập rất cao (80-120tr/tháng).",
      childAge: "Lớp 10",
      mainConcern: "Con đã học 3 năm, tiếp theo là gì? CS có đủ mạnh? Bảo trợ việc làm cụ thể thế nào?",
      mainFear: "Đầu tư 3 năm mà con vẫn chỉ code theo tutorial. MindX không đủ deep cho level cao.",
      trustLevel: 3,
      willingnessToPay: 5,
      communicationStyle: "Quyết đoán, hỏi thẳng, kỳ vọng chi tiết, không chấp nhận câu trả lời 'cố gắng'"
    },
    objections: [
      "Con học 3 năm rồi nhưng chưa tự code được project riêng. Chương trình có vấn đề không?",
      "Bảo trợ việc làm nghĩa là gì cụ thể? Cam kết lương tối thiểu?",
      "Học viện CNTT khác có AI/ML chuyên sâu hơn. MindX có bị 'nhẹ' không?"
    ],
    systemPromptExtra: "Bạn là Tiger Parent, đã đầu tư 3 năm MindX. Con đang Năm 3 (App Producer). Bạn kỳ vọng cao: muốn biết roadmap tiếp (CS → Business → Career). Hỏi rất cụ thể về Bảo trợ việc làm. Nếu Sale nói chung chung 'cam kết việc làm' → bạn hỏi lại ngay. Nếu Sale honest + nêu rõ = kết nối DN + CV support + internship → bạn chấp nhận."
  },
  {
    id: "p10", name: "Chị Oanh", product: "danghanh", difficulty: "boss", avatar: "👩",
    tagline: "Single mom, ngân sách eo hẹp, cần thuyết phục mạnh",
    profile: {
      familyDesc: "Single mom, làm nhân viên kỹ thuật nhà máy. 2 con, con lớn lớp 7 thích tháo lắp điện tử, tự học Scratch trên YouTube. Thu nhập thấp (12-18tr/tháng). Không có máy tính riêng.",
      childAge: "Lớp 7",
      mainConcern: "Học phí quá cao. Con không có máy tính. Lộ trình 5 năm phải đóng bao nhiêu?",
      mainFear: "Không đủ tiền theo hết lộ trình. Con thấy bạn bè giàu hơn → tự ti. Chi nhiều rồi không có việc.",
      trustLevel: 3,
      willingnessToPay: 1,
      communicationStyle: "Ngại hỏi giá, cần Sale chủ động nêu option, rất trân trọng sự tôn trọng, hay xúc động"
    },
    objections: [
      "theo bảng học phí lộ trình Bảo trợ/năm à? Chị... cần suy nghĩ.",
      "Nhà chỉ có 1 máy tính cũ, con dùng chung. Cần laptop riêng không?",
      "Học coding ra thì làm gì? Lập trình viên bị AI thay thế mà.",
      "5-6 năm tổng cộng bao nhiêu tiền? Chị không đủ.",
      "Thôi, chắc chương trình này không phù hợp với gia đình chị."
    ],
    systemPromptExtra: "Bạn là single mom, thu nhập thấp. Rất thương con, muốn con có cơ hội nhưng ngại vì tiền. KHÔNG được coi thường vì nghèo. Nếu Sale tôn trọng, đồng cảm, nêu option phù hợp (trả góp, học bổng, trial) → bạn sẽ xúc động và cân nhắc. Nếu Sale push giá hoặc thiếu tôn trọng → bạn sẽ cắt ngang và muốn kết thúc. Có thể nói 'thôi, không phù hợp' — Sale phải win back bằng empathy."
  }
],

// ============================================================================
// 3. SCENARIOS — 40 scenarios (20 Du Học + 20 Đa Ngành)
// ============================================================================
scenarios: [
  {
    id: "s1",
    name: "Cold call — PH thấy quảng cáo Facebook",
    product: "duhoc",
    stage: "opening",
    objective: "Tạo ấn tượng tốt, hiểu nhu cầu ban đầu, đặt lịch tư vấn trực tiếp",
    suggestedPersona: "p5",
    context: "PH gọi điện trong giờ hành chính sau khi thấy quảng cáo Facebook về Du Học Portfolio MindX. Lần đầu liên hệ, chưa biết gì về MindX.",
    openingMessage: "Alo, tôi thấy quảng cáo chương trình du học gì đó trên Facebook của MindX. Cho tôi hỏi thêm với, cụ thể là chương trình gì ạ?",
    possibleObjections: [
      "Gửi tài liệu qua Zalo cho tôi đọc trước đi"
    ],
    scoringFocus: ["hieu_nhu_cau", "dat_cau_hoi", "van_phong"],
    desiredCTA: "Đặt lịch tư vấn trực tiếp tại trung tâm hoặc qua Zoom"
  },
  {
    id: "s2",
    name: "Walk-in — PH đưa con đi học hỏi Du Học",
    product: "duhoc",
    stage: "opening",
    objective: "Giới thiệu nhanh Du Học, khai thác nhu cầu, đặt lịch tư vấn riêng",
    suggestedPersona: "p2",
    context: "PH đưa con đến học Coding tại MindX, thấy banner Du Học. PH đã biết MindX coding nhưng chưa biết Du Học.",
    openingMessage: "À, em ơi, chị thấy banner chương trình du học kia. MindX giờ có cả du học à? Con chị đang học Scratch ở đây. Chị hỏi thêm được không?",
    possibleObjections: [
      "Chị chỉ hỏi thôi, chưa tính gì đâu",
      "Con chị còn nhỏ, du học tính sau"
    ],
    scoringFocus: ["hieu_nhu_cau", "dat_cau_hoi", "tao_niem_tin"],
    desiredCTA: "Đặt lịch tư vấn riêng"
  },
  {
    id: "s3",
    name: "Referral — Bạn bè giới thiệu",
    product: "duhoc",
    stage: "opening",
    objective: "Tận dụng trust từ referral, khai thác sâu, đặt lịch tư vấn + trải nghiệm",
    suggestedPersona: "p3",
    context: "PH được bạn bè giới thiệu MindX Du Học. Có niềm tin ban đầu nhờ referral.",
    openingMessage: "Chào em, chị Hà bạn chị giới thiệu MindX có chương trình Du Học. Chị Hà nói con chị ấy đang học rất thích. Chị muốn tìm hiểu cho con.",
    possibleObjections: [
      "Chị Hà nói khác với cái em nói",
      "Để chị hỏi lại chị Hà rồi liên hệ sau"
    ],
    scoringFocus: ["hieu_nhu_cau", "tao_niem_tin", "dieu_huong_cta"],
    desiredCTA: "Đặt lịch tư vấn trực tiếp cùng con"
  },
  {
    id: "s4",
    name: "Inbound Zalo — PH nhắn tin hỏi giá",
    product: "duhoc",
    stage: "opening",
    objective: "Khai thác nhu cầu qua text, chuyển sang gọi điện hoặc meeting",
    suggestedPersona: "p1",
    context: "PH nhắn tin Zalo OA MindX, ngắn gọn, đang bận, muốn thông tin nhanh.",
    openingMessage: "Cho tôi hỏi chương trình du học MindX. Giá bao nhiêu?",
    possibleObjections: [
      "Gửi bảng giá trước đi",
      "Anh bận, nhắn nhanh thôi",
      "Sao phải gọi? Nhắn tin được mà"
    ],
    scoringFocus: ["dat_cau_hoi", "truyen_tai_gia_tri", "dieu_huong_cta"],
    desiredCTA: "PH đồng ý gọi điện 10 phút hoặc đặt lịch call"
  },
  {
    id: "s5",
    name: "PH chưa biết du học cần gì",
    product: "duhoc",
    stage: "discovery",
    objective: "Educate PH về hồ sơ du học, khai thác chi tiết con, position MindX",
    suggestedPersona: "p5",
    context: "PH muốn con du học nhưng không hiểu cần chuẩn bị gì ngoài IELTS và GPA.",
    openingMessage: "Chị cũng muốn cho con du học lắm, nhưng thật ra chị chưa hiểu cần chuẩn bị gì. IELTS với điểm tốt là đủ chưa em?",
    possibleObjections: [
      "Ơ, phức tạp thế à? Chị cứ tưởng điểm cao là được"
    ],
    scoringFocus: ["hieu_nhu_cau", "dat_cau_hoi", "truyen_tai_gia_tri"],
    desiredCTA: "PH hiểu 2 mảnh ghép, muốn tìm hiểu portfolio"
  },
  {
    id: "s6",
    name: "PH có mục tiêu rõ — Top 50 Mỹ CS",
    product: "duhoc",
    stage: "discovery",
    objective: "Đánh giá gap, đề xuất lộ trình MindX phù hợp",
    suggestedPersona: "p1",
    context: "PH đã research, mục tiêu Top 50 Mỹ ngành CS. Con lớp 10 chuyên Ams.",
    openingMessage: "Mục tiêu của anh là con vào Top 50 Mỹ ngành Computer Science. Con đang lớp 10 chuyên Ams. Em tư vấn xem MindX giúp được gì.",
    possibleObjections: [
      "Con anh đã có profile mạnh rồi, thêm portfolio có cần không?"
    ],
    scoringFocus: ["hieu_nhu_cau", "dat_cau_hoi", "truyen_tai_gia_tri"],
    desiredCTA: "Đề xuất lộ trình cá nhân hóa, đặt lịch gặp cùng con"
  },
  {
    id: "s7",
    name: "PH phân vân du học hay ở VN",
    product: "duhoc",
    stage: "discovery",
    objective: "Giúp PH clarify mong muốn, nếu phù hợp → position Du Học",
    suggestedPersona: "p2",
    context: "PH chia sẻ chưa chắc du học có phải lựa chọn tốt nhất cho con.",
    openingMessage: "Thật ra chị chưa chắc con có nên du học không. Ở VN giờ cũng nhiều trường tốt. Nhưng chị nghe nói du học thì cơ hội khác. Em tư vấn giúp chị.",
    possibleObjections: [
      "Hay là để con học ĐH ở VN rồi đi thạc sĩ?",
      "Chị lo con đi xa, nhớ nhà"
    ],
    scoringFocus: ["hieu_nhu_cau", "dat_cau_hoi", "tao_niem_tin"],
    desiredCTA: "PH thấy du học là option tốt, muốn tìm hiểu thêm"
  },
  {
    id: "s8",
    name: "PH hỏi chọn Web, Data hay UI/UX",
    product: "duhoc",
    stage: "discovery",
    objective: "Tìm ra phân hệ phù hợp, liên kết với mục tiêu du học",
    suggestedPersona: "p3",
    context: "PH muốn con du học tech nhưng không biết nên chọn Web, Data hay UI/UX.",
    openingMessage: "Con chị lớp 9, chị muốn hướng con theo ngành công nghệ nhưng không biết cụ thể. Coding hay data hay design? Con thích vẽ mà cũng thích Toán.",
    possibleObjections: [
      "Lỡ chọn sai hướng thì mất thời gian",
      "Con chưa biết muốn gì, chọn thế nào?"
    ],
    scoringFocus: ["hieu_nhu_cau", "dat_cau_hoi", "truyen_tai_gia_tri"],
    desiredCTA: "Đề xuất 1-2 phân hệ phù hợp, đặt lịch trải nghiệm"
  },
  {
    id: "s9",
    name: "Pitch Portfolio — PH chưa hiểu portfolio",
    product: "duhoc",
    stage: "value",
    objective: "PH hiểu giá trị portfolio, thấy MindX phù hợp",
    suggestedPersona: "p5",
    context: "PH muốn nghe cụ thể MindX làm gì. Chưa hiểu portfolio là gì.",
    openingMessage: "OK em, chị hiểu con cần hồ sơ tốt. Nhưng 'portfolio' cụ thể là gì? Nó khác bài luận, thư giới thiệu thế nào?",
    possibleObjections: [
      "Nghe hay nhưng cụ thể con sẽ làm gì trong 6 tháng?"
    ],
    scoringFocus: ["truyen_tai_gia_tri", "tao_niem_tin", "khong_overclaim"],
    desiredCTA: "PH hiểu portfolio, muốn con bắt đầu → đặt lịch Onboarding"
  },
  {
    id: "s10",
    name: "Pitch Hackathon & Leadership",
    product: "duhoc",
    stage: "value",
    objective: "PH thấy Hackathon = differentiator mạnh",
    suggestedPersona: "p3",
    context: "PH hiểu portfolio, hỏi về hoạt động ngoại khóa — Hackathon.",
    openingMessage: "Phần portfolio chị hiểu rồi. Nhưng hồ sơ du học cần cả hoạt động ngoại khóa. MindX có hỗ trợ phần này không?",
    possibleObjections: [
      "Hackathon 1 lần có đủ không?",
      "Media ghi hình, chất lượng video nghiệp dư à?"
    ],
    scoringFocus: ["truyen_tai_gia_tri", "tao_niem_tin", "dieu_huong_cta"],
    desiredCTA: "PH excited về Hackathon, đăng ký cho con"
  },
  {
    id: "s11",
    name: "Pitch toàn bộ lộ trình A-Z",
    product: "duhoc",
    stage: "value",
    objective: "PH thấy lộ trình rõ ràng, chuyên nghiệp",
    suggestedPersona: "p1",
    context: "PH muốn nghe chi tiết từ đầu đến cuối quy trình.",
    openingMessage: "OK em, em trình bày lộ trình cụ thể. Từ lúc đăng ký đến lúc con đỗ trường, quy trình thế nào?",
    possibleObjections: [
      "Nghe phức tạp quá, ai chịu trách nhiệm chính?",
      "MindX lo portfolio, thế giấy tờ visa ai lo?"
    ],
    scoringFocus: ["truyen_tai_gia_tri", "khong_overclaim", "van_phong"],
    desiredCTA: "PH hiểu lộ trình, đồng ý Onboarding"
  },
  {
    id: "s12",
    name: "Pitch cho PH tech-savvy — con giỏi code",
    product: "duhoc",
    stage: "value",
    objective: "PH thấy giá trị storytelling mà tự code không đủ",
    suggestedPersona: "p4",
    context: "PH nói con đã giỏi code. Sale shift focus sang storytelling, product thinking.",
    openingMessage: "Con anh đã biết Python, JS, có GitHub. Anh biết code. Vậy cụ thể MindX dạy thêm được gì mà con anh chưa biết?",
    possibleObjections: [
      "Storytelling thì anh hướng dẫn con cũng được",
      "MIT tuyển vì giỏi code, không phải đẹp portfolio"
    ],
    scoringFocus: ["truyen_tai_gia_tri", "xu_ly_objection", "khong_overclaim"],
    desiredCTA: "PH đồng ý MindX bổ sung storytelling layer"
  },
  {
    id: "s13",
    name: "Objection giá — theo bảng học phí lộ trình Bảo trợ đắt quá",
    product: "duhoc",
    stage: "objection",
    objective: "PH hiểu giá trị xứng đáng, hoặc thấy option phù hợp",
    suggestedPersona: "p1",
    context: "Sale đã pitch xong, PH nghe giá theo bảng học phí lộ trình Bảo trợ và phản đối.",
    openingMessage: "theo bảng học phí lộ trình Bảo trợ?! Đắt vậy? Dịch vụ du học trọn gói ABC chỉ 40 triệu lo A-Z luôn, MindX chỉ làm portfolio thôi mà?",
    possibleObjections: [
      "theo bảng học phí lộ trình Bảo trợ portfolio vs 40 triệu A-Z, không xứng",
      "Có giảm được không?"
    ],
    scoringFocus: ["xu_ly_objection", "truyen_tai_gia_tri", "khong_overclaim"],
    desiredCTA: "PH hiểu 2 dịch vụ bổ sung nhau"
  },
  {
    id: "s14",
    name: "Objection trust — Chương trình mới",
    product: "duhoc",
    stage: "objection",
    objective: "Tạo niềm tin bằng track record MindX, đội ngũ, cam kết",
    suggestedPersona: "p4",
    context: "PH biết chương trình Du Học mới launch, challenge Sale.",
    openingMessage: "Anh research rồi, chương trình mới launch tháng 4/2026. Chưa alumni đỗ trường nào. Anh không muốn con làm chuột bạch.",
    possibleObjections: [
      "Cho anh xem proof",
      "MindX coding khác MindX du học, đừng trộn lẫn"
    ],
    scoringFocus: ["xu_ly_objection", "tao_niem_tin", "khong_overclaim"],
    desiredCTA: "PH bớt nghi ngờ, cho con thử assessment"
  },
  {
    id: "s15",
    name: "Objection thời gian — Con bận quá",
    product: "duhoc",
    stage: "objection",
    objective: "Giải quyết lo ngại time, nêu commitment hợp lý",
    suggestedPersona: "p2",
    context: "PH lo con lớp 11 bận: học + IELTS + SAT, thêm portfolio overload.",
    openingMessage: "Em ơi, con chị lớp 11 rồi, đang ôn IELTS + SAT. Lịch kín mít. Thêm portfolio nữa là con gục mất.",
    possibleObjections: [
      "1 buổi/tuần thôi à? Nhưng con còn bài tập",
      "Con stress lắm rồi"
    ],
    scoringFocus: ["xu_ly_objection", "hieu_nhu_cau", "dieu_huong_cta"],
    desiredCTA: "PH yên tâm về time, đồng ý thử 1 buổi"
  },
  {
    id: "s16",
    name: "Objection scope — MindX lo visa luôn không?",
    product: "duhoc",
    stage: "objection",
    objective: "PH hiểu rõ scope, thấy 2 mảnh bổ sung",
    suggestedPersona: "p5",
    context: "PH tưởng MindX là dịch vụ trọn gói, hỏi về visa.",
    openingMessage: "Vậy MindX lo visa, giấy tờ luôn chứ? Chị muốn 1 nơi lo hết.",
    possibleObjections: [
      "Phải tìm thêm nơi lo giấy tờ nữa à? Phiền quá",
      "Sao không làm hết luôn?"
    ],
    scoringFocus: ["khong_overclaim", "xu_ly_objection", "tao_niem_tin"],
    desiredCTA: "PH hiểu 2 mảnh ghép, MindX kết nối 5 đối tác"
  },
  {
    id: "s17",
    name: "Chốt đặt lịch Onboarding",
    product: "duhoc",
    stage: "closing",
    objective: "PH đặt lịch Onboarding cụ thể (ngày, giờ)",
    suggestedPersona: "p3",
    context: "Cuộc tư vấn tốt, PH positive. Giờ là lúc chốt.",
    openingMessage: "Nghe hay đấy em. Vậy bước tiếp theo là gì?",
    possibleObjections: [
      "Để chị hỏi ý kiến chồng đã",
      "Tuần này bận, tuần sau được không?"
    ],
    scoringFocus: ["dieu_huong_cta", "tao_niem_tin", "van_phong"],
    desiredCTA: "PH xác nhận ngày giờ buổi Onboarding"
  },
  {
    id: "s18",
    name: "Chốt khi PH cần suy nghĩ thêm",
    product: "duhoc",
    stage: "closing",
    objective: "Tạo CTA thay thế: tài liệu, call follow-up, trải nghiệm",
    suggestedPersona: "p1",
    context: "PH interested nhưng chưa commit.",
    openingMessage: "Em ơi, anh cần suy nghĩ thêm. Chương trình hay nhưng anh cần bàn với vợ.",
    possibleObjections: [
      "Gửi tài liệu thôi, đừng gọi liên tục",
      "Khi nào anh quyết anh liên hệ"
    ],
    scoringFocus: ["dieu_huong_cta", "tao_niem_tin", "van_phong"],
    desiredCTA: "PH đồng ý nhận tài liệu + hẹn ngày call lại"
  },
  {
    id: "s19",
    name: "Chốt đăng ký — PH sẵn sàng",
    product: "duhoc",
    stage: "closing",
    objective: "Hoàn tất đăng ký, PH hiểu next steps",
    suggestedPersona: "p5",
    context: "PH quyết định đăng ký, cần hướng dẫn quy trình.",
    openingMessage: "OK em, chị quyết định rồi. Đăng ký thế nào? Đóng tiền ở đâu?",
    possibleObjections: [
      "Có trả góp không?",
      "Con học rồi không thích thì sao?"
    ],
    scoringFocus: ["dieu_huong_cta", "van_phong", "khong_overclaim"],
    desiredCTA: "PH hiểu quy trình, thanh toán, hẹn Onboarding"
  },
  {
    id: "s20",
    name: "Chốt khi PH muốn con trải nghiệm trước",
    product: "duhoc",
    stage: "closing",
    objective: "Đặt lịch buổi trải nghiệm miễn phí",
    suggestedPersona: "p2",
    context: "PH chưa muốn đăng ký ngay, muốn con thử.",
    openingMessage: "Chị muốn cho con thử trước. Có buổi trải nghiệm gì không? Con nhút nhát lắm.",
    possibleObjections: [
      "Trải nghiệm online được không?",
      "Buổi trải nghiệm có bắt đăng ký không?"
    ],
    scoringFocus: ["dieu_huong_cta", "tao_niem_tin", "hieu_nhu_cau"],
    desiredCTA: "PH đặt lịch trải nghiệm cụ thể cho con"
  },
  {
    id: "s21",
    name: "Cold call — PH hỏi lớp coding cho con 9-11",
    product: "danghanh",
    stage: "opening",
    objective: "Hiểu nhu cầu, giới thiệu Scratch Creator, đặt lịch học thử",
    suggestedPersona: "p7",
    context: "PH gọi điện sau Google 'lớp coding cho bé'.",
    openingMessage: "Alo, tôi tìm trên mạng thấy MindX dạy lập trình cho trẻ con. Con tôi 10 tuổi, cho tôi hỏi thêm.",
    possibleObjections: [
      "Con còn nhỏ, học code có sớm quá không?"
    ],
    scoringFocus: ["hieu_nhu_cau", "dat_cau_hoi", "van_phong"],
    desiredCTA: "Đặt lịch học thử miễn phí"
  },
  {
    id: "s22",
    name: "Walk-in — PH đi ngang trung tâm",
    product: "danghanh",
    stage: "opening",
    objective: "Tạo ấn tượng, khai thác tuổi + nhu cầu, gợi ý khóa",
    suggestedPersona: "p8",
    context: "PH vào trung tâm tâm thế 'xem thử'. Chưa intent mạnh.",
    openingMessage: "Em ơi, chị đi ngang thấy MindX. Ở đây dạy gì vậy? Con chị 12 tuổi, có lớp nào phù hợp không?",
    possibleObjections: [
      "Chị chỉ hỏi thôi, chưa tính gì đâu",
      "Cho chị brochure về xem"
    ],
    scoringFocus: ["hieu_nhu_cau", "dat_cau_hoi", "dieu_huong_cta"],
    desiredCTA: "PH để lại SĐT, đặt lịch tư vấn"
  },
  {
    id: "s23",
    name: "Online form — Sale gọi lại PH bận",
    product: "danghanh",
    stage: "opening",
    objective: "Confirm interest, khai thác nhanh, đặt lịch chi tiết",
    suggestedPersona: "p10",
    context: "PH đã điền form website, Sale gọi lại. PH có thể bận.",
    openingMessage: "Alo? À, đúng rồi, tôi có điền form hôm qua. Nhưng giờ đang bận, nói nhanh được không?",
    possibleObjections: [
      "Anh đang bận, 2 phút thôi",
      "Gửi qua Zalo cho anh xem"
    ],
    scoringFocus: ["van_phong", "dat_cau_hoi", "dieu_huong_cta"],
    desiredCTA: "PH hẹn call lại lúc rảnh hoặc đặt lịch"
  },
  {
    id: "s24",
    name: "PH cũ đăng ký con thứ 2",
    product: "danghanh",
    stage: "opening",
    objective: "Tư vấn khóa phù hợp con thứ 2, upsell nhanh",
    suggestedPersona: "p9",
    context: "PH có con lớn đang học MindX, muốn đăng ký con nhỏ.",
    openingMessage: "Em ơi, con lớn nhà chị đang học Năm 3 bên MindX. Giờ con nhỏ 10 tuổi, chị muốn đăng ký luôn.",
    possibleObjections: [
      "Có ưu đãi con thứ 2 không?",
      "Con nhỏ khác tính con lớn, chị lo không thích"
    ],
    scoringFocus: ["hieu_nhu_cau", "truyen_tai_gia_tri", "dieu_huong_cta"],
    desiredCTA: "Đăng ký cho con thứ 2"
  },
  {
    id: "s25",
    name: "PH chưa biết coding là gì",
    product: "danghanh",
    stage: "discovery",
    objective: "Giải thích coding dễ hiểu + khai thác mục tiêu PH",
    suggestedPersona: "p6",
    context: "PH nghe bạn bè nói cho con học coding, không hiểu coding.",
    openingMessage: "Em ơi, chị thấy mọi người cho con đi học coding. Mà coding là gì vậy? Con chị 10 tuổi, có học được không?",
    possibleObjections: [
      "Coding khó quá con không theo nổi",
      "Chị không biết máy tính, sao hỗ trợ con"
    ],
    scoringFocus: ["hieu_nhu_cau", "dat_cau_hoi", "truyen_tai_gia_tri"],
    desiredCTA: "Đặt lịch cho con học thử miễn phí"
  },
  {
    id: "s26",
    name: "PH phân vân robotics vs coding",
    product: "danghanh",
    stage: "discovery",
    objective: "Đặt đúng câu hỏi → xác định khóa phù hợp",
    suggestedPersona: "p9",
    context: "PH so sánh robotics, coding, toán tư duy. Con 12 tuổi giỏi.",
    openingMessage: "Em ơi, chị muốn cho con học STEM. Đang phân vân giữa robotics với coding. Tư vấn hướng nào phù hợp?",
    possibleObjections: [
      "Robotics thực tế hơn coding?",
      "Con học nhiều rồi, thêm coding quá tải?"
    ],
    scoringFocus: ["dat_cau_hoi", "hieu_nhu_cau", "truyen_tai_gia_tri"],
    desiredCTA: "Chọn được 1 khóa + đặt lịch học thử"
  },
  {
    id: "s27",
    name: "PH muốn con bỏ game → học code",
    product: "danghanh",
    stage: "discovery",
    objective: "Khai thác nhu cầu thực + quản lý kỳ vọng",
    suggestedPersona: "p8",
    context: "PH lo con nghiện game, nghe coding giúp con 'chuyển hướng'.",
    openingMessage: "Em ơi, con trai chị 11 tuổi suốt ngày chơi game. Chị nghe bên MindX dạy con làm game thay chơi game, đúng không?",
    possibleObjections: [
      "Nhỡ con học xong chơi game nhiều hơn?",
      "Con cá tính lắm, ngồi 2 tiếng không nổi"
    ],
    scoringFocus: ["hieu_nhu_cau", "dat_cau_hoi", "khong_overclaim"],
    desiredCTA: "Đặt lịch học thử + tư vấn thêm tại cơ sở"
  },
  {
    id: "s28",
    name: "PH hỏi lộ trình 5 năm chi tiết",
    product: "danghanh",
    stage: "discovery",
    objective: "Trình bày lộ trình 5 năm + giá trị từng giai đoạn",
    suggestedPersona: "p9",
    context: "PH nghiêm túc, muốn hiểu toàn bộ 5 năm trước khi quyết. Con 9 tuổi.",
    openingMessage: "Tôi muốn hiểu lộ trình 5 năm. Con 9 tuổi, đến 14-15 tuổi đạt được gì? Trình bày cho tôi nghe.",
    possibleObjections: [
      "5 năm dài lắm, nhỡ con bỏ ngang?",
      "Công nghệ thay đổi, 5 năm nữa lỗi thời?"
    ],
    scoringFocus: ["truyen_tai_gia_tri", "dat_cau_hoi", "tao_niem_tin"],
    desiredCTA: "Đồng ý cho con bắt đầu Năm 1"
  },
  {
    id: "s29",
    name: "Demo sản phẩm học viên",
    product: "danghanh",
    stage: "value",
    objective: "Truyền tải giá trị qua sản phẩm thực tế",
    suggestedPersona: "p7",
    context: "PH muốn xem sản phẩm thật, không chỉ quảng cáo.",
    openingMessage: "Em cho chị xem con học xong làm được gì? Chị muốn xem thực tế.",
    possibleObjections: [
      "Cái này con làm thật hay thầy làm hộ?",
      "Game đơn giản vậy, bên khác cũng dạy được"
    ],
    scoringFocus: ["truyen_tai_gia_tri", "tao_niem_tin", "khong_overclaim"],
    desiredCTA: "Đặt lịch cho con học thử"
  },
  {
    id: "s30",
    name: "Pitch soft skills + AI — PH chỉ quan tâm code",
    product: "danghanh",
    stage: "value",
    objective: "Expand perceived value: coding + soft skills + AI",
    suggestedPersona: "p9",
    context: "PH IT background, hỏi dạy ngôn ngữ gì. Sale pivot sang big picture.",
    openingMessage: "Bên em dạy ngôn ngữ lập trình gì? Con tôi cần Python hay JavaScript? Cụ thể.",
    possibleObjections: [
      "Tôi tự dạy con coding tại nhà",
      "YouTube dạy code free, sao phải đóng tiền?"
    ],
    scoringFocus: ["truyen_tai_gia_tri", "xu_ly_objection", "tao_niem_tin"],
    desiredCTA: "PH nhận ra giá trị lớn hơn coding → đăng ký thử"
  },
  {
    id: "s31",
    name: "Con 14 tuổi bắt đầu muộn",
    product: "danghanh",
    stage: "value",
    objective: "Tư vấn lộ trình rút gọn, không gây FOMO",
    suggestedPersona: "p10",
    context: "Con 14 tuổi, bạn bè đã học từ lớp 4-5. PH lo muộn.",
    openingMessage: "Em ơi, con chị 14 tuổi rồi mới bắt đầu. Bạn bè học coding từ lớp 4. Có muộn quá không?",
    possibleObjections: [
      "Lớp 9, năm sau thi cấp 3, không có thời gian",
      "Bắt đầu muộn portfolio có đủ tốt?"
    ],
    scoringFocus: ["truyen_tai_gia_tri", "hieu_nhu_cau", "tao_niem_tin"],
    desiredCTA: "Xếp lịch tư vấn chuyên sâu 1-1"
  },
  {
    id: "s32",
    name: "So sánh MindX vs Robosta/Teky/FPT",
    product: "danghanh",
    stage: "value",
    objective: "Differentiation rõ ràng + tôn trọng đối thủ",
    suggestedPersona: "p9",
    context: "PH nói thẳng đang so sánh 3 nơi.",
    openingMessage: "Em ơi, chị đang tìm hiểu 3 nơi: MindX, Robosta với Teky. MindX khác gì? Giá tương đương nhau.",
    possibleObjections: [
      "Robosta có robot thật, nhìn con thích hơn",
      "FPT thương hiệu lớn, uy tín hơn MindX chứ?"
    ],
    scoringFocus: ["truyen_tai_gia_tri", "xu_ly_objection", "van_phong"],
    desiredCTA: "Chọn MindX + đặt lịch học thử"
  },
  {
    id: "s33",
    name: "Giá đắt quá, không đáng",
    product: "danghanh",
    stage: "objection",
    objective: "Xử lý objection giá + giữ value + giải pháp tài chính",
    suggestedPersona: "p10",
    context: "PH thích chương trình nhưng nói giá cao. Thu nhập trung bình.",
    openingMessage: "Em ơi, chương trình hay đó, nhưng giá cao quá. Bên khác rẻ hơn nhiều. Có giảm được không?",
    possibleObjections: [
      "Bên khác giá bằng 1/2",
      "Đã đóng toán, Anh, thêm coding hết tiền",
      "Có trả góp?"
    ],
    scoringFocus: ["xu_ly_objection", "truyen_tai_gia_tri", "tao_niem_tin"],
    desiredCTA: "Chấp nhận giá trị, chọn gói phù hợp"
  },
  {
    id: "s34",
    name: "Con không thích / đã thử rồi bỏ",
    product: "danghanh",
    stage: "objection",
    objective: "Tìm nguyên nhân gốc + phân biệt MindX approach",
    suggestedPersona: "p8",
    context: "PH nói con đã học coding ở nơi khác rồi bỏ vì chán.",
    openingMessage: "Em ơi, chị cho con học coding ở chỗ khác rồi mà con bỏ. Con nói chán. Giờ chị ngại đăng ký lại.",
    possibleObjections: [
      "Con đã thử rồi, lần này cũng vậy",
      "Chỗ cũ cũng nói hay lắm, cuối cùng bỏ",
      "Con chỉ thích vẽ, không thích code"
    ],
    scoringFocus: ["xu_ly_objection", "dat_cau_hoi", "hieu_nhu_cau"],
    desiredCTA: "Cho con thử 1 buổi miễn phí approach khác"
  },
  {
    id: "s35",
    name: "Con cần tập trung học văn hóa",
    product: "danghanh",
    stage: "objection",
    objective: "Reframe coding = hỗ trợ học tập + kỹ năng tương lai",
    suggestedPersona: "p9",
    context: "Tiger Mom, con lớp 7 lịch kín. PH nói tập trung thi cấp 3.",
    openingMessage: "Em ơi, chị biết coding hay, nhưng con lớp 7 phải tập trung thi lên cấp 3. Coding để sau được không?",
    possibleObjections: [
      "Coding không giúp thi đại học",
      "Lịch kín, thêm coding quá tải",
      "Lên ĐH hãy học cũng không muộn"
    ],
    scoringFocus: ["xu_ly_objection", "truyen_tai_gia_tri", "khong_overclaim"],
    desiredCTA: "Đăng ký khóa hè hoặc slot cuối tuần"
  },
  {
    id: "s36",
    name: "AI thay thế lập trình viên",
    product: "danghanh",
    stage: "objection",
    objective: "Reframe: MindX dạy tư duy + ứng dụng AI, không chỉ code",
    suggestedPersona: "p7",
    context: "PH đọc báo ChatGPT viết code, lo 5 năm nữa coding vô nghĩa.",
    openingMessage: "Em ơi, anh đọc báo AI viết code giỏi hơn người. Cho con học coding còn ý nghĩa gì? 5 năm nữa AI thay hết?",
    possibleObjections: [
      "ChatGPT code tốt hơn junior rồi",
      "Nên cho con học AI thay vì coding?",
      "Đầu tư 5 năm mà nghề không còn"
    ],
    scoringFocus: ["xu_ly_objection", "truyen_tai_gia_tri", "khong_overclaim"],
    desiredCTA: "PH hiểu coding + AI = bộ đôi → đăng ký thử"
  },
  {
    id: "s37",
    name: "PH thích nhưng 'để suy nghĩ'",
    product: "danghanh",
    stage: "closing",
    objective: "Tìm concern thật + push to next step không pushy",
    suggestedPersona: "p7",
    context: "Tư vấn tốt, PH nói thích nhưng 'để suy nghĩ thêm'.",
    openingMessage: "Ok em, anh thấy chương trình hay. Để anh suy nghĩ thêm rồi liên hệ lại nhé.",
    possibleObjections: [
      "Anh cần hỏi ý kiến vợ",
      "Tuần sau gọi lại",
      "Gửi anh thông tin qua Zalo"
    ],
    scoringFocus: ["dieu_huong_cta", "xu_ly_objection", "tao_niem_tin"],
    desiredCTA: "Đặt lịch học thử cụ thể ngay trong cuộc gọi"
  },
  {
    id: "s38",
    name: "Đăng ký nhanh sau học thử",
    product: "danghanh",
    stage: "closing",
    objective: "Tận dụng momentum sau trial → đăng ký chính thức",
    suggestedPersona: "p8",
    context: "Con vừa học thử 2h, rất hào hứng. PH ngồi chờ.",
    openingMessage: "Em ơi, con nhà chị vừa học thử xong thích lắm. Nhưng chị muốn hỏi thêm trước khi quyết định.",
    possibleObjections: [
      "Học thử 1 buổi chưa nói lên gì",
      "Muốn về hỏi con thêm",
      "Giá bao nhiêu? Có ưu đãi đăng ký ngay?"
    ],
    scoringFocus: ["dieu_huong_cta", "tao_niem_tin", "truyen_tai_gia_tri"],
    desiredCTA: "Đăng ký chính thức + chọn lịch lớp"
  },
  {
    id: "s39",
    name: "PH muốn đăng ký nhưng chồng/vợ phản đối",
    product: "danghanh",
    stage: "closing",
    objective: "Trang bị PH arguments + đề xuất gặp cả 2",
    suggestedPersona: "p8",
    context: "PH (mẹ) muốn đăng ký nhưng bố nói coding là 'mốt'.",
    openingMessage: "Em ơi, chị thích chương trình lắm. Nhưng chồng chị nói coding là mốt thôi, không bắt buộc. Chị không biết thuyết phục sao.",
    possibleObjections: [
      "Chồng nói YouTube học free",
      "Anh ấy muốn con tập trung tiếng Anh",
      "Phải 2 vợ chồng đồng ý"
    ],
    scoringFocus: ["xu_ly_objection", "dieu_huong_cta", "tao_niem_tin"],
    desiredCTA: "Đặt lịch gặp cả 2 vợ chồng + cho con học thử"
  },
  {
    id: "s40",
    name: "Boss: Ông bà quyết định, PH chỉ trung gian",
    product: "danghanh",
    stage: "closing",
    objective: "Chuẩn bị thông tin cho PH thuyết phục ông bà",
    suggestedPersona: "p10",
    context: "Ông nội quyết định tài chính. Ông không hiểu coding.",
    openingMessage: "Em ơi, bố chồng chị là người quyết định cho cháu học gì. Ông không hiểu coding. Em nói cho chị biết nên nói với ông thế nào?",
    possibleObjections: [
      "Ông bảo thời ông không có coding vẫn thành công",
      "Ông muốn cháu học tiếng Anh, piano",
      "Ông không muốn cháu ngồi máy tính nhiều"
    ],
    scoringFocus: ["dieu_huong_cta", "xu_ly_objection", "truyen_tai_gia_tri"],
    desiredCTA: "Đặt lịch ông đến cơ sở xem con học"
  }
],

// ============================================================================
// 4. KNOWLEDGE BASE — organized by product
// ============================================================================
knowledgeBase: {
  duhoc: {
    productTruth: [
      "MindX Du Học định vị là 'Lò luyện Portfolio Công nghệ và Storytelling' — KHÔNG phải dịch vụ du học truyền thống",
      "MindX KHÔNG làm dịch vụ giấy tờ, visa, apply trường — đó là scope đối tác",
      "Đối tượng: Học sinh lớp 8-12 có định hướng du học ngành Tech/Business tại Mỹ, Úc, Châu Âu",
      "2 Mảnh Ghép: Mảnh 1 (đối tác: GPA, IELTS, visa) + Mảnh 2 (MindX: Portfolio, Hackathon, Essay, LOR)",
      "3 Track: Web Coding, Data Analysis, UI/UX Design",
      "Capstone Hackathon: vai trò KÉP — Ban Tổ Chức + Thí sinh, media ghi hình toàn bộ",
      "Giá: VIP BT = Miễn phí | HV đang học = theo bảng học phí lộ trình Bảo trợ (giảm 30%) | Khách mới = theo bảng học phí lộ trình Bảo trợ",
      "Workflow 6 bước: Onboarding → Build & Storytelling → Hackathon → Bàn giao → Check-in → Thu hoạch",
      "Cam kết: Dự án thực tế, Mentor uy tín, 05+ đối tác du học, 20 trường Top, Alumni network, Career Coaching 1-1",
      "KHÔNG cam kết: Tỷ lệ đỗ 100%, thay đổi chính sách nhập cư, khả năng tài chính gia đình",
      "Học viên đóng vai Product Owner, xây dự án giải quyết vấn đề xã hội thật",
      "Personal Statement: dùng AI/AI Agent brainstorm — con là tác giả, AI là công cụ",
      "LOR: viết bởi Mentor trực tiếp hướng dẫn. GPA > 9.0 → LOR từ CEO",
      "Bảo trợ kết nối việc làm 06 tháng sau tốt nghiệp ĐH",
      "Kết nối tối thiểu 05 đối tác du học uy tín",
      "MindX có 80.000+ HV tốt nghiệp, HV đang ở 12 quốc gia"
    ],
    whatToSay: [
      "MindX giúp con xây dựng Portfolio Công nghệ — thứ mà trường Top đánh giá rất cao",
      "Con sẽ đóng vai Product Owner, xây dự án giải quyết vấn đề xã hội thật",
      "Sản phẩm cuối khóa: Website/Dashboard/Figma prototype có thể show trên GitHub",
      "MindX kết nối với tối thiểu 05 đối tác du học uy tín để hoàn thiện hồ sơ",
      "Capstone Hackathon: Con vừa làm BTC vừa thí sinh — chứng minh leadership thật",
      "Recommendation Letter từ Mentor MindX — người trực tiếp hướng dẫn con",
      "Con dùng AI brainstorm Personal Statement — câu chuyện chân thực, con là tác giả",
      "MindX lo portfolio + storytelling, đối tác lo giấy tờ + visa — 2 mảnh bổ sung",
      "theo bảng học phí lộ trình Bảo trợ cho package đầy đủ, nếu đang là HV MindX chỉ theo bảng học phí lộ trình Bảo trợ",
      "Dù kết quả du học thế nào, con vẫn sở hữu kỹ năng tech thực tế — đầu tư 1 được 2"
    ],
    whatNotToSay: [
      "MindX đảm bảo con đỗ trường X — KHÔNG BAO GIỜ cam kết kết quả",
      "Con chắc chắn được scholarship",
      "MindX làm hồ sơ du học từ A-Z — MindX CHỈ làm portfolio + storytelling",
      "MindX lo visa cho con — visa do đối tác lo",
      "Con không cần IELTS cao nếu có portfolio tốt — Portfolio BỔ SUNG, không THAY THẾ",
      "AI sẽ viết luận cho con — AI hỗ trợ brainstorm, con viết + sở hữu",
      "Nói giá trước khi build value",
      "Cam kết timelines visa/nhập học",
      "Nói xấu đối thủ hoặc đối tác du học",
      "So sánh trực tiếp chất lượng với đối thủ"
    ],
    valueProps: [
      "Hồ sơ Độc bản: Tech Portfolio + GitHub/Dashboard/Figma — thứ trường Top tìm kiếm",
      "Học thật - Làm thật - Đón đầu AI: Kỹ năng Prompting + AI Agent xuyên suốt",
      "Đầu tư 1 được 2: Năng lực Code/Data/Design + Storytelling — dù du học hay ở VN",
      "A-Z Tracking: Từ ý tưởng → bàn giao hồ sơ → theo dõi đến Visa",
      "Hackathon KÉP: BTC + Thí sinh = Leadership + Technical chứng minh rõ ràng",
      "Portfolio deploy lên Cloud thật (AWS/Heroku), phục vụ người dùng thật"
    ],
    parentFAQ: [
      { q: "MindX có giúp apply trường không?", goodAnswer: "MindX tập trung vào xây Portfolio + Storytelling — phần quan trọng nhất để hồ sơ nổi bật. Phần apply, giấy tờ, visa — MindX kết nối anh/chị với đối tác du học uy tín.", badAnswer: "Có chứ, MindX lo hết từ A-Z luôn." },
      { q: "Học phí bao nhiêu?", goodAnswer: "Package theo bảng học phí lộ trình Bảo trợ cho khách mới. HV MindX chỉ theo bảng học phí lộ trình Bảo trợ (giảm 30%). So với chi phí du học tổng 500tr-2 tỷ/năm, đây là khoản đầu tư nhỏ nhưng tạo khác biệt lớn nhất.", badAnswer: "theo bảng học phí lộ trình Bảo trợ ạ. Nhưng em xin giảm giá." },
      { q: "Con lớp 8, có sớm quá không?", goodAnswer: "Lớp 8 là thời điểm lý tưởng! Con có 2-3 năm xây portfolio chất lượng. Bắt đầu sớm = portfolio dày hơn, câu chuyện sâu hơn.", badAnswer: "Sớm quá, lớp 10 hãy bắt đầu." },
      { q: "Portfolio công nghệ quan trọng thế nào?", goodAnswer: "Trường Top tìm ứng viên có passion + evidence. GPA/IELTS ai cũng có. Portfolio chứng minh con LÀM ĐƯỢC — tạo khác biệt.", badAnswer: "Quan trọng lắm, không có chắc chắn trượt." },
      { q: "Nhỡ con không đỗ thì sao?", goodAnswer: "MindX cam kết chất lượng portfolio + kỹ năng. Đỗ/trượt phụ thuộc nhiều yếu tố. Nhưng dù thế nào, con sở hữu kỹ năng tech thực tế — đầu tư 1 được 2.", badAnswer: "Đỗ chắc luôn, bên em chưa ai trượt." },
      { q: "MindX khác gì trung tâm du học khác?", goodAnswer: "Trung tâm du học lo giấy tờ + apply. MindX làm thứ họ KHÔNG làm: portfolio tech thật, mentor thật, sản phẩm thật trên GitHub. Hai mảnh bổ sung.", badAnswer: "Bên em tốt hơn, bên kia chỉ làm giấy tờ." },
      { q: "AI viết luận cho con à?", goodAnswer: "Không phải AI viết thay. Con dùng AI Agent brainstorm ý tưởng, sau đó TỰ viết câu chuyện. AI là công cụ, con là tác giả.", badAnswer: "Yên tâm, trường không phát hiện được." },
      { q: "Nên chọn Web, Data hay UI/UX?", goodAnswer: "Phụ thuộc ngành du học + sở thích. Web: thích xây sản phẩm. Data: thích phân tích. UI/UX: sáng tạo. Em tư vấn sau khi biết thêm về con.", badAnswer: "Chọn Web là tốt nhất." },
      { q: "Chương trình có cập nhật không?", goodAnswer: "MindX cập nhật mỗi kỳ, tích hợp AI/AI Agent. Con học code + ứng dụng AI — kỹ năng được đánh giá rất cao hiện nay.", badAnswer: "Chương trình từ năm ngoái, chắc vẫn OK." },
      { q: "Con lớp 12, còn kịp không?", goodAnswer: "Thẳng thắn: thời gian hẹp nhưng KHÔNG phải không kịp. MindX có lộ trình Intensive cho trường hợp này. Quan trọng là bắt đầu NGAY.", badAnswer: "Kịp chứ, bên em làm nhanh lắm." }
    ],
    objectionBank: [
      { objection: "theo bảng học phí lộ trình Bảo trợ đắt quá!", winningAnswer: "So với tổng chi phí du học 500tr-2 tỷ/năm, theo bảng học phí lộ trình Bảo trợ cho phần TẠO KHÁC BIỆT lớn nhất — rất đáng. HV đang học MindX chỉ theo bảng học phí lộ trình Bảo trợ.", commonMistake: "Em xin giảm giá / Em check khuyến mãi" },
      { objection: "Bên khác cam kết đỗ 100%", winningAnswer: "Nên cẩn thận với cam kết 100%. Không ai kiểm soát quyết định trường. MindX cam kết CHẤT LƯỢNG portfolio + kỹ năng — thứ anh/chị kiểm soát được.", commonMistake: "Bên đó nói xạo / Bên em cũng cam kết đỗ" },
      { objection: "Con không biết tech, theo nổi không?", winningAnswer: "Không cần biết trước! Bắt đầu từ zero. Mentor 1-1 hướng dẫn. Phần lớn HV MindX bắt đầu từ zero.", commonMistake: "Con phải biết cơ bản mới theo được" },
      { objection: "Chương trình mới, chưa có kết quả", winningAnswer: "Đúng, chương trình mới. Nhưng MindX 80.000+ alumni, đội ngũ tech mạnh. First-mover: lớp nhỏ, support cá nhân hóa cao. Cam kết deliverable cụ thể bằng hợp đồng.", commonMistake: "Nhiều người đỗ rồi / Chưa ai trượt" },
      { objection: "Trượt visa thì mất theo bảng học phí lộ trình Bảo trợ?", winningAnswer: "Đầu tư MUA SỰ TRƯỞNG THÀNH, không mua vé máy bay. Portfolio apply được VinUni, RMIT, BUV ngay tại VN. Năng lực công nghệ là tài sản tồn tại mãi.", commonMistake: "Visa chắc chắn OK / Em bảo đảm" },
      { objection: "MindX lo visa luôn chứ?", winningAnswer: "MindX lo portfolio + storytelling (Mảnh 2). Visa do đối tác uy tín (Mảnh 1). MindX kết nối 05+ đối tác — phân vai rõ ràng, bổ sung nhau.", commonMistake: "MindX lo hết / Visa do em handle" },
      { objection: "GPA thấp, portfolio có cứu được không?", winningAnswer: "Holistic review: năng lực kỹ thuật mạnh là đòn bẩy bù đắp. Portfolio chứng minh ứng viên có khả năng THỰC THI — thứ điểm số không thể hiện.", commonMistake: "Portfolio thay thế GPA" },
      { objection: "Học kinh tế có cần tech không?", winningAnswer: "Kinh doanh toàn cầu = Data-Driven. Data Dashboard cho bài luận kinh tế = hồ sơ gây ấn tượng đột phá, áp đảo thí sinh thuần chuyên ngành.", commonMistake: "Kinh tế không cần tech" }
    ],
    redLines: [
      "KHÔNG cam kết kết quả đỗ/trượt du học",
      "KHÔNG cam kết scholarship",
      "KHÔNG nói MindX thay thế agency du học / lo visa",
      "KHÔNG nói AI viết luận cho con (AI hỗ trợ brainstorm, con viết)",
      "KHÔNG cam kết trường cụ thể sẽ nhận",
      "KHÔNG nói xấu đối thủ (IDP, Đức Anh, FPT)",
      "KHÔNG nói giá trước khi build value",
      "KHÔNG push bán khi PH nói không",
      "KHÔNG share thông tin nội bộ công ty",
      "KHÔNG cam kết timeline visa/nhập học"
    ],
    ctaLibrary: [
      "Đặt lịch Onboarding miễn phí — con gặp Mentor, chọn ý tưởng dự án, 60 phút",
      "Đăng ký chính thức — lớp pilot giới hạn, ưu tiên đăng ký sớm",
      "Gửi tài liệu chi tiết qua Zalo/Email — PH xem rồi kết nối lại",
      "Đặt lịch tư vấn 1-1 cùng con tại cơ sở",
      "Kết nối đối tác du học — lo phần hồ sơ + visa song song",
      "Follow-up call — hẹn ngày giờ cụ thể gọi lại"
    ],
    proofBank: [
      { title: "WarmTech — Web Coding Case Study", story: "Học viên xây website kết nối nhu cầu áo ấm vùng núi. Sử dụng HTML/JS, deploy trên Heroku. Kết quả: 250 lượt ghé thăm, 50 trường hợp khớp nhu cầu thành công. Portfolio thể hiện rõ social impact + technical skill." },
      { title: "Green-Breath — Data Analysis Case Study", story: "Học viên phân tích mối liên hệ giữa kẹt xe và chất lượng không khí Hà Nội. AI tự động thu thập dữ liệu, Dashboard Heatmap trực quan. Báo cáo đăng LinkedIn nhận 500+ tương tác. Minh chứng data storytelling mạnh mẽ." },
      { title: "MindX 80.000+ Alumni", story: "MindX đã đào tạo 80.000+ học viên, hiện diện tại 12 quốc gia. Lương tiềm năng $600-$1.650/tháng. EdTech hàng đầu Việt Nam với lộ trình 5 năm liền mạch từ 9 đến 17 tuổi." },
      { title: "Holistic Review — Caltech", story: "35% sinh viên trúng tuyển Caltech nộp dự án/nghiên cứu thực tế. Trường Top đánh giá toàn diện: Portfolio > GPA/IELTS. Hồ sơ cần dấu ấn cá nhân, không phải điểm số." }
    ],
    glossary: [
      { term: "Portfolio", definition: "Bộ sưu tập sản phẩm/dự án thể hiện năng lực thực tế — Web, Dashboard, Figma prototype — deploy trên GitHub/Cloud" },
      { term: "Holistic Review", definition: "Đánh giá toàn diện hồ sơ: không chỉ GPA/IELTS mà cả extracurricular, portfolio, essay, LOR, leadership" },
      { term: "Personal Statement", definition: "Bài luận cá nhân trong hồ sơ du học — kể câu chuyện riêng, thể hiện passion và motivation" },
      { term: "LOR (Letter of Recommendation)", definition: "Thư giới thiệu từ Mentor/Giảng viên — đánh giá năng lực, thái độ, tiềm năng của học viên" },
      { term: "Capstone Hackathon", definition: "Sự kiện cuối khoá — học viên vừa là BTC (leadership) vừa là thí sinh (technical), có media ghi hình" },
      { term: "Design Thinking", definition: "Phương pháp giải quyết vấn đề lấy con người làm trung tâm: Empathize → Define → Ideate → Prototype → Test" },
      { term: "Deploy", definition: "Đưa sản phẩm lên internet (Cloud/Heroku/AWS) để người dùng thật truy cập được" },
      { term: "Product Owner", definition: "Vai trò chủ dự án — quyết định tính năng, ưu tiên, định hướng sản phẩm" }
    ]
  },

  danghanh: {
    productTruth: [
      "MindX Technology School — Lộ trình Coding 5 năm cho trẻ 9-17 tuổi",
      "5 khóa: Scratch Creator (9-11) → Game Creator (11-13) → App Producer (12-14) → Web Developer (14-16) → Computer Scientist (15-17)",
      "Mỗi khóa: 42 buổi, 3 levels (Basic/Advanced/Intensive), 14 buổi/level",
      "1 buổi/tuần, 2h/buổi, 6-8 học sinh/lớp",
      "Cuối mỗi level: sản phẩm thật (game, app, website)",
      "Chương trình đặc biệt: AI4L, NextGen, Internship Tech Project, Internship PM, X-Global",
      "80.000+ HV tốt nghiệp, HV đang ở 12 quốc gia, lương tiềm năng $600-$1.650/tháng",
      "Soft skills tích hợp: thuyết trình, tư duy sáng tạo, teamwork, quản lý dự án, lãnh đạo",
      "AI tích hợp mọi level: Teachable Machine (Năm 1), AI Agent (Năm 4-5)",
      "Năm 6: Business Foundation (Marketing, Finance, Business Operation) + Bảo trợ việc làm đa ngành"
    ],
    whatToSay: [
      "Mỗi khóa 42 buổi, chia 3 level, con học dần từ cơ bản lên nâng cao",
      "Lớp chỉ 6-8 bạn, thầy kèm sát từng bạn",
      "Con KHÔNG chỉ học code — còn thuyết trình, teamwork, tư duy logic, ứng dụng AI",
      "Cuối mỗi level con có sản phẩm thật: game, app, website",
      "MindX có lộ trình 5 năm liền mạch: Scratch → Game → App → Web → CS",
      "80.000+ học viên tốt nghiệp, HV đang ở 12 quốc gia",
      "Coding không chỉ là nghề — là tư duy giải quyết vấn đề + sáng tạo với AI",
      "Con 9 tuổi bắt đầu Scratch Creator, 14 tuổi đã code Web/App thật",
      "Chia nhỏ: ~700k/buổi, mỗi buổi 2h với thầy 1-kèm-6",
      "MindX tích hợp AI vào mọi cấp độ: Teachable Machine → AI Agent"
    ],
    whatNotToSay: [
      "Học xong con thành lập trình viên — con học TƯ DUY, không phải đào tạo nghề",
      "Coding thay tiếng Anh/toán — coding BỔ SUNG, không thay thế",
      "Con chắc chắn bỏ game — coding CHUYỂN HƯỚNG hứng thú, không phải cai game",
      "MindX tốt hơn Robosta/Teky/FPT — nói KHÁC BIỆT, không nói tốt hơn",
      "Con sẽ kiếm $1.650/tháng — đó là lương TIỀM NĂNG, không phải cam kết",
      "Cam kết kết quả học tập cụ thể",
      "Nói giá trước khi PH hiểu giá trị",
      "Overclaim về AI: con sẽ tạo được AI như ChatGPT",
      "Push bán hàng khi PH chưa sẵn sàng",
      "Nói bé 5-6 tuổi học được (age 9+)"
    ],
    valueProps: [
      "Lộ trình 5 năm liền mạch — không phải khóa lẻ, mà là hành trình phát triển",
      "Project-based learning — mỗi level có sản phẩm thật, không phải bài tập",
      "Lớp nhỏ 6-8 bạn — mentor kèm sát, không ai bị bỏ lại",
      "AI tích hợp mọi level — Teachable Machine, AI Agent, Prompt Engineering",
      "Soft skills + Hackathon + NextGen — phát triển toàn diện, không chỉ code",
      "Con biến thời gian chơi game → thời gian LÀM game/app/web"
    ],
    parentFAQ: [
      { q: "Con 9 tuổi có nhỏ quá không?", goodAnswer: "9 tuổi là lý tưởng! Năm 1 dùng Scratch — kéo thả, không viết code. 9-11 tuổi não phát triển tư duy logic mạnh nhất.", badAnswer: "Không nhỏ đâu, bé 5-6 còn học được." },
      { q: "Con gái có hợp không?", goodAnswer: "Hoàn toàn! UI/UX, Data đặc biệt phù hợp con gái sáng tạo. Coding không phân biệt giới.", badAnswer: "Coding chủ yếu con trai thôi." },
      { q: "Có ảnh hưởng học văn hóa?", goodAnswer: "1 buổi/tuần, 2h — rất nhẹ. Coding tăng tư duy logic, giúp con học toán tốt hơn.", badAnswer: "Không ảnh hưởng gì đâu." },
      { q: "42 buổi có dài quá?", goodAnswer: "42 buổi = 3 levels, mỗi level 14 buổi có sản phẩm. Rhythm: học → làm → trình bày → lên level.", badAnswer: "42 buổi là chuẩn, bên nào cũng thế." },
      { q: "So sánh MindX vs YouTube?", goodAnswer: "Video dạy syntax. MindX dạy TƯ DUY + PROJECT + SOFT SKILLS + MENTOR. Tự xem video: 90% bỏ dở.", badAnswer: "YouTube toàn kiến thức cũ." },
      { q: "Tại sao không dạy Python từ đầu?", goodAnswer: "9-11 tuổi não chưa sẵn sàng text-based. Scratch dùng logic blocks — hiểu TƯ DUY trước, chuyển text coding tự nhiên.", badAnswer: "Scratch dễ hơn Python." },
      { q: "Học xong 5 năm đạt gì?", goodAnswer: "Python + Data + AI + ML, portfolio game/app/web/dashboard, hackathon, soft skills leadership + thuyết trình. Nền tảng du học hoặc internship tech.", badAnswer: "Con thành lập trình viên chuyên nghiệp." },
      { q: "Con 14 tuổi bắt đầu muộn?", goodAnswer: "14 tuổi từ Web Developer hoặc App Producer. Con lớn tiếp thu nhanh, 1-2 năm đạt level cao.", badAnswer: "Muộn rồi, phải học gấp đôi." },
      { q: "Con chơi game nhiều, học coding tệ hơn?", goodAnswer: "Ngược lại! MindX chuyển con từ CHƠI game sang LÀM game. Nhiều bạn sau khi học thích LÀM hơn CHƠI.", badAnswer: "Học coding xong con bỏ game luôn." },
      { q: "Con nhút nhát có hợp không?", goodAnswer: "MindX tích hợp thuyết trình mỗi cuối level. Lớp nhỏ 6-8 bạn, khuyến khích dần. Nhiều PH nói con tự tin hơn hẳn.", badAnswer: "Không sao, con ngồi code không cần nói." }
    ],
    objectionBank: [
      { objection: "Giá đắt, bên khác rẻ hơn", winningAnswer: "So sánh giá + giá trị: lớp 6-8 bạn, 42 buổi có 3 sản phẩm thật, mentor kèm sát, soft skills + AI. ~700k/buổi cho 2h mentor riêng.", commonMistake: "Bên rẻ thì chất lượng kém" },
      { objection: "YouTube dạy code free", winningAnswer: "Video dạy syntax. MindX dạy TƯ DUY + PROJECT + TEAMWORK. 90% tự học bỏ dở. MindX: 100% có sản phẩm cuối khóa.", commonMistake: "YouTube dạy sai / không cập nhật" },
      { objection: "AI thay thế coder", winningAnswer: "AI thay code MÁY MÓC. MindX dạy tư duy + ứng dụng AI. Coding là nền tảng để DÙNG AI. Calculator không thay toán → AI không thay tư duy.", commonMistake: "AI không bao giờ thay được / Lo gì xa" },
      { objection: "Con không thích / đã thử rồi bỏ", winningAnswer: "Trải nghiệm rất khác. MindX project-based: LÀM game/app. Lớp 6-8, thầy kèm sát. Hỏi: chỗ cũ con chán vì khó hay nhàm?", commonMistake: "Bên cũ dạy không hay / MindX chắc chắn thích" },
      { objection: "Con cần tập trung học văn hóa", winningAnswer: "1 buổi/tuần, 2h. Coding tăng tư duy logic → giúp cả toán. Nếu 'để sau' đến lớp 10-11 khó chen vào lịch hơn.", commonMistake: "Coding quan trọng hơn toán" },
      { objection: "Ngồi máy tính nhiều", winningAnswer: "2h coding SÁNG TẠO khác 2h scroll TikTok. Ở MindX: suy nghĩ, giải quyết vấn đề, thuyết trình, làm nhóm — active screen time.", commonMistake: "Screen time không hại" },
      { objection: "Robosta có robot thật", winningAnswer: "Robot + coding là 2 hướng. MindX: software + tư duy + AI. Sản phẩm deploy + share được. Muốn con làm kỹ sư robot hay tư duy giải quyết vấn đề?", commonMistake: "Robot là đồ chơi / Robosta không tốt" },
      { objection: "FPT thương hiệu lớn hơn", winningAnswer: "FPT lớn nhiều lĩnh vực. MindX chỉ focus dạy coding trẻ em. 80.000+ HV. Lớp 6-8, project-based, AI tích hợp. Đưa con học thử cả 2.", commonMistake: "FPT chỉ giỏi outsource / MindX lớn hơn" }
    ],
    redLines: [
      "KHÔNG cam kết con sẽ thành lập trình viên",
      "KHÔNG cam kết mức lương cụ thể ($600-$1650 là TIỀM NĂNG)",
      "KHÔNG nói coding thay thế tiếng Anh/toán",
      "KHÔNG cam kết con bỏ game",
      "KHÔNG nói bé 5-6 tuổi học được (age 9+)",
      "KHÔNG cam kết sĩ số nếu không chắc",
      "KHÔNG nói xấu Robosta, Teky, FPT, bất kỳ đối thủ",
      "KHÔNG push bán khi PH nói không",
      "KHÔNG overclaim về AI: 'con tạo được AI như ChatGPT'",
      "KHÔNG hứa ưu đãi/giảm giá không có thật"
    ],
    ctaLibrary: [
      "Đặt lịch học thử miễn phí — con trải nghiệm, thích mới tiếp",
      "Đăng ký chính thức — lớp sắp khai giảng, còn X slot",
      "Tư vấn 1-1 tại cơ sở — em tư vấn lộ trình riêng cho con",
      "Gửi thông tin qua Zalo/Email — PH xem rồi kết nối lại",
      "Follow-up call — hẹn ngày giờ cụ thể",
      "Đặt lịch gặp cả gia đình tại cơ sở"
    ],
    proofBank: [
      { title: "80.000+ Học viên MindX", story: "MindX đã đào tạo hơn 80.000 học viên, hiện diện tại 12 quốc gia. Lộ trình 5 năm từ Scratch đến Computer Scientist. EdTech hàng đầu Việt Nam." },
      { title: "Game Creator — Xuất bản game thật", story: "Học viên 12 tuổi hoàn thành Game Creator Intensive, xuất bản game trên itch.io với 5.000+ lượt chơi. Thuyết trình NextGen, giải nhất Hackathon. Từ chơi game → LÀM game." },
      { title: "UI/UX — App hỗ trợ người khiếm thị", story: "Học viên nữ 13 tuổi thiết kế app hỗ trợ người khiếm thị trên Figma. Interactive prototype, portfolio cho du học Canada. Phỏng vấn ấn tượng nhờ demo live." },
      { title: "Chính phủ VN + WEF", story: "Chính phủ VN đưa tin học bắt buộc từ lớp 3. World Economic Forum: Coding là 1 trong 10 kỹ năng quan trọng nhất 2025+. Code.org: Every student should learn CS." }
    ],
    glossary: [
      { term: "Scratch", definition: "Ngôn ngữ lập trình visual (kéo thả blocks) — phù hợp trẻ 9-11, không cần viết code dòng lệnh" },
      { term: "GameMaker Studio 2", definition: "Công cụ làm game chuyên nghiệp — dùng trong Năm 2 Game Creator" },
      { term: "Python", definition: "Ngôn ngữ lập trình text-based phổ biến nhất — dùng từ Năm 3 App Producer" },
      { term: "Project-based Learning", definition: "Phương pháp học qua dự án thực tế — con LÀM sản phẩm, không chỉ đọc lý thuyết" },
      { term: "NextGen", definition: "Chương trình khởi nghiệp mini — gọi vốn, đàm phán, trình bày idea" },
      { term: "AI4L", definition: "AI for Learning — chương trình sử dụng AI hỗ trợ học tập tích hợp xuyên suốt" },
      { term: "Teachable Machine", definition: "Công cụ AI của Google — dạy trẻ tạo model nhận diện hình ảnh/âm thanh, dùng trong Năm 1" },
      { term: "Soft Skills", definition: "Kỹ năng mềm: thuyết trình, teamwork, tư duy sáng tạo, quản lý dự án, lãnh đạo" }
    ]
  }
},

// ============================================================================
// 5. SCORING RUBRIC
// ============================================================================
scoringRubric: {
  criteria: [
    { id: "c1", name: "Hiểu nhu cầu phụ huynh", weight: 15, levels: {
      excellent: "Sale hiểu sâu pain point, tóm tắt lại chính xác, cá nhân hóa hoàn toàn theo tình huống cụ thể của PH",
      good: "Hiểu nhu cầu chính, có tóm tắt nhưng chưa thật sâu, có liên kết với sản phẩm",
      average: "Hiểu một phần, bỏ sót vài nhu cầu quan trọng, chưa cá nhân hóa tốt",
      poor: "Không thể hiện sự hiểu biết về nhu cầu PH, trình bày 1 chiều, không lắng nghe"
    }},
    { id: "c2", name: "Đặt câu hỏi khám phá", weight: 10, levels: {
      excellent: "Câu hỏi mở xuất sắc, follow-up sâu, khai thác thông tin giá trị, tự nhiên không thẩm vấn",
      good: "Câu hỏi tốt, có follow-up, khai thác được thông tin cần thiết",
      average: "Có câu hỏi nhưng chủ yếu đóng, ít follow-up, bỏ sót thông tin quan trọng",
      poor: "Không hỏi hoặc hỏi kiểu thẩm vấn, chủ yếu trình bày thông tin"
    }},
    { id: "c3", name: "Truyền tải giá trị sản phẩm", weight: 20, levels: {
      excellent: "Truyền tải USP rõ ràng, liên kết giá trị với nhu cầu cụ thể, dùng case study, storytelling xuất sắc",
      good: "Nêu được USP, có liên kết với nhu cầu, có ví dụ minh họa",
      average: "Nêu tính năng nhưng chưa liên kết tốt với nhu cầu, thiếu ví dụ cụ thể",
      poor: "Liệt kê tính năng khô khan hoặc sai thông tin sản phẩm"
    }},
    { id: "c4", name: "Không overclaim / sai scope", weight: 10, levels: {
      excellent: "100% chính xác, phân biệt rõ scope MindX vs đối tác, trung thực về giới hạn",
      good: "Cơ bản chính xác, 1-2 chỗ mơ hồ nhưng không sai, có ý thức về scope",
      average: "Có 1-2 chỗ overclaim nhẹ, chưa phân biệt rõ scope",
      poor: "Nói sai thông tin nghiêm trọng, cam kết quá mức, vi phạm red line"
    }},
    { id: "c5", name: "Xử lý objection", weight: 15, levels: {
      excellent: "Acknowledge + Reframe + Evidence xuất sắc, biến objection thành cơ hội bán hàng",
      good: "Xử lý tốt, có acknowledge, có evidence nhưng chưa hoàn hảo",
      average: "Xử lý được nhưng thiếu acknowledge hoặc thiếu evidence, phản bác trực tiếp",
      poor: "Không xử lý được, bỏ qua objection, hoặc đồng ý mà không reframe"
    }},
    { id: "c6", name: "Tạo niềm tin", weight: 10, levels: {
      excellent: "Social proof mạnh, case study cụ thể (WarmTech, Green-Breath), tạo kết nối cá nhân",
      good: "Có social proof, case study nhưng chưa cụ thể lắm",
      average: "Nói chung chung 'nhiều phụ huynh tin tưởng' mà không có proof",
      poor: "Không tạo được niềm tin, thiếu yếu tố proof"
    }},
    { id: "c7", name: "Điều hướng CTA", weight: 10, levels: {
      excellent: "CTA rõ ràng, cụ thể (thời gian + hành động), tạo urgency hợp lý, confirm next step",
      good: "CTA tốt, cụ thể, có next step rõ ràng",
      average: "Có CTA nhưng mơ hồ, thiếu thời gian cụ thể",
      poor: "Không đề xuất CTA hoặc CTA không phù hợp với tình huống"
    }},
    { id: "c8", name: "Văn phong chuyên nghiệp", weight: 10, levels: {
      excellent: "Ngôn ngữ chuyên nghiệp, tự nhiên, phù hợp với PH, độ dài tin nhắn tốt, nhịp tự nhiên",
      good: "Chuyên nghiệp, đôi chỗ hơi formal/robot nhưng tổng thể tốt",
      average: "OK nhưng có lúc thiếu tự nhiên, quá dài hoặc quá ngắn",
      poor: "Ngôn ngữ không phù hợp, quá casual hoặc quá formal, thiếu tôn trọng"
    }}
  ],
  modes: {
    practice: { difficultyMultiplier: 0.8, showHints: true, timeLimit: null, maxTurns: 30, retryLimit: null },
    exam: { difficultyMultiplier: 1.0, showHints: false, timeLimit: 900, maxTurns: 20, retryLimit: 3 },
    boss: { difficultyMultiplier: 1.3, showHints: false, timeLimit: 600, maxTurns: 15, retryLimit: 1 }
  }
},

// ============================================================================
// 6. PROMPT TEMPLATES — System prompts for AI
// ============================================================================
promptTemplates: {
  roleplay: `BẠN LÀ MỘT PHỤ HUYNH VIỆT NAM đang tìm hiểu về chương trình giáo dục cho con. Bạn PHẢI đóng vai đúng persona được mô tả bên dưới và KHÔNG BAO GIỜ thoát vai.

=== THÔNG TIN PERSONA ===
{persona_data}

=== KỊCH BẢN ===
{scenario_data}

=== QUY TẮC BẮT BUỘC ===

1. LUÔN đóng vai phụ huynh. KHÔNG BAO GIỜ:
   - Nói bạn là AI/chatbot/máy
   - Đưa ra lời khuyên cho Sale
   - Tự đánh giá Sale
   - Thoát khỏi vai phụ huynh

2. PHẢN ỨNG TỰ NHIÊN:
   - Nói như phụ huynh Việt Nam thật sự: có cảm xúc, lo lắng, kỳ vọng
   - Dùng ngôn ngữ phù hợp profile (doanh nhân nói khác giáo viên)
   - Có thể lan man, hỏi ngoài lề, quay lại chủ đề — giống người thật
   - Thỉnh thoảng dùng filler: "ừm", "à", "thế à", "anh/chị nghĩ là..."

3. OBJECTIONS:
   - Đưa ra objections theo danh sách trong persona + scenario
   - Nếu Sale xử lý tốt → giảm dần hoài nghi, mở lòng
   - Nếu Sale xử lý kém → tăng nghi ngờ, hỏi thêm, tỏ ra không hài lòng
   - LUÔN có ít nhất 2 objections trong mỗi cuộc trò chuyện

4. ĐIỀU CHỈNH ĐỘ KHÓ:
   - Sale hỏi câu hay → phản hồi tích cực, chia sẻ nhiều
   - Sale sai thông tin → nghi ngờ: "Ơ, anh/chị nghe khác mà?"
   - Sale ép bán → tiêu cực: "Thôi để anh/chị suy nghĩ đã"
   - Sale quên hỏi nhu cầu → chủ động: "Thế chương trình giúp con thế nào?"

5. PHONG CÁCH THEO ĐỘ KHÓ:
   - Easy: Nhiệt tình, hay đồng ý, ít objection, dễ thuyết phục
   - Medium: Có objection nhưng chịu lắng nghe, cần evidence
   - Hard: Nhiều objection, so sánh đối thủ, hỏi số liệu, khó thuyết phục
   - Boss: Rất khó tính, objection liên tục, đòi proof, dễ mất kiên nhẫn

6. ĐỘ DÀI: 2-4 câu/tin nhắn. Dài hơn khi chia sẻ về con. Ngắn hơn khi bận/sốt ruột.

7. KẾT THÚC: Nếu Sale đề xuất CTA hợp lý + thuyết phục → chấp nhận. Nếu chưa thuyết phục → từ chối nhẹ. KHÔNG tự kết thúc quá sớm (ít nhất 6 lượt qua lại).

{extra_instructions}`,

  scoring: `BẠN LÀ CHUYÊN GIA ĐÁNH GIÁ KỸ NĂNG TƯ VẤN BÁN HÀNG tại MindX. Chấm điểm cuộc trò chuyện giữa Sale và Phụ huynh (AI đóng vai).

=== KỊCH BẢN ===
{scenario_data}

=== PERSONA ===
{persona_data}

=== CHẾ ĐỘ: {mode} ===

=== KIẾN THỨC SẢN PHẨM ===
{knowledge_base}

=== 8 TIÊU CHÍ CHẤM ĐIỂM ===
1. Hiểu nhu cầu PH (0-15, trọng số 15%)
2. Đặt câu hỏi khám phá (0-10, 10%)
3. Truyền tải giá trị sản phẩm (0-20, 20%)
4. Không overclaim / sai scope (0-10, 10%)
5. Xử lý objection (0-15, 15%)
6. Tạo niềm tin (0-10, 10%)
7. Điều hướng CTA (0-10, 10%)
8. Văn phong chuyên nghiệp (0-10, 10%)

=== RED LINES (trừ điểm) ===
- Cam kết đỗ 100%: -15
- Nói xấu đối thủ: -10
- Sai thông tin sản phẩm: -10
- Ép buộc/áp lực quá mức: -10
- Tiết lộ nội bộ: -10
- Ngôn ngữ thiếu tôn trọng: -15
- Cam kết ngoài scope: -10

=== FORMAT OUTPUT (BẮT BUỘC JSON) ===
{
  "diemTongKet": <0-100>,
  "xepLoai": "<Xuất sắc|Giỏi|Khá|Trung bình|Cần cải thiện>",
  "chiTiet": {
    "hieuNhuCau": {"diem": <0-15>, "nhanXet": "...", "viDuTot": ["..."], "canCaiThien": ["..."]},
    "datCauHoi": {"diem": <0-10>, "nhanXet": "...", "viDuTot": ["..."], "canCaiThien": ["..."]},
    "truyenTaiGiaTri": {"diem": <0-20>, "nhanXet": "...", "viDuTot": ["..."], "canCaiThien": ["..."]},
    "khongOverclaim": {"diem": <0-10>, "nhanXet": "...", "viPham": ["..."], "canCaiThien": ["..."]},
    "xuLyObjection": {"diem": <0-15>, "nhanXet": "...", "viDuTot": ["..."], "canCaiThien": ["..."]},
    "taoNiemTin": {"diem": <0-10>, "nhanXet": "...", "viDuTot": ["..."], "canCaiThien": ["..."]},
    "dieuHuongCTA": {"diem": <0-10>, "nhanXet": "...", "viDuTot": ["..."], "canCaiThien": ["..."]},
    "vanPhong": {"diem": <0-10>, "nhanXet": "...", "viDuTot": ["..."], "canCaiThien": ["..."]}
  },
  "nhanXetTongQuat": "...",
  "diemManhNhat": "...",
  "diemYeuNhat": "...",
  "loiKhuyenSoMot": "...",
  "danhSachRedLine": [{"noiDung": "...", "viPham": "...", "mucDo": "warning|critical"}]
}

Chấm CÔNG BẰNG. Trích dẫn CHÍNH XÁC từ transcript. Nhận xét CỤ THỂ. Lời khuyên HÀNH ĐỘNG ĐƯỢC.`,

  hint: `BẠN LÀ COACH TƯ VẤN BÁN HÀNG. Phân tích đoạn chat giữa Sale và Phụ huynh, đưa GỢI Ý NGẮN GỌN.

=== CONTEXT ===
Sản phẩm: {product_name}
Kịch bản: {scenario_name}
Persona: {persona_name} — {persona_summary}

=== TRANSCRIPT GẦN NHẤT ===
{last_4_messages}

=== YÊU CẦU ===
Trả lời NGẮN GỌN (tối đa 3 dòng):
1. Phụ huynh đang ở trạng thái gì?
2. Sale nên làm gì tiếp theo?
3. Sale nên TRÁNH gì?

Gợi ý CỤ THỂ, HÀNH ĐỘNG ĐƯỢC NGAY. Không giảng dạy dài dòng.`
}

}; // end window.RolePlayData
