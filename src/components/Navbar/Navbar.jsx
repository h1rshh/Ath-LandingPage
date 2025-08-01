import React, { useState } from 'react';
import logo from '../../assets/ath_logo.png';
import { Link, useNavigate } from 'react-router-dom';

const navLinks = [
  { title: 'Home', targetId: 'home' },
  { title: 'About', targetId: 'about' },
  { title: 'Features', targetId: 'features' },
  { title: 'Contact Us', targetId: 'contact' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Smooth scroll function
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on homepage, navigate to "/" and wait until mounted
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Short delay to wait for layout render
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent md:bg-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0 hidden md:block">
            <a href="#" className="text-white">
              <img src={logo} alt="ATH Company Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-baseline space-x-25">
              {navLinks.map((link) => (
                <button
                  key={link.title}
                  onClick={() => handleScroll(link.targetId)}
                  className="text-white text-base hover:text-red-500 transition-colors duration-280 font-semibold"
                >
                  {link.title}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Get Started Button */}
          <div className="hidden md:block">
            <Link to="/waitlist">
              <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden flex-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-start p-2 text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-8 w-8" viewBox="0 0 24 24" fill="none">
                  <line x1="4" y1="7" x2="20" y2="7" stroke="white" />
                  <line x1="4" y1="12" x2="20" y2="12" stroke="white" />
                  <line x1="4" y1="17" x2="20" y2="17" stroke="white" />
                </svg>
              ) : (
                <svg className="block h-8 w-8" viewBox="0 0 24 24" fill="none">
                  <line x1="6" y1="6" x2="18" y2="18" stroke="white" />
                  <line x1="6" y1="18" x2="18" y2="6" stroke="white" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ width: '80vw', maxWidth: 320, background: '#181818' }}
        id="mobile-menu"
      >
        {/* Close button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 left-4 p-2 text-white focus:outline-none"
        >
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
            <line x1="6" y1="6" x2="18" y2="18" stroke="white" />
            <line x1="6" y1="18" x2="18" y2="6" stroke="white" />
          </svg>
        </button>

        {/* Nav links */}
        <div className="px-2 pt-20 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <button
              key={link.title}
              onClick={() => handleScroll(link.targetId)}
              className="text-white hover:bg-zinc-700 block w-full text-left px-3 py-2 rounded-md text-base font-semibold"
            >
              {link.title}
            </button>
          ))}
        </div>

        {/* Get Started mobile */}
        <div className="pt-4 pb-3 px-2">
          <Link to="/waitlist">
            <button className="bg-white text-black font-medium py-1.5 px-4 rounded-full text-sm hover:bg-red-600 hover:text-white transition-all duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
