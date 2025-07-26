import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const data = [
  {
    title: "Data Ingestion Layer (Project Data Sources)",
    image: "../../assets/por4.avif",
    description: `IoT Devices / Sensors: Soil, biomass, CO₂ sensors from agroforestry or renewable projects.
Satellite Imagery: Remote sensing for land-use verification (NDVI, LULC).
Mobile Apps: For on-ground data collection by field staff.
Third-party APIs: Weather, carbon sequestration models, MRV (Monitoring, Reporting, Verification) data.`,
  },
  {
    title: "Data Processing & Validation Layer",
    image: "../../assets/por5.avif",
    description: `Validation Engines: Rule-based engines for compliance
       checks (e.g., additionality, leakage, permanence).`,
  },
  {
    title: "Monitoring, Reporting & Verification (MRV) Engine",
    image: "../../assets/por6.avif",
    description: `Carbon sequestration calculators.
Periodic reporting generation.
Third-party auditor dashboard for documentation access & field sample verification.`,
  },
];

export default function InteractiveSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="bg-black w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 md:py-20 pt-[80px] pb-[8px]  text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-center items-center gap-2 mb-2">
        <img
          src="../../assets/shape3.png"
          alt="Framework Icon"
          className="w-7 h-5"
        />
        <p className="text-green-400 text-[20px] font-bold m-0">Architecture</p>
      </div>

      <h1 className="text-center text-4xl sm:text-5xl lg:text-[64px] font-bold text-gray-100 mb-10 leading-tight">
        Architecture at a<br />
        Glance
      </h1>

      <h1 className="text-center text-[16px] text-gray-100 mb-20">
        8 thoughtfully crafted for SaaS and startup needs, ready for real-life
        applications.
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-12 mb-10 md:mb-20">
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
              <div
                key={i}
                className="relative pb-4 transition-all duration-500"
              >
                <button
                  onClick={() => setIndex(i)}
                  className={`text-left text-lg font-semibold ${
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
                      className="text-gray-400 mt-2 font-satoshi text-xl"
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
