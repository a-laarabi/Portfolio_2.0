import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../../assets/img/Portfolio-PNG-Image.png';
import './nav.css';

function Nav() {
  const [activeLink, setActiveLink] = useState('home');

  const updateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')} href="#home">Home</Nav.Link>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <button className="vvd" type="submit">Let&apos;s Connect</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
