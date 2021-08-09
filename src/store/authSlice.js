import {createSlice } from '@reduxjs/toolkit';


const initialStateCounter = { counter: 20, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState:initialStateCounter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) { 
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

export default counterSlice;
