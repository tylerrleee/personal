import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav
    className="bg-gradient-to-b from-slate-900 to-slate-800 text-slate-50 p-4 flex items-center justify-between w-full fixed top-0 left-0 right-0 z-50 shadow-md"
  >
    <Link to="/" className="text-xl font-semibold text-white hover:text-blue-600 transition">
      Tyler Le
    </Link>
    <div className="space-x-6 ">
      <Link to="/about" className=" text-white hover:text-blue-600 transition font-semibold">ABOUT</Link>
      <Link to="/portfolio" className=" text-white hover:text-blue-600 transition font-semibold">PROJECTS</Link>
      <Link to="/leadership" className=" text-white hover:text-blue-600 transition font-semibold">EXPERIENCE</Link>
      <Link to="/contact"className=" text-white hover:text-blue-600 transition font-semibold">CONTACT</Link>
    </div>
  </nav>
);
export default Navbar;