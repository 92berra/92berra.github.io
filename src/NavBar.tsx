import React, { useState, useEffect } from "react";
import './NavBar.css';

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
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offset = 70;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            })
        }
    };

    return (
        <div>
            <div className={`navBarContainer ${isVisible ? 'fixed' : ''}`}>
                <div className="navBar">
                    <div className="navItem" onClick={() => scrollToSection('head')}>
                        HOME
                    </div>
                    <div className="navItem" onClick={() => scrollToSection('aboutme')}>
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