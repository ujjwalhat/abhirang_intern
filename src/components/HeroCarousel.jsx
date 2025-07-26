// HeroCarousel.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ ...style }}
      onClick={onClick}
    >
      <div className="bg-black/60 text-white p-3 rounded-full cursor-pointer">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ ...style }}
      onClick={onClick}
    >
      <div className="bg-black/60 text-white p-3 rounded-full cursor-pointer">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    </div>
  );
}

const HeroCarousel = () => {
  const slides = [
    {
      image: "/assets/1.avif",
      title: "Plantation Carbon Data, Measured Globally",
    },
    {
      image: "/assets/2.avif",
      title: "Data Clean Room",
      description: "Enterprise Data\nCollaboration Platform",
    },
    {
      image: "/assets/3.avif",
      title: "Rural Leading Data, Anywhere in India",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <motion.div
      className="relative bg-black pt-[80px] pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Carousel Section */}
      <div className="group relative mx-4 sm:mx-16 rounded-2xl overflow-hidden shadow-lg">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div
                className="relative h-[200px] sm:h-[500px] bg-cover bg-center text-white"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50 rounded-2xl" />
                <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-black rounded-b-2xl z-10" />
                <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-12 lg:px-20">
                  <div className="max-w-4xl space-y-4">
                    <motion.h1
                      className="text-[24px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-tight text-white"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {slide.title}
                    </motion.h1>

                    {slide.description && (
                      <motion.p
                        className="text-[16px] sm:text-[20px] text-white/80 leading-snug whitespace-pre-line"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        {slide.description}
                      </motion.p>
                    )}

                    <Link to="/contact">
                      <motion.button
                        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Contact Us
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Trusted Partners */}
      <div className="max-w-7xl mx-auto flex pr-8 flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left w-1/2 space-y-1 ">
          <p className="text-white/60 text-left pl-8   text-[12px] sm:text-[20px] font-semibold">
            Trusted by
          </p>
          <p className="text-white/60 text-[12px] pl-8 text-left sm:text-[20px] font-semibold">
            Leading Partners
          </p>
        </div>
        <div className="relative w-1/2 overflow-hidden ">
          <div className="pointer-events-none absolute top-0 left-0 h-full w-6 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-6 bg-gradient-to-l from-black to-transparent z-10" />
          <motion.div
            className="flex gap-6 sm:gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 4,
            }}
          >
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-4 min-w-max"
              >
                <img
                  src="../../assets/advarisk_logo.png"
                  alt="AdvaRisk"
                  className="h-8 sm:h-12 object-contain"
                />
                <span className="text-lg sm:text-4xl text-white font-semibold">
                  AdvaRisk
                </span>
                <div className="flex items-center space-x-1">
                  <img
                    src="../../assets/jansmarth_logo.png"
                    alt="JanSamarth"
                    className="h-8 sm:h-12 object-contain"
                  />
                  <span className="text-lg sm:text-4xl text-white">
                    JanSmarth
                  </span>
                  <span className="text-xs text-white align-super">®</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gradient-to-b from-black via-[#102118] to-black text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="flex items-center gap-2 text-green-400 font-bold text-lg sm:text-xl mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <img
              src="../../assets/data_products.png"
              alt="Logo"
              className="h-6 w-6"
            />
            DATA PRODUCTS
          </motion.div>

          <motion.h2
            className="text-[28px] sm:text-[40px] md:text-[64px] font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Our cutting edge solutions
          </motion.h2>

          <motion.p
            className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Build, customize, and launch your next AI-powered <br /> or SaaS
            Framer site with ease using Vertex.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCarousel;
