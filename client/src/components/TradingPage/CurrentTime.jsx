import React from 'react';

export default function CurrentTime() {
  const currentTime = new Date().toLocaleString().slice(-8);
  return (
    <div>{currentTime}</div>
  );
}
