import { motion } from "framer-motion";
import React from "react";
import por7 from "../../assets/por7.avif";

export default function WhySection() {
  const points = [
    "Ultra scalable platform built on distributed cloud systems",
    "Zero compromise on data quality even at high concurrency",
    "Transparent developer documentation and sandbox access",
    "Restful APIs / JSON / GeoJSON support",
    "Real-Time webhook triggers and response standardisation",
    "Built for FAAS ( Function-as-a-Service ) deployments",
    "Full encrypted data pipelines (AES-256, TLS 1.3)",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 md:px-36 py-16 sm:py-20 md:py-24 bg-black text-white">
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="flex items-center gap-2 text-green-400 text-[16px] sm:text-[18px] md:text-[20px] font-medium mb-2">
          <img src="../../assets/shapes.png" alt="Icon" className="w-5 h-4 sm:w-6 sm:h-5" />
          The big question
        </p>

        <h3 className="text-3xl sm:text-4xl md:text-6xl font-satoshi font-bold mb-3 sm:mb-4 leading-tight">
          Why Abhirang?
        </h3>

        <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
          Discover diverse features and effortless solutions
        </p>

        <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
          {points.map((text, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <img
                src="../../assets/check.png"
                alt="Check"
                className="w-8 h-6 -mt-1 sm:w-10 sm:h-7"
              />
              <span className="text-white font-semibold">{text}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="mt-8 md:mt-0 md:ml-16 w-full max-w-[500px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={por7}
          alt="Why Abhirang"
          className="rounded-2xl shadow-lg w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
}
