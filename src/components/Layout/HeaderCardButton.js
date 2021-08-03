import React from 'react';
import clasess from './HeaderCardButton.module.css';
import CardIcon from '../Cart/CartIcon';

function HeaderCardButton() {
    return (
        <button className={clasess.button}>
            <span className={clasess.icon}>
                <CardIcon/>
            </span>
            <span>Your Cart</span>
            <span className={clasess.badge}>3</span>
        </button>
    )
}

export default HeaderCardButton
