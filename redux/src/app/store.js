import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import multiplierReducer from '../features/multiplier/multiplierSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    multiplier: multiplierReducer,
  },
});
