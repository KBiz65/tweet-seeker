import React from "react";
import Tweet from "./Tweet";
import "./UserTweetsDisplay.css";

function UserTweetsDisplay(props) {
  let tweets = "";
  if (props.userId === "User does not exist") {
    tweets = "Not a valid screen name";
  } else {
    tweets = props.userTimeline.map((tweet) => (
      <Tweet tweet={tweet} key={tweet.id} />
    ));
  }

  return (
    <div className="recent-tweets-container">
      <p>Recent Tweets</p>
      <div className="tweet-row-container">{tweets}</div>
    </div>
  );
}

export default UserTweetsDisplay;
