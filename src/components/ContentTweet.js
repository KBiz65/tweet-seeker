import React from "react";
import "./ContentTweet.css";

function ContentTweet(props) {
  return (
    <div className="tweet-container">
      <div className="metrics-container">
        <div className="metrics-item">
          <div className="metrics-title">Retweets:</div>
          <div className="metrics-number">
            {props.tweet.public_metrics.retweet_count}
          </div>
        </div>
        <div className="metrics-item">
          <div className="metrics-title">Likes:</div>
          <div className="metrics-number">
            {props.tweet.public_metrics.like_count}
          </div>
        </div>
        <div className="metrics-item">
          <div className="metrics-title">Comments:</div>
          <div className="metrics-number">
            {props.tweet.public_metrics.reply_count}
          </div>
        </div>
      </div>
      <div className="text-container">
        <div className="text-item">{props.tweet.text}</div>
        <div className="created-at-item">
          Tweeted by @{props.tweet.username} on {props.tweet.created_at}
        </div>
      </div>
    </div>
  );
}

export default ContentTweet;
