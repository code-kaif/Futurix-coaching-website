"use client";
import Image from "next/image";
import React from "react";
import { assests } from "../app/assets/assets.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full h-[10vh] fixed z-50 left-0 right-0 px-5 md:px-20 py-3 top-0 flex justify-between items-center bg-white shadow-md">
        {/* Logo and Name */}
        <div className="flex items-center gap-2">
          <Image
            src={assests.icon} // Update the path to your logo
            alt="Futurix Coaching Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <h1 className="font-bold md:text-3xl text-xl text-gray-800">
            Futurix Coaching
          </h1>
        </div>

        {/* Download Button */}
        <button className="flex items-center md:gap-2 gap-1 bg-blue-600 text-white md:px-5 px-3 md:py-2 py-1.5 rounded-md hover:bg-blue-700 transition-all duration-300">
          <a
            className="md:space-x-2 space-x-1"
            href="./futurixcoaching.apk"
            download
          >
            <span>Download</span>
            <FontAwesomeIcon icon={faDownload} className="w-5 h-5" />
          </a>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
