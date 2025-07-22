import React, { useState } from 'react';

// --- Best Practice: Asset Management ---
// We import the logo directly into the component. This allows Vite to bundle the image
// and handle it efficiently. If the image path ever changes, you only need to update it here.
import logo from '../../assets/ath_logo.png';


// --- Best Practice: Data-Driven UI ---
// Navigation links are stored in an array of objects. This is highly maintainable.
// To add, remove, or reorder a link, you just modify this array.
// You don't have to touch the JSX, which reduces the risk of breaking the layout.
const navLinks = [
  { title: 'Demo', href: '#' },
  { title: 'Features', href: '#' },
  { title: 'FAQ', href: '#' },
  { title: 'Contact Us', href: '#' },
];

function Navbar() {
  // --- State Management for Responsiveness ---
  // We use the `useState` hook to manage the open/closed state of the mobile menu.
  // This is a fundamental concept in React for handling component-level state.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // The `nav` element is semantic HTML for navigation.
    // `sticky top-0 z-50`: This makes the navbar stick to the top of the viewport.
    // `z-50` ensures it renders on top of other content.
    // BACKGROUND COLOR CHANGED TO #333333
    <nav className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: '#333333' }}>
      {/* --- Best Practice: Consistent Container --- */}
      {/* We use a container to set a max-width and center the content. This prevents */}
      {/* the UI from looking stretched on very wide screens. `px-4` provides padding on mobile. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* 1. Logo Section */}
          <div className="flex-shrink-0">
            <a href="#" className="text-white">
              {/* --- Using the imported image --- */}
              <img src={logo} alt="ATH Company Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* 2. Desktop Navigation Links */}
          {/* `hidden md:flex`: The links are hidden by default and become visible on medium screens and up. */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  // `transition-colors` makes the hover effect smooth.
                  // `hover:text-red-500` applies the red color on hover.
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300 font-bold"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* 3. Desktop "Get Started" Button */}
          <div className="hidden md:block">
            <button className="bg-white text-black font-semibold py-2 px-5 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* 4. Mobile Menu Button (Hamburger) */}
          {/* `md:hidden`: This button is only visible on screens smaller than `md`. */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-zinc-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Conditional rendering for the icon: hamburger or 'X' */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      {/* This section is conditionally displayed based on the `isMenuOpen` state. */}
      {/* The `md:hidden` class ensures it never shows up on desktop. */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-300 hover:bg-zinc-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
              >
                {link.title}
              </a>
            ))}
          </div>
          {/* We also include the "Get Started" button in the mobile menu for consistency. */}
          <div className="pt-4 pb-3 px-2">
             <button className="w-full bg-white text-black font-semibold py-2 px-5 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 font-semibold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;