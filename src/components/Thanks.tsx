import { motion } from 'framer-motion'
import bg from "../assets/Background colour _ blue colours _ gradient _ texture - Copy.jpeg"

const Thanks = () => {
  return (
    <motion.section
      className="relative text-center flex flex-col justify-center items-center min-h-[350px] md:min-h-[450px] lg:min-h-[550px] w-auto rounded-2xl gap-4 md:gap-6 lg:gap-8 py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 mx-3"
      style={{ 
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p 
        className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Thanks for visiting
      </motion.p>
      
      <motion.p 
        className='text-white/54 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl w-full px-4'
        style={{ fontSize: '14px', lineHeight: '1.6' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        I truly appreciate you taking the time to explore my work. Every project here reflects my passion for creating, problem-solving, and delivering meaningful results. If something caught your eye, or if you have an idea we could bring to life together.
      </motion.p>
      
      <motion.button
        className='px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 font-semibold text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 z-10 mt-2 md:mt-4'
        style={{ fontSize: '14px' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Let's Connect
      </motion.button>
    </motion.section>
  )
}

export default Thanks