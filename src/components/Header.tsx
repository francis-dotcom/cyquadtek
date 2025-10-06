import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          {/* Uncomment the line below if you also wish to use an image logo */}
          <img src="/assets/img/logo3.png" alt=""/>
          {/* <h1 className="sitename">CYQUADTECH</h1> */}
        </a>
        {/* <nav id="navmenu" className="navmenu"> */}
        <nav id="navmenu" className={`navmenu ${isMenuOpen ? "navmenu-active" : ""}`}>

          <ul>
            <li>
              <a href="#hero" className="active">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            {/* <li><a href="#portfolio">Portfolio</a></li> */}
            <li>
              <a href="#team">Team</a>
            </li>
            {/* <li className="dropdown">
              <a href="#">
                <span>Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown" />
                  </a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* <i className="mobile-nav-toggle d-xl-none bi bi-list" /> */}
          <i 
            className={`mobile-nav-toggle d-xl-none bi ${isMenuOpen ? "bi-x" : "bi-list"}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            style={{ cursor: "pointer" }}
          />
        </nav>
        <a className="cta-btn" href="index.html#about">
          Get Started
        </a>
      </div>  
    </header>
  );
}
