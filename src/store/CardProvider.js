import {useReducer} from 'react';
import CardContext from './cart-context';


const defaultCartState={
    item:[],
    totalAmount:0,
};

const cardReducer=(state,action)=>{
    console.log(state);
    if(action.type==='ADD'){
        const updatedItems=state.item.concat(action.item);
        const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amout;
        return {
            item:updatedItems,
            totalAmount:updatedTotalAmount,
        };
    }


};


const CardProvider=props=>{
    
    const [cartState,dispachCartAction]=useReducer(cardReducer,defaultCartState);
    
    const addItemCardHandler=item=>{
        dispachCartAction({type:'ADD',item:item});
    };

    const removeItemCardHandler=id=>{
        dispachCartAction({type:'REMOVE',id:id});
    };
    
    const cardContext={
        item:cartState.item,
        totalAmount:cartState.totalAmount,
        addItem:addItemCardHandler,
        removeItem:removeItemCardHandler,
    }
   

    return(
        <CardContext.Provider value={cardContext}>
            {props.children}
        </CardContext.Provider>
    );
}


export default CardProvider;