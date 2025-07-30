import React, { useEffect, useState } from 'react';
import img1 from '../../assets/image1.png';
import img2 from '../../assets/image2.png';
import img3 from '../../assets/image3.png';
import img4 from '../../assets/image4.png';
import img5 from '../../assets/image5.png';
import img6 from '../../assets/image6.png';

const slides = [
  { image: img1, text: "Showcase verified performance data" },
  { image: img2, text: "Connect within a unified sports network" },
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
    <div className="relative bg-[#1a1a1a] pt-16 md:pt-40 pb-12 md:pb-28 overflow-visible w-full z-10">
      {/* Slide Animation */}
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

      {/* Slide Cards */}
      <div className="relative z-10 flex justify-center items-end space-x-2 md:space-x-4 -mt-4 md:mt-0">
        {visibleSlides(currentIndex).map((i) => (
          <div
            key={i}
            className={`relative flex-shrink-0 rounded-xl overflow-visible flex justify-center items-end transition-all duration-700 ease-in-out ${i === currentIndex
              ? 'w-[58vw] h-[30vw] md:w-[40vw] md:h-[40vh] scale-110 z-20 -translate-y-16 md:-translate-y-50 shadow-2xl'
              : 'w-[32vw] h-[18vw] md:w-[28vw] md:h-[30vh] scale-95 z-10 -translate-y-10 md:-translate-y-65'}
            `}
            style={{
              background: i === currentIndex
                ? 'linear-gradient(to bottom, #FF4C4C, #C80505)'
                : 'linear-gradient(to bottom, #C80505, #1A1A1A)'
            }}
          >
            <div className="relative w-full h-full flex justify-center items-end overflow-visible">
              <img
                src={slides[i].image}
                alt={`Slide ${i}`}
                className={`absolute transition-all duration-500 ${i === currentIndex
                  ? 'w-[90%] scale-125 -top-[8%] z-50'
                  : 'w-[75%] scale-100 -top-[0%] z-30'}
                `}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Caption */}
      <div className="-mt-10 md:-mt-25 text-center">
        <h2
          key={currentIndex}
          className="text-white text-sm md:text-3xl font-bold slide-up-animation ease-in-out"
        >
          {slides[currentIndex].text}
        </h2>
      </div>
    </div>
  );
};

export default Page4;
