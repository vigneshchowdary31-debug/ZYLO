import React from 'react';
import Button from '../shared/Button';

export default function AboutSection() {
  return (
    <section className="about-section section-pad-lg" id="about" aria-labelledby="about-title" style={{ paddingBottom: '40px' }}>
      <div className="container about-grid">
        <div className="about-content reveal">
          <span className="section-tag">About Zylo</span>
          <h2 id="about-title" className="section-title">
            From Boardrooms to Grand Exhibitions,{' '}
            <span style={{ color: 'var(--brand)' }}>We've Got You Covered</span>
          </h2>
          <p className="about-lead">
            Incorporated in 2011, Zylo Events is the dedicated corporate and experiential events wing of Alankaran. Founded by pioneering industry leaders Chaitanya Kulkarni and Chandrika Ganji, we combine meticulous logistics with luxury experiential design to deliver activations that leave lasting impressions.
          </p>
          <p style={{ marginBottom: '20px' }}>
            As a trusted corporate events partner, our team of seasoned professionals handles every aspect — from conceptualizing high-end experiential spaces and trade show setups to complete MICE logistics, AV production, and corporate retreats. Powered by the legacy of Alankaran, we elevate brand storytelling to a fine art across India.
          </p>
          <div className="about-pillars">
            <div className="pillar">
              <span className="pillar-icon">✦</span>
              <span>Pan-India Coverage</span>
            </div>
            <div className="pillar">
              <span className="pillar-icon">✦</span>
              <span>24/7 Event Support</span>
            </div>
          </div>
          <Button to="/about" variant="gold-outline">
            Read More About Us →
          </Button>
        </div>

        <div className="about-visual reveal">
          <div className="about-img-frame">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80"
              alt="Professional event management team at work — Zylo Events Hyderabad"
              loading="lazy"
              className="about-img"
            />
            <div className="about-circle-deco c1"></div>
            <div className="about-circle-deco c2"></div>
            <div className="about-circle-deco c3"></div>
          </div>
          <div className="about-badge-card">
            <div className="badge-number">
              500<span>+</span>
            </div>
            <div className="badge-label">
              Events Delivered
              <br />
              Across India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
