"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Food Delivery App",
      description:
        "A food delivery app with Stripe payment gateway and an admin dashboard for managing orders and menus.",
      image:
        "https://www.gloriafood.com/wp-content/uploads/2021/03/How_to_Improve_Your_Food_Delivery_Service_in_2022_-_fb.png",
      previewLink: "https://parmal-frontned.onrender.com/",
      sourceCodeLink: "https://github.com/code-kaif/Food.git",
    },
    {
      id: 2,
      title: "AI Image Generator",
      description:
        "An AI-powered text-to-image generator with beautiful animations and a user-friendly interface.",
      image:
        "https://cdn.mos.cms.futurecdn.net/cVEwYismnFpRHpPkEavyMG-1020-80.png",
      previewLink: "https://texttoimagegen.onrender.com/",
      sourceCodeLink: "https://github.com/code-kaif/AiTextToImageGenerator.git",
    },
    {
      id: 3,
      title: "Book Store App",
      description:
        "A book store app where users can read books with dark and light mode for a comfortable reading experience.",
      image:
        "https://cdn.pixabay.com/photo/2013/07/30/11/50/book-168824_640.jpg",
      previewLink: "https://book-app-green.vercel.app/",
      sourceCodeLink: "https://github.com/code-kaif/BookApp.git",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
    >
      <div className="md:min-w-[60vw] md:max-w-[80vw] min-w-[90vw] w-full mx-auto">
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl font-bold text-center text-gray-900 mb-8"
        >
          My Projects
        </motion.h1>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    Preview
                  </a>
                  <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
