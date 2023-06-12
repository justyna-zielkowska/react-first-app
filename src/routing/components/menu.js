import React from 'react';
import {
    NavLink,
} from "react-router-dom";
import styles from './menu.module.css';

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <NavLink to="/shop" activeClassName={styles.activeLink}>Shop</NavLink>
            <NavLink to="/contact" activeClassName={styles.activeLink}>Contact</NavLink>
        </nav>
    );
}

export default Menu;