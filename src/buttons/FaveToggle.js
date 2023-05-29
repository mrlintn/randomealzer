import React, { useState } from "react";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "react-bootstrap";
import { HeartFill, Heart } from "react-bootstrap-icons";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const FaveToggle = ({ fave, favesListTest }) => {
  const [Loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const favesRef = doc(
    db,
    "favourites",
    currentUser.uid,
    "faves",
    `${fave.id}`
  );

  let isFave =
    favesListTest.findIndex((x) => x.id === fave.id) <= -1 || undefined
      ? false
      : true;

  const handleClick = async (e) => {
    e.stopPropagation();
    console.log(`Handling Fave Click`);
    setLoading(true);
    const docSnap = await getDoc(favesRef);
    if (docSnap.exists()) {
      console.log("Deleting Doc");
      await deleteDoc(favesRef, { fave });
      setLoading(false);
    } else {
      console.log("Adding Doc");
      await setDoc(favesRef, { ...fave, createdAT: serverTimestamp() }).then(
        setLoading(false)
      );
    }
  };

  return (
    <>
      <Button
        variant={isFave ? "danger" : "secondary"}
        onClick={handleClick}
        className="btn float-end"
        disabled={Loading}
      >
        {isFave ? <HeartFill /> : <Heart />}
      </Button>
    </>
  );
};

export default FaveToggle;
