import React, { useState } from "react";
import { Card, Button, Alert, ListGroup, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate, Outlet } from "react-router-dom";
import {
  BootstrapReboot,
  HeartFill,
  PersonLinesFill,
  Search,
} from "react-bootstrap-icons";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "../animation.css";
import { Background } from "../styled/styledComponents";

export default function Home() {
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
    <Background>
      <Container
        className="d-flex flex-column justify-contents-center"
        style={{ height: "100vh" }}
      >
        <Card className="mx-auto my-auto col-xs-8">
          <Card.Header className="p-5">
            <Logo
              alt=""
              width="140"
              height="140"
              className="d-flex mx-auto mt-5 justify-content-center"
              style={{ width: "300px" }}
            />

            <div className="loading d-flex justify-content-center mt-5">
              <div className="loading__letter">R</div>
              <div className="loading__letter">a</div>
              <div className="loading__letter">n</div>
              <div className="loading__letter">d</div>
              <div className="loading__letter">o</div>
              <div className="loading__letter">m</div>
              <div className="loading__letter">e</div>
              <div className="loading__letter">a</div>
              <div className="loading__letter">l</div>
              <div className="loading__letter">z</div>
              <div className="loading__letter">e</div>
              <div className="loading__letter">r</div>
            </div>
          </Card.Header>
          <Card.Body className="pt-5 d-flex justify-content-center">
            {error && <Alert variant="danger">{error}</Alert>}
            <div>
              <ListGroup as="ol" numbered>
                <Link to="/randomealz" style={{ textDecoration: "none" }}>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start fs-2 mb-3"
                  >
                    <span>
                      <BootstrapReboot />
                    </span>
                    <div className="ms-2 me-auto">
                      <div className="fw-bold m-1">
                        <h3 style={{ fontSize: "42px" }}>Randomealz</h3>
                      </div>
                    </div>
                  </ListGroup.Item>
                </Link>
                <Link to="/mealz" style={{ textDecoration: "none" }}>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start fs-2 mb-3"
                  >
                    <span>
                      <PersonLinesFill />
                    </span>
                    <div className="ms-2 me-auto">
                      <div className="fw-bold m-1">
                        <h3 style={{ fontSize: "42px" }}>My Mealz</h3>
                      </div>
                    </div>
                  </ListGroup.Item>
                </Link>
                {/* <Link to="/history" style={{ textDecoration: "none" }}>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start fs-2 mb-3"
                >
                  <span>
                    <ClockHistory />
                  </span>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold m-1">History</div>
                  </div>
                </ListGroup.Item>
              </Link> */}
                <Link to="/search" style={{ textDecoration: "none" }}>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start fs-2 mb-3"
                  >
                    <span>
                      <Search />
                    </span>
                    <div className="ms-2 me-auto">
                      <div className="fw-bold m-1">
                        <h3 style={{ fontSize: "42px" }}>Search</h3>
                      </div>
                    </div>
                  </ListGroup.Item>
                </Link>
                <Link to="/faves" style={{ textDecoration: "none" }}>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start fs-2 mb-3"
                  >
                    <span>
                      <HeartFill />
                    </span>
                    <div className="ms-2 me-auto">
                      <div className="fw-bold m-1">
                        <h3 style={{ fontSize: "42px" }}>Favourites</h3>
                      </div>
                    </div>
                  </ListGroup.Item>
                </Link>
                {/* <Link to="/shopping-list" style={{ textDecoration: "none" }}>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start fs-2 mb-3"
                >
                  <span>
                    <ListUl />
                  </span>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold m-1">Shopping</div>
                  </div>
                </ListGroup.Item>
              </Link> */}
              </ListGroup>
            </div>
            <Outlet />
          </Card.Body>
          <Card.Footer>
            <div className="w-100 text-center mt-2">
              <Button variant="link" onClick={handleLogout}>
                Log Out
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Container>
    </Background>
  );
}
