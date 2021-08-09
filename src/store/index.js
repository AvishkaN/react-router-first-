import { createSlice, configureStore } from '@reduxjs/toolkit';

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

const initialAuthState={
    isAuthenticated:false,
};

const authSlice=createSlice({
    name:'authentiacation',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated=true;
        },
        logout(state){
            state.isAuthenticated=false;                
        }
    }
});


const store = configureStore({
  reducer: {counter:counterSlice.reducer,auth:authSlice.reducer} //state
});

export const counterActions = counterSlice.actions; // functions
export const authActions = authSlice.actions;       // functions

export default store;