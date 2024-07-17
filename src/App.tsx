import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/1_NavBar';
import LeftAlignedTimeline from './components/2_LeftAlignedTimeline';
import Portfolio from './components/3_Portfolio';
import ContactForm from './components/4_Contact';
import topButton from './assets/top.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



export default function App() {

  const generateStars = (numStars: number): JSX.Element[] => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      const style = {
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        animationDelay: `${Math.random() * 3}s`,
      };
      stars.push(
      <div key={i} className="shooting-star" style={style}></div>);
    }
    return stars;
  };

  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setStars(generateStars(80));
  }, []);

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
          <h1>
            Hello, I'm <span style={{ color: '#D9418C' }}>Berra. </span><br />
            I'm a software developer.
          </h1>
          {stars}
        </header>
      </div>

      <div id='NavBar'>
        <NavBar />
      </div>

      <div id='AboutMe' style={{backgroundColor:'#EAEAEA'}}>
        <br />
        <LeftAlignedTimeline />
        <br/>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div id='Portfolio'>
        <Portfolio />
      </div>

      <br />
      <br />
      
      <div id='Contact' style={{backgroundColor:'#FFD9EC'}}>
        <br />
        <br />
        <ContactForm />
      </div>

      <div className='TopButton' style={{backgroundColor:'#EAEAEA'}}>
          <img className='TopButton' src={topButton} alt='Top' onClick={scrollTop} width={40}  />
        <br/>      
      </div>
      <div className='Footer' style={{backgroundColor:'#F6F6F6'}}>
        Berra Oh ©2024
      </div>
    </div>
  );
}