from flask import Flask, request, send_file

app = Flask(__name__)

@app.route("/")
def index():
    return send_file("index.html")  # e dërgon faqen HTML

@app.route("/submit", methods=["POST"])
def submit():
    username = request.form.get("username")
    email = request.form.get("email")

    with open("te_dhenat.txt", "a") as f:
        f.write(f"{username} - {email}\n")

    return "<h2>Faleminderit për regjistrimin!</h2>"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)