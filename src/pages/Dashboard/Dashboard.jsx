import React, { useState } from 'react';
import { FaFacebook, FaWhatsapp, FaEnvelope, FaShareAlt, FaPaperclip, FaBell, FaBars, FaTimes } from 'react-icons/fa';
import officerImg from '../../assets/polic officer.png';
import './Dashboard.css';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenuItem, setActiveMenuItem] = useState("Dashboard");

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    "Dashboard", "Search DSB Reports", "Search threats", "User List", 
    "Data entry Report", "Terrorists Lists", "Ts Facilitators", 
    "Head Money", "4th Schedule", "CRO", "Drug peddlers list", 
    "Snatchers list", "Dacoit/ Robbers", "FIR Found Notification", 
    "Money Changers", "Arms verification Dastak app"
  ];

  return (
    <div className={`dashboard-layout ${!isSidebarOpen ? 'sidebar-collapsed' : ''}`}>
      {/* Sidebar */}
      <aside className={`sidebar ${!isSidebarOpen ? 'collapsed' : ''}`}>
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className={item === activeMenuItem ? "active" : ""}
              onClick={() => setActiveMenuItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Container */}
      <div className="main-container">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <button className="hamburger-btn" onClick={toggleSidebar}>
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <img src={officerImg} alt="Officer" className="header-officer" />
            <div className="header-title">
              <h1>DSB TANK</h1>
              <p>Navigation Penal</p>
            </div>
          </div>
          <div className="header-center">
            <p className="summary-text">All Features Summery</p>
            <h2 className="dashboard-title">Dashboard</h2>
          </div>
          <div className="header-right">
            <button className="notifications-btn">
              Notifications
            </button>
          </div>
        </header>

        {/* Tab Navigation */}
        <nav className="tab-nav">
          <button className="tab-btn">CTP</button>
          <button className="tab-btn">Specific to person</button>
          <button className="tab-btn">Specific Establishments</button>
          <button className="tab-btn">Source Reports</button>
          <button className="tab-btn">Daily Dairy</button>
        </nav>

        {/* Main Dashboard Area */}
        <div className="dashboard-main">
          <div className="center-visual">
            <div className="officer-circle">
              <img src={officerImg} alt="Officer Large" className="main-officer" />
              <div className="officer-label">DPO Tank</div>
            </div>
            
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-item">
                <div className="line"></div>
                <FaFacebook className="social-icon fb" /> <span>Facebook</span>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="social-item">
                <div className="line"></div>
                <FaWhatsapp className="social-icon wa" /> <span>WhatsApp</span>
              </a>
              <a href="#" className="social-item">
                <div className="line"></div>
                <FaEnvelope className="social-icon mail" /> <span>Letters</span>
              </a>
              <a href="#" className="social-item">
                <div className="line"></div>
                <FaShareAlt className="social-icon share" /> <span>Share</span>
              </a>
              <a href="#" className="social-item">
                <div className="line"></div>
                <FaPaperclip className="social-icon attach" /> <span>Attachments</span>
              </a>
              <a href="#" className="social-item">
                <div className="line"></div>
                <div className="social-icon-custom source"></div> <span>CT Source</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Stats Area */}
        <footer className="stats-footer">
          <div className="stat-card">
            <h3>CTP</h3>
            <div className="pie-chart"></div>
            <div className="legend">
              <span><i className="dot q1"></i> 1st Qtr</span>
              <span><i className="dot q2"></i> 2nd Qtr</span>
            </div>
          </div>
          <div className="stat-card">
            <h3>Specific</h3>
            <div className="pie-chart"></div>
            <div className="legend">
              <span><i className="dot q1"></i> 1st Qtr</span>
              <span><i className="dot q2"></i> 2nd Qtr</span>
            </div>
          </div>
          <div className="stat-card">
            <h3>Establishments</h3>
            <div className="pie-chart"></div>
            <div className="legend">
              <span><i className="dot q1"></i> 1st Qtr</span>
              <span><i className="dot q2"></i> 2nd Qtr</span>
            </div>
          </div>
          <div className="stat-card">
            <h3>Specific to Person</h3>
            <div className="pie-chart"></div>
            <div className="legend">
              <span><i className="dot q1"></i> 1st Qtr</span>
              <span><i className="dot q2"></i> 2nd Qtr</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
