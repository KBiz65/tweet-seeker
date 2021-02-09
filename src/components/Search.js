import React from "react";
import "./Search.css";
import SearchForm from "./SearchForm";

function Search() {
  return (
    <div className="search-page">
      <div className="search-container">
        <div className="search-page-overview">
          <p>Search Page</p>
          <p>
            Enter anything you'd like in the box below and click "submit" to
            begin your search. Tweet Seeker will search through all users,
            tweets, topics, and more to find instances of that search.
          </p>
        </div>
      </div>
      <SearchForm />
    </div>
  );
}

export default Search;
