import React from "react";
import { Card } from "react-bootstrap";
import { Overlay } from "../styled/styledComponents";
import FaveToggle from "../../buttons/FaveToggle";
import ViewCurrent from "../../buttons/ViewCurrent";

function FavesResultItem({ recipe, favesListTest }) {
  return (
    <Card className="m-2" style={{ width: "18rem", height: "370px" }}>
      <Card.Img
        variant="top"
        src={recipe.image}
        className="fluid"
        alt="Card image"
      />
      <Overlay>
        <FaveToggle fave={recipe} favesListTest={favesListTest} />
      </Overlay>
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className="m-2 my-auto" style={{ textAlign: "center" }}>
          {recipe.title}
        </Card.Title>
        <ViewCurrent isMeal="no" current={recipe} />
      </Card.Body>
    </Card>
  );
}

export default FavesResultItem;
