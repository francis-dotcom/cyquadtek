function ContactSection() {
  return (
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
                    required 
                  />
                </div>
                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required 
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required 
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={4}
                    placeholder="Message"
                    required 
                  />
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
  );
}

export default ContactSection;