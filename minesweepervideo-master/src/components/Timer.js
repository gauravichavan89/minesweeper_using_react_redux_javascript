import React, { useState, useEffect } from 'react';
let timeIntervalId;
export default function Timer({ gameOver, sendTime }) {
  let [time, setTime] = useState(0);
  let [sTime, setSTime] = useState(0);

  useEffect(() => {
    if (time > 0 && gameOver) {
      setSTime(time);
      setTime(0);
    }
  }, [gameOver, time]);

  useEffect(() => {
    function incrementTime() {
      setTimeout(() => {
        let newTime = time + 1;
        setTime(newTime);
      }, 1000);
    }
    timeIntervalId = setTimeout(() => {
      incrementTime();
    }, 1000);
    if (gameOver) {
      //   let updatedTime = JSON.parse(JSON.stringify(time));

      clearInterval(timeIntervalId);
    }
    incrementTime();
  }, [time, setTime, gameOver, sendTime]);

  console.log(timeIntervalId);
  return (
    <div
      style={{
        border: 'thick solid black',
        borderWidth: 'medium',
        color: 'white',
        fontSize: 18,
        background: 'darkgreen',
        width: 396,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 0
      }}
    >
      <span role='img' aria-label='clock' style={{ paddingRight: 10 }}>
        ⏰
      </span>
      {gameOver ? sTime : time}
    </div>
  );
}
