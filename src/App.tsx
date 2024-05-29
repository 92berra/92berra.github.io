import React, { useState, useEffect } from 'react';
import './App.css';
import LeftAlignedTimeline from './components/LeftAlignedTimeline';
import ContactForm from './components/ContactForm';
import topButton from './assets/top.png';

export default function App() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <section id='Intro' className='Intro'>
        <header className='App-header'>
          <h1>Hello, I'm <span style={{ color: '#D9418C' }}>Berra. </span><br />
            I'm a software developer.</h1>
        </header>
      </section>

      <div className='NavBarEntire'>
        <div className='NavBarContainer'>
          <ul className='NavBar'>
            <li className="NavBarItem" onClick={() => scrollToSection('Intro')}>HOME</li>
            <li className="NavBarItem" onClick={() => scrollToSection('AboutMe')}>ABOUT ME</li>
            <li className="NavBarItem" onClick={() => scrollToSection('Contact')}>CONTACT</li>
          </ul>
        </div>
        <span className='Divider' />
      </div>

      <section id='AboutMe'>
        <LeftAlignedTimeline />
      </section>

      <section id='Contact'>
        <ContactForm />
      </section>

      <br />

      <div className='TopButton'>
        <img className='TopButton' src={topButton} alt='Top' onClick={scrollTop} width={40} />
      </div>

      <div className='Footer'>
        Berra Oh ©2024
      </div>
    </div>
  );
}
