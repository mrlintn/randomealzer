import React from "react";
import MethodItem from "./MethodItem";

function MethodTopic({ instruction }) {
  if (!instruction) {
    return null;
  }
  return instruction.map((step, key) => {
    return (
      <div key={key}>
        <MethodItem instruction={step} />
      </div>
    );
  });
}

export default MethodTopic;
