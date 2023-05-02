import React from 'react';
import mhholdingsLogo from '../img/mhholdingsLogo.png';
import '../css/main.css';
const Header = () => {
  return (
    <>
    <div className="h_wrap">
      <h1 className="logo"><a><img src={mhholdingsLogo} /></a></h1>
      <span id="m_buttom"></span>
      <nav id="menu">
        <a className="menu-links">BUSINESS</a>
        <a className="menu-links">HEALTH COLUMN</a>
        <a className="menu-links">COMPANY</a>
        <a className="menu-links">CONTACT US</a>
      </nav>
    </div>
    </>
  );
};

export default Header;