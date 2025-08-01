import React from 'react';
import athleteImage from '../../assets/waitlist.png';
import bgLogo from '../../assets/logo-bg.png';

const WaitlistPage = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-stretch mt-[-10%] sm:mt-[-12%] md:mt-0">
        {/* Left Side: Visuals */}
        <div className="w-full lg:w-3/5 relative h-[50vh] lg:h-screen">
          {/* Background Logo */}
          <img
            src={bgLogo}
            alt="Background Logo"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 w-[95%] max-w-[80%] lg:max-w-[65%] xl:max-w-[55%] h-auto"
          />

          {/* Text Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center -mt-8 lg:-mt-24 pointer-events-none">
            <div className="text-[17vw] sm:text-[13vw] md:text-[10vw] lg:text-[10vw] xl:text-[11vw] font-black leading-none select-none text-center">
              <span className="relative z-20">Join The</span>
              <br />
              <span className="relative z-0">Waitlist</span>
            </div>
          </div>

          {/* Athlete Image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-4/5 md:w-4/5 lg:w-[75%] xl:w-[70%] aspect-[598/548] z-10 pointer-events-none">
            <img
              src={athleteImage}
              alt="Athlete"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-2/5 flex items-center justify-center -mt-8 p-4 sm:p-6 md:p-12 z-20">
          <form className="w-full max-w-sm space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-base font-semibold text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 bg-white text-gray-800 placeholder:text-gray-500 placeholder:text-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-base font-semibold text-white mb-2">
                Phone no. / Email address
              </label>
              <input
                type="text"
                id="contact"
                placeholder="Enter your email address / Phone number"
                className="w-full p-3 bg-white text-gray-800 placeholder:text-gray-500 placeholder:text-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex space-x-4">
              {/* User Type Dropdown */}
              <div className="w-1/2">
                <label htmlFor="userType" className="block text-base font-semibold text-white mb-2">
                  User Type
                </label>
                <div className="relative">
                  <select
                    id="userType"
                    defaultValue=""
                    className="w-full p-3 bg-white text-gray-800 border border-white/20 rounded-2xl appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="" disabled>Select user type</option>
                    <option>Athlete</option>
                    <option>Coach</option>
                    <option>Recruiter</option>
                    <option>Sponsor</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Sport Input */}
              <div className="w-1/2">
                <label htmlFor="sport" className="block text-base font-semibold text-white mb-2">
                  Sport
                </label>
                <input
                  type="text"
                  id="sport"
                  placeholder="Enter your sport"
                  className="w-full p-3 bg-white text-gray-800 placeholder:text-gray-500 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500"
                />
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
