import React from 'react';
import BusinessSlider from './BusinessSlider';

const Business = () => {
  return (
    <div className="section" id="section1" style={{height:'929px'}}>
      <h2 className="title busi_title">BUSINESS</h2>
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
      <BusinessSlider/>
    </div>
  );
};

export default Business;