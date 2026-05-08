import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import camera from '../../assets/camera.png';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header glass">
      <div className="container header-content">
        <Link to="/" className="logo-container">
          <img className="logo-icon" src={logo} alt="Logo" />
          <span className="logo-text gradient-text">DSB Tank</span>
        </Link>
        <nav className="nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          <Link to="/login" className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}>Login</Link>
          <div className="nav-extra">
            <img src={camera} alt="Camera" className="camera-icon" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
