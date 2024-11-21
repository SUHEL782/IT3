import React, { useState, useEffect } from 'react';
import './App.css';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(100);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (timerRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerRunning]);

  const startTimer = () => {
    setTimerRunning(true);
    setTimeLeft(100);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  return (
    <div className="countdown-timer">
      <h2>Countdown Timer</h2>
      <p>Time left: {timeLeft}</p>
      <button onClick={startTimer} disabled={timerRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!timerRunning}>
        Stop
      </button>
    </div>
  );
}

export default CountdownTimer;
