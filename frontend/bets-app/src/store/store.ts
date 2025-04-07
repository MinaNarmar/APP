import { configureStore } from '@reduxjs/toolkit';
import betsReducer from './betsSlice';

const store = configureStore({
  reducer: {
    bets: betsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;