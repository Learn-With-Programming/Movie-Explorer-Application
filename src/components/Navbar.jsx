import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { RiMovieAiFill } from "react-icons/ri";

const Navbar = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-950/90 backdrop-blur-md border-b border-gray-800/80 text-white sticky top-0 z-50 py-3.5 px-4 sm:px-8 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <div
          className="text-xl font-black tracking-tight cursor-pointer flex items-center gap-2 hover:opacity-90 transition"
          onClick={() => handleNavClick("home")}
        >
          <span className="text-red-600">
            <RiMovieAiFill />
          </span>
          <span className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            MovieExplorer
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <button
            onClick={() => handleNavClick("home")}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              currentPage === "home"
                ? "text-white bg-gray-800/80 font-semibold"
                : "text-gray-400 hover:text-white hover:bg-gray-800/40"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick("movies")}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              currentPage === "movies"
                ? "text-white bg-gray-800/80 font-semibold"
                : "text-gray-400 hover:text-white hover:bg-gray-800/40"
            }`}
          >
            Explore
          </button>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("movies")}
            className="bg-red-600 hover:bg-red-700 active:scale-95 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-red-600/20 transition-all duration-200"
          >
            Browse Movies
          </button>
        </div>

        {/* Mobile Hamburger Button using react-icons */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-2 text-2xl transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-7 h-7" />
            ) : (
              <HiMenu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 pb-4 border-t border-gray-800 flex flex-col gap-3 px-2">
          <button
            onClick={() => handleNavClick("home")}
            className={`text-left px-4 py-2 rounded-lg font-medium transition-all ${
              currentPage === "home"
                ? "text-white bg-gray-800 font-semibold"
                : "text-gray-300 hover:bg-gray-800/50"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick("movies")}
            className={`text-left px-4 py-2 rounded-lg font-medium transition-all ${
              currentPage === "movies"
                ? "text-white bg-gray-800 font-semibold"
                : "text-gray-300 hover:bg-gray-800/50"
            }`}
          >
            Explore
          </button>

          <button
            onClick={() => handleNavClick("movies")}
            className="w-full mt-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md transition-all text-center"
          >
            Browse Movies
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
