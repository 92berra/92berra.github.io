import React, { useState, useEffect } from 'react';
import './App.css';
import LeftAlignedTimeline from './components/LeftAlignedTimeline';
import ContactForm from './components/ContactForm';
import topButton from './assets/top.png';

export default function App() {

  // 상태 추가
  const [isActive, setIsActive] = useState(false);
  // active 클래스 추가
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  // active 클래스를 제거하는 정리 함수
  const removeActive = () => {
    setIsActive(false)
  }

  const scrollToDiv = (id: string) => {
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
      <div id='Intro' className='Intro'>
        <header className='App-header'>
          <h1>Hello, I'm <span style={{ color: '#D9418C' }}>Berra. </span><br />
            I'm a software developer.</h1>
        </header>
      </div>

      <div className='NavBarEntire'>
        <div className='NavBarContainer'>
          <ul className='NavBar'>
            <li className="NavBarItem" onClick={() => scrollToDiv('Intro')}>HOME</li>
            <li className="NavBarItem" onClick={() => scrollToDiv('AboutMe')}>ABOUT ME</li>
            <li className="NavBarItem" onClick={() => scrollToDiv('Contact')}>CONTACT</li>
          </ul>
        </div>
        <span className='Divider' />
      </div>

      <div id='AboutMe'>
        <h1 className='ContentHeader'>All My Experiences</h1>
        <LeftAlignedTimeline />
      </div>

      <br />
      <br />

      <div id='Contact'>
      <h1 className='ContentHeader'>Contact</h1>
        <ContactForm />
      </div>

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
