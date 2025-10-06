
import TabbedInterface from './components/TabbedInterface';
import TeamSection from "./components/TeamSection";
// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


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
        {/* About Section */}
        <section id="about" className="about section light-background">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>
              Who we are 
              <br />
            </p>
          </div>
        {/* <section id="about" className="about section"> */}
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                {/* <ReadySetDoneAnimation /> */}
                <img
                  src="/assets/img/team2.jpg"
                  className="img-fluid rounded-4 mb-4"
                  alt=""
                />
                <p className="fst-italic">
                  We are a full-stack cloud engineering and consulting company helping businesses build, scale, and secure their digital presence.
                  Our services cover the end-to-end technology lifecycle — from idea to deployment to long-term support.
                </p>
                <p className="fst-italic">
                  From cloud-native development and enterprise software solutions to web and mobile applications, we design and deliver technology that drives measurable business impact.
                </p>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={250}>
                <div className="content ps-0 ps-lg-5">
                  <p className="fst-italic">
                    At the core of our philosophy is partnership. We collaborate with startups, SMEs, and enterprises to understand their unique challenges, 
                    translate them into technical solutions, and deliver results with speed, transparency, and quality.
                  </p>
                  <div className="row mt-4 g-3">
                    <div className="col-6">
                      <img
                        src="/assets/img/open_for_business.jpg"
                        className="img-fluid rounded-4"
                        alt=""
                        style={{ height: '400px', objectFit: 'cover', width: '100%' }}
                      />
                    </div>
                    <div className="col-6">
                      <img
                        src="/assets/img/open_business.jpg"
                        className="img-fluid rounded-4"
                        alt=""
                        style={{ height: '400px', objectFit: 'cover', width: '100%' }}
                      />
                    </div>
                  </div>
                  <p className="fst-italic mt-4">
                    We don't just write code, we solve problems. By combining deep technical expertise with a consultative, client-first mindset, 
                    we tailor every solution to your unique challenges and goals. Our agile process ensures transparency, speed, and measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        {/* Features Section */}
        <TabbedInterface />        
        {/* /Features Section */}

        {/* Services 2 Section */}

        {/* /Services 2 Section */}
        {/* Testimonials Section */}

        {/* /Testimonials Section */}
        {/* /Meet the Team Section */}

        <TeamSection />
        {/* /Meet the Team Section */}
        

        {/* Contact Section */}
        <section id="contact" className="contact section light-background">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Feel Free to Contact Us</p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-6 ">
                <div className="row gy-4">
                  <div className="col-lg-12">
                    <div
                      className="info-item d-flex flex-column justify-content-center align-items-center"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <i className="bi bi-geo-alt" />
                      <h3>Address</h3>
                      <p>Remote, US</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                  <div className="col-md-6">
                    <div
                      className="info-item d-flex flex-column justify-content-center align-items-center"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <i className="bi bi-telephone" />
                      <h3>Call Us</h3>
                      <p>+1 404 600 9729</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                  <div className="col-md-6">
                    <div
                      className="info-item d-flex flex-column justify-content-center align-items-center"
                      data-aos="fade-up"
                      data-aos-delay={400}
                    >
                      <i className="bi bi-envelope" />
                      <h3>Email Us</h3>
                      <p>requests@cyquadtech.com</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                </div>
              </div>
              <div className="col-lg-6">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required />
                    
                    </div>
                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required />
                      
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required />
                
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={4}
                        placeholder="Message"
                        required />
                
        
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
        {/* /Contact Section */}
      </main>
      <Footer />
      
    </>

  )
}

export default App
