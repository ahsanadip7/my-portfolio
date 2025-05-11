
import './App.css'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import SocialLinks from './components/SocialLinks'
import ProjectSection from './components/ProjectSection'

function App() {
  

  return (
    <>
    <NavBar />
    <section id="home">
      <HeroSection />
    </section>
    <div className='bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]'>
     
    <section id="about">
      <AboutMe />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="projects">
      <ProjectSection></ProjectSection>
    </section>
    <section id="contact">
      <SocialLinks></SocialLinks>
    </section>
    

    </div>
    <Footer />
  </>
  
  )
}

export default App
