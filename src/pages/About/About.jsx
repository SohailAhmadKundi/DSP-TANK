import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page container">
      <section className="about-hero">
        <h1 className="gradient-text">About Our Department</h1>
        <p>Providing industry-leading tank solutions for over a decade.</p>
      </section>

      <div className="about-grid">
        <div className="about-image glass">
          {/* Placeholder for an image or graphic */}
          <div className="placeholder-graphic"></div>
        </div>
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            The police Department Tank is dedicated to the highest standards of safety,
            efficiency, and innovation in the management of liquid storage and transport systems.
            Our mission is to empower departments with the tools they need to succeed in a
            rapidly evolving industrial landscape.
          </p>
          <p>
            We believe that better data and better systems lead to better outcomes. That's why
            we invest heavily in research and development to bring you the best solutions
            available today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
