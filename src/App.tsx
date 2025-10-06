
import TabbedInterface from './components/TabbedInterface';
import TeamSection from "./components/TeamSection";
// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import HeroSection from "./components/HeroSection";


function App() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
       <Header />
      <main className="main">
        <HeroSection />
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
