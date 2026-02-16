import React from "react";
import careerImg from "../assets/hero.webp"; // replace with your image file

function Careers() {
  const jobOpenings = [
    {
      title: "Environmental Consultant",
      location: "Remote",
      description:
        "Provide expert advice to clients on environmental compliance, sustainability strategies, and impact assessments.",
    },
    {
      title: "Sustainability Analyst",
      location: "Kasoa, Central Region",
      description:
        "Analyze data on energy use, waste reduction, and sustainability initiatives to guide business decisions.",
    },
    {
      title: "Project Manager – Environmental Services",
      location: "Cantoments, Greater Accra Region",
      description:
        "Manage environmental projects from planning to execution, coordinating teams, budgets, and client communications.",
    },
  ];

  const careersEmail = "ecosensus@outlook.com";

  return (
    <div className="page careers-page">
      <div className="careers-hero">
        <div className="careers-text">
          <h1>Careers at Eco Sensus Consult</h1>
          <p>Join our mission to create sustainable solutions for a better planet!</p>
        </div>
        <div className="careers-image">
          <img src={careerImg} alt="Careers at Eco Sensus Consulting" />
        </div>
      </div>

      <section className="job-openings">
        <h2>Current Openings</h2>
        {jobOpenings.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
            <a
              href={`mailto:${careersEmail}?subject=Application for ${encodeURIComponent(
                job.title
              )}&body=${encodeURIComponent(
                `Dear EcoSensus Team,\n\nI would like to apply for the ${job.title} position. Please find my resume attached.\n\nThank you,\n[Your Name]`
              )}`}
            >
              <button>Upload resume</button>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Careers;