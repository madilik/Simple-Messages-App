from flask import Flask, request

app = Flask(__name__)


messages = [{"id": 1, "user": "madiFlask", "message": "Hello world!"}]


@app.route("/messages")
def get_messages():
    return {"messages": messages}


@app.route("/messages", methods=["POST"])
def create_message():
    if request.method == "POST":
        userMessage = request.get_json()
        print(userMessage)
        userMessage["id"] = messages[-1].get("id") + 1
        messages.append(userMessage)
    return {"status": "success"}


@app.route("/messages/<int:id>", methods=["GET", "PUT"])
def update_message(id):
    if request.method == "PUT":
        return {"status": "not implemented"}
    message = next(m for m in messages if m["id"] == id)
    return {"message": message, "status": "is up to updated"}


@app.route("/message/<int:id>", methods=["GET", "DELETE"])
def delete_message(id):
    if request.method == "DELETE":
        return {"status": "not implemented"}
    message = next(m for m in messages if m["id"] == id)
    return {"message": message, "status": "is up to deleted"}


@app.get("/message/<int:id>")
def get_message(id):
    message = next(m for m in messages if m["id"] == id)
    return message


if __name__ == "__main__":
    app.run(port=5000, debug=True)
