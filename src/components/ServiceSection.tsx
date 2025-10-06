function ServicesSection() {
  return (
    <section id="services" className="services section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          Featured Services
          <br />
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-5">
          
          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay={200}>
            <div className="service-item">
              <div className="img">
                <img src="/assets/img/services-1.jpg" className="img-fluid" alt="Cloud Engineering" />
              </div>
              <div className="details position-relative">
                <div className="icon"><i className="bi bi-cloud" /></div>
                <h3>Cloud Engineering</h3>
                <p>Designing, deploying, and scaling secure, reliable cloud infrastructure tailored to your business needs.</p>
              </div>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay={300}>
            <div className="service-item">
              <div className="img">
                <img src="/assets/img/services-2.jpg" className="img-fluid" alt="Web & Mobile Development" />
              </div>
              <div className="details position-relative">
                <div className="icon"><i className="bi bi-code-slash" /></div>
                <h3>Web & Mobile Development</h3>
                <p>Building responsive, modern applications that deliver seamless digital experiences to your customers.</p>
              </div>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay={400}>
            <div className="service-item">
              <div className="img">
                <img src="/assets/img/services-3.jpg" className="img-fluid" alt="Security & Compliance" />
              </div>
              <div className="details position-relative">
                <div className="icon"><i className="bi bi-shield-lock" /></div>
                <h3>Security & Compliance</h3>
                <p>Protecting your digital assets with best practices in cybersecurity, identity management, and compliance.</p>
              </div>
            </div>
          </div>
          {/* End Service Item */}

        </div>
      </div>
    </section>
  );
}

export default ServicesSection;