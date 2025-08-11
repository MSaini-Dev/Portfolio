import { motion } from 'framer-motion'
// import SplitTextp from "../components/SplitTextp" 
// import SplitTextLines from "../components/SplitTextLines"
// import { TextReveal } from "../components/magicui/text-reveal";
import FlipLink from "../components/ui/text-effect-flipper"

const About = () => {
  return (
    <motion.section
      id="about"
      className="max-w-screen h-screen flex flex-col justify-center items-center gap-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
                      <FlipLink href="https://x.com/guri_who">About me</FlipLink>
  
          <p className='text-center text-[clamp(0.6rem,calc(3vw+2vh),4rem)] text-white/54 w-auto'>
            Lorem ipsum dolor sit, amet consectetur adipisicing . obcaecati ipsum provident, labore odio minima, voluptas iure nobis porro facilis.
          </p>


    </motion.section>
  )
}

export default About
