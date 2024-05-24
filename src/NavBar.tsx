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
        if (window.scrollY > 800) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className={`navBarContainer ${isVisible ? 'fixed' : ''}`}>
                <div className="navBar">
                    <div className="navItem" onClick={() => scrollToSection('head')}>
                        HOME
                    </div>
                    <div className="navItem" onClick={() => scrollToSection('aboutMeContent')}>
                        ABOUT ME
                    </div>
                    <div className="navItem" onClick={() => scrollToSection('contact')}>
                        CONTACT
                    </div>
                </div>
            </div>
        </div>
    );
}