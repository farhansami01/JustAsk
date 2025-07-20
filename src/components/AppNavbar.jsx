import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import jtitle from '../assets/jtitle.png';

function AppNavbar() {
  const cartItems = useSelector((state) => state.items || []);
  const itemCount = cartItems.length;
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', fontSize: '1rem' }}><img src={jtitle} alt="JustAsk" style={{ maxHeight: '70px' }} /></Navbar.Brand>

        {/* Toggle for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsable Nav Section */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
              <Badge bg="secondary">{itemCount}</Badge>
            </Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/fashion">Fashion</Nav.Link>
            <Nav.Link as={Link} to="/grocery">Grocery</Nav.Link>
            <Nav.Link as={Link} to="/food">Food</Nav.Link>
          </Nav>

          {/*Right side (Cart + Future Login/Profile) */}
          <Nav>
            <Nav.Link as={Link} to="/cart">
              Cart{' '}
              <Badge bg="danger" pill>
                {itemCount}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
