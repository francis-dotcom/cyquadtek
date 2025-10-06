
import TabbedInterface from './components/TabbedInterface';
import TeamSection from "./components/TeamSection";
// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";


function App() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
       <Header />
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          <img src="/assets/img/aero3.jpg" alt="hero_office" />
          {/* <img src="/assets/img/hero-bg.jpg" alt="" data-aos="fade-in" /> */}
          <div className="container d-flex flex-column align-items-center">
            <h2 data-aos="fade-up" data-aos-delay={100} style={{ textTransform: 'none' }}>
              Think.  Ideate.  Create.
            </h2>
            <p data-aos="fade-up" data-aos-delay={200}>
              Business Solutions 
            </p>
            <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay={300}>
              <a href="#about" className="btn-get-started">
                Get Started
              </a>
              {/* <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <i className="bi bi-play-circle" />
                <span>Watch Video</span>
              </a> */}
            </div>
          </div>
        </section>
        {/* /Hero Section */}
        <AboutSection />
        <ServicesSection />
        <TabbedInterface />        
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      
    </>

  )
}

export default App
