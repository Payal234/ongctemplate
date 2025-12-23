import { useState } from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Function to handle mobile link click
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop Navbar */}
        <div className="relative flex items-center justify-between h-28">
          
          {/* Left Menu */}
          <nav className="hidden md:flex gap-8 text-base font-medium text-gray-800">
            <a href="#about" className="cursor-pointer hover:text-sky-500 transition-colors">ABOUT</a>
            <a href="#bearers" className="cursor-pointer hover:text-sky-500 transition-colors">BEARERS</a>
            <a href="#gallery" className="cursor-pointer hover:text-sky-500 transition-colors">GALLERY</a>
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Right Menu */}
          <nav className="hidden md:flex gap-8 text-base font-medium text-gray-800 items-center">
            <a href="#documents" className="hover:text-sky-500 transition-colors">DOCUMENTS</a>
            <a href="#contact" className="hover:text-sky-500 transition-colors">CONTACT</a>
            <span className="text-sky-500 font-semibold cursor-pointer">ENGLISH</span>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl focus:outline-none"
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-6 text-center">
            <nav className="flex flex-col gap-4 text-base font-medium text-gray-700">
              <a href="#about" onClick={handleLinkClick} className="cursor-pointer hover:text-sky-500 transition-colors">ABOUT</a>
              <a href="#bearers" onClick={handleLinkClick} className="cursor-pointer hover:text-sky-500 transition-colors">BEARERS</a>
              <a href="#gallery" onClick={handleLinkClick} className="cursor-pointer hover:text-sky-500 transition-colors">GALLERY</a>
              <a href="#documents" onClick={handleLinkClick} className="cursor-pointer hover:text-sky-500 transition-colors">DOCUMENTS</a>
              <a href="#contact" onClick={handleLinkClick} className="cursor-pointer hover:text-sky-500 transition-colors">CONTACT</a>
              <span className="text-sky-500 font-semibold cursor-pointer" onClick={handleLinkClick}>ENGLISH</span>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
