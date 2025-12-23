// Footer.jsx
import React from "react";
import logo from "../assets/logo.jpg"; // Ensure path is correct
import { FaYoutube, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 mt-5">
      {/* Top section: Logo + Links */}
      <div className="mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-5 gap-12 items-start max-w-6xl">
        {/* Logo */}
        <div className="flex justify-center md:justify-start md:pr-6">
          <img src={logo} alt="Logo" className="h-24 w-auto" />
        </div>

        {/* About */}
        <div className="text-xs">
          <h3 className="font-semibold mb-2">ABOUT</h3>
          <ul className="space-y-1">
            <li>
              <a href="#who-we-are" className="hover:text-blue-500 cursor-pointer">Who are We</a>
            </li>
            <li>
              <a href="#our-organisation" className="hover:text-blue-500 cursor-pointer">Our Organisation</a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="text-xs">
          <h3 className="font-semibold mb-2">PRODUCTS</h3>
          <ul className="space-y-1">
            <li>
              <a href="#about" className="hover:text-blue-500 cursor-pointer">About</a>
            </li>
            <li>
              <a href="#bearers" className="hover:text-blue-500 cursor-pointer">Bearers</a>
            </li>
            <li>
              <a href="#gallerydocuments" className="hover:text-blue-500 cursor-pointer">Gallery</a>
            </li>
            <li>
              <a href="#gallerydocuments" className="hover:text-blue-500 cursor-pointer">Documents</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 cursor-pointer">Contact</a>
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div className="text-xs">
          <h3 className="font-semibold mb-2">LOCATIONS</h3>
          <p>118, Gotmare Complex,</p>
          <p>Gokulpeth, Nagpur,</p>
          <p>Maharashtra, India</p>
        </div>

        {/* Contact */}
        <div className="text-xs">
          <h3 className="font-semibold mb-2">CONTACT</h3>
          <p>+91 50 470 96 70</p>
          <p>+91 426 02 108</p>
          <p>+91 426 02 109</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-4 py-4 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-gray-600">
        <p className="text-center md:text-left">
          © ONGC 2025. All rights reserved • Designed with <span className="text-red-500">❤️</span> by TARS AI Pvt Ltd
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-2 md:mt-0 justify-center md:justify-end text-gray-600">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 cursor-pointer">
            <FaYoutube size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 cursor-pointer">
            <FaLinkedin size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 cursor-pointer">
            <FaFacebook size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 cursor-pointer">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
