from flask import Flask, request
from chatterbot import ChatBot

app = Flask(__name__)
chatbot = ChatBot('Tutor')

@app.route('/ask', methods=['POST'])
def ask():
    user_input = request.json['message']
    response = chatbot.get_response(user_input)
    return {'response': str(response)}

if __name__ == '__main__':
    app.run()
