import React from "react";
import { Results } from "./Results";
import { Button, ListGroup } from "react-bootstrap";

function ResultList({ mealz, handleSave, Loading }) {
  let searchResults =
    mealz.length > 0 &&
    mealz.map((i, key) => (
      <ListGroup.Item className="text-truncate" as="li" key={key}>
        <Results mealz={i} />
      </ListGroup.Item>
    ));
  return (
    <>
      {mealz.length > 0 && (
        <div>
          <ListGroup as="ol" className="text-truncate w-25 d-flex float-start">
            <ListGroup.Item as="li">
              <Button
                variant="link"
                disabled
                style={{ textDecoration: "none" }}
              >
                Mon
              </Button>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Button
                variant="link"
                disabled
                style={{ textDecoration: "none" }}
              >
                Tue
              </Button>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Button
                variant="link"
                disabled
                style={{ textDecoration: "none" }}
              >
                Wed
              </Button>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Button
                variant="link"
                disabled
                style={{ textDecoration: "none" }}
              >
                Thu
              </Button>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Button
                variant="link"
                disabled
                style={{ textDecoration: "none" }}
              >
                Fri
              </Button>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Button
                variant="link"
                disabled
                style={{ textDecoration: "none" }}
              >
                Sat
              </Button>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Button
                variant="link"
                disabled
                style={{ textDecoration: "none" }}
              >
                Sun
              </Button>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup as="ol" className="w-75 d-flex float-start">
            {searchResults}
          </ListGroup>
          <Button
            disabled={Loading}
            onClick={() => handleSave()}
            variant="success"
            className="w-100"
          >
            <h4 style={{ color: "white" }}>SAVE</h4>
          </Button>
        </div>
      )}
    </>
  );
}

export default ResultList;
