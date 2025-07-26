import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = containerRef.current.querySelectorAll(".panel");

    const triggers = [];

    panels.forEach((panel, index) => {
      const trigger = ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: index === panels.length - 1 ? "bottom top" : "+=100%",
        pin: index !== panels.length - 1,
        pinSpacing: false, // keep this to maintain slide-over effect
        scrub: 0.1, // better than 'true' for performance
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <Panel
        index="1"
        title="Lending Information"
        text="Designed for performance, scale & precision, Abhirang simplifies rural - lending decisions, boosts credit reach and helps lenders operate eficiently - even in the remotest corners of the country."
        imgSrc="/assets/por1.avif"
        bg="bg-[#111111]"
        textColor="text-white"
        numberColor="text-[#00FF80]"
      />

      <Panel
        index="2"
        title="Data Collaboration"
        text="Data clean rooms provide a security - enhanced environment in which multiple parties can share, join and analyse their data asset without moving or revealing the underlying data."
        imgSrc="/assets/por2.avif"
        bg="bg-[#050505]"
        textColor="text-white"
        numberColor="text-[#00FF80]"
      />

      <Panel
        index="3"
        title="Biomass Change"
        text="Harness the power of plantation to generate carbon credits, improve soil health and drive sustainable income for farmers."
        imgSrc="/assets/por3.avif"
        bg="bg-[#50fa91]"
        textColor="text-black"
        numberColor="text-black"
      />
    </div>
  );
}

function Panel({ index, title, text, imgSrc, bg, textColor, numberColor }) {
  const isLast = index === "3";

  return (
    <section
      className={`panel w-full flex px-4 md:px-52 py-12 md:py-24 items-center justify-center ${bg} ${textColor} ${
        index === "3" ? "z-50 relative  md:mb-0" : "z-0"
      } ${
        index !== "3" ? "min-h-screen md:h-screen" : "min-h-[80vh] md:h-screen"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-7xl w-full">
        {/* Text Section */}
        <div
          className={`w-full md:w-2/3 text-left space-y-4 ${
            isLast ? "mt-16 md:-mt-72" : "mt-12 md:-mt-72"
          }`}
        >
          <div className="space-y-2 md:space-y-4">
            <span
              className={`text-[72px] sm:text-[96px] md:text-[164px] font-satoshi font-bold leading-none block ${numberColor}`}
            >
              {index}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[54px] font-bold">
              {title}
            </h2>
          </div>
          <p className="text-base sm:text-lg max-w-md leading-relaxed">
            {text}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-3/5 flex justify-center md:justify-end">
          <img
            src={imgSrc}
            alt={title}
            className="w-full md:scale-[1.15] md:-translate-x-6 h-auto max-h-[73vh] object-cover rounded-2xl shadow-2xl transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
