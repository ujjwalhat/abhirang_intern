import { motion } from "framer-motion";
import React from "react";

const data = [
  {
    feature: "Real-time satellite data integration",
    benefit: "Enables up-to-date field monitoring",
    advantage: "Reduces manual field visits & operational costs",
  },
  {
    feature: "260+ modular APIs",
    benefit: "Plug-and-play functionality across any core lending system",
    advantage: "Quick go-to-market with minimal development overhead",
  },
  {
    feature: "Curated weather, soil pricing datasets",
    benefit: "End-to-end viability into agri ecosystem",
    advantage: "More accurate underwriting & loan structuring",
  },
  {
    feature: "Bulk & Individual API Consumption",
    benefit: "Pay-as-you-go or enterprise-wide deployment",
    advantage: "Tailored plans for NBFCs, fintech, and agri-input companies",
  },
  {
    feature: "Scalable microservices architecture",
    benefit: "Handles peak demand across lending seasons",
    advantage: "Guaranteed uptime, even during high load periods",
  },
  {
    feature: "Built-in anomaly detection",
    benefit: "Flags crop failure or non-planting patterns",
    advantage: "Early warning systems reduce NPA Risk",
  },
  {
    feature: "Geo-tagging & land boundary detection",
    benefit: "Confirms land claims with precision",
    advantage: "Eliminates loan fraud through spatial validation",
  },
];

export default function FrameworkTable() {
  return (
    <motion.div
      className="px-4 sm:px-8 md:px-20 lg:px-40 py-14 bg-[#111111] text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-8">
        <div className="flex justify-center items-center gap-2 mb-2">
          <img
            src="../../assets/shape2.png"
            alt="Framework Icon"
            className="w-5 h-4 sm:w-6"
          />
          <p className="text-green-400 text-base sm:text-lg font-bold m-0">
            The Frameworks
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-satoshi font-bold my-4 leading-snug">
          Feature - Benefit - Advantage
          <br className="hidden md:block" /> Framework
        </h2>

        <p className="text-gray-400 text-sm sm:text-base">
          Features that benefit and are advantage
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl font-satoshi shadow-lg border border-[#474343]">
        <table className="min-w-full text-left text-xs sm:text-sm border-separate border-spacing-0 leading-tight">
          <thead>
            <tr className="font-bold text-green-300 uppercase text-xm md:text-lg  tracking-wider">
              <th className="border border-[#474343] px-3 sm:px-4 py-2">
                Features
              </th>
              <th className="border border-[#474343] px-3 sm:px-4 py-2">
                Benefits
              </th>
              <th className="border border-[#474343] px-3 sm:px-4 py-2">
                Advantage
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-zinc-800 transition duration-300"
              >
                <td className="border border-[#474343] px-3 py-2 align-top text-[12px] sm:text-lg leading-snug">
                  {row.feature}
                </td>
                <td className="border border-[#474343] px-3 py-2 align-top text-[12px] sm:text-lg leading-snug">
                  {row.benefit}
                </td>
                <td className="border border-[#474343] px-3 py-2 align-top text-[12px] sm:text-lg leading-snug">
                  {row.advantage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
