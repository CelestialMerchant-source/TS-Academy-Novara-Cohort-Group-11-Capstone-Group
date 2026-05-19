import React from "react";
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <div className="logo">
            <a href="#home-section" aria-label="Go to home">
              <img
                src="https://res.cloudinary.com/dkut8rkui/image/upload/v1778654470/earth_logo_v8ksms.png"
                alt="Logo"
                className="logo-img"
              />
            </a>
          </div>
        </div>
      </header>


      {/* Hero section with id for anchor link */}
      {/* <section id="home-section">
        <div className="hero">
          <div className="hero-image">
            <img
              src="https://res.cloudinary.com/dkut8rkui/image/upload/v1770715256/pngwing.com_61_mlsfha.png"
              alt="Solar System Image"
            />
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <h1>Explore Our Solar <br />System Through Data</h1>
              <p>
                Understand the planets not just by name, but by measurable
                facts. From size and mass to gravity and density, this page
                breaks down the solar system in a clear, data-driven way.
              </p>
              <div className="buttons">
                <a href="#" className="btn first">Explore the Data</a>
                <a href="#" className="btn second">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Header;