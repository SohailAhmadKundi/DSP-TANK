import React from 'react';
import Hero from '../../components/Hero/Hero';
import visionImg from '../../assets/images/ghulam_mubashir.jpeg';
import missionImg from '../../assets/images/zulfiqar_hameed.jpeg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero
        title="Engineering Excellence"
        subtitle="We specialize in advanced tank systems and department-level logistics management for modern infrastructures."
        ctaText="Get Started"
      />
      <section className="vision-mission container">
        <div className="vm-block glass">
          <div className="vm-image">
            <img src={visionImg} alt="Vision" />
          </div>
          <div className="vm-text">
            <h2 className="gradient-text">Our Vision</h2>
            <p>To provide a secure, peaceful, and law-abiding environment through modern policing and community engagement, ensuring the safety of every citizen in the region.</p>
          </div>
        </div>

        <div className="vm-block glass reverse">
          <div className="vm-text">
            <h2 className="gradient-text">Our Mission</h2>
            <p>Our mission is to uphold the rule of law, maintain public order, and combat crime with integrity, professionalism, and respect for human rights.</p>
          </div>
          <div className="vm-image">
            <img src={missionImg} alt="Mission" />
          </div>
        </div>
      </section>

      <section className="features container">
        <div className="feature-card glass">
          <h3 className="gradient-text">Efficiency</h3>
          <p>Optimized systems for maximum performance and reliability.</p>
        </div>
        <div className="feature-card glass">
          <h3 className="gradient-text">Innovation</h3>
          <p>Cutting-edge technology at the heart of every project.</p>
        </div>
        <div className="feature-card glass">
          <h3 className="gradient-text">Support</h3>
          <p>24/7 dedicated assistance for all your departmental needs.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
