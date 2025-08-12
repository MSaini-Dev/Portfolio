import { motion } from 'framer-motion'
import FlipLink from "../components/ui/text-effect-flipper"

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen w-full flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
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
        <FlipLink href="https://x.com/guri_who">About me</FlipLink>
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
          I'm a passionate <span className="text-white font-medium">MERN stack developer</span> who 
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

      {/* Skills/Highlights */}
      {/* <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="text-center p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2">Frontend</h3>
          <p className="text-sm sm:text-base text-white/60">React, Next.js, TypeScript, Tailwind CSS</p>
        </div>
        
        <div className="text-center p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2">Backend</h3>
          <p className="text-sm sm:text-base text-white/60">Node.js, Express.js, MongoDB, PostgreSQL</p>
        </div>
        
        <div className="text-center p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2">Tools</h3>
          <p className="text-sm sm:text-base text-white/60">Git, Docker, AWS, Vercel, Figma</p>
        </div>
        
        <div className="text-center p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2">Focus</h3>
          <p className="text-sm sm:text-base text-white/60">Performance, UX/UI, Clean Code, Innovation</p>
        </div>
      </motion.div> */}

      {/* Call to Action */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        
      </motion.div>
    </motion.section>
  )
}

export default About