import { useEffect, useState } from "react";
import hero1 from "../../assets/White_Phone_Mockup.png";
import hero2 from "../../assets/Black_Phone_Mockup.png";
import connectBg from "../../assets/Connect_pg3.jpg";
import overlayImg from "../../assets/overlay.png";

const slides = [
  {
    heading: "Connect",
    subheading: (
      <>
        "Networking made for Athletes,<br />
        not offices."
      </>
    ),
    image: hero1,
  },
  {
    heading: (
      <>
        Create your <br />
        Sports Resume
      </>
    ),
    subheading: '"Build a resume that speaks your stats."',
    image: hero2,
  },
  {
    heading: "Track Your Growth",
    subheading: (
      <>
        "Don't just play the game -<br />
        own your story."
      </>
    ),
    image: hero1,
  },
  {
    heading: "Find Opportunity",
    subheading: (
      <>
        "Make every play count -<br />
        towards your career."
      </>
    ),
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
    <section className="relative w-full h-[120vh] flex items-center justify-center overflow-visible">
    
    <div className="absolute inset-0 w-full h-full z-0">
  {/* Background Image */}
  <img
    src={connectBg}
    alt="Background"
    className="w-full h-full object-cover"
    style={{
      aspectRatio: "9 / 16", // optional, remove if unnecessary
    }}
  />

  {/* Overlay Image */}
  <img
    src={overlayImg}
    alt="Overlay"
    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
    style={{
      mixBlendMode: "overlay", // or try "multiply", "soft-light", etc.
      opacity: 20, // ✅ CONTROL THIS for filter strength
      zIndex: 20,
    }}
  />
</div>


  <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-10 w-full max-w-7xl mx-auto h-full">
    {/* Text Content */}
    <div className="text-white md:w-1/2 space-y-6 pl-25 flex flex-col justify-center h-full md:pt-12">
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

        const scale = isCurrent ? 1.2 : 0.5;
        const opacity = isCurrent ? 1 : 0.5;
        const blur = isCurrent ? "blur-0" : "blur-md";

        return (
          <img
            key={index}
            src={slides[index].image}
            alt="Slide"
            className={`absolute transition-all duration-1000 ease-in-out transform ${blur}`}
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
