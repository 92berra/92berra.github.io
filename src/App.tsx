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
      <div key={i} className="shooting-star" style={style}>
      </div>);
    }
    return stars;
  };

  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setStars(generateStars(80)); // 원하는 별똥별 개수를 설정
  }, []);

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id='All-Container'>
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

      <br />

      <div id='AboutMe'>
        <LeftAlignedTimeline />
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