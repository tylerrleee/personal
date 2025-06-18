import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';          // ← from pages
import About from './pages/About';        // ← from pages
import Portfolio from './pages/Portfolio';// ← from pages
import Contact from './pages/Contact';    // ← from pages
import Leadership from './pages/Leadership';
import './App.css';
import './index.css'; // Ensure you have this import for Tailwind CSS

function App() {
  return (
    
    <Router basename="/personal">
      <div className="min-h-screen w-full top-0 left-0 z-50 shadow-md bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/leadership" element={<Leadership />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
