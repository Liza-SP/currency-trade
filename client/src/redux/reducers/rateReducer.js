import { createSlice } from '@reduxjs/toolkit';

export const rateSlice = createSlice({
  name: 'rate',
  initialState: {
    'USD/CAD_TOM': { sell: '1.756', buy: '1.832' },
    'USD/RUB_TOM': { sell: '75.65', buy: '78.13' },
    'GBP/USD_SPOT': { sell: '1.23', buy: '1.32' },
  },
  reducers: {
    setNewRate: () => ({
      'USD/CAD_TOM': { sell: String(((Math.random() * 2)).toFixed(3)), buy: String(((Math.random() * 2)).toFixed(3)) },
      'USD/RUB_TOM': { sell: String(((Math.random() * 80) + 70).toFixed(2)), buy: String(((Math.random() * 80) + 70).toFixed(2)) },
      'GBP/USD_SPOT': { sell: String(((Math.random() * 2)).toFixed(2)), buy: String(((Math.random() * 2)).toFixed(2)) },
    }),
  },
});

export const { setNewRate } = rateSlice.actions;

export default rateSlice.reducer;
