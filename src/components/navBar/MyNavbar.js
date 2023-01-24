/* eslint-disable */
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import resume from '../../assets/Resume.pdf';
import logo from '../../assets/img/Portfolio-PNG-Image.png';
import './nav.css';

function MyNavbar({ activeSection }) {
  const [activeLink, setActiveLink] = useState('home');

  const updateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <>
      <Navbar bg="light" expand="lg" className="deskNav">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')} href="#home">Home</Nav.Link> */}
              <Nav.Link href="#home" className={activeSection === 'home' ? "active" : 'list'}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeSection === 'skills' ? "active" : 'list'}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeSection === 'project' ? "active" : 'list'}>Projects</Nav.Link>
              <Nav.Link href="#about" className={activeSection === 'about' ? "active" : 'list'}>About</Nav.Link>
              <Nav.Link href="#contact" className={activeSection === 'contact' ? "active" : 'list'}>Contact</Nav.Link>
            </Nav>
            {/* <button className="autoBtn" type="submit">Let&apos;s Connect</button> */}
            <a className="autoBtn" href={resume} download>
                  <AiOutlineDownload />
                  {' '}
                  Resume
                </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
