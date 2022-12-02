import React from 'react';

export default function ArchivePage() {
  const request = {
    side: 'SELL', price: '1.75', instrument: 'USD/CAN_TOM', volume: '7590', timestamp: new Date(),
  };
  return (
    <>
      <div>table</div>
      <div>{request}</div>
    </>
  );
}
