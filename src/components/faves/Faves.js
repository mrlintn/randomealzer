import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import FavesResultItem from "./FavesResultItem";

const Faves = ({ viewCurrent }) => {
  const { currentUser } = useAuth();
  const favesListRef = collection(db, "favourites", currentUser.uid, "faves");
  const [favesListTest] = useCollectionData(favesListRef, { idField: "faves" });
  console.log(favesListTest);

  return (
    <Container>
      <h2 className="m-4 text-center">Favourite Recipes</h2>
      <CardGroup
        className="d-flex justify-content-center"
        style={{ flexFlow: "row wrap" }}
      >
        {favesListTest &&
          favesListTest.map((recipe, key) => (
            <div key={key}>
              <FavesResultItem
                recipe={recipe}
                favesListTest={favesListTest}
                viewCurrent={() => viewCurrent(recipe)}
              />
            </div>
          ))}
      </CardGroup>
    </Container>
  );
};

export { Faves };
