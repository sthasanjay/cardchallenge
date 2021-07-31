import React from 'react';

import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const NavbarPage = () => {
  return (
   
     <>
  
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  className = "navbar mx-auto">
  <Container>
  <Navbar.Brand href="#home">Players</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
  
  </Navbar.Collapse>
  </Container>
</Navbar>

</>
  
  )
}

export default NavbarPage;
