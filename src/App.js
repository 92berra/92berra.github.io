import React, { useState } from 'react';
import './App.css';
import Thesis from './Components/Thesis';
import Selfstudy from './Components/Selfstudy';
import Exercise from './Components/Exercise';

function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'thesis':
        return <Thesis />;
      case 'selfstudy':
        return <Selfstudy />;
      case 'exercise':
        return <Exercise />;
      default:
        return <Thesis />;
    }
  }

  return (
    <div className="App">
      <div>
        <header className="App-header-title">
          <p>
            Berra's Portfolio
          </p>
        </header>
      </div>
      
      <div>
        <nav className="App-navbar">
          <span className="App-navbar-item" onClick={() => setCurrentPage('thesis')}>Thesis</span>
          <span className="App-navbar-item" onClick={() => setCurrentPage('selfstudy')}>Self-study</span>
          <span className="App-navbar-item" onClick={() => setCurrentPage('exercise')}>Exercise</span>
        </nav>
      </div>

      <div>
        {renderPage()}
      </div>
      
    </div>
  );
}

export default App;
