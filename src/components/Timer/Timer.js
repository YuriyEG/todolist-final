import React, { useState } from 'react';

import './Timer.css';
import formatSeconds from '../formatSeconds';

const Timer = () => {
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState(false);
  const [full, setFull] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const [pause, setPause] = useState(false);
  const [timerInfo, setTimerInfo] = useState('');
  const [start, setStart] = useState(0);

  let buttonClass = 'timer_button';
  if (!pause) {
    buttonClass += ' timer_button-play';
  } else {
    buttonClass += ' timer_button-pause';
  }

  const tick = () => {
    setCount((count) => count + 1);
  };

  const toggleTimer = (e) => {
    console.log(e.target.id === 'button');
    if (!pause) {
      setPause((pause) => !pause);
      const id = setInterval(tick, 1000);
      setTimerId(id);
      console.log(id);
    } else {
      setPause((pause) => !pause);
      clearInterval(timerId);
    }
  };

  return (
    <div className="timer">
      <button className={buttonClass} id="button" onClick={toggleTimer}></button>
      <span className="timer_info">{formatSeconds(count)}</span>
    </div>
  );
};

export default Timer;
