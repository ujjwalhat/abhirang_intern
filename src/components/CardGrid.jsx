import { motion } from "framer-motion";
import React from "react";
import {
  FaLeaf,
  FaMoneyBillWave,
  FaSeedling,
  FaEye,
  FaWarehouse,
  FaCloudSun,
} from "react-icons/fa";
import { CloudFog } from "lucide-react";

const features = [
  {
    icon: <FaLeaf size={20} className="text-green-400" />,
    title: "Crop-Based Credit Risk Assessment",
    description:
      "Evaluate lending risk using real time crop health & weather anomalies",
  },
  {
    icon: <FaMoneyBillWave size={20} className="text-green-400" />,
    title: "Commodity Pricing Indexing",
    description:
      "Align disbursements and repayments with regional price trends",
  },
  {
    icon: <FaSeedling size={20} className="text-green-400" />,
    title: "Soil Sustainability Analysis",
    description:
      "Offer input loans or crop specific financing based on soil type",
  },
  {
    icon: <FaEye size={20} className="text-green-400" />,
    title: "Farmer Profiling",
    description:
      "Validate farming history, land productivity, and crop cycles via satellite",
  },
  {
    icon: <FaWarehouse size={20} className="text-green-400" />,
    title: "Post Harvest Credits",
    description:
      "Enable warehouse lending based on satellite - verified storage timelines",
  },
  {
    icon: <CloudFog size={20} className="text-green-400" />,
    title: "Weather Risk Scoring",
    description:
      "Forecast loan default risk using upcoming climate patterns using AI driven technology",
  },
];

export default function CardGrid() {
  return (
    <>
      <style>
        {`
          @keyframes shine {
            0% { left: -100%; }
            100% { left: 100%; }
          }
        `}
      </style>

      <div className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-32">
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex justify-center items-center gap-2 mb-2">
            <img
              src="../../assets/shapes.png"
              alt="Framework Icon"
              className="w-5 h-4 sm:w-7 sm:h-5"
            />
            <p className="text-green-400 text-base sm:text-lg font-bold m-0">
              Why Abhirang ?
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-satoshi font-extrabold leading-tight">
            <span className="text-gray-300">Complete suite </span>
            <br />
            <span className="text-white">of features</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-6 md:px-0">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group overflow-hidden bg-[#111111] border border-[#1e1e1e] rounded-xl p-4 sm:p-6 shadow-md min-h-[200px] sm:min-h-[220px] cursor-pointer"
              onMouseEnter={(e) => {
                const shine = e.currentTarget.querySelector(".shine");
                if (shine) {
                  shine.style.animation = "none";
                  void shine.offsetWidth;
                  shine.style.animation = "shine 0.8s ease-out forwards";
                }
              }}
            >
              <div className="shine absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[-20deg] pointer-events-none"></div>

              <div className="mb-3 relative z-10">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-[#1e1e1e] rounded-md">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-1 text-white relative z-10">
                {feature.title}
              </h4>
              <p className="text-sm sm:text-[0.95rem] text-gray-400 relative z-10 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
