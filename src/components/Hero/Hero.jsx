import React from 'react';

// --- Best Practice: Asset Management ---
// Importing the image asset directly. Vite will handle the bundling and optimization.
import ballImage from '/src/assets/ball.png';

function Hero() {
  return (
    // --- UPDATED: Using absolute positioning for the image ---
    // `relative` creates a positioning context for the image.
    // `overflow-hidden` is crucial for clipping the image that goes outside the boundary.
    <section className="bg-[#1a1a1a] relative overflow-hidden">

      {/* This container holds the text content, keeping it centered and readable. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The min-height ensures the section has enough space vertically. 
            The flex container holds the text column on the left.
        */}
        <div className="flex flex-row items-center ml-4 min-h-[50vh] lg:min-h-[90vh] py-0 sm:py-4">
          {/* Text Column: Takes up half the width on large screens, 60% on mobile. */}
          <div className="w-3/5 lg:w-1/2 text-left">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-6xl font-extrabold text-white tracking-tight">
              From <span className="text-[#c80505]">Field</span> to <span className="text-[#c80505]">Future</span>
            </h1>
            <h2 className="mt-2 text-xs sm:text-base md:text-lg lg:text-4xl font-extrabold text-gray-300">
              Let Athlyn take you there
            </h2>
          </div>
          {/* Ball Image: Show on right for all screens, size for mobile, absolute for lg+ */}
          <div className="w-2/5 flex justify-end items-center lg:hidden overflow-visible">
            <img
              src={ballImage}
              alt="A basketball representing the future of sports"
              style={{
                width: '346px',
                height: '346px',
                maxWidth: 'none',
                maxHeight: 'none',
                objectFit: 'contain',
                position: 'relative',
                right: '-150px',
                top: '0',
              }}
            />
          </div>
        </div>
      </div>

      {/* --- UPDATED: Absolutely Positioned Image Container ---
        - This div is taken out of the normal document flow.
        - `absolute inset-y-0 right-0`: Pins the container to the top, bottom, and right edges of the screen.
        - `w-1/2`: Makes the container take up the right half of the screen.
        - `hidden lg:flex`: Hides the image on mobile and displays it on large screens.
        - `items-center`: Vertically centers the image within this container.
      */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:flex items-center">
        <img
          src={ballImage}
          alt="A basketball representing the future of sports"
          className="w-auto h-[125%] max-w-none transform translate-x-[25%]"
        />
      </div>
    </section>
  );
}

export default Hero;
