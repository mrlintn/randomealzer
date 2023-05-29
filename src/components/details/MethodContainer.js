import React from "react";
import MethodTopic from "./MethodTopic";
import { Accordion } from "react-bootstrap";

function MethodContainer({ instructions }) {
  if (!instructions) {
    return null;
  }
  return instructions.map((step, key) => {
    return (
      <div key={key}>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey={key}>
            <Accordion.Header>{step.name}</Accordion.Header>
            <Accordion.Body>
              <MethodTopic instruction={step.steps} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  });
}

export default MethodContainer;
