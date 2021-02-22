import React from "react";
import "./SearchResults.css";
import UserResults from "./UserResults";
import ContentResults from "./ContentResults";
// import UserTweetsDisplay from "./UserTweetsDisplay";

function SearchResults(props) {
  return (
    <div className="search-results-container">
      <UserResults props={props} />
      <ContentResults
        searchItem={props.searchItem}
        content={props.contentResponse}
      />
      {/* <div className="content-results"></div> */}
      {/* <div className="tweet-content-results">
        <UserTweetsDisplay
          // userId={props.userId}
          userTimeline={props.userTimeline}
        />
      </div> */}
    </div>
  );
}

export default SearchResults;
