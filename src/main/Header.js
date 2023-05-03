import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Header.css';
const Header = () => {
  return (
    <>
    <header id="header">
      <div className="h_wrap">
        <h1 className="logo"><Link><img alt="로고" src="/img/mhholdingsLogo.png" /></Link></h1>
        <nav id="menu">
        <Link to={'/main'} className="menu-links">BUSINESS</Link>
        <Link to={'/main'} className="menu-links">HEALTH COLUMN</Link>
        <Link to={'/main'} className="menu-links">COMPANY</Link>
        <Link to={'/main'} className="menu-links">CONTACT US</Link>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;