import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import Home from './components/home/Home'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route exact path="/" component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
