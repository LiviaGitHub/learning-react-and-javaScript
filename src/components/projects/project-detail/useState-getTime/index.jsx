import React, { useState } from 'react';
import './index.css';
import { Header } from '../../../header';

export const UseStateGetTimePage = () => {
    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState('00:00:00');

    function handleTimeClick () {
        setTime(now)
    }

  return (
    <div>
      <Header />
      <div className="get-time-container">
        <button onClick={handleTimeClick}>
            Get current time {time}
        </button>
      </div>
    </div>
  );
};
