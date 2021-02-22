import React from "react";
import ContentTweetsDisplay from "./ContentTweetsDisplay";
import "./ContentResults.css";

function ContentResults(props) {
  if (
    props.content === "" ||
    props.searchItem === "" ||
    props.content === undefined
  ) {
    return null;
  } else if (props.content === "No content found") {
    return (
      <div className="search-results-container">
        <div className="content-results">
          <p className="no-content-container">
            No tweets found with content that includes {props.searchItem}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="search-results-container">
        <div className="content-results">
          <p className="content-search-name">
            Here are some recent tweets that have content about{" "}
            {props.searchItem}
          </p>
        </div>
        <div className="tweet-content-results">
          <ContentTweetsDisplay props={props} />
        </div>
      </div>
    );
  }
}

export default ContentResults;
