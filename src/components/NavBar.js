import "../App.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
  const { currentUser } = useAuth();

  return (
    <Navbar collapseOnSelect="sm" bg="light" expand="lg">
      <Navbar.Brand href="home">Language Learning App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="signin">Sign In</Nav.Link>
          <Nav.Link href="signup">Sign Up</Nav.Link>
          <NavDropdown title="Activities" id="basic-nav-dropdown">
            <NavDropdown.Item href="stories">Stories</NavDropdown.Item>
            <NavDropdown.Item href="flashcards">Flashcards</NavDropdown.Item>
            <NavDropdown.Item href="quizzes">Quizzes</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Signed in as: asd</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
