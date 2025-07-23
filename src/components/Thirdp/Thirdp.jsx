import { useEffect, useState } from "react";
import hero1 from "../../assets/White_Phone_Mockup.png";
import hero2 from "../../assets/Black_Phone_Mockup.png";
import connectBg from "../../assets/Connect_pg3.jpg";

const slides = [
  {
    heading: "Connect",
    subheading: "\"Networking made for Athletes,\nnot offices.\"",
    image: hero1,
  },
  {
    heading: "Create your \nSports Resume",
    subheading: "\"Build a resume that speaks your stats.\"",
    image: hero2,
  },
  {
    heading: "Track Your Growth",
    subheading: "\"Don't just play the game -\nown your story.\"",
    image: hero1,
  },
  {
    heading: "Find Opportunity",
    subheading: "\"Make every play count -\ntowards your career.\"",
    image: hero2,
  },
];

const Thirdp = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getIndex = (offset) => (current + offset + slides.length) % slides.length;

  return (
    <section
      className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden"
    >

      <div
        className="absolute inset-0 bg-cover bg-center scale-150"
        style={{ backgroundImage: `url(${connectBg})` }}
      />
      {/* <div className="absolute inset-0 bg-black bg-opacity-70" /> */}

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-10 w-full max-w-7xl mx-auto h-full">
        {/* Text Content */}
        <div className="text-white md:w-1/2 space-y-6 pl-25 flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold">
            {slides[current].heading}
          </h1>
          <p className="text-xl md:text-2xl font-light whitespace-pre-line">
            {slides[current].subheading}
          </p>
        </div>

        {/* Image Content */}
        <div className="relative md:w-1/2 flex justify-center items-center h-full">
          {[1, 0, -1].map((offset) => {
            const index = getIndex(offset);
            const isCurrent = offset === 0;
            const isNext = offset === 1;
            const isPrev = offset === -1;
            const zIndex = isCurrent ? 30 : 10;
            const translateY = isCurrent
              ? 0
              : isNext
                ? -200 // coming from top
                : 200;  // going down
            const translateX = isCurrent ? "30%" : "150%"; // push blurred ones to right

            const scale = isCurrent ? 1 : 0.5;
            const opacity = isCurrent ? 1 : 0.4;
            const blur = isCurrent ? "blur-0" : "blur-md";

            return (
              <img
                key={index}
                src={slides[index].image}
                alt="Slide"
                className={`absolute transition-all duration-1000 ease-in-out ${blur}`}
                style={{
                  zIndex,
                  transform: `translate(${translateX}, ${translateY}px) scale(${scale})`,
                  opacity,
                  maxHeight: isCurrent ? "450px" : "300px",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Thirdp;
