import React from "react";
import { useState, useEffect, useRef } from "react";
import SearchInput from "./SearchInput";
import SearchResultList from "./SearchResultList";
import api from "../../spoonacular";
import axios from "axios";
import { Alert, Container } from "react-bootstrap";
import { Loading } from "../Loading";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Search = ({ recipes, setRecipes, viewCurrent }) => {
  const [input, setInput] = useState("");
  const [newSearch, setNewSearch] = useState([]);
  const [diet, setDiet] = useState("");
  const [intolerance, setIntolerance] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [faves, setFaves] = useState([]);

  const isMounted = useRef(false);

  const { currentUser } = useAuth();
  const favesListRef = collection(db, "favourites", currentUser.uid, "faves");
  const [favesListTest] = useCollectionData(favesListRef, { idField: "faves" });

  useEffect(() => {
    if (isMounted.current) {
      setFaves(favesListTest);
    } else {
      isMounted.current = true;
    }
  }, [favesListTest]);

  useEffect(() => {
    if (isMounted.current) {
      const getRecipes = async () => {
        try {
          setError("");
          setLoading(true);
          const recipe = await axios.get(
            `${api.search}recipes/complexSearch?query=${newSearch.query.replace(
              /\s/g,
              "+"
            )}&intolerance=${newSearch.intolerance}&diet=${
              newSearch.diet
            }&number=12&sort=random&apiKey=${api.key}`
          );

          if (recipe.data.totalResults === 0) {
            setError(
              `No recipes matched your search for "${newSearch.query}", please check spelling and try again`
            );
            setLoading(false);
          } else {
            setLoading(false);
            setRecipes(recipe);
          }
        } catch {
          setError("Failed to get recipes");
          setLoading(false);
        }
      };
      newSearch.query === undefined
        ? console.log("try searching for a recipe")
        : getRecipes();
    } else {
      isMounted.current = true;
    }
  }, [newSearch]);

  return (
    <Container>
      <h2 className="m-4">Search</h2>
      <h1 style={{ display: "none" }}>Search Page</h1>
      <SearchInput
        input={input}
        setInput={setInput}
        newSearch={newSearch}
        setNewSearch={setNewSearch}
        diet={diet}
        setDiet={setDiet}
        intolerance={intolerance}
        setIntolerance={setIntolerance}
        loading={loading}
      />
      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? (
        <Loading />
      ) : (
        <SearchResultList
          recipes={recipes}
          favesListTest={favesListTest}
          faves={faves}
          viewCurrent={viewCurrent}
        />
      )}
    </Container>
  );
};

export { Search };
