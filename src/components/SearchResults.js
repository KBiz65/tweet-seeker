import React from "react";
import "./SearchResults.css";
import UserTweetsDisplay from "./UserTweetsDisplay";

function SearchResults(props) {
  if (props.userId === "User does not exist") {
    return (
      <div className="search-results-container">
        <div className="screen-name-results">
          <p className="no-user-container">
            No valid screenname found for "{props.searchItem}".
          </p>
        </div>
      </div>
    );
  } else if (props.userId === "") {
    return null;
  } else {
    return (
      <div className="search-results-container">
        <div className="screen-name-results">
          <div className="user-profile-image">
            <img src={props.userImageUrl} alt="user" />
          </div>
          <p className="screen-name">
            Here are some recent tweets from {props.userScreenName}
          </p>
        </div>
        <div className="tweet-content-results">
          <UserTweetsDisplay
            // userId={props.userId}
            userTimeline={props.userTimeline}
          />
        </div>
      </div>
    );
  }
}

export default SearchResults;
