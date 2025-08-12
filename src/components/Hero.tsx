import { motion } from "framer-motion";
import bg from "../assets/Background colour _ blue colours _ gradient _ texture - Copy.jpeg";
import FullscreenToggle from "../components/toggleFullscreen";
import { TextScroll } from "../components/ui/text-scroll";

const Hero = () => {
  return (
    <div className="min-h-screen w-full p-2 sm:p-3 lg:p-4 flex flex-col justify-center items-center">
      <motion.section
        className="relative text-center flex flex-col justify-center items-center flex-1 w-full rounded-xl sm:rounded-2xl gap-4 sm:gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12 xl:p-16"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Availability Badge */}
        <motion.p
          className="w-fit h-fit border text-xs sm:text-sm border-white/20 rounded-full py-2 px-4 sm:px-6 mb-2 sm:mb-4 backdrop-blur-sm bg-white/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Available for work
        </motion.p>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block sm:inline">Turning Ideas</span>{" "}
            <span className="block sm:inline">Into Digital</span>{" "}
            <span className="block sm:inline">Reality</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto text-white/54 leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I create modern web solutions that deliver exceptional user
            experiences and robust backend functionality.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-sm sm:max-w-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="/cv.pdf" // place your CV in /public
            download
            className="px-6 py-3 text-sm bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg text-white hover:bg-gray-500/20 transition-colors z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.9,
              transition: { type: "spring", stiffness: 400, damping: 17 },
            }}
          >
            Download CV
          </motion.a>

          <div className="flex justify-center">
            <FullscreenToggle />
          </div>
        </motion.div>
      </motion.section>

      {/* Scrolling Text */}
      <motion.div
        className="w-full mt-4 sm:mt-6 lg:mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <TextScroll
          className="h-fit w-full font-display text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold tracking-tighter text-black dark:text-white leading-tight sm:leading-tight md:leading-[3rem] lg:leading-[4rem] xl:leading-[5rem]"
          text="MERN Developer ❋ Full Stack Engineer ❋ React Specialist ❋ "
          default_velocity={5}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
