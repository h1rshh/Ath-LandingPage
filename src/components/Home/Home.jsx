import React from 'react';
import backgroundImage from '/src/assets/hero.jpg';

const Home = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* First overlay - Red with reduced opacity */}
      <div
        className="absolute inset-0"
        style={{ background: `rgba(166, 13, 13, 0.4)` }}
      ></div>

      {/* Second overlay - Black */}
      <div
        className="absolute inset-0"
        style={{ background: `rgba(0, 0, 0, 0.3)` }}
      ></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 font-inter">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          From Passion to Profession<br />
          From Field to Future
        </h1>
        <p className="mt-4 text-white italic text-lg">
          ~ Connecting athletes to opportunity ~
        </p>
        <button className="mt-6 px-6 py-3 bg-red-700 text-white font-semibold rounded-full hover:bg-red-800 transition">
          Join the waitlist
        </button>
      </div>
    </section>
  )
}

export default Home