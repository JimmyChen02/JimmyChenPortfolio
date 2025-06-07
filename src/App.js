// 1. FIRST - Install React Router (run this in your terminal):
// npm install react-router-dom

// 2. UPDATE YOUR App.js FILE - Replace the entire content with this:
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Photography from './components/Photography';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

