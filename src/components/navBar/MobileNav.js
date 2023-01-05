import React from 'react';
import {
  AiFillHome, AiFillCalendar, AiFillCloud, AiFillCrown,
} from 'react-icons/ai';
import logo from '../../assets/img/Portfolio-PNG-Image.png';
import './mobileNav.css';

const MobileNav = () => (
  <>
    <div className="mobileLogo">
      <img src={logo} alt="Logo" />
    </div>
    <div className="navigation">
      <ul>
        <li className="list active">
          <a href="#home">
            <span className="icon"><AiFillHome /></span>
            <span className="text">Home</span>
          </a>
        </li>
        <li className="list">
          <a href="#home">
            <span className="icon"><AiFillCalendar /></span>
            <span className="text">Home</span>
          </a>
        </li>
        <li className="list">
          <a href="#home">
            <span className="icon"><AiFillCloud /></span>
            <span className="text">Home</span>
          </a>
        </li>
        <li className="list">
          <a href="#home">
            <span className="icon"><AiFillCrown /></span>
            <span className="text">Home</span>
          </a>
        </li>
        <div className="indicator" />
      </ul>
    </div>
  </>
);

export default MobileNav;
