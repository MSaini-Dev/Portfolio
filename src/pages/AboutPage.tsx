import { motion } from "framer-motion";

// import SplitTextLines from "../components/SplitTextLines";
// import SplitTextp from "../components/SplitTextp";
import FlipLink from "../components/ui/text-effect-flipper"
import TechSlider from "../components/work/TechSlider";
import "devicon/devicon.min.css";



const AboutPage = () => {
  return (
    <motion.div
      className="max-w-screen h-fit  flex flex-col justify-center items-center py-10 px-3"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className=" max-w-screen  h-screen dark:prose-invert w-full  flex flex-col justify-start items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="mt-30 mb-12  flex flex-col justify-center items-center gap-4 text-center">
                      <FlipLink href="https://x.com/guri_who" >About me</FlipLink>
              <p className='w-200 text-sm text-white/54'>A curated collection of projects that blend creativity with functionality, each crafted to solve real problems and deliver meaningful user experiences.</p>
        
        </div>

      

   
      <div className="h-fit w-full flex justify-start items-start">
        <div className="h-fit w-1/2 flex justify-start items-start text-base ">
          <motion.p>About Me</motion.p>
        </div>
        <motion.div className="h-fit w-1/2 flex flex-col justify-start items-start text-base gap-3">
          <p className="w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            possimus numquam placeat neque expedita ab odio non animi adipisci
            ratione, voluptates incidunt harum recusandae! Minima et facilis
            obcaecati nam minus?
          </p>
          <p className="  w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            possimus numquam placeat neque expedita ab odio non animi adipisci
            ratione, voluptates incidunt harum recusandae! Minima et facilis
            obcaecati nam minus?
          </p>
        </motion.div>
        
      </div>
         <motion.div className="text-black max-w-full text-8xl flex justify-center  overflow-hidden">
        <TechSlider />
      </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
