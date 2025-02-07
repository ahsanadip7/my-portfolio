
import './App.css'
import AboutMe from './components/AboutMe'
import ContactSection from './components/contactSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import ProjectSection from './components/ProjectSection'
import Skills from './components/Skills'
import SocialLinks from './components/SocialLinks'

function App() {
  

  return (
    <>
    <NavBar />
    <section id="home">
      <HeroSection />
    </section>
    <section id="social-links">
      <SocialLinks />
    </section>
    <section id="about">
      <AboutMe />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="projects">
      <ProjectSection />
    </section>
    <section id="contact">
      <ContactSection />
    </section>
    <Footer />
  </>
  
  )
}

export default App
