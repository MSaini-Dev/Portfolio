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
          I'm Mohit Saini, an <span className="text-white font-medium">AI & Full-Stack Engineer</span> specializing in 
          <span className="text-white font-medium"> Generative AI, Multi-Agent Systems, RAG, Machine Learning, and Enterprise Data Pipelines</span>. 
          I build intelligent, production-ready applications that transform complex data into autonomous digital experiences.
        </p>

     <p className="text-[14px] text-white/60 leading-relaxed">
  My technical stack spans advanced AI frameworks (<span className="text-white font-medium">PyTorch, Scikit-Learn, LangChain, LangGraph, LlamaIndex, Ragas</span>), 
  scalable microservices with <span className="text-white font-medium">FastAPI, Docker & PostgreSQL/MongoDB/SQL</span>, 
  and big data processing using <span className="text-white font-medium">PySpark, Pandas, Databricks, and Palantir</span>.
</p>

<p className="text-[14px] text-white/60 leading-relaxed">
  Whether architecting autonomous multi-agent workflows, fine-tuning RAG systems, or orchestrating data pipelines, 
  I focus on clean, scalable code and cutting-edge AI integration to create solutions that deliver real-world impact.
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
          text="AI Engineer ❋ Multi-Agent Systems ❋ GenAI & RAG ❋ Data Engineering ❋ Full Stack ❋ "
          default_velocity={5}
        />
      </motion.div>
    </motion.section>
  )
}

export default About