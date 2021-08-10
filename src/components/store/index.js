import {configureStore} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';


const initialStateCart={
    productItems:[
        { id:1,title: 'Test Item 1',quantity:0, total:0,price: 6 , description:'This is a first product - amazing!'},
        { id:2,title: 'Test Item 2',quantity:0, total:0, price: 7 ,description:'This is a first product - amazing! 2'},
        { id:3,title: 'Test Item 3',quantity:0, total:0, price: 3 ,description:'This is a first product - amazing! 3'}
    ],
    cartItems:[
        // { id:1,title: 'Test Item 1',quantity:0, total:0,price: 6 , description:'This is a first product - amazing!'},
        // { id:2,title: 'Test Item 2',quantity:0, total:0, price: 7 ,description:'This is a first product - amazing! 2'},
    ],
    totalCartItems:0,
    openCartWindow:false,
    fetchStatus:{
        status:'',
        title:'',
        message:'',
    }
};

const cartSlice=createSlice({
    name:'cart',
    initialState:initialStateCart,
    reducers:{
        //1
        addCart(state,action){
            
            // check item alredy exisisting
            let index=state.cartItems
              .findIndex(item=>item.id===action.payload); 
                
                // increase total cart items
                state.totalCartItems++;

                // alredy existing item
                if(index>=0 ) {
                    let tergetItem=state.cartItems[index];
                    state.cartItems[index]={
                        ...tergetItem,
                        quantity:tergetItem.quantity+1,
                        total:tergetItem.total+tergetItem.price

                    }
                    return;
                } 
                
                // new item
                else{
                    //get item by id
                    let item=state.productItems
                        .filter(item=>item.id===action.payload); 
                    
                    // create item object    
                    item=Object.assign(...item);    
                    item={...item,
                        quantity:item.quantity+1,
                        total:item.total+item.price
                    }
                    // add to new item
                    state.cartItems.push(item)
            } 
            },
        showCart(state,action){
            state.openCartWindow=!state.openCartWindow;
        },
        //2   
        changeFetchStatus(state,action){
            state.fetchStatus=action.payload;
        }
    }
});


const store=configureStore({
    reducer:cartSlice
})


export const cartActions=cartSlice.actions;


export default store;

