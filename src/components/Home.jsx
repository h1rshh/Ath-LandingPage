import React from 'react';
import backgroundImage from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(${ backgroundImage })' }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
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

export default Hero