import { motion } from "framer-motion";
import FlipLink from "./ui/text-effect-flipper"
import { ArrowRight ,ArrowUpRight } from 'lucide-react';
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      image: "https://via.placeholder.com/400x300",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      image: "https://via.placeholder.com/400x300",
      tags: ["Vue.js", "Socket.io", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website with dark mode support",
      image: "https://via.placeholder.com/400x300",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
    },
  ];

  return (
    <motion.section
      id="projects"
      className="max-w-screen h-fit flex flex-col justify-center items-center mb-24 gap-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl font-bold  text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <FlipLink href="https://x.com/guri_who">Feature Work</FlipLink>
      </motion.h2>

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
      <motion.a href="/work" className="flex justify-center items-center">See all<ArrowRight /></motion.a>
    </motion.section>
  );
};

export default Projects;
