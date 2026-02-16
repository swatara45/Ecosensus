import React from "react";
import "../App.css";
import image5 from "../assets/image5.jpeg";

export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="about-container gap-8 items-center">
        {/* Text Section */}
        <div className="about-text">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            ecoSensus is a company based in Kasoa, in the Central Region of Ghana. The company focuses on offering environmental management services to industries nationwide. Currently, the company manages noise monitoring, air quality, and water sampling alongside Intertek at the Edikan Mine in Ayanfuri, Ghana. We currently have up to 50 employees across the country.
          </p>

          {/* Vision */}
          <div className="mb-5">
            <h2 className="text-xl font-semibold mb-2">Vision</h2>
            <p className="text-gray-700">
              To stand at the epicenter of all eco-conscious affairs of anthropogenic footprints linking industries and creating space for innovation in a thriving ecosystem.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-5">
            <h2 className="text-xl font-semibold mb-5">Mission</h2>
            <p className="text-gray-700">
              To deliver expert environmental and safety solutions that empower industries to minimize their anthropogenic footprint through strategic innovation, ensuring that industrial progress and ecological integrity thrive in unison.
            </p>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Core Values</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Teamwork</li>
              <li>Honor</li>
              <li>Integrity</li>
              <li>Accountability</li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="about-image w-full">
          <img
            src={image5}
            alt="Environmental monitoring team collecting field samples"
            className="rounded-2xl shadow-lg w-full h-auto object-cover max-h-[420px]"
          />
        </div>
      </div>
    </div>
        
    );
}
