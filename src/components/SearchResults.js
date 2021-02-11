import React from "react";
import "./SearchResults.css";
import UserTweetsDisplay from "./UserTweetsDisplay";

function SearchResults(props) {
  if (props.userId) {
    return (
      <div className="search-results-container">
        <div className="screen-name-results">
          <div className="user-profile-image">
            <img src={props.userImageUrl} alt="user's profile image" />
          </div>
          <p className="screen-name">
            Here are the most recent tweets from {props.userScreenName}
          </p>
        </div>
        <div className="tweet-content-results">
          <UserTweetsDisplay tweetsArray={props.userTimeline} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default SearchResults;
