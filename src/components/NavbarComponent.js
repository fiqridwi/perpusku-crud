import React from "react";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="#">PerpusKu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="https://www.linkedin.com/in/nurfiqri-dwi-ahadi/"
              target="_blank"
            >
              LinkedIn
            </Nav.Link>
          </Nav>
          <Form inline>
            <Button
              variant="outline-info"
              href="https://github.com/fiqridwi"
              target="_blank"
            >
              GitHub
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarComponent;
