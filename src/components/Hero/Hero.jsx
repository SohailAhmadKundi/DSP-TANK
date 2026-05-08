import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ title, subtitle, ctaText }) => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <h1 className="hero-title">
          {title} <br />
          <span className="gradient-text">Future of Tanks.</span>
        </h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-cta">
          <Link to="/contact" className="btn btn-primary">{ctaText}</Link>
          <Link to="/about" className="btn btn-secondary">Learn More</Link>
        </div>
      </div>
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
    </section>
  );
};

export default Hero;
