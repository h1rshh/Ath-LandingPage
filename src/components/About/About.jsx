import React from 'react';
import mobileImg from "../../assets/mobile.png";
import urlIcon from "../../assets/url.png";

const About = () => {
  return (
    <div className="flex justify-center bg-[#1A1A1A] text-white px-6 py-10 lg:px-8 font-['Inter']">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl relative">

        {/* Left: Mobile Image */}
       <div className="relative w-full md:w-1/2 flex justify-start items-start m-0 p-0 -mt-29">
  <img
    src={mobileImg}
    alt="Mobile"
    className="w-auto max-w-[40vw] h-auto z-10"
    style={{ marginLeft: '-30%' }}
  />
</div>


        {/* Right: Text + Ellipse Icon */}
        <div className="relative w-full md:w-1/2 flex flex-col md:pl-6">

          {/* Floating Ellipse with icon */}
          <div className="absolute -left-44 -top-8 w-[15%] max-w-[90px] aspect-square bg-[#1A1A1A] rounded-full shadow-[0_1vw_2vw_0_rgba(0,0,0,0.9),-1vw_-1vw_1.5vw_0_rgba(42,42,42,0.9),1vw_-1vw_1.5vw_0_rgba(0,0,0,0.2),-1vw_1vw_1.5vw_0_rgba(0,0,0,0.2),-0.1vw_-0.1vw_0.2vw_0_rgba(0,0,0,0.5),0.1vw_0.1vw_0.2vw_0_rgba(42,42,42,0.3)] flex items-center justify-center">
            <img src={urlIcon} alt="URL Icon" className="w-[40%] h-[40%]" />
          </div>

          {/* Text Content */}
          <div className="bg-[#1A1A1A] text-[#F5F5F5] px-4 lg:px-6 space-y-6 md:ml-0 md:-translate-x-24 md:-translate-y-2 ">

<h2 className="text-3xl md:text-3xl font-medium leading-[143%] tracking-[0.01em] whitespace-nowrap">

              <span className="font-bold">Get</span> <span className="text-red-600 font-bold">Connected</span>,
              <span className="font-bold"> Get</span> <span className="text-red-600 font-bold">Noticed</span>,
              <span className="font-bold"> Get</span> <span className="text-red-600 font-bold">Ahead</span>
            </h2>

<p className="text-[87%] md:text-[24p%] font-medium leading-relaxed mt-6">

  Join a powerful network of athletes, coaches, and scouts. Build your athletic<br />
  profile, showcase your training journey, share match highlights, and grow<br />
  your reputation on and off the field.
</p>
<p className="text-[87%] md:text-[24p%] font-medium leading-relaxed mt-6">
  Whether you're aiming for college teams, national leagues, or global<br />
  recognition...
</p>
<p className="text-[87%] md:text-[24p%] font-medium leading-relaxed mt-6">
  This is where your journey levels up.
</p>
       </div>
        </div>
      </div>
    </div>
  );
};

export default About;
