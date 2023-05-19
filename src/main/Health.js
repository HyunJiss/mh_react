import React from 'react';
import HealthSlider from './HealthSlider';
import CommonBack from './CommonBack';

const Health = () => {

  return (
      <div className="section section2" id="section2">
        <h2 className="title column_title">HEALTH COLUMN</h2>
        <CommonBack />
        <HealthSlider />
      </div>
  );
};

export default Health;