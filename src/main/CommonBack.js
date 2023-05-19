import React from 'react';
import $ from 'jquery';
const CommonBack = () => {

  const section = $(".lds-ellipsis").parent().parent();

  $(function(){
    //section 판단
    if(section.hasClass("section2")){
      $(".section2 .lds-ellipsis").addClass("column");
    }else if(section.hasClass("section3")){
      $(".section3 .lds-ellipsis").addClass("column");
    }else if(!section.hasClass("section1")){
      $(".section3 .bintro,.section2 .bintro,.section4 .bintro").css("display","none");
      }
  });

  return (
  <>
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className="common_back">
      <div className="gone"><img alt="" src="/img/greenone_c.png"/></div>
      <div className="wbone"><img alt="" src="/img/whiteone.png"/></div>
      <div className="yone"><img alt="" src="/img/yellowone.png"/></div>
      <div className="mone"><img alt="" src="/img/MHone.png"/></div>
      <div className="bintro"><img alt="" src="/img/business_intro.png"/></div>
    </div>
  </>
  );
};

export default CommonBack;