// Updated App.js to use HashRouter instead of BrowserRouter for GitHub Pages compatibility
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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