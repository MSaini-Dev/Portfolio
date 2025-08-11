import React from "react";
import { motion } from "framer-motion";
import FlipLink from "../components/ui/text-effect-flipper";
import { ArrowUpRight } from "lucide-react";
import ToggleSwitch from "../components/work/work1";
import TechSlider from "../components/work/TechSlider";
import Card from "../components/work/Card";
const WorkPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      image: "https://via.placeholder.com/400x300",
      tags: ["React", "Node.js", "MongoDB"],
      comp: (
        <ToggleSwitch
          option1="Dark"
          option2="Light"
          duration={500}
          bgColor="bg-white"
          onToggle={(pos) => console.log("New position:", pos)}
        />
      ),
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      image: "https://via.placeholder.com/400x300",
      tags: ["Vue.js", "Socket.io", "PostgreSQL"],
      comp: <TechSlider />,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website with dark mode support",
      image: "https://via.placeholder.com/400x300",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      comp: <Card />,
    },
  ];

  return (
    <motion.div
      className="py-10 px-3 w-full flex flex-col justify-start items-center bg-black"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
 <motion.div 
  className="text-white mt-16 md:mt-24 lg:mt-30 mb-8 md:mb-10 lg:mb-12 text-center w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl flex flex-col justify-center items-center gap-3 md:gap-4 lg:gap-6 bg-black px-4 md:px-6 lg:px-8"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  <FlipLink href="https://x.com/guri_who">My work</FlipLink>
  
  <p 
    className="text-white/54 w-full leading-relaxed"
    style={{ fontSize: "14px", lineHeight: "1.6" }}
  >
    A glimpse into my journey, skills, and passion for building digital
    solutions that merge design elegance with technical precision.
  </p>
</motion.div>

      <div className="w-full  columns-[600px] gap-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="w-full h-fit mb-3 md:mb-4 lg:mb-6 flex bg-black flex-col justify-center items-start border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.div className="relative w-full aspect-video border border-border rounded-lg overflow-hidden flex justify-center items-center">
              {/* Tags - Responsive positioning and sizing */}
              <div className="absolute top-2 left-2 md:top-3 md:left-3 flex flex-wrap gap-1 md:gap-2 max-w-[60%] sm:max-w-[70%]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 md:px-3 md:py-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-md shadow-lg text-white hover:bg-gray-500/20 transition-colors z-10 truncate"
                    style={{ fontSize: "14px" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Component */}
              {project.comp}

              {/* Action Button - Responsive sizing */}
              <button className="absolute top-2 right-2 md:top-3 md:right-3 p-1 md:p-2 w-fit h-fit bg-white/10 backdrop-blur-lg border border-white/20 rounded-md shadow-lg text-white hover:bg-gray-500/20 transition-colors z-10 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </motion.div>

            {/* Content Section - Responsive padding and typography */}
            <div className="p-3 md:p-4 lg:p-5 w-full">
              <h3
                className="text-white font-semibold mb-2 md:mb-3 leading-tight"
                style={{ fontSize: "16px" }}
              >
                {project.title}
              </h3>
              <p
                className="text-white/54 leading-relaxed"
                style={{ fontSize: "14px", lineHeight: "1.5" }}
              >
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkPage;
