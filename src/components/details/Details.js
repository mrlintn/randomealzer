import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import MethodContainer from "./MethodContainer";
import IngredientContainer from "./IngredientContainer";
import { Clock } from "react-bootstrap-icons";
import { Overlay } from "../styled/styledComponents";
import FaveToggle from "../../buttons/FaveToggle";
import { useAuth } from "../../contexts/AuthContext";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Details = () => {
  const [details, setCurrent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useAuth();
  const favesListRef = collection(db, "favourites", currentUser.uid, "faves");
  const [favesListTest] = useCollectionData(favesListRef, { idField: "faves" });
  const theRef = collection(db, "favourites", currentUser.uid, "current");
  const [info, loading] = useCollectionData(theRef, {
    id: "current",
  });

  useEffect(() => {
    if (loading === false) {
      setIsLoading(true);
      setCurrent(Object.assign(details, info[0]));
      setIsLoading(false);
    }
  }, [info]);

  return (
    <Card>
      {isLoading === false && favesListTest && (
        <Card.Body>
          <div>
            <div className="row">
              <div className="col-12 col-lg-4">
                <Card.Img
                  src={details.image}
                  className="fluid"
                  alt="Card image"
                />
                <Overlay style={{ padding: "2em" }}>
                  <Card.Text className="card-text float-start top ml-5">
                    <strong style={{ color: "white" }}>
                      <Clock /> {details.readyInMinutes} mins
                    </strong>
                  </Card.Text>

                  <FaveToggle fave={details} favesListTest={favesListTest} />
                </Overlay>
              </div>

              <div className="col-12 col-lg-8">
                <h2>{details.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: details.summary }} />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-8 p-2">
                <h4>Method</h4>
                <MethodContainer instructions={details.analyzedInstructions} />
              </div>

              <div className="col-12 col-lg-4  p-2">
                <h4>Ingredient</h4>
                <IngredientContainer ingredient={details.extendedIngredients} />
              </div>
            </div>
          </div>

          <div className="w-100 text-center mt-3">go Back</div>
        </Card.Body>
      )}
    </Card>
  );
};

export { Details };
