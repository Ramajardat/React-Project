import React from "react";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Button } from "react-bootstrap";
const logo = new URL("../../logo3.png", import.meta.url);

const HeaderComponent = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);

  const handelLogout = () => {
    removeCookie("currentUser");
  };

  return (
    <header className="header">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="180"
              height="40"
              className="d-inline-block align-left"
            />{" "}
          </Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav>
                <Link to={"/"}>Home</Link>
              </Nav>
              <Nav>
                <Link to={"/search"}>Search</Link>
              </Nav>
              <Nav>
                <Link to={"/about"}>About</Link>
              </Nav>
              <Nav>
                <Link to={"/contact"}>Contact</Link>
              </Nav>

              <Nav>
                {cookies.currentUser == null && (
                  <Link to={"/login"}>Login</Link>
                )}
              </Nav>

              <Nav>
                {cookies.currentUser != null && (
                  <Link onClick={handelLogout} to={"/login"}>
                    logout
                  </Link>
                )}
              </Nav>

              {/* <Nav>
                <Link to={"/login"}>
                  {cookies.currentUser != null && (
                    <Button
                      variant="success"
                      style={{
                        backgroundColor: "#59CE8F",
                      }}
                      onClick={handelLogout}
                    >
                      Logout
                    </Button>
                  )}
                </Link>
              </Nav>*/}

              <Link to={"/register"} style={{ visibility: "hidden" }}>
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderComponent;
