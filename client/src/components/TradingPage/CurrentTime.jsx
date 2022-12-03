import React from 'react';
import styles from './index.module.css';

export default function CurrentTime() {
  const currentTime = new Date().toLocaleString().slice(-8);
  return (
    <div className={`${styles.center} ${styles.time}`}>{currentTime}</div>
  );
}
