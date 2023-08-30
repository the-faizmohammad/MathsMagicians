import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/Calculator.css';
import Calculator from './components/Calculator';
import Quote from './Api/Quote';
import Navbar from './spa/navbar';
import Home from './spa/home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
