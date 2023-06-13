import React from 'react';
import {
    NavLink,
} from "react-router-dom";
import styles from './menu.module.css';

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <NavLink to="/FilmsLibrary" activeClassName={styles.activeLink}>Film Library</NavLink>
            
        </nav>
    );
}

export default Menu;