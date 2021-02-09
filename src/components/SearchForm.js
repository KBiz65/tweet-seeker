import React, { useState } from "react";
import "./SearchForm.css";
import { Button, Form, FormGroup, Input } from "reactstrap";
import SearchResults from "./SearchResults";

function SearchForm() {
  const [user, setUser] = useState();

  function handleChange(e) {
    e.preventDefault();
    const searchData = {
      method: "POST",
      body: e.target.searchItem.value,
    };

    fetch("/search", searchData).then((response) =>
      response.json().then((data) => {
        console.log(data.results);
        setUser(data.results);
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

      <SearchResults user={user} />
    </div>
  );
}

export default SearchForm;
