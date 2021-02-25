import requests
import random
import os
from flask import Flask
from flask import request, jsonify
from flask_cors import CORS
from decouple import config

app = Flask(__name__, static_folder="./build/", static_url_path="/")
CORS(app)

# get env variables
bearer_token = config("BEARER_TOKEN")

headers = {
    "Authorization": "Bearer %s" % bearer_token,
    "Content-Type": "application/json",
}


@app.route("/", methods=["GET"])
def home():
    return app.send_static_file("index.html")


@app.route("/searchInput", methods=["POST"])
def search_user():
    searchParam = request.data.decode("UTF-8")
    searchUserUrl = (
        "https://api.twitter.com/2/users/by?usernames="
        + searchParam
        + "&user.fields=profile_image_url"
    )
    searchContentUrl = (
        "https://api.twitter.com/2/tweets/search/recent?query="
        + searchParam
        + "&user.fields=username&tweet.fields=author_id,created_at,public_metrics&expansions=author_id"
    )

    getUserInfo = requests.get(searchUserUrl, headers=headers).json()
    getContentInfo = requests.get(searchContentUrl, headers=headers).json()

    if "errors" in getUserInfo:
        userSearchResults = [{"userId": "Does not exist"}]

    else:
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
        userSearchResults = [
            {
                "userSearchResponse": {
                    "userId": userId,
                    "userScreenName": userScreenName,
                    "userName": userName,
                    "userProfileImageUrl": userProfileImage,
                    "userTimelineTweets": getUserTweets["data"],
                }
            }
        ]

    if "errors" in getContentInfo:
        contentSearchResults = [{"contentId": "Does not exist"}]

    else:
        if getContentInfo["meta"]["result_count"] == 0:
            contentSearchResults = [{"contentId": "Does not exist"}]

        else:
            contentData = getContentInfo["data"]
            contentIncludes = getContentInfo["includes"]["users"]

            contentSearchResults = [
                {
                    "contentSearchResponse": {
                        "contentData": contentData,
                        "contentIncludes": contentIncludes,
                    }
                }
            ]

    return {"results": [userSearchResults, contentSearchResults]}


@app.route("/randomTweet")
def randomTweet():
    favoriteTweeters = [
        "249957750",
        "357312062",
        "110770469",
        "579648949",
        "2370627199",
    ]
    tweeter = favoriteTweeters[random.randint(0, 4)]

    searchTweeterUrl = (
        "https://api.twitter.com/2/users/" + tweeter + "?user.fields=profile_image_url"
    )

    getTweeterInfo = requests.get(searchTweeterUrl, headers=headers).json()

    if "errors" in getTweeterInfo:
        randomTweet()

    else:
        userData = getTweeterInfo["data"]
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
        userSearchResults = [
            {
                "userSearchResponse": {
                    "userId": userId,
                    "userScreenName": userScreenName,
                    "userName": userName,
                    "userProfileImageUrl": userProfileImage,
                    "userTimelineTweets": getUserTweets["data"],
                }
            }
        ]
    return {"results": userSearchResults}
