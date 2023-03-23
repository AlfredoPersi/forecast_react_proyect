import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';

const NavBarComponent = () => {
  return (
    <>
      <NavBar bg="light" expand="lg" fixed="top">
        <Container>
          <NavBar.Brand>
            <h4>Forecast</h4>
          </NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Offers</Nav.Link>
            <Nav.Link>Market</Nav.Link>
            <Nav.Link>Help</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    </>
  );
};

export default NavBarComponent;
