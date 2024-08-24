import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LoginModals from "./modals";
import { LoginButton } from "./loginbutton";

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">E-LetterMovement</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <LoginButton />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModals />
    </>
  );
}

export default Header;
