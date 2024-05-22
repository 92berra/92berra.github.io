
import React from "react";
import { NavLink } from "react-router-dom";
import styles from './styles.module.css'; // Make sure to create this CSS module

export function NavBar() {
    return (
        <div className={styles.navBar}>
            <NavLink to="/" className={styles.navLink}>HOME</NavLink>
            <NavLink to="/about" className={styles.navLink}>ABOUT ME</NavLink>
            <NavLink to="/contact" className={styles.navLink}>CONTACT</NavLink>
        </div>
    );
}