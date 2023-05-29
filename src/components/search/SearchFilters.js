import { Button } from "react-bootstrap";
import React from "react";

function SearchFilters({ diet, setDiet, intolerance, setIntolerance }) {
  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.name === "gluten") {
      if (intolerance === event.target.name) {
        setIntolerance("");
      } else {
        setIntolerance(event.target.name);
      }
    } else {
      if (event.target.name === "Vegan") {
        if (diet === event.target.name) {
          setDiet("");
        } else {
          setDiet(event.target.name);
        }
      } else {
        if (event.target.name === "Vegetarian") {
          if (diet === event.target.name) {
            setDiet("");
          } else {
            setDiet(event.target.name);
          }
        }
      }
    }
  };

  return (
    <div>
      <Button
        onClick={(event) => handleClick(event)}
        name="Vegetarian"
        variant={diet === "Vegetarian" ? "dark" : "secondary"}
      >
        Vegetarian
      </Button>
      <Button
        onClick={(event) => handleClick(event)}
        name="Vegan"
        variant={diet === "Vegan" ? "dark" : "secondary"}
      >
        Vegan
      </Button>
      <Button
        onClick={(event) => handleClick(event)}
        name="gluten"
        variant={intolerance === "gluten" ? "dark" : "secondary"}
      >
        Gluten Free
      </Button>
    </div>
  );
}

export default SearchFilters;
