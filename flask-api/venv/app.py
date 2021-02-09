from flask import Flask
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)


@app.route("/search", ["GET"])
def search():
    return "Hello!"


@app.route("/random")
def random():

    return {
        "result": {
            "user": "Kevin Bisner",
            "content": "Tweet text goes here!",
            "date": "January 17, 2020",
            "image": "https://kevinbisner.net/static/images/KBiz.jpg",
            "retweets": 3,
            "likes": 15,
            "comments": 2,
        }
    }
