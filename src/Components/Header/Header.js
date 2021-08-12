import React from 'react'
import { NavLink} from 'react-router-dom'

import clasess from './Header.module.css'

function Header() {
    return (
        <>
        <header className={clasess.header}>
            <ul>
                <li> <NavLink activeClassName={clasess.active} to="/welcome">Welcome</NavLink></li>
                <li> <NavLink  activeClassName={clasess.active} to="/product">Product</NavLink></li>
            </ul>
        </header>
        </>
    )
}

export default Header;
