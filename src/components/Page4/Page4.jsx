import React, { useEffect, useState } from 'react';
import img1 from '../../assets/image1.png';
import img2 from '../../assets/image2.png';
import img3 from '../../assets/image3.png';
import img4 from '../../assets/image4.png';
import img5 from '../../assets/image5.png';
import img6 from '../../assets/image6.png';

const slides = [
  { image: img1, text: "Showcase verified performance data" },
  { image: img2, text: "Connect within a unifies sports network" },
  { image: img3, text: "Turn every training session into recognized progress" },
  { image: img4, text: "Get discovered by scouts" },
  { image: img5, text: "Boost your visibility in your sport" },
  { image: img6, text: "Never miss a trial opportunity" }
];

const Page4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleSlides = (index) => {
    const total = slides.length;
    const prev = (index + total - 1) % total;
    const next = (index + 1) % total;
    return [prev, index, next];
  };

  return (
    <div className="relative bg-[#1a1a1a] pt-70 pb-20 overflow-visible w-full">
      {/* Add CSS animation styles */}
      <style jsx>{`
        @keyframes slideUpIn {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .slide-up-animation {
          animation: slideUpIn 0.6s ease-out;
        }
      `}</style>

      {/* Slides wrapper */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-4 px-2 z-3000">
        {visibleSlides(currentIndex).map((i, idx) => (
          <div
            key={i}
            className={`relative flex-shrink-0 rounded-2xl flex justify-center items-center transition-all duration-700 ease-in-out
              ${i === currentIndex
                ? 'w-[40vw] h-[40vh] scale-110 z-20 -translate-y-14 -translate-x-6 shadow-2xl'
                : 'w-[28vw] h-[30vh] scale-95 z-10 -translate-y-12 -translate-x-4'}
            `}
            style={{
              background: i === currentIndex
                ? 'linear-gradient(to bottom, #FF4C4C, #C80505)'
                : 'linear-gradient(to bottom, #C80505, #1A1A1A)'
            }}
          >
            <img
              src={slides[i].image}
              alt={`Slide ${i}`}
              className={`object-contain transition-all duration-500
                ${i === currentIndex ? 'w-[500vw] h-[500vw] scale-125 z-50' : 'w-[100vw] h-[100vw]'}
              `}
            />
          </div>
        ))}
      </div>

      {/* Caption with animation */}
      <div className="mt-25 text-center overflow-hidden">
        <h2 
          key={currentIndex} // This forces re-render and animation restart
          className="text-white text-3xl font-bold slide-up-animation"
        >
          {slides[currentIndex].text}
        </h2>
      </div>
    </div>
  );
};

export default Page4;
