import React,{useContext} from 'react';
import clasess from './HeaderCardButton.module.css';
import CardIcon from '../Cart/CartIcon';
import CardContext from '../../store/cart-context';

function HeaderCardButton(props) {

    const cartCtx=useContext(CardContext);
    
    console.log(cartCtx);

    const numberOfCartItems=cartCtx.item.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0);
    
    console.log(numberOfCartItems);



    return (
        <button className={clasess.button} onClick={props.ShowCart}>
            <span className={clasess.icon}>
                <CardIcon/>
            </span>
            <span>Your Cart</span>
            <span className={clasess.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCardButton
