import React from "react";
import { Form } from "react-bootstrap";

function Ingredient({ ingredient }) {
  return (
    <div className="mb-3">
      <Form.Check
        type="checkbox"
        id={`default-checkbox`}
        label={ingredient.original}
      />
    </div>
  );
}

export default Ingredient;
