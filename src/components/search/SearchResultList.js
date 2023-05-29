import React from "react";
import SearchResultItem from "./SearchResultItem";
import { CardGroup, Container } from "react-bootstrap";

function SearchResultList({
  recipes,
  favesListTest,
  faves,
  setFaves,
  viewCurrent,
}) {
  let searchResults =
    recipes.data.results.length > 0 ? (
      recipes.data.results.map((recipe, key) => (
        <div key={key}>
          <SearchResultItem
            recipe={recipe}
            favesListTest={favesListTest}
            faves={faves}
            setFaves={setFaves}
            viewCurrent={() => viewCurrent(recipe)}
          />
        </div>
      ))
    ) : (
      <Container
        className="d-flex justify-content-center"
        style={{ height: "75vh" }}
      >
        {" "}
        <h4 className="my-auto">
          Nothing to display yet, try searching for some recipes
        </h4>{" "}
      </Container>
    );
  return (
    <CardGroup
      className="d-flex justify-content-center"
      style={{ flexFlow: "row wrap" }}
    >
      {searchResults}
    </CardGroup>
  );
}

export default SearchResultList;
