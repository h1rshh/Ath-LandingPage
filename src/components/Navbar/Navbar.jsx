import React, { useState } from 'react';
import logo from '../../assets/ath_logo.png';

const navLinks = [
  { title: 'Demo', href: '#' },
  { title: 'Features', href: '#' },
  { title: 'FAQ', href: '#' },
  { title: 'Contact Us', href: '#' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // The `nav` element is semantic HTML for navigation.
    // `sticky top-0 z-50`: This makes the navbar stick to the top of the viewport.
    // `z-50` ensures it renders on top of other content.
    // BACKGROUND COLOR CHANGED TO #333333
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent md:bg-[#333333]">
      {/* --- Best Practice: Consistent Container --- */}
      {/* We use a container to set a max-width and center the content. This prevents */}
      {/* the UI from looking stretched on very wide screens. `px-4` provides padding on mobile. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* 1. Logo Section (hidden on mobile, visible on md+) */}
          <div className="flex-shrink-0 hidden md:block">
            <a href="#" className="text-white">
              <img src={logo} alt="ATH Company Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* 2. Desktop Navigation Links */}
          {/* `hidden md:flex`: The links are hidden by default and become visible on medium screens and up. */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-baseline space-x-25">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  // `transition-colors` makes the hover effect smooth.
                  // `hover:text-red-500` applies the red color on hover.
                  className="text-white text-xl hover:text-red-500 transition-colors duration-280 font-bold"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* 3. Desktop "Get Started" Button */}
          <div className="hidden md:block">
            {/* --- MODIFICATION --- Changed rounded-lg to rounded-full and adjusted padding */}
            <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* 4. Mobile Menu Button (Hamburger) - left aligned, only visible on mobile */}
          <div className="flex md:hidden flex-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-start p-2 text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon: only three lines, changes to X when open */}
              {!isMenuOpen ? (
                <svg className="block h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="7" x2="20" y2="7" stroke="white" />
                  <line x1="4" y1="12" x2="20" y2="12" stroke="white" />
                  <line x1="4" y1="17" x2="20" y2="17" stroke="white" />
                </svg>
              ) : (
                <svg className="block h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="6" y1="6" x2="18" y2="18" stroke="white" />
                  <line x1="6" y1="18" x2="18" y2="6" stroke="white" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      {/* This section is conditionally displayed based on the `isMenuOpen` state. */}
      {/* The `md:hidden` class ensures it never shows up on desktop. */}
      {/* Slide-in mobile menu from left */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ width: '80vw', maxWidth: 320, background: '#181818', boxShadow: isMenuOpen ? '2px 0 8px rgba(0,0,0,0.15)' : 'none' }}
        id="mobile-menu"
      >
        {/* Close button at top left inside menu */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 left-4 p-2 text-white focus:outline-none"
          aria-label="Close menu"
        >
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="6" x2="18" y2="18" stroke="white" />
            <line x1="6" y1="18" x2="18" y2="6" stroke="white" />
          </svg>
        </button>
        <div className="px-2 pt-20 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-white hover:bg-zinc-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="pt-4 pb-3 px-2">
          <button className="w-full bg-white text-black font-semibold py-2 px-5 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
