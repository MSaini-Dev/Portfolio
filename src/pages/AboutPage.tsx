import { motion } from "framer-motion";
import FlipLink from "../components/ui/text-effect-flipper"
import TechSlider from "../components/work/TechSlider";
import "devicon/devicon.min.css";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <> 
    <Helmet>
        <title>About - Mohit Saini</title>
        <meta
          name="description"
          content="Learn more about Mohit Saini, a Frontend Developer passionate about React, MERN stack, and building modern web apps."
        />
        <meta name="keywords" content="About Mohit Saini, Frontend Developer, Web Developer, React, MERN" />
        <meta property="og:title" content="About - Mohit Saini" />
        <meta property="og:description" content="Know more about Mohit Saini, frontend developer and MERN stack enthusiast." />
        <meta property="og:url" content="https://portfolio-mohit-saini.vercel.app/about" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://portfolio-mohit-saini.vercel.app/preview.png" />
      </Helmet>
    <motion.div
      className="min-h-screen w-full flex flex-col justify-start items-center pt-24  pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-6xl w-full flex flex-col justify-start items-center space-y-8 sm:space-y-12 lg:space-y-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Header Section */}
        <div className="w-full flex flex-col justify-center items-center gap-4 sm:gap-6 text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <FlipLink href="">About me</FlipLink>
          </div>
          <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-white/54 px-2">
            A curated collection of projects that blend creativity with functionality, 
            each crafted to solve real problems and deliver meaningful user experiences.
          </p>
        </div>

        {/* About Content Section */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
          {/* Left Column - Title */}
          <div className="w-full lg:w-1/3 flex justify-start lg:justify-center items-start">
            <motion.h2 
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              About Me
            </motion.h2>
          </div>

          {/* Right Column - Content */}
          <motion.div 
            className="w-full lg:w-2/3 flex flex-col justify-start items-start gap-4 sm:gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
              Hello! I'm Mohit Saini, a passionate and dedicated Fullstack Developer based in Jaipur, with a strong command of the MERN stack (MongoDB, Express.js, React.js, and Node.js). I specialize in building modern, responsive, and user-centric web applications from the ground up. My development process is driven by a commitment to writing clean, efficient code and implementing best practices in version control with Git to create scalable and impactful digital solutions.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
             My expertise spans both front-end and back-end development, where I leverage technologies like React, Tailwind CSS, and TypeScript to create dynamic and intuitive user interfaces. On the server side, I enjoy architecting robust systems using Node.js, Express.js, and RESTful APIs, with a focus on secure authentication, real-time functionality using WebSockets, and efficient database management with MongoDB. I am particularly adept at integrating powerful third-party services like Supabase and Firebase to enhance application capabilities.
            </p>
          </motion.div>
        </div>

        {/* Tech Slider Section */}
        <motion.div 
          className="w-full flex justify-center items-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="w-full max-w-full">
            <TechSlider />
          </div>
        </motion.div>

        {/* Skills/Experience Section (Optional Enhancement) */}
        <motion.div 
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Frontend</h3>
            <p className="text-sm sm:text-base text-white/60">
              React, TypeScript, Tailwind CSS
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Backend</h3>
            <p className="text-sm sm:text-base text-white/60">
              Node.js, Express.js, MongoDB, RESTful APIs
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Tools</h3>
            <p className="text-sm sm:text-base text-white/60">
              Git, Cursor, VS Code, Vercel, Figma, Render
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </>
  );
};

export default AboutPage;