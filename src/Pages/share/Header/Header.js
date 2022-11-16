import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../images/logo-black.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth'
const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"> <img height={30} src={logo} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link href="/home#service">Service</Nav.Link>
            <Nav.Link href="/home#expert">Expert</Nav.Link>

          </Nav>
          <Nav>
            
            <Nav.Link as={Link} to="/addservice">AddService</Nav.Link>
            <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {user ?
              <button onClick={() => signOut(auth)} style={{ color: 'red',borderRadius:'5px', background:'black', }}>signOut</button>
              :
              <Nav.Link as={Link} eventKey={2} to="/login">
                Login
              </Nav.Link>}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;