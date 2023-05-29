import { useAuth } from "./AuthContext";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import React, { useContext } from "react";

const FaveContexts = React.createContext();

export function useFave() {
  return useContext(FaveContexts);
}

function FaveContext({ children }) {
  const { currentUser } = useAuth();
  const favesListRef = collection(db, "favourites", currentUser.uid, "faves");
  const [favesListTest] = useCollectionData(favesListRef, { idField: "faves" });

  return (
    <FaveContext.Provider value={favesListTest}>
      {children}
    </FaveContext.Provider>
  );
}

export default FaveContext;
