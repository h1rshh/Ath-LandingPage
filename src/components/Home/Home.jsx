import React from 'react';
import Heroimg from '/src/assets/Heroimg.png'; // Make sure path is correct

const Home = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Heroimg})` }}
    >
      {/* First overlay - Red with reduced opacity */}
     

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 font-inter">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          From Passion to Profession<br />
          From Field to Future
        </h1>
        <p className="mt-4 text-white italic text-lg">
          ~ Connecting athletes to opportunity ~
        </p>
        <button className="mt-6 px-6 py-3 bg-red-700 text-white font-semibold rounded-full hover:bg-green-400 transition duration-300">
  Join the waitlist
</button>

      </div>
    </section>
  );
};

export default Home;
