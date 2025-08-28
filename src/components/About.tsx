import { motion } from 'framer-motion'
import FlipLink from "../components/ui/text-effect-flipper"
import { TextScroll } from "../components/ui/text-scroll";

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen w-full flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-16  py-16 sm:py-16 lg:py-24 mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Section Title */}
      <motion.div
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <FlipLink href="">About me</FlipLink>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/80 leading-relaxed font-light">
          I'm Mohit Saini a passionate 22 year old <span className="text-white font-medium">MERN stack developer</span> who 
          transforms creative ideas into powerful digital experiences. With expertise in 
          <span className="text-white font-medium"> MongoDB, Express.js, React, and Node.js</span>, 
          I build full-stack applications that are both visually stunning and functionally robust.
        </p>

     <p className="text-[14px] text-white/60 leading-relaxed">
  My approach combines clean, scalable code with intuitive user interfaces, 
  ensuring every project delivers exceptional performance and user satisfaction. 
  I believe in writing maintainable code and staying current with the latest 
  technologies to create solutions that stand the test of time.
</p>

<p className="text-[14px] text-white/60 leading-relaxed">
  When I'm not coding, you'll find me exploring emerging technologies, 
  contributing to open-source projects, and sharing knowledge with the 
  developer community. I'm always excited to collaborate on innovative 
  projects that make a real impact.
</p>

      </motion.div>


 <motion.div
        className="w-full mt-4 bg-white pb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <TextScroll
          className="h-fit w-full font-display text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold tracking-tighter text-black  leading-tight sm:leading-tight md:leading-[3rem] lg:leading-[4rem] xl:leading-[5rem]"
          text="MERN Developer ❋ Full Stack Engineer ❋ React Specialist ❋ "
          default_velocity={5}
        />
      </motion.div>
    </motion.section>
  )
}

export default About