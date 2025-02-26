"use client";

import { assests } from "../app/assets/assets"; // Ensure this path is correct
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center relative px-0 md:px-16 lg:px-24 pt-20"
    >
      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center md:space-y-6 space-y-4 z-20 pt-0 md:pt-5 px-5">
        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-[40px] font-extrabold text-gray-900 leading-tight"
        >
          Futurix Coaching App
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl sm:text-xl md:text-2xl font-bold text-gray-700"
        >
          Your Personal AI-Powered Coaching Companion
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-md font-semibold sm:text-lg md:text-xl text-gray-600"
        >
          Transform your life with Futurix Coaching App. Our AI-driven platform
          provides personalized coaching, track progress, and also create many
          things like MCQ, Flashcards, Question & Answer to help you achieve
          your goals faster and smarter.
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-md font-semibold sm:text-lg md:text-xl text-gray-600"
        >
          Tech Stack - React Native, Typescript, Google Firebase, Google Gemini.
        </motion.p>

        {/* Download Button */}
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          href="./futurixcoaching.apk" // Replace with your APK path
          download
          className="flex items-center gap-3 text-white bg-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 text-lg font-medium"
        >
          Download App
          <FontAwesomeIcon icon={faDownload} className="w-5 h-5" />
        </motion.a>
      </div>

      {/* Right Side: Image (Hidden on Mobile) */}
      <motion.div className="w-full md:w-1/2 h-[75vh] relative z-10 items-center justify-center mt-10 md:mt-5 hidden md:flex">
        <Image
          src={assests.header} // Replace with your image path
          alt="Header Image"
          width={800}
          height={600}
          className="object-cover w-full h-full rounded-lg shadow-lg blur"
          priority // Ensure the image loads first
        />
      </motion.div>
    </div>
  );
};

export default Header;
