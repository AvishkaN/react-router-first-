import {configureStore} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

// { title: 'Test Item', quantity: 3, total: 18, price: 6 }

const initialStateCart={
    productItems:[
        { id:1,title: 'Test Item 1',quantity:0, total:0,price: 6 , description:'This is a first product - amazing!'},
        { id:2,title: 'Test Item 2',quantity:0, total:0, price: 7 ,description:'This is a first product - amazing! 2'},
        { id:3,title: 'Test Item 3',quantity:0, total:0, price: 3 ,description:'This is a first product - amazing! 3'}
    ],
    cartItems:[
        { id:1,title: 'Test Item 1',quantity:0, total:0,price: 6 , description:'This is a first product - amazing!'},
        { id:2,title: 'Test Item 2',quantity:0, total:0, price: 7 ,description:'This is a first product - amazing! 2'},
        // { id:3,title: 'Test Item 3',quantity:0, total:0, price: 3 ,description:'This is a first product - amazing! 3'}
    ],
    // cartItems:[{id:1,title: 'Test Item 1',quantity:0, total:0,price: 6 , description:'This is a first product - amazing!'}],
    counter:0,
};

const cartSlice=createSlice({
    name:'cart',
    initialState:initialStateCart,
    reducers:{
        addCart(state,action){
            let index=state.cartItems
            .findIndex(item=>item.id===action.payload); 
            
            // if(!index && index < 0 )  index='#';
            if(index>=0 ) {
                // alredy 

                index=index;

                const {cartItems}=state;
                // const item=cartItems;
                console.log(cartItems);
                state.cartItems[index]={
                    ...state.cartItems[index],
                    quantity:state.cartItems[index].quantity+1,
                    total:state.cartItems[index].total+state.cartItems[index].price

                }

                // state.cartItems.push(state.cartItems);
                return;
            } 
             else{
            // new item
            console.log(action);
            
            // get item from product array
            let item=state.productItems
                .filter(item=>item.id===action.payload); 
            

            item=Object.assign(...item);    
            
            item={...item,
                quantity:item.quantity+1
            }

           
            // state.cartItems.push(state.cartItems[index])
            state.cartItems.push(item)
        } 
        }
    }
});


const store=configureStore({
    reducer:cartSlice
})


export const cartActions=cartSlice.actions;


export default store;

