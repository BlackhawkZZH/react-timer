import React, { useRef, useState } from 'react';
import './style.css';

export default function App() {
  const [ms, setMs] = useState(0);
  const timer = useRef();

  const enterHandeler = () => {
    const enterTs = +new Date();
    timer.current = setInterval(() => {
      const counter = +new Date();
      setMs(ms + counter - enterTs);
    });
  };

  const leaveHandeler = () => {
    clearInterval(timer.current);
  };

  return (
    <div>
      <div
        className="go-hover"
        onMouseEnter={enterHandeler}
        onMouseLeave={leaveHandeler}
      >
        Hover Here!
      </div>
      <button className="clear-btn" onClick={() => setMs(0)}>
        clear
      </button>
      <div>Time: {ms} ms</div>
    </div>
  );
}
