import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import SearchFilters from "./SearchFilters";

function SearchInput({
  setInput,
  setNewSearch,
  input,
  diet,
  setDiet,
  intolerance,
  setIntolerance,
  loading,
}) {
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input !== "") {
      setNewSearch({
        query: input,
        number: 5,
        diet: diet,
        intolerance: intolerance,
      });
      setInput("");
    } else {
      return input;
    }
  };
  return (
    <Card>
      <Form>
        <div className="input-group">
          <Button
            disabled={loading}
            onClick={(event) => handleSubmit(event)}
            variant="secondary"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Button>
          <input
            value={input}
            onChange={handleChange}
            type="text"
            className="form-control col-md-8 col-xs-12"
            style={{ minWidth: "150px" }}
          ></input>

          <SearchFilters
            diet={diet}
            setDiet={setDiet}
            intolerance={intolerance}
            setIntolerance={setIntolerance}
          />
        </div>
      </Form>
    </Card>
  );
}

export default SearchInput;
