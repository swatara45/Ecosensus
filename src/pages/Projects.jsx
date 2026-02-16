import React from "react";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.png";
import "../App.css";

function Projects() {
  return (
    <div className="page max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Projects</h1>

      <ul className="list-disc pl-5 text-gray-700 space-y-3 mb-8">
        <li>
          Perseus Mining, Edikan Site – Ayanfuri,Central Region 
          (Air quality monitoring, Noise monitoring, Blast monitoring)
        </li>
        
        <li>
          EA Dels Consult – Central Region 
          (Environmental quality monitoring and data analysis)
        </li>
        
        <li>
          Collinsco A Services – Central Region 
          (Solid waste management)
        </li>
      </ul>

      {/* Images */}
      <div className="projects-images">
        <div className="project-image">
          <img src={image5} alt="Project Image 5" />
        </div>
        <div className="project-image">
          <img src={image6} alt="Project Image 6" />
        </div>
      </div>
    </div>
  );
}

export default Projects;