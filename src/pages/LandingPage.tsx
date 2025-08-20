import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Thanks from "../components/Thanks"
import { Helmet } from 'react-helmet-async'
const LandingPage = () => {
  return (
    <> <Helmet>
    <title>Mohit Saini - Portfolio</title>
    <meta
      name="description"
      content="Welcome to Mohit Saini's portfolio. Frontend Developer skilled in React, TypeScript, and MERN stack. Explore my work and CV."
    />
    <meta name="keywords" content="Mohit Saini, Portfolio, Frontend Developer, React, TypeScript, MERN" />
    <meta property="og:title" content="Mohit Saini - Portfolio" />
    <meta property="og:description" content="Frontend Developer portfolio showcasing projects, skills, and CV." />
    <meta property="og:url" content="https://portfolio-mohit-saini.vercel.app/" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://portfolio-mohit-saini.vercel.app/preview.png" />
  </Helmet>
    <div >
      <Hero />

      <About />
      <Projects />
      <Thanks />
    </div>
    </>
  )
}

export default LandingPage
