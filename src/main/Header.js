import React from 'react';
import '../css/Header.css';
const Header = () => {
  return (
    <>
    <header id="header">
      <div className="h_wrap">
        <h1 className="logo"><a href="#!"><img alt="로고" src="/img/mhholdingsLogo.png" /></a></h1>
        <nav id="menu">
        <a href="#!" className="menu-links">BUSINESS</a>
        <a href="#!" className="menu-links">HEALTH COLUMN</a>
        <a href="#!" className="menu-links">COMPANY</a>
        <a href="#!" className="menu-links">CONTACT US</a>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;