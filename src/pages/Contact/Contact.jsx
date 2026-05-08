import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page container">
      <section className="contact-header">
        <h1 className="gradient-text">Get In Touch</h1>
        <p>Have questions? Our team is here to help.</p>
      </section>

      <div className="contact-container glass">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" className="glass" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" className="glass" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="How can we help?" className="glass" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

        <div className="contact-info">
          <div className="info-item">
            <h3>Email</h3>
            <p>support@dsbtank.com</p>
          </div>
          <div className="info-item">
            <h3>Address</h3>
            <p>123 Tank Lane, Industrial District<br />DSB City, 54321</p>
          </div>
          <div className="info-item">
            <h3>Support</h3>
            <p>Available 24/7 for urgent inquiries.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
