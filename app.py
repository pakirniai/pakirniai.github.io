from flask import Flask # type: ignore

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello from Flask on Vercel!'

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
