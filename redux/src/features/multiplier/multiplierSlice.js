import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1
};

export const multiplierSlice = createSlice({
  name: 'multiplier',
  initialState,
  reducers: {
    multiply: (state, action) => {
      return {...state, value: state.value * action.payload}
    },
    divide: (state, action) => {
      return {...state, value: state.value / action.payload }
    }
  }
});

export const { multiply, divide } = multiplierSlice.actions;

export const selectMultiple = (state) => state.multiplier.value;

export default multiplierSlice.reducer;
