// import {createStore} from 'redux';
import {createSlice,configureStore} from '@reduxjs/toolkit';

const initialState={
    counter:0,
    showCounter:true,
};


const counterSlice=createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        decrerment(state){state.counter--},
        increment (state) {state.counter++},
        // increase (state) {state.counter+10},
        togglecounter(state) {state.showCounter=!state.showCounter},
    }
});

export const countrerActions=counterSlice.actions; 

const store=configureStore({
    counter:counterSlice.reducers
});

console.log(countrerActions);


export default store;




