import React, { useState } from "react";
import "./SearchForm.css";
import { Button, Form, FormGroup, Input } from "reactstrap";
import SearchResults from "./SearchResults";

function SearchForm() {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState();
  const [userScreenName, setScreenName] = useState();
  const [userTimeline, setUserTimeline] = useState([]);
  const [userImageUrl, setUserImageUrl] = useState();
  const [searchItem, setSearchItem] = useState();

  function handleChange(e) {
    e.preventDefault();
    const searchItem = e.target.searchItem.value;
    const searchData = {
      method: "POST",
      body: searchItem,
    };

    fetch("/searchUser", searchData).then((response) =>
      response.json().then((data) => {
        if (data.results["userId"] === "Does not exist") {
          console.log("fetch response shows a user doesn't exist");
          setUserId("User does not exist");
          setUserName("");
          setScreenName("");
          setUserImageUrl("");
          setUserTimeline([]);
          setSearchItem(searchItem);
        } else {
          setUserId(data.results[0].userId);
          setUserName(data.results[0].userName);
          setScreenName(data.results[0].userScreenName);
          setUserImageUrl(data.results[0].userProfileImageUrl);
          setUserTimeline(data.results[0].userTimelineTweets);
          setSearchItem(searchItem);
        }
      })
    );
  }
  return (
    <div className="search-form-container">
      <Form onSubmit={handleChange}>
        <FormGroup className="search-form-group">
          <Input
            className="search-input-field"
            type="text"
            name="search-item"
            id="searchItem"
            placeholder="Enter search word or phrase"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>

      <SearchResults
        searchItem={searchItem}
        userId={userId}
        userName={userName}
        userScreenName={userScreenName}
        userImageUrl={userImageUrl}
        userTimeline={userTimeline}
      />
    </div>
  );
}

export default SearchForm;
