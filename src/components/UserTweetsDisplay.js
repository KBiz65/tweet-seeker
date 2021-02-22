import React from "react";
import Tweet from "./Tweet";
import "./UserTweetsDisplay.css";

function UserTweetsDisplay(props) {
  let tweets = "";
  tweets = props.userTimeline.map((tweet) => (
    <Tweet tweet={tweet} key={tweet.id} />
  ));

  return (
    <div className="recent-tweets-container">
      <div className="tweet-row-container">{tweets}</div>
    </div>
  );
}

export default UserTweetsDisplay;
