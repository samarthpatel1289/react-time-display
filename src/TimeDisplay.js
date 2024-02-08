import React, { useState, useEffect } from 'react';
import './TimeDisplay.css';

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time-display">
      <h1>Current Time</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default TimeDisplay;
