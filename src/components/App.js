import React, { useState } from "react";
import Signup from "./signup/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider, PrivateRoute } from "../contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./signup/Dashboard";
import Login from "./signup/Login";
import ForgotPassword from "./signup/ForgotPassword";
import UpdateProfile from "./signup/UpdateProfile";
import Home from "./home/Home";
import { Randomealz } from "./randomealz/Randomealz";
import { Mealz } from "./mealz/Mealz";
import { Search } from "./search/Search";
import { Faves } from "./faves/Faves";
import { Error } from "./Error";
import { Navigation } from "./NavBar";
import { Details } from "./details/Details";

function App() {
  const [recipes, setRecipes] = useState({ data: { results: "" } });
  const [current, setCurrent] = useState([]);
  const [mealz, setMealz] = useState([]);

  const viewCurrent = (recipe) => {
    console.log(`Navigating to ${recipe.title} details...`);
    setCurrent(recipe);
  };

  return (
    <Container className="w-100" style={{ minHeight: "100vh" }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Navigation />}>
                <Route
                  path="/randomealz"
                  element={<Randomealz mealz={mealz} setMealz={setMealz} />}
                />
                <Route
                  path="/mealz"
                  element={<Mealz viewCurrent={viewCurrent} />}
                />
                <Route
                  path="/search"
                  element={
                    <Search
                      recipes={recipes}
                      setRecipes={setRecipes}
                      viewCurrent={viewCurrent}
                    />
                  }
                />
                <Route
                  path="/faves"
                  element={
                    <Faves recipes={recipes} viewCurrent={viewCurrent} />
                  }
                />
                <Route path="/account" element={<Dashboard />} />
                <Route
                  path="/details"
                  element={
                    <Details current={current} setCurrent={setCurrent} />
                  }
                />
                <Route path="/update-profile" element={<UpdateProfile />} />
              </Route>
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
