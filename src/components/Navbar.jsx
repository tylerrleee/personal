import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav
    className="text-gray-900 p-4 flex items-center justify-between w-full fixed top-0 left-0 right-0 z-50 shadow-md"
    style={{ backgroundColor: '#FFF6BA' }}
  >
    <Link to="/" className="text-xl font-bold text-blue-600 hover:text-blue-200 transition">
      Tyler Le
    </Link>
    <div className="space-x-6">
      <Link to="/about" className="text-blue-600 hover:text-blue-200 transition font-bold">ABOUT</Link>
      <Link to="/portfolio" className="text-blue-600 hover:text-blue-200 transition font-bold">PROJECTS</Link>
      <Link to="/leadership" className="text-blue-600 hover:text-blue-200 transition font-bold">LEADING</Link>
      <Link to="/contact" className="text-blue-600 hover:text-blue-200 transition font-bold">CONTACT</Link>
    </div>
  </nav>
);
export default Navbar;