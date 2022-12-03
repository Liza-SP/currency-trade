import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './reducers/currencyReducer';
import rateReducer from './reducers/rateReducer';
import requestsReducer from './reducers/requestsReducer';

export default configureStore({
  reducer: {
    requests: requestsReducer,
    currency: currencyReducer,
    rate: rateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
