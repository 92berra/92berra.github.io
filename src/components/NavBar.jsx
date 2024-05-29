import React, { useState, useEffect } from "react";
import './NavBar.css'

function NavBar() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 800) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToDiv = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    return (
        <div className={`NavBarEntire ${isVisible ? 'fixed' : '' }`}>
            <div className='NavBarContainer'>
                <ul className='NavBar'>
                    <li className='NavBarItem' onClick={() => scrollToDiv('Intro')}>HOME</li>
                    <li className='NavBarItem' onClick={() => scrollToDiv('AboutMe')}>ABOUT ME</li>
                    <li className='NavBarItem' onClick={() => scrollToDiv('Contact')}>CONTACT</li>
                </ul>
            </div>
            <span className='Divider' />
        </div>
    )
}

export default NavBar;
