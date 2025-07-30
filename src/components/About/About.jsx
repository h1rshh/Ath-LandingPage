import React from 'react';
import mobileImg from "../../assets/mobile.png";
import urlIcon from "../../assets/url.png";

const About = () => {
  return (
    <div className="flex justify-center bg-[#1A1A1A] text-white px-6 py-10 lg:px-8 font-['Inter']">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl relative">

        {/* Left: Mobile Image (hidden on small screens) */}
        <div className="relative w-full md:w-1/2 flex justify-start items-start m-0 p-0 -mt-29">
          <img
            src={mobileImg}
            alt="Mobile"
            className="hidden md:block w-auto max-w-[40vw] h-auto z-10"
            style={{ marginLeft: '-30%' }}
          />
        </div>

        {/* Right: Ellipse Icon + Text */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">

          {/* Floating Ellipse Icon */}
          <div className="mb-6 md:mb-0 w-[25vw] max-w-[90px] aspect-square rounded-full bg-[#1A1A1A] shadow-[0_1vw_2vw_0_rgba(0,0,0,0.9),-1vw_-1vw_1.5vw_0_rgba(42,42,42,0.9),1vw_-1vw_1.5vw_0_rgba(0,0,0,0.2),-1vw_1vw_1.5vw_0_rgba(0,0,0,0.2),-0.1vw_-0.1vw_0.2vw_0_rgba(0,0,0,0.5),0.1vw_0.1vw_0.2vw_0_rgba(42,42,42,0.3)] flex items-center justify-center
        md:absolute md:-left-44 md:-top-8">
            <img src={urlIcon} alt="URL Icon" className="w-[40%] h-[40%]" />
          </div>

          {/* Text Content */}
          <div className="text-[#F5F5F5] px-4 lg:px-6 space-y-6 md:ml-0 md:-translate-x-24 md:-translate-y-2">
            <h2 className="text-sm md:text-4xl font-medium leading-[143%] tracking-[0.01em]">
              <span className="font-extrabold">Get</span> <span className="text-red-600 font-extrabold">Connected</span>,
              <span className="font-extrabold"> Get</span> <span className="text-red-600 font-extrabold">Noticed</span>,
              <span className="font-extrabold"> Get</span> <span className="text-red-600 font-extrabold">Ahead</span>
            </h2>



            {/* Responsive text for mobile: remove <br />, use block for mobile, inline for md+ */}
            <p className="text-xs md:text-lg font-medium leading-relaxed mt-6 md:whitespace-normal whitespace-pre-line md:text-left text-center md:px-0 px-2">
              <span className="block md:inline">Join a powerful network of athletes, coaches, and scouts. Build your athletic profile, showcase your training journey, share match highlights, and grow your reputation on and off the field.</span>
            </p>

            <p className="text-xs md:text-lg font-medium leading-relaxed mt-6 md:whitespace-normal whitespace-pre-line md:text-left text-center md:px-0 px-2">
              <span className="block md:inline">Whether you're aiming for college teams, national leagues, or global recognition...</span>
            </p>

            <p className="text-xs md:text-lg font-extrabold leading-relaxed mt-6 md:text-left text-center md:px-0 px-2">
              This is where your journey levels up.
            </p>

          </div>
        </div>
      </div>
    </div>

  );
};

export default About;
