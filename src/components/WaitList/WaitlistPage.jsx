import React from 'react';
import athleteImage from '../../assets/waitlist.png';
import bgLogo from '../../assets/logo-bg.png'; // Make sure you have this background logo

const WaitlistPage = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-stretch">
        
        {/* Left Side: Visuals */}
        <div className="w-full lg:w-3/5 relative h-[600px] lg:h-[calc(100vh)]">
          {/* Background Logo */}
          <img
            src={bgLogo}
            alt="Background Logo"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[889px] max-w-none h-[718px] opacity-10"
          />

          {/* Text Container - The key to layering is having different z-indexes */}
          <div className="absolute inset-0 flex flex-col items-center justify-center -mt-16 lg:-mt-24 pointer-events-none">
            <div className="text-[14vw] md:text-[10vw] lg:text-[120px] xl:text-[150px] font-black leading-none select-none text-center">
              {/* "Join The" is on top */}
              <span className="relative z-20">Join The</span>
              <br />
              {/* "Waitlist" is behind the athlete */}
              <span className="relative z-0">Waitlist</span>
            </div>
          </div>
          
          {/* Athlete Image - z-index is between the two text spans */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[598px] h-[548px] z-10 pointer-events-none">
            <img
              src={athleteImage}
              alt="Athlete"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-2/5 flex items-center justify-center p-6 md:p-12 z-20">
          <form className="w-full max-w-sm space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-xs font-medium text-gray-400 mb-2">
                Phone no. / Email address
              </label>
              <input
                type="text"
                id="contact"
                placeholder="Enter your email address / Phone number"
                className="w-full p-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="userType" className="block text-xs font-medium text-gray-400 mb-2">
                  User Type
                </label>
                <div className="relative">
                  <select
                    id="userType"
                    className="w-full p-3 bg-white/5 border border-white/20 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option>Athlete</option>
                    <option>Coach</option>
                    <option>Fan</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="w-1/2">
                <label htmlFor="sport" className="block text-xs font-medium text-gray-400 mb-2">
                  Sport
                </label>
                <div className="relative">
                  <select
                    id="sport"
                    className="w-full p-3 bg-white/5 border border-white/20 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option>Cricket</option>
                    <option>Football</option>
                    <option>Basketball</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full mt-2 p-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#111111]"
              >
                Join the waitlist
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitlistPage;
