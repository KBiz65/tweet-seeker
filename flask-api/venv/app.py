import requests
import random
from flask import Flask
from flask import request, jsonify
from flask_cors import CORS

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
