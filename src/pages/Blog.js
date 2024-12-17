import React from 'react';
import Delivery from '../components/Delivery';
import './Delivery.css';

const Blog = () => {
  return <div>
            <Delivery/>
            <div className="about-us-page">
  {/* Hero Section */}
  <section className="hero-section">
    <div className="container">
      <h1 className="heading">About Us</h1>
      <p className="description">
        We are a passionate team dedicated to providing the best products and services to our customers. Our mission is to create a positive impact in the world through innovation and quality.
      </p>
      <a href="/contactus" className="cta-button">Contact Us</a>
    </div>
  </section>

  {/* Our Values Section */}
  <section className="values-section">
    <div className="container">
      <h2 className="heading">Our Core Values</h2>
      <div className="values-grid">
        <div className="value-card">
          <h3 className="value-title">Innovation</h3>
          <p className="value-description">
            We believe in the power of innovation to drive progress. We’re constantly exploring new ideas to improve our products and services.
          </p>
        </div>
        <div className="value-card">
          <h3 className="value-title">Integrity</h3>
          <p className="value-description">
            Integrity is at the core of everything we do. We strive to build trust with our customers by being transparent, ethical, and honest.
          </p>
        </div>
        <div className="value-card">
          <h3 className="value-title">Customer-Centric</h3>
          <p className="value-description">
            Our customers are our top priority. We go above and beyond to meet their needs, always striving to deliver excellent service.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Meet the Team Section */}
  <section className="team-section">
    <div className="container">
      <h2 className="heading">Meet Our Team</h2>
      <div className="team-grid">
        <div className="team-member">
          <img src="IMG_2867.JPG" alt="Team Member" className="team-photo" />
          <h3 className="team-name">Sem Sethy</h3>
          <p className="team-role">CEO & Founder</p>
        </div>
        <div className="team-member">
          <img src="1720163945799.571 2.jpg" alt="Team Member" className="team-photo" />
          <h3 className="team-name">JoshipTy</h3>
          <p className="team-role">Chief Technology Officer</p>
        </div>
        <div className="team-member">
          <img src="IMG_0027.JPG" alt="Team Member" className="team-photo" />
          <h3 className="team-name">Cyan</h3>
          <p className="team-role">Marketing Director</p>
        </div>
      </div>
    </div>
  </section>

  {/* Company Overview Section */}
  <section className="story-section">
    <div className="container">
      <h2 className="heading">Our Story</h2>
      <p className="story-description">
        Founded in 2015, we started with a simple goal in mind: to create high-quality products that improve the lives of our customers.
      </p>
    </div>
  </section>
</div>
        </div>;
};

export default Blog;
