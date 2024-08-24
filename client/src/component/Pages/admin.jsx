import React from "react";
function Admin() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">E-LetterMovement</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Button variant="success">Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModals />
    </>
  );
}

export default Admin;
