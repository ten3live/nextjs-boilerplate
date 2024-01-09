'use client'
import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand/Logo */}
        <a href="#" className="text-white text-lg font-semibold">Your Brand</a>

        {/* Responsive Navigation Menu (Hamburger) */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`hidden lg:flex space-x-4 ${mobileMenuOpen ? 'lg:hidden' : ''}`}>
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">Contact</a>
        </div>
      </div>

      {/* Responsive Navigation Menu (Hidden on large screens) */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-gray-800 text-white p-4`}>
        <a href="#" className="block mb-2">Home</a>
        <a href="#" className="block mb-2">About</a>
        <a href="#" className="block mb-2">Services</a>
        <a href="#" className="block">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
