import React from 'react'
import styled from 'styled-components'
import Model from '../UI/Model'

import classes from './Cart.module.css';

const details=[
    { id: 'c1', name: 'qwerty', amount: 2, price: 12.99 },
    { id: 'c2', name: 'Cafie', amount: 2, price: 75.99 },
    { id: 'c3', name: 'hell', amount: 2, price: 42.99 },
]


function Cart(props) {


    return (
        <Model>
        <DIV >
            <ul className={classes['cart-items']}>
                {details.map(item=><li key={item.id}>{item.name}</li>)}
            </ul>
        <div className={classes['total']}>
            <span>Total Amount</span>    
            <span>35.62</span>    
        </div>  
        <div className={classes['actions']}>
            <button className={classes['button--alt']} onClick={props.onClick}>Close</button>
            <button className={classes['button']}>Order</button>
        </div>  
        </DIV>
         </Model>
    )
}



const DIV=styled.div`
    &.cart-items {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    &.cart-items{

        background-color: red;
    }
    &.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
}

&.actions {
  text-align: right;
}

&.actions button {
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
}

&.actions button:hover,
&.actions button:active {
  background-color: #5a1a01;
  border-color: #5a1a01;
  color: white;
}

&.actions .button--alt {
  color: #8a2b06;
}

&.actions .button {
  background-color: #8a2b06;
  color: white;
}

`;







export default Cart;
