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
            begin your search. Tweet Seeker will search through screen names and
            tweet content for your search word or phrase entered.
          </p>
          <p>
            ** if you're searching for a screen name, remember that Twitter
            screen names do not include spaces **
          </p>
        </div>
      </div>
      <SearchForm />
    </div>
  );
}

export default Search;
