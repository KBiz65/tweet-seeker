import React from "react";
import UserTweetsDisplay from "./UserTweetsDisplay";
import "./UserResults.css";

function UserResults(props) {
  if (props.props.userId === "" || props.props.searchItem === "") {
    return null;
  } else if (props.props.userId === "User does not exist") {
    return (
      <div className="user-results-container">
        <div className="screen-name-results">
          <p className="no-user-container">
            No valid screenname found for "{props.props.searchItem}".
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="search-results-container">
        <div className="screen-name-results">
          <div className="user-profile-image">
            <img src={props.props.userImageUrl} alt="user" />
          </div>
          <p className="screen-name">
            Here are some recent tweets from {props.props.userScreenName}
          </p>
        </div>
        <div className="tweet-content-results">
          <UserTweetsDisplay userTimeline={props.props.userTimeline} />
        </div>
      </div>
    );
  }
}

export default UserResults;
