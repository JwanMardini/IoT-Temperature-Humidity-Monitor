import React from 'react';
import RGLed from './RGLed/RGLed.jsx';
import Temp from './Temp/Temp.jsx';
import Hum from './Hum/Hum.jsx';

const Dashboard = ({temp, hum, color}) => {
   const style = {
    display : "flex",
    justifyContent : "space-evenly",

    }

  return (
    <div className="dashboard" style={style}>
        <RGLed color={color} />
        <Temp temp={temp} />
        <Hum hum={hum} />
    </div>
  );
};

export default Dashboard;
