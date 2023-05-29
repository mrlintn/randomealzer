import React, { useState } from "react";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "react-bootstrap";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../spoonacular";

const ViewCurrent = ({ current, isMeal }) => {
  const [Loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const currentRef = doc(db, "favourites", currentUser.uid, "current", `ID`);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.stopPropagation();
    setLoading(true);
    const recipe = await axios.get(
      `${api.search}recipes/${current.id}/information?includeNutrition=false&apiKey=${api.key}`
    );
    setDoc(currentRef, { ...recipe.data, createdAT: serverTimestamp() }).then(
      setLoading(false)
    );
    setLoading(false);
    navigate("/details");
  };

  return (
    <>
      <Button
        variant={isMeal === "yes" ? "link" : "dark"}
        onClick={handleClick}
        className={
          isMeal === "yes"
            ? "btn align-content-end mt-auto"
            : "btn align-content-end mt-auto w-100"
        }
        disabled={Loading}
      >
        {isMeal === "yes" ? `${current.title}` : "View Recipe"}
      </Button>
    </>
  );
};

export default ViewCurrent;
