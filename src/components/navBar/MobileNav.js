/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoBuild } from 'react-icons/io5';
import { GoFileDirectory } from 'react-icons/go';
import { MdContacts } from 'react-icons/md';
import { BiMessageRoundedError } from 'react-icons/bi';
import logo from '../../assets/img/Portfolio-PNG-Image.png';
import './mobileNav.css';

const MobileNav = ({ activeSection }) => {
  const [indicatorPosition, setIndicatorPosition] = useState(0);

useEffect(() => {
  switch (activeSection) {
    case "home":
      setIndicatorPosition(0);
      break;
    case "skills":
      setIndicatorPosition(1);
      break;
      case "project":
      setIndicatorPosition(2);
      break;
    case "about":
      setIndicatorPosition(3);
      break;
    case "contact":
      setIndicatorPosition(4);
      break;
    default:
      setIndicatorPosition(0);
  }
}, [activeSection]);
  return (
  <>
    <div className="mobileLogo">
      <img src={logo} alt="Logo" />
    </div>
    <div className="navigation">
      <ul>
        <li className={activeSection === 'home' ? "active" : 'list'}>
          <a href="#home">
            <span className="icon"><AiFillHome /></span>
            <span className="text">Home</span>
          </a>
        </li>
        <li className={activeSection === 'skills' ? "active" : 'list'}>
          <a href="#skills">
            <span className="icon"><IoBuild /></span>
            <span className="text">Skills</span>
          </a>
        </li>
        <li className={activeSection === 'project' ? "active" : 'list'}>
          <a href="#project">
            <span className="icon"><GoFileDirectory /></span>
            <span className="text">Projects</span>
          </a>
        </li>
        <li className={activeSection === 'about' ? "active" : 'list'}>
          <a href="#about">
            <span className="icon"><BiMessageRoundedError /></span>
            <span className="text">About</span>
          </a>
        </li>
        <li className={activeSection === 'contact' ? "active" : 'list'}>
          <a href="#contact">
            <span className="icon"><MdContacts /></span>
            <span className="text">Contact</span>
          </a>
        </li>
        <div className="indicator" style={{ transform: `translateX(calc(70px * ${indicatorPosition}))` }} />
      </ul>
    </div>
  </>
  )
};

export default MobileNav;
