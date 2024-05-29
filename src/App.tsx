import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import './App.css';
import { NavBar } from './NavBar'
import LeftAlignedTimeline from './components/LeftAlignedTimeline'
import ContactForm from './components/ContactForm'
import topButton from './assets/top.png'

export default function App() {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  
  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>

      <div id="head" className="App">
        <header className='App-header'>
          <h1>Hello, I'm <span style={{color: '#D9418C' }}>Berra. </span><br/>
          I'm a software developer.</h1>
        </header>
      </div>

      <div id="navBarContainer">
        <NavBar />
      </div>

      <div id="aboutme">
        <LeftAlignedTimeline />
      </div>

      <br/>

      <div className="topButtonArea">
        <img className="topButton" src={topButton} alt="Top" onClick={scrollTop} width={40}/>
      </div>

      <div className="footer">
        Berra Oh ©2024
      </div>
        
    </div>
  )
}