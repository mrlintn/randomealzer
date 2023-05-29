import React from "react";

function MethodItem({ instruction }) {
  return (
    <div className="d-flex">
      <h6 className="m-2">{instruction.number}</h6>
      <p className="m-2">{instruction.step}</p>
    </div>
  );
}

export default MethodItem;
