import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const HeaderComponent = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <img
            alt="Logo"
            src="/govco.png"
            width="150"
            height="30"
            className="d-inline-block align-top"
          />{' '}
                      SuperIntendencia de Vigilancia
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
