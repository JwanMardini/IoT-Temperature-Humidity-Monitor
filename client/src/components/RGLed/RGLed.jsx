import React from 'react';
import './RGLed.css';

const RGLed = ({ color }) => {
  
  return (
    <div className='box' style={{ border: `1px solid ${color}`}}>
          <div className="color-cycle" style={{ backgroundColor: color }}>
          </div>
    </div>

  );
};

export default RGLed;
