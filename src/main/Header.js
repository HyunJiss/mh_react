import React from 'react';
import '../css/Header.css';
import $ from 'jquery';

const Header = () => {
  //모바일 사이즈 메뉴 클릭 이벤트
  const mBtn = $('#m_buttom');
  const mMenu = $("#menu");

  const mobileBtnClick =()=>{
    if(mBtn.hasClass('on')){
      mBtn.removeClass('on');
      mMenu.slideUp("900");
    }else{
      mBtn.addClass('on');
      mMenu.slideDown("900");
    }
  }
  //
  const menuClick=()=>{
    setTimeout(()=>mMenu.slideUp("800"),800);
    mBtn.removeClass("on");
  }


  return (
    <>
    <header id="header">
      <div className="h_wrap">
        <h1 className="logo" onClick={menuClick}><a data-menuanchor="MH HOLDINGS" href="#MH HOLDINGS"><img alt="로고" src="/img/mhholdingsLogo.png" /></a></h1>
        <span id="m_buttom" onClick={mobileBtnClick}></span>
        <nav id="menu">
        <a data-menuanchor="BUSINESS" href="#BUSINESS" className="menu-links" onClick={menuClick}>BUSINESS</a>
        <a data-menuanchor="HEALTH COLUMNS" href="#HEALTH COLUMN" className="menu-links" onClick={menuClick}>HEALTH COLUMN</a>
        <a data-menuanchor="COMPANY" href="#COMPANY" className="menu-links" onClick={menuClick}>COMPANY</a>
        <a data-menuanchor="CONTACT US" href="#CONTACT US" className="menu-links" onClick={menuClick}>CONTACT US</a>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;