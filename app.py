import os, json
from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)

allowed_origins = [
    "https://ostromaj.github.io",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
]
CORS(app, resources={r"/api/*": {"origins": allowed_origins}})

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY")) if os.environ.get("OPENAI_API_KEY") else None

with open("data/questions.json","r",encoding="utf-8") as f:
    QUESTIONS = json.load(f)

@app.get("/")
def health():
    return jsonify({"status":"ok","service":"IB Computer Science Question Grader API"})

@app.get("/api/questions")
def questions():
    return jsonify(QUESTIONS)

@app.post("/api/grade")
def grade():
    payload = request.get_json(force=True)
    qid = payload.get("question_id")
    answer = (payload.get("answer") or "").strip()
    drawing = payload.get("drawing")
    q = next((x for x in QUESTIONS if x["id"] == qid), None)

    if not q:
        return jsonify({"error":"Question not found"}), 404
    if not answer and not drawing:
        return jsonify({"error":"Please type an answer or submit a drawing."}), 400
    if not client:
        return jsonify({"error":"OPENAI_API_KEY is not configured on the server."}), 503

    system = """You are an IB Computer Science practice examiner. Grade ONLY against the supplied practice markscheme.
Use positive marking: award credit for correct ideas even when wording differs, when the meaning is clear.
Return three defensible scores: strict, balanced, generous.
Strict requires explicit evidence. Balanced is the best examiner-style estimate. Generous awards plausible implicit understanding.
Never exceed the maximum marks. Explain each mark point separately.
This is practice feedback, not an official IB grade.
Return ONLY valid JSON with keys:
strict_score, balanced_score, generous_score, max_marks, awarded_marks, missed_marks, overall_feedback, how_to_improve, confidence.
awarded_marks and missed_marks must be arrays of objects with keys mark and reason."""

    prompt = f"""Question: {q['question']}
Command term: {q['command_term']}
Maximum marks: {q['marks']}
Practice markscheme:
{json.dumps(q['markscheme'], ensure_ascii=False)}

Student typed response:
{answer if answer else '[No typed response]'}

Grade the response against each mark point. If a drawing image is supplied, interpret it only insofar as it answers the question."""

    content = [{"type":"input_text","text":prompt}]
    if drawing:
        content.append({"type":"input_image","image_url":drawing})

    resp = client.responses.create(
        model=os.environ.get("OPENAI_MODEL","gpt-5-mini"),
        input=[
            {"role":"system","content":[{"type":"input_text","text":system}]},
            {"role":"user","content":content}
        ]
    )

    text = resp.output_text.strip()
    if text.startswith("```"):
        text = text.split("\n",1)[1].rsplit("```",1)[0].strip()

    try:
        result = json.loads(text)
    except Exception:
        return jsonify({"error":"The grader returned an unreadable result. Please try again.","raw":text[:500]}), 502

    result["disclaimer"] = "AI-assisted practice grade — not an official IB mark."
    return jsonify(result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
