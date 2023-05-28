import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [radius, setRadius] = useState(0);
  function handleChange(e) {
    setRadius(e.target.value);
  }

  const mystyle = {
    border: `${radius}px solid black`,
    backgroundColor: 'red',
    height: '200px',
    width: '200px',
    borderRadius: `${radius}%`,
  };
  return (
    <div className='circle'>
      <div style={mystyle}></div>

      <h1>Radius : {radius}%</h1>
      <input
        style={{ width: '50vw' }}
        type='range'
        min={0}
        max={50}
        value={radius}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
