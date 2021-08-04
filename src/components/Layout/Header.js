import React from 'react'
import MealsImage from '../../assets/meals.jpg';
import HeaderButton from '../../components/Layout/HeaderCardButton';
import Classes from './Header.module.css';

function Header(props) {
    return (
        <>
            <header className={Classes['header']}>
                <h1>Real Meal</h1>
                <HeaderButton ShowCart={props.onClick}/>
            </header>
            <div className={Classes['main-image']}>
                <img src={MealsImage} alt="A table full of delicious food" />
            </div>
        </>
    )
}

export default Header;
