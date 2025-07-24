import React from 'react';

// --- Asset Imports ---
// Using the asset paths you provided.
import mobileImg from "../../assets/mobile.png";
import urlIcon from "../../assets/url.png";

const About = () => {
  return (
    // The overflow-hidden class is important to clip the image that bleeds off-screen
    <div className="bg-[#1A1A1A] text-white font-['Inter'] py-20 overflow-hidden">
      {/* Main content container with padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          
          {/* --- Left Section: Image --- */}
          {/* --- MODIFICATION: Simplified to use a single composite image asset --- */}
          {/* The negative margins are used to pull the image to the very left edge of the screen */}
          <div className="lg:w-1/2 w-full flex justify-start -ml-16 sm:-ml-24 lg:-ml-48">
            <img 
              src={mobileImg} 
              alt="Mobile app with sports balls" 
              // The size and rotation are maintained to match the desired look
              className="relative z-10 w-auto h-[550px] sm:h-[650px] transform -rotate-12" 
            />
          </div>

          {/* --- Right Section: Text Content --- */}
          <div className="lg:w-1/2 w-full">
            {/* Icon in a subtle circle */}
            <div className="w-16 h-16 bg-[#2a2a2a] rounded-full flex items-center justify-center shadow-lg mb-6">
              <img src={urlIcon} alt="URL Icon" className="w-8 h-8" />
            </div>

            {/* Text content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold leading-tight tracking-wide">
                Get <span className="text-red-600">Connected</span>, Get <span className="text-red-600">Noticed</span>, Get <span className="text-red-600">Ahead</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Join a powerful network of athletes, coaches, and scouts. Build your athletic profile, showcase your training journey, share match highlights, and grow your reputation on and off the field.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Whether you're aiming for college teams, national leagues, or global recognition...
              </p>
              <p className="text-xl font-semibold text-white">
                This is where your journey levels up.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
