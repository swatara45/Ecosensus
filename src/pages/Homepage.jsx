import React from "react";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.jpg";


function Homepage() {
  return (
    <div className="page">

      {/* Hero Section */}
      <section className="hero-section">
        <img
          src={image3}
          alt="Environmental Consulting"
        />
        <div className="hero-text">
          <h1>Eco Sensus Consult</h1>
          <p>
            Delivering sustainable solutions for businesses and communities
            around the world. Protecting the environment, one project at a time.<br/>
            Our Mission          Our Vison
          </p>
        </div>
      </section>

     {/* General Consulting Info */}
<section className="info-section" id="info">
  <h2>Our Consulting Services</h2>
  <div className="info-cards">
    
    {/* Existing Services with Images */}
    <div className="info-card">
      <h3>Environmental Consulting</h3>
      <p>
        Expert guidance to help you comply with regulations and improve sustainability.
      </p>
    </div>
    <div className="info-card">
      <h3>Sustainability Planning</h3>
      <p>
        Strategic planning to reduce your environmental footprint and save costs.
      </p>
    </div>

    {/* Additional Services without Images */}
    <div className="info-card">
      <h3>Air Quality Monitoring</h3>
      <p>
        Measuring and analyzing air pollutants to ensure a safe and healthy environment.
      </p>
    </div>
    <div className="info-card">
      <h3>Noise Monitoring</h3>
      <p>
        Assessing noise levels in industrial and urban areas to reduce health risks.
      </p>
    </div>
    <div className="info-card">
      <h3>Water Sampling & Analysis</h3>
      <p>
        Collecting and testing water samples to ensure compliance with environmental standards.
      </p>
    </div>

  </div>
</section>


      {/* Customer Reviews */}
      <section className="reviews-section">
        <h2>What Our Clients Say</h2>
        <div className="reviews-cards">
          <div className="review-card">
            <img src={image1} alt="Customer Review" /> {/* example review image */}
            <p>
              “GreenEarth helped us become compliant and cut waste by 40%! The
              team was professional and insightful.”
            </p>
            <h4>- Samantha T.</h4>
          </div>

          <div className="review-card">
            <img src={image2} alt="Customer Review" /> {/* example review image */}
            <p>
              “Outstanding service! They made sustainability simple and profitable.”
            </p>
            <h4>- Jordan K.</h4>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Homepage;