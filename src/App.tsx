
// import ReadySetDoneAnimation from './components/ReadySetDoneAnimation';
// import TabbedInterface from './components/TabbedInterface';
import  { useState } from 'react';
import TabbedInterface from './components/TabbedInterface';
import TeamSection from "./components/TeamSection";


function App() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="index.html" className="logo d-flex align-items-center me-auto">
            {/* Uncomment the line below if you also wish to use an image logo */}
            <img src="/assets/img/logo3.png" alt=""/>
            {/* <h1 className="sitename">CYQUADTECH</h1> */}
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              {/* <li>
                <a href="#portfolio">Portfolio</a>
              </li> */}
              <li>
                <a href="#team">Team</a>
              </li>
              {/* <li className="dropdown">
                <a href="#">
                  <span>Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </a>
                <ul>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li> */}
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
          <a className="cta-btn" href="index.html#about">
            Get Started
          </a>
        </div>  
      </header>
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
                  {/* <div className="position-relative mt-4">
                    <img
                      src="/assets/img/about-2.jpg"
                      className="img-fluid rounded-4"
                      alt=""
                    />
                    <a
                      href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                      className="glightbox pulsating-play-btn"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /About Section */}
        {/* Stats Section */}
        <section id="stats" className="stats section light-background">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-emoji-smile color-blue flex-shrink-0" />
                  <div>
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={232}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
              {/* End Stats Item */}
              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-journal-richtext color-orange flex-shrink-0" />
                  <div>
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={521}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Projects</p>
                  </div>
                </div>
              </div>
              {/* End Stats Item */}
              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-headset color-green flex-shrink-0" />
                  <div>
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={1463}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Hours Of Support</p>
                  </div>
                </div>
              </div>
              {/* End Stats Item */}
              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-people color-pink flex-shrink-0" />
                  <div>
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={15}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Hard Workers</p>
                  </div>
                </div>
              </div>
              {/* End Stats Item */}
            </div>
          </div>
        </section>
        {/* /Stats Section */}
        {/* Services Section */}
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
      {/* /Services Section */}

       
        {/* Clients Section */}
        
        {/* /Clients Section */}

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
      <footer id="footer" className="footer dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Cyquadtech</span>
              </a>
              <div className="footer-contact pt-3">
                <p>Remote</p>
                <p>Atlanta, GA </p>
                {/* <p className="mt-3">
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                </p> */}
                <p>
                  <strong>Email:</strong> <span>requests@cyquadtech.com</span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right" /> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <a href="#">About us</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <a href="#">Services</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right" /> <a href="#">Web Services</a>
                </li>
                 <li>
                  <i className="bi bi-chevron-right" /> <a href="#">Mobile Services</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Cloud Infrastructure</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Security & Compliance</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Business Consulting</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Subscribe to our newsletter and receive the latest news about our
                products and services!
              </p>
              <form
                action="forms/newsletter.php"
                method="post"
                className="php-email-form"
              >
                <div className="newsletter-form">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your subscription request has been sent. Thank you!
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">Dewi</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you've purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
            Distributed by <a href="“https://themewagon.com">ThemeWagon</a>
          </div>
          <a href="“https://themewagon.com"></a>
        </div>
        <a href="“https://themewagon.com"></a>
      </footer>
      <a href="“https://themewagon.com">{/* Scroll Top */}</a>
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Preloader */}
      {/* <div id="preloader" /> */}
      {/* Vendor JS Files */}
      {/* Main JS File */}
    </>

  )
}

export default App
