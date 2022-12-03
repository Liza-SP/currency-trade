/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const currencynSlice = createSlice({
  name: 'currency',
  initialState: 'Choose currency',
  reducers: {
    setCurrency: (state, action) => action.payload,
  },
});

export const { setCurrency } = currencynSlice.actions;

export default currencynSlice.reducer;
