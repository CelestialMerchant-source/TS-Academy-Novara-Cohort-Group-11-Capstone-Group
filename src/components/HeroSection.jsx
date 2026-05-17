const HeroSection = () => {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <h1>Explore Our Solar System Through Data</h1>
          <p>
            Understand planets by measurable facts like size, gravity and
            density.
          </p>

          <div className="hero-btn">
            <button className="btn" onClick={() => scrollTo("planets")}>
              Explore the Data
            </button>
            <button className="btn" onClick={() => scrollTo("contact")}>
              Contact Us
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://res.cloudinary.com/dq8koxtvd/image/upload/v1771134588/407745156_21fbbe77-184a-4cce-8c3c-fd483dc76e0a-removebg-preview_hodwbx.png"
            alt="planet"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
