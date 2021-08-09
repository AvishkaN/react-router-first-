import {configureStore } from '@reduxjs/toolkit';

import counterSlice  from './authSlice';
import authSlice  from './counterslice';




const store = configureStore({
  reducer: {counter:counterSlice.reducer,auth:authSlice.reducer} //state
});

export const counterActions = counterSlice.actions; // functions
export const authActions = authSlice.actions;       // functions

export default store;