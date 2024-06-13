import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LeftAlignedTimeline from './components/LeftAlignedTimeline';
import ContactForm from './components/ContactForm';
import topButton from './assets/top.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function App() {


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

      <div id='NavBar'>
        <NavBar />
      </div>

      <div id='AboutMe'>
        <LeftAlignedTimeline />
      </div>

      <br />
      <br />

      <div id='Contact'>
        <ContactForm />
      </div>

      <br />
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