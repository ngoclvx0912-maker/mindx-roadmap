#!/usr/bin/env python3
"""MindX Roadmap API Server — runs on port 8000."""
import json
import sqlite3
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

DB_PATH = "/home/user/workspace/mindx-roadmap/mindx_data.db"

def get_db():
    db = sqlite3.connect(DB_PATH, check_same_thread=False)
    db.execute("CREATE TABLE IF NOT EXISTS kv_store (key TEXT PRIMARY KEY, value TEXT)")
    return db

db = get_db()

@asynccontextmanager
async def lifespan(app):
    yield
    db.close()

app = FastAPI(lifespan=lifespan)
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

class DataPayload(BaseModel):
    data: dict

@app.get("/api/data")
def get_data():
    rows = db.execute("SELECT key, value FROM kv_store").fetchall()
    result = {}
    for key, value in rows:
        try:
            result[key] = json.loads(value)
        except (json.JSONDecodeError, TypeError):
            result[key] = value
    return result

@app.post("/api/data")
def save_data(payload: DataPayload):
    try:
        for key, value in payload.data.items():
            serialized = json.dumps(value, ensure_ascii=False) if not isinstance(value, str) else value
            db.execute(
                "INSERT INTO kv_store (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = ?",
                [key, serialized, serialized]
            )
        db.commit()
        return {"status": "ok", "keys_saved": list(payload.data.keys())}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
