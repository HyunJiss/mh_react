import React from 'react';
import MainSlider from './MainSlider';

const Mhholdings = () => {
  return (
    <div className="section active" id="section0">
          <div id="content0">
            <div className="main_sub_title">
              <span className="point_font">M</span><span className="font_st">arketing</span><span className="point_font">H</span><span className="font_st">ope</span><span>MHholdings</span>
            </div>
            <div className="main_title">
            <strong>
              <span style={{letterSpacing:'-7.8px'}}>희</span>
              <span style={{letterSpacing:'-1px'}}>망</span>
            </strong>
            <span style={{marginLeft:'2px'}}>담</span>
            <span>은</span>
            <br/>
            <strong style={{marginRight:'7px'}}>
              <span style={{marginRight:'4px'}}>헬</span>
              <span style={{marginRight:'4px'}}>스</span>
            </strong>
            <span>케</span>
            <span>어</span>  
            <br/>
            <span style={{marginRight:'17px',letterSpacing:'-7px'}}>광고</span> 
            <span style={{marginLeft:'-5%', letterSpacing:'-8px'}}>마케팅</span>   	   	
            </div>
          </div>
          <div className="mh_main_wrap">
            <MainSlider/>
          </div>
        </div>
  );
};

export default Mhholdings;