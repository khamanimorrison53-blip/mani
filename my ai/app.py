from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


# Home page
@app.route("/")
def home():
    return render_template("index.html")


# Chat
@app.route("/chat", methods=["POST"])
def chat():

    data = request.json
    message = data.get("message", "").lower()

    if "hello" in message or "hi" in message:
        reply = "Hello! 👋 I'm Khamani AI."

    elif "python" in message:
        reply = "Python is a programming language used to create software, websites, games, and AI."

    elif "who are you" in message:
        reply = "I'm Khamani AI, your personal AI assistant."

    elif "html" in message:
        reply = "HTML creates the structure of a website."

    elif "css" in message:
        reply = "CSS controls the design and appearance of a website."

    else:
        reply = "I'm still learning. Try asking me about Python, HTML, CSS, or Computer Science."

    return jsonify({"reply": reply})


# Image generator
@app.route("/generate-image", methods=["POST"])
def generate_image():

    data = request.json
    prompt = data.get("prompt", "")

    return jsonify({
        "reply": f"Khamani AI received your image request: {prompt}",
        "message": "Your image-generation model can be connected here."
    })


if __name__ == "__main__":
    app.run(debug=True)