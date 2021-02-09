from flask import Flask
from flask import request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/search", methods=["POST"])
def do_search():
    returnDict = {}
    returnDict["results"] = request.data.decode("UTF-8")
    print(returnDict)
    return returnDict


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
