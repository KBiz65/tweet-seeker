import React from "react";
import "./SearchForm.css";
import { Button, Form, FormGroup, Input } from "reactstrap";
import SearchResults from "./SearchResults";

function SearchForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("SearchItem: ", event.target.searchItem.value);
    fetch("/search");
  }

  return (
    <div className="search-form-container">
      <Form onSubmit={handleSubmit}>
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

      <SearchResults />
    </div>
  );
}

export default SearchForm;
