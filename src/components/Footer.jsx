import React from "react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#4af27e] text-black px-6 sm:px-10 pt-16 pb-36">
      <div className="flex flex-col md:flex-row justify-between items-start max-w-screen-xl mx-auto relative z-10 md:gap-32 gap-16">
        {/* Left Section (Desktop only) */}
        <div className="hidden md:flex flex-col justify-between gap-16 md:gap-32">
          <p className="text-xl md:text-2xl font-normal">
            Shape your Agri-Data with scale and precision
          </p>

          {/* Logo + Text */}
          <div className="relative -mb-20">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="../../assets/footer_logo.svg"
                  alt="Logo"
                  className="h-20"
                />
                <span className="text-[90px] mb-4 font-semibold leading-none -ml-5">
                  abhirang
                </span>
              </div>
              <p className="text-base">
                Copyright <span className="text-purple-500">&copy;</span> 2025
                ABHIRANG INTELLIGENCE LLP. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Links + text) */}
        <div className="flex flex-col gap-8">
          <p className="text-lg md:hidden font-normal max-w-xs">
            Shape your Agri-Data with scale and precision
          </p>

          <div className="text-left flex flex-col justify-start space-y-4 text-base md:text-lg font-normal">
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              X (Twitter)
            </a>
            <a
              href="https://www.linkedin.com/in/ujjwalhat/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a href="#terms" className="hover:underline">
              Terms of Use
            </a>
          </div>
        </div>

        {/* Mobile Logo + Copyright */}
        <div className="relative md:hidden  mt-16 -mb-[100px] ">
          <div className="flex items-center mb-4">
            <img
              src="../../assets/footer_logo.svg"
              alt="Logo"
              className="h-9"
            />
            <span className="text-4xl font-semibold leading-none -ml-3">
              abhirang
            </span>
          </div>
          <p className="text-[8px] max-w-xs">
            Copyright <span className="text-purple-500">&copy;</span> 2025
            ABHIRANG INTELLIGENCE LLP. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <img
        src="assets/footer_background.svg"
        alt="Background Design"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 w-[100vw] max-w-[500px] md:bottom-[-100px] md:right-0 md:left-auto md:translate-x-0 md:w-[80vw] md:max-w-[1000px] z-0 pointer-events-none select-none"
      />
    </footer>
  );
}
