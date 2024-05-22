import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import './styles/style.css';

import Exchange from './pages/Exchange' 
import Wallets from './pages/Wallets'
import RoqquHub from './pages/RoqquHub'

function App() {

  return (
    <Router>
      <>
        <Routes>
            <Route path="/" element={<Exchange />} />
            <Route path="/wallets" element={<Wallets />} />
            <Route path="/roqqu-hub" element={<RoqquHub />} />
          </Routes>
      </>
    </Router>
  );
}

export default App;
