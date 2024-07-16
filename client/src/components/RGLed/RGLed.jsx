import React from 'react';
import './RGLed.css';

const RGLed = ({ color }) => {
  
  return (
    <div className='box'>
          <div className="color-cycle" style={{ backgroundColor: color }}>
          </div>
    </div>

  );
};

export default RGLed;
