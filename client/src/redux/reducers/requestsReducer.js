import { createSlice } from '@reduxjs/toolkit';

export const requestsSlice = createSlice({
  name: 'requests',
  initialState: [],
  reducers: {
    setRequests: (state, action) => action.payload,
    addRequest: (state, action) => [...state, action.payload],
  },
});

export const { setRequests, addRequest } = requestsSlice.actions;

export default requestsSlice.reducer;
