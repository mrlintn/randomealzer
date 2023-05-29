import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import FavesResultItem from "../faves/FavesResultItem";
import { Row, Container, Col, Card } from "react-bootstrap";

const Mealz = ({ viewCurrent }) => {
  const { currentUser } = useAuth();
  const mealzListRef = collection(db, "favourites", currentUser.uid, "mealz");
  const [mealzListTest] = useCollectionData(mealzListRef, { idField: "mealz" });
  const favesListRef = collection(db, "favourites", currentUser.uid, "faves");
  const [favesListTest] = useCollectionData(favesListRef, { idField: "faves" });

  return (
    <Container>
      <h2 className="m-4 text-center">7 Mealz for this week</h2>
      <Container className="d-flex justify-content-center mx-auto">
        <Row xs={1} md={1} className="g-4">
          <Col
            style={{
              position: "absolute",
              zIndex: 99,
              pointerEvents: "none",
              width: "328px",
            }}
          >
            <Card
              className="m-2 d-flex justify-content-center"
              style={{
                width: "18rem",
                height: "370px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              {" "}
              <h3
                className="mb-5 p-2"
                style={{
                  textAlign: "center",
                  backgroundColor: "white",
                  opacity: 0.8,
                }}
              >
                Monday
              </h3>
            </Card>
            <Card
              className="m-2 d-flex justify-content-center"
              style={{
                width: "18rem",
                height: "370px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              {" "}
              <h3
                className="mb-5 p-2"
                style={{
                  textAlign: "center",
                  backgroundColor: "white",
                  opacity: 0.8,
                }}
              >
                Tuesday
              </h3>
            </Card>
            <Card
              className="m-2 d-flex justify-content-center"
              style={{
                width: "18rem",
                height: "370px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              {" "}
              <h3
                className="mb-5 p-2"
                style={{
                  textAlign: "center",
                  backgroundColor: "white",
                  opacity: 0.8,
                }}
              >
                Wednesday
              </h3>
            </Card>
            <Card
              className="m-2 d-flex justify-content-center"
              style={{
                width: "18rem",
                height: "370px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              {" "}
              <h3
                className="mb-5 p-2"
                style={{
                  textAlign: "center",
                  backgroundColor: "white",
                  opacity: 0.8,
                }}
              >
                Thursday
              </h3>
            </Card>
            <Card
              className="m-2 d-flex justify-content-center"
              style={{
                width: "18rem",
                height: "370px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              {" "}
              <h3
                className="mb-5 p-2"
                style={{
                  textAlign: "center",
                  backgroundColor: "white",
                  opacity: 0.8,
                }}
              >
                Friday
              </h3>
            </Card>
            <Card
              className="m-2 d-flex justify-content-center"
              style={{
                width: "18rem",
                height: "370px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              {" "}
              <h3
                className="mb-5 p-2"
                style={{
                  textAlign: "center",
                  backgroundColor: "white",
                  opacity: 0.8,
                }}
              >
                Saturday
              </h3>
            </Card>
            <Card
              className="m-2 d-flex justify-content-center"
              style={{
                width: "18rem",
                height: "370px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              {" "}
              <h3
                className="mb-5 p-2"
                style={{
                  textAlign: "center",
                  backgroundColor: "white",
                  opacity: 0.8,
                }}
              >
                Sunday
              </h3>
            </Card>
          </Col>
          <Col>
            {mealzListTest &&
              favesListTest &&
              mealzListTest.map((recipe, key) => (
                <div key={key}>
                  <FavesResultItem
                    recipe={recipe}
                    favesListTest={favesListTest}
                    viewCurrent={() => viewCurrent(recipe)}
                  />
                </div>
              ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export { Mealz };
