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
    <div className="relative bg-black py-24 overflow-hidden">
      {/* Slides wrapper */}
      <div className="flex justify-center items-center space-x-6">
        {visibleSlides(currentIndex).map((i, idx) => (
          <div
            key={i}
            className={`relative flex-shrink-0 rounded-2xl flex justify-center items-center transition-all duration-500
    ${i === currentIndex
                ? 'w-[330px] h-[200px] scale-110 z-20 -mt-10 shadow-2xl'
                : 'w-[220px] h-[200px] scale-90 z-10 mt-0'}
  `}
            style={{
              background: i === currentIndex
                ? 'linear-gradient(to bottom, #FF4C4C, #C80505)'
                : 'linear-gradient(to bottom, #C80505, #333333)'
            }}
          >
            <img
              src={slides[i].image}
              alt={`Slide ${i}`}
              className="h-full object-contain"
            />
          </div>


        ))}
      </div>

      {/* Caption */}
      <div className="mt-14 text-center">
        <h2 className="text-white text-3xl font-bold">
          {slides[currentIndex].text}
        </h2>
      </div>
    </div>
  );
};

export default Page4;