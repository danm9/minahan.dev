import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "../Images/Icons/Icon.js";
import "./NavBar.css";

export function NavBar() {
  return (
    <Navbar id="navbar" className="sticky-top">
      <Container className="d-flex">
        <Navbar.Brand
          href="/"
          className="text-white fw-bold"
          style={{ fontSize: "24px" }}
        >
          M.D
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" id="link" className="text-white">
            HOME
          </Nav.Link>
          <Nav.Link href="/resume" id="link" className="text-white">
            RESUME
          </Nav.Link>
          <Nav.Link href="/portfolio" id="link" className="text-white">
            PORTFOLIO
          </Nav.Link>
        </Nav>
        <a href="https://github.com/danm9" id="icon-link" title="GitHub">
          <FontAwesomeIcon size="2x" icon={Icon.GitHub} />
        </a>
        <a
          href="https://www.linkedin.com/in/danm9/"
          id="icon-link"
          title="LinkedIn"
        >
          <FontAwesomeIcon size="2x" icon={Icon.Linkedin} />
        </a>
      </Container>
    </Navbar>
  );
}
