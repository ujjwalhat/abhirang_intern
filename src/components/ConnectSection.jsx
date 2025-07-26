import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import createGlobe from "cobe";
import "../globle.css";

export default function ConnectSection() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      canvasRef.current.width = width * 2;
      canvasRef.current.height = width * 2;

      createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 9,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.25, 0.9, 0.4],
        glowColor: [0.75, 0.75, 0.75],
        markers: [
          { location: [37.7595, -122.4367], size: 0.05 },
          { location: [40.7128, -64.006], size: 0.04 },
          { location: [40.7128, -68.006], size: 0.03 },
          { location: [80.7128, -91.006], size: 0.04 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.005;
        },
      });
    });

    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.div
      className="text-center min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3">
        Ready to be associated with <br />
        <span className="text-white">Abhirang</span>
      </h1>

      <p className="text-base sm:text-lg text-gray-300 mb-6">
        Connect With Us!
      </p>

      <Link to="/contact">
        <button className="bg-gradient-to-b from-gray-700 to-black text-white px-6 py-2 rounded-md shadow-md hover:scale-105 transition">
          Contact Us
        </button>
      </Link>

      <div className="w-full max-w-[700px] mt-20 mb-[-400px] md:mb-[-475px] px-4">
        <div className="relative aspect-square w-full">
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ maxWidth: "100%", display: "block" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
