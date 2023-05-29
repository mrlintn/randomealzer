import React, { useState } from "react";
import { Alert, Button, Card, Container } from "react-bootstrap";
import ResultList from "./ResultList";
import { useAuth } from "../../contexts/AuthContext";
import { collection, serverTimestamp, setDoc, doc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Randomealz = ({ mealz, setMealz }) => {
  const [error, setError] = useState(false);
  const { currentUser } = useAuth();
  const favesListRef = collection(db, "favourites", currentUser.uid, "faves");
  const [favesListTest] = useCollectionData(favesListRef, {
    idField: "faves",
  });
  const [Loading, setLoading] = useState();

  const navigate = useNavigate();

  const randomList = (n) => {
    let arr = [];
    do {
      const randomNumber = Math.floor(Math.random() * favesListTest.length);

      if (!arr.includes(randomNumber)) {
        arr.push(randomNumber);
      }
    } while (arr.length < n);
    console.log(arr);
    setMealz(arr.map((pos) => favesListTest[pos]));
  };

  const randomealzer = () => {
    if (favesListTest.length > 6) {
      setLoading(true);
      randomList(7);
      setError(false);
      setLoading(false);
    } else {
      setError(true);
    }
  };

  const handleSave = async () => {
    console.log(`Handling mealz Click`);
    setLoading(true);
    console.log("Adding mealz");
    await mealz.map((pos, key) =>
      setDoc(doc(db, "favourites", currentUser.uid, "mealz", `${key}`), {
        ...pos,
        createdAT: serverTimestamp(),
      })
    );
    setLoading(false);
    navigate("/mealz");
  };

  const handleClick = () => {
    navigate("/search");
  };

  return (
    <Container>
      <h2 className="m-4 text-center">Randomealz</h2>
      <p className="mb-5 text-center">
        Randomize a list of of your favourite meals
      </p>
      {error && (
        <Alert variant="warning" className="w-100">
          Oops... it looks like you don't have enough favourited recipes. You'll
          need to
          <Button onClick={() => handleClick()} variant="link">
            Search for some here
          </Button>
          and add at least 7 to your faves before you can ride the randomealzer.
        </Alert>
      )}
      {!error && (
        <Container>
          <Card className="col-xs-12 col-md-8 d-flex justify-content-center mx-auto">
            <Card.Title className="p-2 d-flex justify-content-center">
              Hit the big red button!
            </Card.Title>
            <Button onClick={() => randomealzer()} variant="danger">
              <h4 style={{ color: "white" }}>LEZ GOOOOO!!</h4>
            </Button>
            <ResultList
              mealz={mealz}
              handleSave={handleSave}
              Loading={Loading}
            />
          </Card>
        </Container>
      )}
    </Container>
  );
};

export { Randomealz };
