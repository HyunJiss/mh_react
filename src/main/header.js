import React from 'react';
import mhholdingsLogo from '../img/mhholdingsLogo.png';
import {Link} from 'react-router-dom';
import '../css/main.css';
const Header = () => {
  return (
    <>
    <header id="header">
      <div className="h_wrap">
        <h1 className="logo"><a><img src={mhholdingsLogo} /></a></h1>
        <nav id="menu">
        <Link to={'/main'} className="menu-links">BUSINESS</Link>
        <Link to={'/main1'} className="menu-links">HEALTH COLUMN</Link>
        <Link to={'/main2'} className="menu-links">COMPANY</Link>
        <Link to={'/main3'} className="menu-links">CONTACT US</Link>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;