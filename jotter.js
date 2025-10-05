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