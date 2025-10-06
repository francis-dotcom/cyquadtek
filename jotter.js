  Features Section
        <section id="features" className="features section">
          <div className="container">
            <ul
              className="nav nav-tabs row d-flex"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <li className="nav-item col-3">
                <a
                  className={`nav-link ${activeTab === 1 ? 'active show' : ''}`}
                  onClick={() => setActiveTab(1)}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="bi bi-binoculars" />
                  <h4 className="d-none d-lg-block">
                    Cloud Infrastructure
                  </h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a
                  className={`nav-link ${activeTab === 2 ? 'active show' : ''}`}
                  onClick={() => setActiveTab(2)}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="bi bi-box-seam" />
                  <h4 className="d-none d-lg-block">
                    Web Development
                  </h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a
                  className={`nav-link ${activeTab === 3 ? 'active show' : ''}`}
                  onClick={() => setActiveTab(3)}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="bi bi-brightness-high" />
                  <h4 className="d-none d-lg-block">Security Solutions</h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a
                  className={`nav-link ${activeTab === 4 ? 'active show' : ''}`}
                  onClick={() => setActiveTab(4)}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="bi bi-command" />
                  <h4 className="d-none d-lg-block">Consulting</h4>
                </a>
              </li>
            </ul>
            {/* End Tab Nav */}
            <div className="tab-content" data-aos="fade-up" data-aos-delay={200}>
              <div className={`tab-pane fade ${activeTab === 1 ? 'active show' : ''}`}>
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Modern Cloud Infrastructure Solutions</h3>
                    <p className="fst-italic">
                      We design and deploy scalable, secure cloud environments tailored to your business needs.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check2-all" />
                        <span>Custom cloud architecture design and implementation</span>
                      </li>
                      <li>
                        <i className="bi bi-check2-all" />
                        <span>Multi-cloud strategy and migration services</span>
                      </li>
                      <li>
                        <i className="bi bi-check2-all" />
                        <span>24/7 monitoring and performance optimization</span>
                      </li>
                    </ul>
                    <p>
                      Our cloud engineering team ensures your infrastructure is reliable, scalable, and cost-effective, 
                      allowing you to focus on your core business while we handle the technical complexities.
                    </p>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="/assets/img/working-1.jpg"
                      alt="Cloud Infrastructure"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/* End Tab Content Item */}
              <div className={`tab-pane fade ${activeTab === 2 ? 'active show' : ''}`}>
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Full-Stack Web & Mobile Development</h3>
                    <p>
                      We build responsive, modern applications that deliver exceptional user experiences across all devices and platforms.
                    </p>
                    <p className="fst-italic">
                      From concept to deployment, we handle every aspect of your digital product development.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check2-all" />
                        <span>Custom web applications with modern frameworks</span>
                      </li>
                      <li>
                        <i className="bi bi-check2-all" />
                        <span>Cross-platform mobile app development</span>
                      </li>
                      <li>
                        <i className="bi bi-check2-all" />
                        <span>Progressive Web Apps (PWA) for enhanced performance</span>
                      </li>
                      <li>
                        <i className="bi bi-check2-all" />
                        <span>API development and third-party integrations</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="/assets/img/working-2.jpg"
                      alt="Web Development"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/* End Tab Content Item */}
              <div className={`tab-pane fade ${activeTab === 3 ? 'active show' : ''}`}>
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Comprehensive Security & Compliance</h3>
                    <p>
                      Protect your digital assets with our enterprise-grade security solutions and compliance frameworks.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check2-all" />
                        <span>Security audits and vulnerability assessments</span>
                      </li>
                      <li>
                        <i className="bi bi-check2-all" />
                        <span>Identity and access management solutions</span>
                      </li>
                      <li>
                        <i className="bi bi-check2-all" />
                        <span>Compliance with industry standards (GDPR, HIPAA, PCI DSS)</span>
                      </li>
                    </ul>
                    <p className="fst-italic">
                      We implement security best practices to safeguard your data and maintain customer trust.
                    </p>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="/assets/img/working-3.jpg"
                      alt="Security Solutions"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/* End Tab Content Item */}
              <div className={`tab-pane fade ${activeTab === 4 ? 'active show' : ''}`}>
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Strategic Technology Consulting</h3>
                    <p>
                      Partner with us for strategic guidance on technology adoption, digital transformation, and IT optimization.
                    </p>
                    <p className="fst-italic">
                      We help you make informed technology decisions that drive business growth.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check2-all" />
                        <span>Technology strategy and roadmap development</span>
                      </li>
                      <li>
                        <i className="bi bi-check2-all" />
                        <span>Digital transformation advisory services</span>
                      </li>
                      <li>
                        <i className="bi bi-check2-all" />
                        <span>IT infrastructure assessment and optimization</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="/assets/img/working-4.jpg"
                      alt="Consulting Services"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/* End Tab Content Item */}
            </div>
          </div>
        </section>




        <section id="services-2" className="services-2 section light-background">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>CHECK OUR SERVICES</p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="service-item d-flex position-relative h-100">
                  <i className="bi bi-briefcase icon flex-shrink-0" />
                  <div>
                    <h4 className="title">
                      <a href="#" className="stretched-link">
                        Lorem Ipsum
                      </a>
                    </h4>
                    <p className="description">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non provident
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
                <div className="service-item d-flex position-relative h-100">
                  <i className="bi bi-card-checklist icon flex-shrink-0" />
                  <div>
                    <h4 className="title">
                      <a href="#" className="stretched-link">
                        Dolor Sitema
                      </a>
                    </h4>
                    <p className="description">
                      Minim veniam, quis nostrud exercitation ullamco laboris nisi
                      ut aliquip ex ea commodo consequat tarad limino ata
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="service-item d-flex position-relative h-100">
                  <i className="bi bi-bar-chart icon flex-shrink-0" />
                  <div>
                    <h4 className="title">
                      <a href="#" className="stretched-link">
                        Sed ut perspiciatis
                      </a>
                    </h4>
                    <p className="description">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={400}>
                <div className="service-item d-flex position-relative h-100">
                  <i className="bi bi-binoculars icon flex-shrink-0" />
                  <div>
                    <h4 className="title">
                      <a href="#" className="stretched-link">
                        Magni Dolores
                      </a>
                    </h4>
                    <p className="description">
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa
                      qui officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={500}>
                <div className="service-item d-flex position-relative h-100">
                  <i className="bi bi-brightness-high icon flex-shrink-0" />
                  <div>
                    <h4 className="title">
                      <a href="#" className="stretched-link">
                        Nemo Enim
                      </a>
                    </h4>
                    <p className="description">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui
                      blanditiis praesentium voluptatum deleniti atque
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={600}>
                <div className="service-item d-flex position-relative h-100">
                  <i className="bi bi-calendar4-week icon flex-shrink-0" />
                  <div>
                    <h4 className="title">
                      <a href="#" className="stretched-link">
                        Eiusmod Tempor
                      </a>
                    </h4>
                    <p className="description">
                      Et harum quidem rerum facilis est et expedita distinctio. Nam
                      libero tempore, cum soluta nobis est eligendi
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>

