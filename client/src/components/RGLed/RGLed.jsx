import React from 'react';
import './RGLed.css';

const RGLed = ({ color }) => {
  
  return (
    <div className='box'>
          <h3 style={{color: "black"}}>RGLed</h3>
          <div className="color-cycle" style={{ backgroundColor: color }}>
          </div>
    </div>

  );
};

export default RGLed;
