import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-black/90 backdrop-blur-sm border-b border-[#141414]">
        <div className="w-full px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center ml-2">
              <img
                src="../../assets/logoNav.svg"
                alt="Ujjwal logo"
                className="h-6 w-13"
              />
              <h1 className="-ml-2 mb- text-white text-[23px] font-normal font-poppins tracking-normal">
                abhirang
              </h1>
            </Link>

            <Link to="/contact">
              <button className="hover:bg-[#1a1a1a] text-white border border-[#1a1a1a] px-4 py-1 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md transform hover:scale-105">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
