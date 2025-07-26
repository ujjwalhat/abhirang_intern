import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const data = [
  {
    title: "Validation against airborne",
    image: "../../assets/por4.avif",
    description:
      "We have tested our technology against biomass estimates published by independent research centers and find that we can consistently provide accurate estimates at all scales. Crucially, our ability to measure change from one year to the next is consistent with the long-term dynamics monitored through airborne at sites with multi-year monitoring measurements.",
  },
  {
    title: "Validation against ground",
    image: "../../assets/por5.avif",
    description:
      "We acquired a high-quality biomass dataset derived from Satellite measurements over a 50k hectare site and compared it with our datasets. The comparison showed that our application performed significantly better than any other data provider.",
  },
  {
    title: "Validation against field plots",
    image: "../../assets/por6.avif",
    description:
      "Comparing biomass estimates derived from remote-sensing data against biomass estimates derived from field plots—a plot-to-pixel comparison—is more challenging than comparing two remote-sensing derived biomass datasets. We try to validate our estimates against field data collected across the tropics, the GeoTrees Network, and found compelling results.",
  },
];

export default function AutoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="bg-gradient-to-b from-black via-[#102118] to-black w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 py-16 md:py-20 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center gap-2 mb-3">
        <img
          src="../../assets/shape4.png"
          alt="Framework Icon"
          className="w-6 h-5"
        />
        <p className="text-green-400 text-[18px] md:text-[20px] font-bold m-0">
          DATA COLLABORATION
        </p>
      </div>

      <h2 className="font-bold text-4xl md:text-6xl text-gray-100 leading-tight mb-4">
        We Emphasize On Data
      </h2>

      <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-12 md:mb-20">
        Unlock insights while maintaining complete privacy & compliance. Our
        goal is to bring transparency, traceability & technology into the
        voluntary data market through high integrity & nature-based solutions
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 mb-12 md:mb-20">
        {/* Image only on medium+ screens */}
      <div className="flex-1 w-full max-w-md md:max-w-lg hidden md:block">
  <img
    src={data[index].image}
    alt={data[index].title}
    className="w-full h-auto rounded-xl border border-white/20 scale-105 md:-translate-x-2 transition-transform duration-300"
  />
</div>

        <div className="flex-1 w-full">
          <div className="space-y-6">
            {data.map((item, i) => (
              <div key={i} className="relative pb-4 transition-all duration-500">
                <button
                  onClick={() => setIndex(i)}
                  className={`text-left text-base md:text-xl font-satoshi font-semibold ${
                    index === i ? "text-white" : "text-gray-500"
                  } hover:text-white transition-colors duration-300`}
                >
                  {item.title}
                </button>

                {index !== i && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[1px] bg-white/20"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                )}

                {index === i && (
                  <>
                    <motion.div
                      key={index}
                      className="bg-[#50fa91] mt-2 mb-4"
                      style={{ height: "1px" }}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 10, ease: "linear" }}
                    />

                    <motion.p
                      className="text-[#b2b3b3] font-satoshi text-sm md:text-base leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.description}
                    </motion.p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
