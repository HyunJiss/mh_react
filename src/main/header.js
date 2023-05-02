import React from 'react';

const Header = () => {
  return (
    <>
    <div className="h_wrap">
      <h1 className="logo"><a data-menuanchor="MH HOLDINGS" href="#MH HOLDINGS"><img src="<%=path_main%>/img/main/mhholdingsLogo.png" /></a></h1>
      <span id="m_buttom" onclick="m_button_click();"></span>
      <nav id="menu">
        <a className="menu-links" data-menuanchor="BUSINESS" href="#BUSINESS">BUSINESS</a>
        <a className="menu-links" data-menuanchor="HEALTH COLUMN" href="#HEALTH COLUMN">HEALTH COLUMN</a>
        <a className="menu-links" data-menuanchor="COMPANY" href="#COMPANY">COMPANY</a>
        <a className="menu-links" data-menuanchor="CONTACT US" href="#CONTACT US">CONTACT US</a>
      </nav>
    </div>
    </>
  );
};

export default Header;