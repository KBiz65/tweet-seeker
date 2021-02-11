import React from "react";
import Tweet from "./Tweet";

function UserTweetsDisplay(props) {
  console.log("UserTweetsDisplay props: ", props.tweetsArray);
  const tweets = props.tweetsArray.map((tweet) => (
    <Tweet tweet={tweet} key={tweet.id} />
  ));

  return (
    <div>
      <p>Recent Tweets</p>
      {/* <div className="tweet-row-container">{tweets}</div> */}
    </div>
  );
}

export default UserTweetsDisplay;
