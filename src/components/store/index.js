import {configureStore} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

// { title: 'Test Item', quantity: 3, total: 18, price: 6 }

const initialStateCart={
    cartItems:[
        { id:1,title: 'Test Item 1', quantity: 45, total: 18, price: 6 ,},
        { id:2,title: 'Test Item 2', quantity: 3, total: 28, price: 7 },
        { id:3,title: 'Test Item 3', quantity: 50, total: 38, price: 3 }
    ],
};

const cartSlice=createSlice({
    name:'cart',
    initialState:initialStateCart,
    reducers:{

    }
});


const store=configureStore({
    reducer:cartSlice
})


export const cartActions=cartSlice.actions;


export default store;

