#!/usr/bin/env python3
"""CGI script for reading and writing roadmap edit data."""
import json
import os
import sys

DATA_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "roadmap_data.json")

def read_data():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}

def write_data(data):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

method = os.environ.get("REQUEST_METHOD", "GET")

if method == "GET":
    result = read_data()
    print("Content-Type: application/json")
    print()
    print(json.dumps(result, ensure_ascii=False))
elif method == "POST":
    content_length = int(os.environ.get("CONTENT_LENGTH", 0))
    body = sys.stdin.read(content_length) if content_length else ""
    try:
        payload = json.loads(body) if body else {}
        new_data = payload.get("data", {})
        existing = read_data()
        existing.update(new_data)
        write_data(existing)
        print("Content-Type: application/json")
        print()
        print(json.dumps({"status": "ok", "keys_saved": list(new_data.keys())}, ensure_ascii=False))
    except Exception as e:
        print("Status: 400 Bad Request")
        print("Content-Type: application/json")
        print()
        print(json.dumps({"error": str(e)}))
else:
    print("Status: 405 Method Not Allowed")
    print("Content-Type: application/json")
    print()
    print(json.dumps({"error": "Method not allowed"}))
