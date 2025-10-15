import React, { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <header id="main-header" className={`transition-all duration-300 ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Club Logo and Name */}
            <div className="flex-shrink-0">
              <a href="/" className="logo-container flex items-center text-xl sm:text-2xl font-black">
                <img src="/gallery/logo.png" alt="Club Logo" className="h-12 sm:h-14 mr-3 rounded-full" />
                <span className="animated-logo-text">Aeromodelling <span className="club-name-span font-light">Club</span></span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/" className="nav-link active px-3 text-sm font-medium">Home</a>
              <a href="/competition" className="nav-link px-3 text-sm font-medium">Competition</a>
              <a href="/projects" className="nav-link px-3 text-sm font-medium">Projects</a>
              <a href="/team" className="nav-link px-3 text-sm font-medium">Our Team</a>
              <a href="/alumni" className="nav-link px-3 text-sm font-medium">Our Alumni</a>
              <a href="/about" className="nav-link px-3 text-sm font-medium">About Us</a>
              <a href="/reach" className="nav-link px-3 text-sm font-medium">Reach Us</a>
            </div>

            {/* Hamburger Button (For Mobile) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white"
                aria-label="Open main menu"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* --- Mobile Menu Sidebar --- */}
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="p-5 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
             <span className="text-xl font-bold text-white">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white" aria-label="Close menu">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <a href="/" className="text-lg text-orange-500 hover:text-orange-400 transition-colors">Home</a>
            <a href="/competition" className="text-lg text-white hover:text-orange-400 transition-colors">Competition</a>
            <a href="/projects" className="text-lg text-white hover:text-orange-400 transition-colors">Projects</a>
            <a href="/team" className="text-lg text-white hover:text-orange-400 transition-colors">Our Team</a>
            <a href="/alumni" className="text-lg text-white hover:text-orange-400 transition-colors">Our Alumni</a>
            <a href="/about" className="text-lg text-white hover:text-orange-400 transition-colors">About Us</a>
            <a href="/reach" className="text-lg text-white hover:text-orange-400 transition-colors">Reach Us</a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;