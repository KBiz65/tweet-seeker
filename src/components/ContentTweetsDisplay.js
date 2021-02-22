import React from "react";
import ContentTweet from "./ContentTweet";
import "./ContentTweetsDisplay.css";

function ContentTweetsDisplay(props) {
  // pulling the username from contentIncludes to add to contentData
  props.props.content.contentSearchResponse.contentData.forEach(
    (tweetElement, index) => {
      const author_id = tweetElement.author_id;
      props.props.content.contentSearchResponse.contentIncludes.forEach(
        (includesElement) => {
          if (author_id === includesElement.id) {
            props.props.content.contentSearchResponse.contentData[index][
              "username"
            ] = includesElement.username;
          }
        }
      );
    }
  );

  let tweets = "";
  tweets = props.props.content.contentSearchResponse.contentData.map(
    (tweet) => <ContentTweet tweet={tweet} key={tweet.id} />
  );

  return (
    <div className="recent-tweets-container">
      <div className="tweet-row-container">{tweets}</div>
    </div>
  );
}

export default ContentTweetsDisplay;
