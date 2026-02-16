import React from "react";
import image4 from "../assets/image4.jpg"; // your image file

function Services() {
  return (
    <div className="page services-page">
      <h1>Our Services</h1>

      <div className="services-container">
        {/* Left side: service lists */}
        <div className="services-lists">
          {/* Environmental Services */}
          <section className="services-section">
            <h2>Environmental Services</h2>
            <ul>
              <li>Air Quality Monitoring</li>
              <li>Noise Monitoring</li>
              <li>Water Sampling & Analysis</li>
              <li>Environmental Consulting</li>
              <li>Waste Management</li>
              <li>Sustainability Planning</li>
              <li>Environmental Impact Assessment (EIA)</li>
            </ul>
          </section>

          {/* Safety Services */}
          <section className="services-section">
            <h2>Safety Services</h2>
            <ul>
              <li>Workplace Safety Audits</li>
              <li>Risk Assessment & Mitigation</li>
              <li>Training & Safety Workshops</li>
              <li>Emergency Response Planning</li>
              <li>Compliance & Regulatory Support</li>
            </ul>
          </section>
        </div>

        {/* Right side: image */}
        <div className="services-image">
          <img src={image4} alt="Our Services" />
        </div>
      </div>
    </div>
  );
}

export default Services;
