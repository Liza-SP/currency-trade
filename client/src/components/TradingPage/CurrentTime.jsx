import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

export default function CurrentTime() {
  // const currentTime = new Date().toLocaleString().slice(-8);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString().slice(-8));

  function refreshClock() {
    setCurrentTime(new Date().toLocaleString().slice(-8));
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={`${styles.center} ${styles.time}`}>{currentTime}</div>
  );
}
