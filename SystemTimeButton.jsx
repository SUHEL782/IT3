import React, { useState, useEffect } from 'react';
import './App.css';

function SystemTimeButton() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    fetchCurrentTime();
  }, []);

  const fetchCurrentTime = async () => {
    try {  /// error handle using the try catch functionality
      const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCurrentTime(data.datetime);
    } catch (error) {
      console.error('Error fetching current time:', error);
    }
  };

  const handleClick = () => {
    fetchCurrentTime();
  };

  return (
    <div className='design'>
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-custom"
      >
        Fetch Current Time
      </button>
      {currentTime && (
        <p> {new Date(currentTime).toLocaleString()}</p>
      )}
    </div>
  );
}

export default SystemTimeButton;
