import { useState, useEffect, useRef } from 'react';
import Dashboard from './components/Dashboard.jsx';
import DataList from './components/DataList/DataList.jsx'; 
import './App.css';

const URL = import.meta.env.VITE_WS_URL;

function App() {
  const [message, setMessage] = useState("");
  const [temp, setTemp] = useState(0);
  const [hum, setHum] = useState(0);
  const [color, setColor] = useState("black");
  const [data, setData] = useState([]);
  const socket = useRef(null);

  useEffect(() => {
    console.log('Connecting to:', URL);
    // Create a new WebSocket connection
    socket.current = new WebSocket(URL);

    socket.current.onopen = () => {
      console.log('Connected to server');
    };

    socket.current.onmessage = event => {
      const newData = JSON.parse(event.data);
      console.log('Message from server:', newData);
      setTemp(newData.temp);
      setHum(newData.humidity);
      setColor(newData.color);
      setData(prevData => [...prevData, newData]);
    };

    socket.current.onerror = error => {
      console.error('WebSocket error:', error);
    };

    socket.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      if (socket.current) {
        socket.current.close();
      }
    };
  }, []);

  const sendToServer = () => {
    if (socket.current && socket.current.readyState === WebSocket.OPEN) {
      socket.current.send(message);
    } else {
      console.error('WebSocket is not open. Ready state is:', socket.current.readyState);
    }
  };

  return (
    <>
      <h1 className='header'>IoT Dashboard</h1>
      <Dashboard temp={temp} hum={hum} color={color} />
      <DataList data={data} />
    </>
  );
}

export default App;
