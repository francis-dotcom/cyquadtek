function Footer() {
  return (
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
      </div>
      
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </footer>
  );
}

export default Footer;