from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will allow your Flask app to receive requests from your React app

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    # Here you can add code to do something with the form data
    # For now, we'll just print it to the console
    print(f"Received message from {name} ({email}): {message}")

    return "Form submitted successfully"

if __name__ == '__main__':
    app.run(port=5000)