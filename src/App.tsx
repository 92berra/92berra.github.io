import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import styles from './styles.module.css'
import { NavBar } from './NavBar'
import LeftAlignedTimeline from './components/LeftAlignedTimeline'
import ContactForm from './components/ContactForm'
import topButton from './assets/top.png'

export default function App() {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#FFFFFF',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#FFFFFF' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#D5D5D5' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#000000' },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Hello, This is', 'Berra.', 'I am a','Software Developer.']), 2000))
    ref.current.push(setTimeout(() => set(['Berra.','Software Developer.']), 5000))
    ref.current.push(setTimeout(() => set(['Hello, This is', 'Berra.', 'I am a','Software Developer.']), 8000))
  }, [])

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    reset()
    return () => {
      ref.current.forEach(clearTimeout)    }
  }, [])

  
  return (
    <div>

      <div id="head" className="App">
        <div className='App-header'>
          <div className={styles.outerContainer}>
            <div className={styles.container}>
              <div className={styles.main}>
                {transitions(({ innerHeight, ...rest }, item) => (
                  <animated.div className={styles.transitionsItem} style={rest} onClick={reset}>
                    <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                  </animated.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="navBarContainer">
        <NavBar />
      </div>

      {/* About Me*/}
      <div id="aboutme">
        <h1 className={styles.contentHeader}>All My Experiences</h1>
        <LeftAlignedTimeline />
      </div>

      <br/>

      <div id="contact" className={styles.contact}>
        <h1 className={styles.contentHeader}>CONTACT</h1>
        <ContactForm />
        <div className={styles.contentHeader}>
          ⚒️ This function is not completed, just in progress... ⚒️
        </div>
      </div>

      <br/>
      <br/>

      <div className={styles.topButtonArea}>
        <img className={styles.topButton} src={topButton} alt="Top" onClick={scrollTop} width={40}/>
      </div>

      <div className={styles.footer}>
        Berra Oh ©2024
      </div>
        
    </div>
  )
}
