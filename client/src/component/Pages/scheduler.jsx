import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { LogoutButton } from "./loginbutton";

function Scheduller() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">E-LetterMovement</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <LogoutButton />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
