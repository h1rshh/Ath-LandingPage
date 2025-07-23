import React from 'react';
import mobileImg from "../../assets/mobile.png";
import urlIcon from "../../assets/url.png"; // Make sure this icon exists

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#1A1A1A] text-white px-8 py-16 font-['Inter']">
      <div className="flex w-full max-w-6xl items-center justify-between gap-6">
        {/* Left: Image */}
        <div className="w-1/2 flex justify-start">
          <img src={mobileImg} alt="Mobile" className="w-72 h-auto" />
        </div>

        {/* Ellipse with icon */}
        <div className="relative w-[117px] h-[117px] bg-[#1A1A1A] rounded-full shadow-[0_9px_23px_0_rgba(0,0,0,0.9),-9px_-9px_18px_0_rgba(42,42,42,0.9),9px_-9px_18px_0_rgba(0,0,0,0.2),-9px_9px_18px_0_rgba(0,0,0,0.2),-1px_-1px_2px_0_rgba(0,0,0,0.5),1px_1px_2px_0_rgba(42,42,42,0.3)] flex items-center justify-center mx-4">
          <img src={urlIcon} alt="URL Icon" className="w-8 h-8" />
        </div>

        {/* Text Section */}
        <div className="w-[309px] h-[234px] bg-[#1A1A1A] text-[#F5F5F5] px-4 py-2 space-y-3 shadow">
          <h2 className="text-[24px] font-extrabold leading-[34px] tracking-wide whitespace-nowrap">
            Get <span className="text-red-600">Connected</span>, Get <span className="text-red-600">Noticed</span>, Get <span className="text-red-600">Ahead</span>
          </h2>
          <p className="text-[16px] font-medium leading-[23px]">
            Join a powerful network of athletes, coaches, and scouts. Build your profile and grow your reputation.
          </p>
          <p className="text-[16px] font-medium leading-[23px]">
            Whether you're aiming for college teams, national leagues, or global recognition...
          </p>
          <p className="text-[16px] font-semibold">This is where your journey levels up.</p>
        </div>
      </div>
    </div>

  );
};

export default About;