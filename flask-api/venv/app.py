import requests
from flask import Flask
from flask import request, jsonify
from flask_cors import CORS

import tweepy

app = Flask(__name__)
CORS(app)

# Twitter config
consumer_key = "RRANE9krMoDf6YGDDkF8NAeKn"
consumer_secret = "F5siDuPTIu2QLyTAKgQwBFj1U2ZP5kwEAOSR0dJQFUKOVyrtkB"
access_token = "177089634-RK23U0fMTTxcDC9BdW8kDqX1XWMH3q3n5fJilgc4"
access_token_secret = "uYSx0W2FfMk6WelqCVVO0PewdtQCKqi5dqTTVO1U88EAI"
bearer_token = "AAAAAAAAAAAAAAAAAAAAAKYYMgEAAAAAij9Mw5Mz3l4xcn4HJmSyGLqygNs%3DhWPXsGwubcpoDY9JySskul2PXk92tD8ZGkOcslgheIsAXyaSEe"

headers = {
    "Authorization": "Bearer %s" % bearer_token,
    "Content-Type": "application/json",
}


@app.route("/searchUser", methods=["POST"])
def search_user():
    searchParam = request.data.decode("UTF-8")
    searchParamUrl = (
        "https://api.twitter.com/2/users/by?usernames="
        + searchParam
        + "&user.fields=profile_image_url"
    )
    getUserInfo = requests.get(searchParamUrl, headers=headers).json()
    userData = getUserInfo["data"][0]
    userId = userData["id"]
    userScreenName = userData["username"]
    userName = userData["name"]
    userProfileImage = userData["profile_image_url"].replace("_normal", "")
    getUserTweetsUrl = (
        "https://api.twitter.com/2/users/"
        + userId
        + "/tweets?tweet.fields=created_at,public_metrics"
    )
    getUserTweets = requests.get(getUserTweetsUrl, headers=headers).json()
    responseArray = [
        {
            "userId": userId,
            "userScreenName": userScreenName,
            "userName": userName,
            "userProfileImageUrl": userProfileImage,
            "userTimelineTweets": getUserTweets["data"],
        }
    ]
    print("ResponseArray: ", responseArray)
    return {"results": responseArray}


@app.route("/searchTweets", methods=["POST"])
def search_tweets():
    return "Hello World"


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
