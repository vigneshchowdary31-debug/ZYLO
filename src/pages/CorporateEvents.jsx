import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';
import SectionHeader from '../components/shared/SectionHeader';
import Button from '../components/shared/Button';
import { servicesData, corporateFAQ } from '../data/services';
import clsx from 'clsx';

export default function CorporateEvents() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(prev => (prev === idx ? null : idx));
  };

  return (
    <>
      <SEO
        title="MICE, Corporate Conferences &amp; Brand Activations | Zylo Events"
        description="Zylo Events delivers premium MICE, corporate conferences, product launches, high-end trade shows, and experiential brand activations across India since 2011."
      />

      <main>
        {/* Inner Hero */}
        <section
          className="inner-hero"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80')` }}
        >
          <div className="inner-hero-overlay"></div>
          <div className="container inner-hero-content">
            <div className="hero-badge animate-fade-up">
              <span className="badge-dot"></span> Premium Corporate &amp; Experiential Event Specialists
            </div>
            <h1 className="animate-fade-up">
              Corporate Events &amp;<br />Experiential <span style={{ color: '#BAE6FD' }}>Activations</span>
            </h1>
            <p className="animate-fade-up">
              From boardroom conferences and global MICE logistics to grand product launches and experiential installations powered by Alankaran.
            </p>
            <div className="hero-ctas animate-fade-up">
              <Button to="/contact" variant="gold" size="lg">
                Get a Free Quote →
              </Button>
              <Button to="/gallery" variant="outline-white" size="lg">
                View Our Work
              </Button>
            </div>
            <div className="inner-hero-breadcrumb animate-fade-up">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Corporate Events</span>
            </div>
          </div>
        </section>

        {/* Introduction split */}
        <section className="section-pad-lg">
          <div className="container story-grid">
            <div className="reveal">
              <span className="section-tag">Our Expertise</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                From Conferences to <span style={{ color: 'var(--brand)' }}>High-End Productions</span>
              </h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '16px', lineHeight: '1.75' }}>
                Zylo Events, the corporate and experiential events wing of Alankaran, is India's premier B2B event partner. We manage every technical and creative detail — from high-impact spatial design and advanced AV production to complex global sitemaps and delegate hospitality.
              </p>
              <p style={{ color: 'var(--text-light)', marginBottom: '28px', lineHeight: '1.75' }}>
                Since 2011, we have engineered over 800 premium events across Hyderabad, Mumbai, Delhi, and pan-India, delivering flawless execution and strategic brand storytelling for elite multinational corporations.
              </p>
              <div className="service-features" style={{ marginBottom: '28px' }}>
                <div className="service-feature-item">Venue selection from 500+ premium locations</div>
                <div className="service-feature-item">End-to-end event management</div>
                <div className="service-feature-item">World-class AV &amp; technical production</div>
                <div className="service-feature-item">Dedicated on-site event team</div>
              </div>
              <Button to="/contact" variant="gold">
                Start Planning →
              </Button>
            </div>
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80"
                alt="Corporate event conference hall"
                loading="lazy"
                className="story-img"
              />
            </div>
          </div>
        </section>

        {/* 6. Dynamic alternated detail service blocks */}
        {servicesData.map((service, idx) => {
          const isEven = idx % 2 === 0;
          const isGray = idx % 2 === 0; // Alternating background colors too
          return (
            <section
              key={service.id}
              className={clsx('service-detail-section', { 'bg-gray': isGray })}
              id={service.id}
            >
              <div className={clsx('container service-detail-grid', { reverse: !isEven })}>
                {/* Left/Right Photo */}
                {isEven ? (
                  <div className="reveal">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="service-detail-img"
                    />
                  </div>
                ) : null}

                {/* Text Block */}
                <div className="service-detail-content reveal">
                  <span className="section-tag">Service {service.num}</span>
                  <h2 className="section-title" style={{ textAlign: 'left' }}>
                    {service.title.split(' & ')[0]} {service.title.includes('&') ? '& ' : ''}
                    <span style={{ color: 'var(--brand)' }}>{service.title.split(' & ')[1] || ''}</span>
                  </h2>
                  <p>{service.description}</p>
                  {service.extraDescription && <p>{service.extraDescription}</p>}
                  <div className="service-features" style={{ margin: '20px 0' }}>
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="service-feature-item">
                        {feat}
                      </div>
                    ))}
                  </div>
                  <Button to="/contact" variant="gold" className="mt-3">
                    Get a Quote →
                  </Button>
                </div>

                {/* Photo right (for odd indices) */}
                {!isEven ? (
                  <div className="reveal">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="service-detail-img"
                    />
                  </div>
                ) : null}
              </div>
            </section>
          );
        })}

        {/* Why choose Zylo (strengths list) */}
        <section className="section-pad-lg bg-dark">
          <div className="container">
            <div className="section-header reveal" style={{ marginBottom: '48px' }}>
              <span className="section-tag">Our Strengths</span>
              <h2 className="section-title white">
                Why Elite Brands Choose <span style={{ color: '#BAE6FD' }}>Zylo</span>
              </h2>
              <p className="section-subtitle white-60">
                From Fortune 500 companies to global enterprises — brands choose Zylo for our flawless reliability, design excellence, and artistic pedigree.
              </p>
            </div>
            
            <div className="why-choose-grid reveal">
              <div className="why-choose-card">
                <div className="why-choose-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h4>Proven Track Record</h4>
                <p>800+ successful events delivered pan-India since 2011 with the creative backing and trust of Alankaran.</p>
              </div>
              <div className="why-choose-card">
                <div className="why-choose-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <h4>End-to-End Service</h4>
                <p>From concept to cleanup — we manage every aspect of your event with our in-house production team.</p>
              </div>
              <div className="why-choose-card">
                <div className="why-choose-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  </svg>
                </div>
                <h4>Expert Team</h4>
                <p>60+ full-time luxury designers, staging architects, veteran AV engineers, and event coordinators.</p>
              </div>
              <div className="why-choose-card">
                <div className="why-choose-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h4>ISO 9001 Certified</h4>
                <p>Certified quality management systems ensuring consistent, high-standard delivery every time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Accordion FAQ Area */}
        <section className="section-pad-lg bg-gray" id="corporate-faq">
          <div className="container" style={{ maxWidth: '800px' }}>
            <SectionHeader
              tag="FAQ"
              title={<>Frequently Asked <span style={{ color: 'var(--brand)' }}>Questions</span></>}
              subtitle="Get quick answers to common questions about our corporate conference and exhibition services."
            />

            <div className="faq-accordion reveal">
              {corporateFAQ.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className={clsx('faq-item', { open: isOpen })}
                    style={{ background: '#ffffff', borderRadius: '12px', marginBottom: '16px', overflow: 'hidden', border: '1px solid #e2e8f0' }}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '20px 24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'var(--text-dark)'
                      }}
                    >
                      {faq.question}
                      <span
                        className="faq-icon"
                        style={{
                          fontSize: '1.25rem',
                          color: 'var(--brand)',
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.3s'
                        }}
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      className="faq-answer-wrap"
                      style={{
                        maxHeight: isOpen ? '300px' : '0',
                        opacity: isOpen ? '1' : '0',
                        transition: 'all 0.4s ease',
                        overflow: 'hidden'
                      }}
                    >
                      <div className="faq-answer" style={{ padding: '0 24px 20px', color: 'var(--text-light)', fontSize: '0.93rem', lineHeight: '1.65' }}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="cta-banner"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          aria-label="Call to action"
        >
          <div className="cta-banner-overlay"></div>
          <div className="container cta-banner-content reveal">
            <h2>Ready to Plan Your Next<br /><span style={{ color: '#60A5FA' }}>Corporate Event?</span></h2>
            <p>Contact us today and receive a tailored proposal within 24 hours.</p>
            <Button to="/contact" variant="outline-white" size="lg">
              Get a Free Consultation →
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
