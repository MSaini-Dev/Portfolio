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

      <div className="w-full flex flex-col justify-center items-center gap-8 p-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className=" w-full h-fit flex flex-col justify-center items-start bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.div className="relative w-full aspect-video border border-border rounded-lg overflow-hidden ">
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                          className='px-3 py-1 text-sm  bg-white/10 backdrop-blur-lg border border-white/20 rounded-md shadow-lg text-white hover:bg-gray-500/20 transition-colors z-10'
                >
                  {tag}
                </span>
              ))}
            </div>
            <button className="absolute top-3 right-3  p-1  w-fit h-fit text-sm bg-white/10 backdrop-blur-lg border border-white/20 rounded-md shadow-lg text-white hover:bg-gray-500/20 transition-colors z-10 flex">
            <ArrowUpRight />
            </button>
            </motion.div>

            <div className="p-2 ml-2">
              <h3 className="text-white font-semibold mb-1">{project.title}</h3>
              <p className="text-white/54 ">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.button className="flex justify-center items-center">See all<ArrowRight /></motion.button>
    </motion.section>
  );
};

export default Projects;
