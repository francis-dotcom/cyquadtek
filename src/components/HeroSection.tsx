function HeroSection() {
  return (
    <section id="hero" className="hero section dark-background">
      <img src="/assets/img/aero3.jpg" alt="hero_office" />
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
        </div>
      </div>
    </section>
  );
}

export default HeroSection;