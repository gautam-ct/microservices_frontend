import React from 'react';
import { useState } from 'react';

import Style from './style.css';


import AppFromMF1 from 'mf1/App';

import AppFromMF2 from 'mf2/App';

const App = () => {

  const [countCompleted, setCountCompleted] = useState(0);
  const [countIncompleted, setCountIncompleted] = useState(0);
  const [showResults, setShowResults] = useState(false);

  return (
    
<div className="container">
  {/* Header */}
  <header className="header">
    <h1>TO-DO</h1>
  </header>

  {/* Main Layout */}
  <div className="layout">
    {/* Left Sidebar Navigation */}
    <nav className="sidebar">
      <ul>
        <li><a href="#mf1">Microfrontend 1</a></li>
        <li><a href="#mf2">Microfrontend 2</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>

    {/* Main Content */}
    <main className="content">
      <AppFromMF1
        countCompleted={countCompleted}
        setCountCompleted={setCountCompleted}
        countIncompleted={countIncompleted}
        setCountIncompleted={setCountIncompleted}
        showResults={showResults}
        setShowResults={setShowResults}
      />
      <AppFromMF2
        countCompleted={countCompleted}
        countIncompleted={countIncompleted}
        showResults={showResults}
      />
    </main>
  </div>
</div>

  

    
  );
};

export default App;