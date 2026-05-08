import React from 'react';
import logo from '../../assets/logo.png';
import camera from '../../assets/camera.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="container footer-content">
        <div className="footer-brand">
          <img src={logo} alt="Logo" className="footer-logo" />
          <span className="logo-text gradient-text">DSB Tank</span>
        </div>
        <p>&copy; {new Date().getFullYear()} DSB Tank Department. All rights reserved.</p>
        <div className="footer-extra">
          <img src={camera} alt="Camera" className="footer-camera" />
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
