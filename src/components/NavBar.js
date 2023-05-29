import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Nav, Navbar, Button, Alert } from "react-bootstrap";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { PersonCircle } from "react-bootstrap-icons";

function Navigation() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="px-2"
        >
          <Nav.Link as={NavLink} to="/">
            <Navbar.Brand>
              <Logo
                alt=""
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              <div className="nav-title d-inline-block align-top ms-2">
                Randomealzer
              </div>
            </Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto flex-grow-1">
              <Nav.Link as={NavLink} eventKey={1} to="/randomealz">
                Randomealz
              </Nav.Link>
              <Nav.Link as={NavLink} eventKey={2} to="/mealz">
                My Mealz
              </Nav.Link>
              <Nav.Link as={NavLink} eventKey={4} to="/search">
                Search Recipes
              </Nav.Link>
              <Nav.Link as={NavLink} eventKey={5} to="/faves">
                Favourites
              </Nav.Link>
            </Nav>

            <Nav>
              <Button onClick={handleLogout} variant="dark">
                Log Out
              </Button>
              <Nav.Link as={NavLink} eventKey={7} to="/account">
                <PersonCircle size={20} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Outlet />
      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  );
}

export { Navigation };
