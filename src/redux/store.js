import { configureStore } from '@reduxjs/toolkit';
import primaryColorReducer from './primaryColorSlice';

const store = configureStore({
  reducer: {
    primaryColor: primaryColorReducer,
  },
});

export default store;
