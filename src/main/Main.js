import React from 'react';
import '../css/Main.css';
import Business from './Business';
import Health from './Health';
import Company from './Company';
import Contact from './Contact';
import Mhholdings from './Mhholdings';

const Main = () => {
  return (
    <div sytle={{width:'100%',overflow:'hidden'}}>
      <div id="mhmain">
        <Mhholdings />
        <Business/>
        <Health />
        <Company />
        <Contact />
      </div>
    </div>
  );
};

export default Main;