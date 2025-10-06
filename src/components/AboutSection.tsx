function AboutSection() {
  return (
    <section id="about" className="about section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          Who we are 
          <br />
        </p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
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
  );
}

export default AboutSection;