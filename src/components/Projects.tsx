import { motion } from "framer-motion";
import FlipLink from "./ui/text-effect-flipper"
import { ArrowRight ,ArrowUpRight } from 'lucide-react';
import ToggleSwitch from "../components/work/work1";
import TechSlider from "../components/work/TechSlider";
import BackgroundContainer from "./work/BackgroundContainer";
import bgImage from "../assets/Background colour _ blue colours _ gradient _ texture - Copy.jpeg"
import maskImage from "../assets/gif.gif"

const Projects = () => {
const projects = [
    {
      id: 1,
      title: "Toggle Button",
      description: "A toggle Button use mix-blend-difference property",
      image: "https://via.placeholder.com/400x300",
      tags: ["Component","React js", "mix-blend-difference"],
      comp: (
        <ToggleSwitch
          option1="Dark"
          option2="Light"
          duration={500}
          bgColor="bg-white"
          onToggle={() => console.log("New position")}
        />
      ),
    },
    {
      id: 2,
      title: "Infinite Logo Scroll",
      description:
        "A infinite image scroll use devicon for icon",
      image: "https://via.placeholder.com/400x300",
      tags: ["Component","React js", "Devicon"],
      comp: <TechSlider />,
    },
    {
      id: 3,
      title: "MaskReveal",
      description:
        "Reveals content through an ink-like mask",
      image: "https://via.placeholder.com/400x300",
      tags: ["Component","React js", "Mask Iamge"],
      comp: <BackgroundContainer bg={bgImage} zIndex="10" mask={maskImage} className="rounded-xl shadow-lg flex justify-end items-end" >
      <div className="p-6 text-white flex flex-col justify-end items-end z-20">
        <h2 className="text-2xl font-bold">Hello World</h2>
        <p>This is inside the card!</p>
      </div>
    </BackgroundContainer>,
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
            <motion.div className="relative w-full aspect-video  border border-border rounded-lg overflow-hidden flex justify-center items-center">
              {/* Tags - Responsive positioning and sizing */}
              <div className="absolute top-2 left-2 md:top-3 md:left-3 flex flex-wrap gap-1 md:gap-2 max-w-[60%] sm:max-w-[70%]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1+ z-30 md:px-3 md:py-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-md shadow-lg text-white hover:bg-gray-500/20 transition-colors truncate"
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
