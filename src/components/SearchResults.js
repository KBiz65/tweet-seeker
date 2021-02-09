import React from "react";
import "./SearchResults.css";

function SearchResults(props) {
  return (
    <div className="search-results-container">
      <p>{props.user}</p>
    </div>
  );
}

export default SearchResults;
