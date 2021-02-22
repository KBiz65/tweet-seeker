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
  const [contentResponse, setContentResponse] = useState();
  const [searchItem, setSearchItem] = useState();

  function handleChange(e) {
    e.preventDefault();
    const searchItem = e.target.searchItem.value;
    const searchData = {
      method: "POST",
      body: searchItem,
    };

    fetch("/searchInput", searchData).then((response) =>
      response.json().then((data) => {
        if (data.results[0][0]["userId"] === "Does not exist") {
          setUserId("User does not exist");
          setUserName("");
          setScreenName("");
          setUserImageUrl("");
          setUserTimeline([]);
          setSearchItem(searchItem);
        } else {
          setUserId(data.results[0][0]["userSearchResponse"].userId);
          setUserName(data.results[0][0]["userSearchResponse"].userName);
          setScreenName(
            data.results[0][0]["userSearchResponse"].userScreenName
          );
          setUserImageUrl(
            data.results[0][0]["userSearchResponse"].userProfileImageUrl
          );
          setUserTimeline(
            data.results[0][0]["userSearchResponse"].userTimelineTweets
          );
          setSearchItem(searchItem);
        }

        if (data.results[1][0]["contentId"] === "Does not exist") {
          setContentResponse("No content found");
        } else {
          setContentResponse(data.results[1][0]);
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
        contentResponse={contentResponse}
      />
    </div>
  );
}

export default SearchForm;
