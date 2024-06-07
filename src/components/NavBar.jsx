import React, { useState, useEffect } from "react";
import './NavBar.css'

function NavBar() {

    const [isVisible, setIsVisible] = useState(false);
    const [navState, setNavState] = useState({
        hoverIndex: null,
        activeIndex: null,
    });

    const handleMouseEnter = (index) => {
        setNavState({ ...navState, hoverIndex: index });
    };
    
    const handleMouseLeave = () => {
        setNavState({ ...navState, hoverIndex: null });
    };
    
    const handleClick = (index, section) => {
        setNavState({ ...navState, activeIndex: index });
        scrollToDiv(section);
    };

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
                <li
          className={`NavBarItem ${
            navState.hoverIndex === 0 ? 'hover' : ''
          } ${navState.activeIndex === 0 ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(0, 'Intro')}
        >
          HOME
        </li>
        <li
          className={`NavBarItem ${
            navState.hoverIndex === 1 ? 'hover' : ''
          } ${navState.activeIndex === 1 ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(1, 'AboutMe')}
        >
          ABOUT ME
        </li>
        <li
          className={`NavBarItem ${
            navState.hoverIndex === 2 ? 'hover' : ''
          } ${navState.activeIndex === 2 ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(2, 'Contact')}
        >
          CONTACT
        </li>
                </ul>
            </div>
            <span className='Divider' />
        </div>
    )
}

export default NavBar;
