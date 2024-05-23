import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LeftAlignedTimeline from "./components/LeftAlignedTimeline";
import './NavBar.css'; // Make sure to create this CSS module

export function NavBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    return (
        <div>
            <div className="navBarContainer" style={
                isVisible === true ? {visibility: 'visible'}
                : {visibility: 'hidden'}
            }>
                <div className="navBar">
                    <div className="navItem">
                        HOME
                    </div>
                    <div className="navItem">
                        ABOUT ME
                    </div>
                    <div className="navItem">
                        CONTACT
                    </div>
                </div>
            </div>
        </div>
    );
}