{/* Portfolio Section */}
        <section id="portfolio" className="portfolio section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>CHECK OUR PORTFOLIO</p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div
              className="isotope-layout"
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul
                className="portfolio-filters isotope-filters"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Product</li>
                <li data-filter=".filter-branding">Branding</li>
                <li data-filter=".filter-books">Books</li>
              </ul>
              {/* End Portfolio Filters */}
              <div
                className="row gy-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/portfolio/app-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="/assets/img/portfolio/app-1.jpg"
                        title="App 1"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/portfolio/product-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Product 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="/assets/img/portfolio/product-1.jpg"
                        title="Product 1"
                        data-gallery="portfolio-gallery-product"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/portfolio/branding-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Branding 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="/assets/img/portfolio/branding-1.jpg"
                        title="Branding 1"
                        data-gallery="portfolio-gallery-branding"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/portfolio/books-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Books 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="/assets/img/portfolio/books-1.jpg"
                        title="Branding 1"
                        data-gallery="portfolio-gallery-book"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/portfolio/app-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>App 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="/assets/img/portfolio/app-2.jpg"
                        title="App 2"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/portfolio/product-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Product 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="/assets/img/portfolio/product-2.jpg"
                        title="Product 2"
                        data-gallery="portfolio-gallery-product"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/portfolio/branding-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Branding 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="/assets/img/portfolio/branding-2.jpg"
                        title="Branding 2"
                        data-gallery="portfolio-gallery-branding"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/portfolio/books-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Books 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="/assets/img/portfolio/books-2.jpg"
                        title="Branding 2"
                        data-gallery="portfolio-gallery-book"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/portfolio/app-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>App 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="/assets/img/portfolio/app-3.jpg"
                        title="App 3"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/portfolio/product-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Product 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="/assets/img/portfolio/product-3.jpg"
                        title="Product 3"
                        data-gallery="portfolio-gallery-product"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/portfolio/branding-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Branding 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="/assets/img/portfolio/branding-3.jpg"
                        title="Branding 2"
                        data-gallery="portfolio-gallery-branding"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/portfolio/books-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Books 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="/assets/img/portfolio/books-3.jpg"
                        title="Branding 3"
                        data-gallery="portfolio-gallery-book"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
              </div>
              {/* End Portfolio Container */}
            </div>
          </div>
        </section>
        {/* /Portfolio Section */}

                {/* Team Section */}
        <section id="team" className="team section light-background">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Team</h2>
            <p>CHECK OUR TEAM</p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gy-5">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="member">
                  <div className="pic">
                    <img
                      src="/assets/img/team/team-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Francis O</h4>
                    <span>Full Stack Cloud Engineer </span>
                    <div className="social">
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
                </div>
              </div>
              {/* End Team Member */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="member">
                  <div className="pic">
                    <img
                      src="/assets/img/team/team-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Karena Williams</h4>
                    <span>Mobile Developer</span>
                    <div className="social">
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
                </div>
              </div>
              {/* End Team Member */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="member">
                  <div className="pic">
                    <img
                      src="/assets/img/team/team-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Micheal Thomas</h4>
                    <span>CyberSecurity Expert</span>
                    <div className="social">
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
                </div>
              </div>
              {/* End Team Member */}
            </div>
          </div>
        </section>
        {/* /Team Section */}


        // header 
        <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="index.html" className="logo d-flex align-items-center me-auto">
            {/* Uncomment the line below if you also wish to use an image logo */}
            <img src="/assets/img/logo3.png" alt=""/>
            {/* <h1 className="sitename">CYQUADTECH</h1> */}
          </a>
          <nav id="navmenu" className={`navmenu ${isMenuOpen ? "mobile-nav-active" : ""}`}>

            <ul>
              <li>
                <a href="#hero" className="active" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              </li>
              <li>
                <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
              </li>
              <li>
                <a href="#team" onClick={() => setIsMenuOpen(false)}>Team</a>
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
              {/* <li>
                <a href="#contact">Contact</a>
              </li> */}
              <li>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </li>
            </ul>
            {/* <i className="mobile-nav-toggle d-xl-none bi bi-list" /> */}
            {/* <i
              className={`mobile-nav-toggle d-xl-none bi ${isMenuOpen ? "bi-x" : "bi-list"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ cursor: "pointer", fontSize: "1.8rem", marginLeft: "1rem", color: "#fff", zIndex: 2000 }}
            /> */}
            {!isMenuOpen && (
              <i
                className="mobile-nav-toggle d-xl-none bi bi-list"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{ cursor: "pointer", fontSize: "1.8rem", marginLeft: "1rem", color: "#fff", zIndex: 2000 }}
              />
            )}
            {/* <i 
              className={`mobile-nav-toggle d-xl-none bi ${isMenuOpen ? "bi-x" : "bi-list"}`} 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              style={{ cursor: "pointer" }}
            /> */}
          </nav>
          {/* Click outside to close menu */}
          {/* Click outside to close menu */}
          {isMenuOpen && (
            <div 
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 9990,
                pointerEvents: 'all'
              }}
            />
          )}
          <a className="cta-btn" href="index.html#about">
            Get Started
          </a>
        </div>  
      </header>

      // footer 

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
            © <span>Copyright 2025</span> <strong className="px-1 sitename">cyquadtech</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you've purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
            {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "} */}
            {/* Distributed by <a href="“https://themewagon.com">ThemeWagon</a> */}
          </div>
          {/* <a href="“https://themewagon.com"></a> */}
        </div>
        {/* <a href="“https://themewagon.com"></a> */}
      </footer>
      <a href="“https://themewagon.com">Scroll Top</a>
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


      //contact section 
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