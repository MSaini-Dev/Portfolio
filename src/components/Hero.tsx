// import React from 'react'
import { motion } from 'framer-motion'
import bg from "../assets/Background colour _ blue colours _ gradient _ texture - Copy.jpeg"
// import bg from "../assets/ccdb99f97ec073910823147f6d015e5f.jpg"
// import bg2 from "../assets/black and white color GIF by Erica Anderson.gif"
import FullscreenToggle from "../components/toggleFullscreen"
import {TextScroll} from "../components/ui/text-scroll"

const Hero = () => {
  return (
    <div className='min-h-screen max-w-screen p-3 flex flex-col justify-center items-center'>
       <motion.section
      className="relative text-center  flex flex-col justify-center items-center grow-1 w-full rounded-2xl gap-4 p-auto"
      style={{ 
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
    <motion.p className='w-fit h-fit border text-sm border-white/20 rounded-[50px] py-1 px-4 mb-5'>
        Available for work
    </motion.p>
    <div>      <motion.h1
        className="text-7xl font-normal mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Turning Ideas Into Digital Reality
      </motion.h1>
      
      <motion.p
        className=" mb-8 max-w-2xl mx-auto text-white/54 text-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I create modern web solutions that deliver exceptional user experiences and robust backend functionality. 
      </motion.p>
      </div>
      <motion.div
        className="flex gap-4 justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.button
          className="px-6 py-3 text-sm bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg text-white hover:bg-gray-500/20 transition-colors  z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.button>
        
        <FullscreenToggle />
      </motion.div>
    </motion.section>
           <TextScroll
      className=" h-fit w-full font-display text-center text-4xl font-semibold tracking-tighter  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="MERN Developer  ❋ "
      default_velocity={3}
    />
    </div>
  )
}

export default Hero
