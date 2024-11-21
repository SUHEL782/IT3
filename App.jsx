import React from 'react';
import SystemTimeButton from './SystemTimeButton';
import CountdownTimer from './CountdownTimer';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>Current Time</h1>
      <SystemTimeButton />
      <h1>Countdown Timer App</h1>
      <CountdownTimer />
    </div>
  );
}

export default App;
