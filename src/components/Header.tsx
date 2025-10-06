import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          <img src="/assets/img/logo3.png" alt=""/>
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
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </li>
          </ul>
          
          {!isMenuOpen && (
            <i
              className="mobile-nav-toggle d-xl-none bi bi-list"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ cursor: "pointer", fontSize: "1.8rem", marginLeft: "1rem", color: "#fff", zIndex: 2000 }}
            />
          )}
        </nav>
        
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
  );
}

export default Header;