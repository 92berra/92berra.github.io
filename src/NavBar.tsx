import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LeftAlignedTimeline from "./components/LeftAlignedTimeline";
import styles from './styles.module.css'; // Make sure to create this CSS module

export function NavBar() {
    const [showTimeline, setShowTimeline] = useState(false);

    const handleAboutClick = () => {
        setShowTimeline(!showTimeline);
    }
    return (
        <div>
            <div className={styles.navBar}>
                <div className={styles.navItem}>HOME</div>
                <div className={styles.navItem} onClick={handleAboutClick}>ABOUT ME</div>
                <div className={styles.navItem}>CONTACT</div>
            </div>
            {showTimeline && <LeftAlignedTimeline />}
        </div>
    );
}