import React from 'react';
import Currency from './Currency';
import CurrentTime from './CurrentTime';

export default function TradingPage() {
  return (
    <div>
      <CurrentTime />
      <Currency />
    </div>
  );
}
