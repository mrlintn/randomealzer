import React from "react";
import Ingredient from "./Ingredient";

function IngredientContainer({ ingredient }) {
  if (!ingredient) {
    return null;
  }
  return ingredient.map((step, key) => {
    return (
      <div key={key}>
        <Ingredient ingredient={step} />
      </div>
    );
  });
}

export default IngredientContainer;
