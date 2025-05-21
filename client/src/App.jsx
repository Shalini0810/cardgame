import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './components/Game';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Card Game</h1>
        <div className="game-container">
          <Routes>
            <Route path="/" element={<Game />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;