import React from 'react';
import '../css/Main.css';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import "slick-carousel/slick/slick.css";
import '../css/RespondMain.css';
import Business from './Business';
import Health from './Health';
import Company from './Company';
import Contact from './Contact';
import Mhholdings from './Mhholdings';
import 'fullpage.js';
import $ from 'jquery';

const Main = () => {

  $(function(){
    $("#mhmain").fullpage({
      scrollOverflow: true,
      navigationTooltips:['MH HOLDINGS','BUSINESS', 'HEALTH COLUMN', 'COMPANY', 'CONTACT US'],
      anchors:['MH HOLDINGS','BUSINESS', 'HEALTH COLUMN', 'COMPANY', 'CONTACT US'],
      navigation:true,
      navigationPosition:'right',
      menu: '#menu',
      scrollingSpeed: 800,
      afterLoad:function(origin, destination, direction){
        if(this.index()===0){
            $('.main_title').removeClass('animated');
            $('.main_sub_title').removeClass('animated');
            setTimeout(function()
            {
                $('.main_title').addClass('animated');
                $('.main_sub_title').addClass('animated');
                $('#section0 .slick-slide:first').addClass('slick-active');
                $('#section0 .slick-dots li:first').addClass('slick-active');
  
          },20);
        }else{
          $('.main_title').removeClass('animated');
          $('.main_sub_title').removeClass('animated');
        }
          
      }
    });
  });

  return (
    <>
      <div id="mhmain">
        <Mhholdings />
        <Business/>
        <Health />
        <Company />
        <Contact />
      </div>
    </>
  );
};

export default Main;