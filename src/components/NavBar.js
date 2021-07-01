import "../App.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    await logout();
  }

  return currentUser ? (
    <Navbar collapseOnSelect="sm" bg="light" expand="lg">
      <Navbar.Brand href="Language-Learning-App/#/home">
        Language Learning App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Activities" id="basic-nav-dropdown">
            <NavDropdown.Item href="Language-Learning-App/#/stories">
              Stories
            </NavDropdown.Item>
            <NavDropdown.Item href="Language-Learning-App/#/flashcards">
              Flashcards
            </NavDropdown.Item>
            <NavDropdown.Item href="Language-Learning-App/#/quizzes">
              Quizzes
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <NavDropdown title={currentUser.email} id="basic-nav-dropdown">
          <NavDropdown.Item
            href="Language-Learning-App/#/home"
            onClick={handleLogout}
          >
            Sign Out
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  ) : (
    <Navbar collapseOnSelect="sm" bg="light" expand="lg">
      <Navbar.Brand href="Language-Learning-App/#/home">
        Language Learning App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Activities" id="basic-nav-dropdown">
            <NavDropdown.Item href="Language-Learning-App/#/stories">
              Stories
            </NavDropdown.Item>
            <NavDropdown.Item href="Language-Learning-App/#/flashcards">
              Flashcards
            </NavDropdown.Item>
            <NavDropdown.Item href="Language-Learning-App/#/quizzes">
              Quizzes
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="Language-Learning-App/#/signin">Sign In</Nav.Link>
        <Nav.Link href="Language-Learning-App/#/signup">Sign Up</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
