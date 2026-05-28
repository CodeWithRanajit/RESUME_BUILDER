import React from "react";
import img1 from "../../assets/r1.webp";
import img2 from "../../assets/r2.webp";
import img3 from "../../assets/r3.webp";
import img4 from "../../assets/r4.webp";
import img5 from "../../assets/r5.webp";
import img6 from "../../assets/r6.webp";
import img7 from "../../assets/r7.webp";
import img8 from "../../assets/r8.webp";
import img9 from "../../assets/r9.webp";
import img10 from "../../assets/r10.webp";
import { LayoutTemplate } from "lucide-react";
const Template = () => {
  const [stopScroll, setStopScroll] = React.useState(false);
  const cardData = [
    {
      title: "Modern Professional Resume",
      image: img1,
    },
    {
      title: "ATS-Friendly Corporate Resume",
      image: img2,
    },
    {
      title: "Minimal Clean Resume Template",
      image: img3,
    },
    {
      title: "Creative Designer Resume",
      image: img4,
    },
    {
      title: "Executive Resume Template",
      image: img5,
    },
    {
      title: "Software Engineer Resume",
      image: img6,
    },
    {
      title: "Elegant Career Resume",
      image: img7,
    },
    {
      title: "Marketing Manager Resume",
      image: img8,
    },
    {
      title: "Full Stack Developer Resume",
      image: img9,
    },
    {
      title: "Modern ATS Resume Template",
      image: img10,
    },
  ];
  return (
    <>
        <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center">
        <div className="w-fit gap-2 flex items-center text-sm text-emerald-700 bg-emerald-500/10 rounded-full px-5 py-2 border border-emerald-200">
          <LayoutTemplate width={15} />
          <span>Resume Templates</span>
        </div>
      </div>
      <br />
      <h1 className="text-3xl font-medium text-center mx-auto text-zinc-800">
        Choose Your Perfect Resume Template
      </h1>

      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Explore professionally designed resume templates optimized for ATS
        systems and crafted for every career stage.
      </p>
    
      <br />

      <div
        className="overflow-hidden w-full relative max-w-7xl mx-auto"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
          }}
        >
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <div
                key={index}
                className="w-56 mx-2 h-[20rem] relative group hover:scale-90 transition-all duration-300 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg bg-white"
              >
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-full object-cover"
                />
                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute inset-0 backdrop-blur-sm bg-gradient-to-t from-emerald-200/60 to-emerald-200/20">
                  <p className="text-gray-600 text-lg font-semibold text-center">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </>
  );
};

export default Template;
