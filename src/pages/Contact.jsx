import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';
import SectionHeader from '../components/shared/SectionHeader';
import Button from '../components/shared/Button';
import ContactForm from '../components/contact/ContactForm';
import clsx from 'clsx';

const generalFAQ = [
  {
    question: 'How far in advance should I book Zylo Events for my event?',
    answer: 'For large corporate events (500+ attendees), we recommend booking at least 3–6 months in advance. For smaller events (under 200 guests), 4–8 weeks is generally sufficient. That said, we do accept last-minute requests — contact us and we\'ll do our best to accommodate your timeline.'
  },
  {
    question: 'What is included in Zylo\'s event management service?',
    answer: 'As the dedicated corporate wing of Alankaran, our full-service capabilities include: experiential spatial design, corporate conferences, product launches, custom exhibition stall design & fabrication, high-end technical production, global MICE logistics, corporate retreat planning, and 24/7 on-site execution support.'
  },
  {
    question: 'Do you manage events outside Hyderabad?',
    answer: 'Yes! While we\'re headquartered in Hyderabad, Zylo Events operates across India — including Mumbai, Delhi, Hyderabad, Chennai, Pune, and Goa. We also manage destination events and corporate retreats across popular resort locations in India.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Pricing varies based on event type, scale, location, and services required. We provide transparent, itemised proposals after an initial consultation. Our packages start from ₹2.5 lakhs for small events and scale up for large corporate engagements. Contact us for a free, no-obligation quote.'
  },
  {
    question: 'Can you manage hybrid events (in-person + virtual)?',
    answer: 'Absolutely. Zylo has extensive experience managing hybrid events — combining in-person production with professional live-streaming, virtual audience management, and interactive online engagement tools. We ensure both in-person and virtual attendees have an exceptional experience.'
  }
];

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(prev => (prev === idx ? null : idx));
  };

  return (
    <>
      <SEO
        title="Collaborate with Zylo Events — Get an Experiential Proposal"
        description="Connect with Zylo Events, a brand by Alankaran, to discuss your next brand activation, corporate conference, trade show stall, or luxury retreat."
        path="/contact"
        schemaData={[{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://zylo.events/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://zylo.events/contact"
    }
  ]
}]}
      />

      <main>
        {/* Inner Hero */}
        <section
          className="inner-hero"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=75&auto=format')` }}
        >
          <div className="inner-hero-overlay"></div>
          <div className="container inner-hero-content">
            <div className="hero-badge animate-fade-up">
              <span className="badge-dot"></span> Experiential &amp; MICE Consultations
            </div>
            <h1 className="animate-fade-up">
              Begin Your <span style={{ color: '#BAE6FD' }}>Journey</span>
            </h1>
            <p className="animate-fade-up">
              Ready to plan an extraordinary event powered by Alankaran? Fill in the form below to receive a bespoke experiential proposal within 24 hours.
            </p>
            <div className="inner-hero-breadcrumb animate-fade-up">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Contact</span>
            </div>
          </div>
        </section>

        {/* Contact form and details grid */}
        <section className="section-pad-lg" id="contact-form">
          <div className="container contact-page-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
            <style>{`
              @media (min-width: 1024px) {
                .contact-page-grid {
                  grid-template-columns: 1fr 1fr !important;
                }
              }
            `}</style>

            {/* Info details column */}
            <div className="reveal">
              <span className="section-tag">Our Details</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>
                Let's Create Something <span style={{ color: 'var(--brand)' }}>Extraordinary</span>
              </h2>

              <div className="contact-info-card" style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start' }}>
                <div className="contact-info-card-icon" style={{ padding: '12px', background: 'rgba(59,130,246,0.06)', borderRadius: '12px', color: 'var(--brand)', display: 'flex' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-dark)' }}>Our Office</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.93rem', marginTop: '4px', lineHeight: '1.5' }}>
                    Corporate Office<br />
                    Plot No. 78, TNGOs Colony,<br />
                    Phase 2, Financial District,<br />
                    Gachibowli, Hyderabad,<br />
                    Telangana 500032
                  </p>
                  <p style={{ color: 'var(--gray-text)', fontSize: '0.82rem', marginTop: '4px' }}>Also serving Mumbai &amp; Delhi</p>
                </div>
              </div>

              <div className="contact-info-card" style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start' }}>
                <div className="contact-info-card-icon" style={{ padding: '12px', background: 'rgba(59,130,246,0.06)', borderRadius: '12px', color: 'var(--brand)', display: 'flex' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.75A16 16 0 0 0 15.25 16.09l.93-.93a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-dark)' }}>Call Us</h4>
                  <a href="tel:+918977611886" style={{ color: 'var(--brand)', fontWeight: '600', fontSize: '0.93rem' }}>+91 89776 11886</a>
                  <p style={{ color: 'var(--gray-text)', fontSize: '0.82rem', marginTop: '4px' }}>Mon – Sat, 9am – 6pm IST</p>
                </div>
              </div>

              <div className="contact-info-card" style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start' }}>
                <div className="contact-info-card-icon" style={{ padding: '12px', background: 'rgba(59,130,246,0.06)', borderRadius: '12px', color: 'var(--brand)', display: 'flex' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-dark)' }}>Email Us</h4>
                  <a href="mailto:hello@zylo.events" style={{ color: 'var(--brand)', fontWeight: '600', fontSize: '0.93rem' }}>hello@zylo.events</a>
                  <p style={{ color: 'var(--gray-text)', fontSize: '0.82rem', marginTop: '4px' }}>We reply within 24 hours</p>
                </div>
              </div>

              <div className="contact-info-card" style={{ display: 'flex', gap: '16px', marginBottom: '32px', alignItems: 'flex-start' }}>
                <div className="contact-info-card-icon" style={{ padding: '12px', background: 'rgba(59,130,246,0.06)', borderRadius: '12px', color: 'var(--brand)', display: 'flex' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-dark)' }}>Business Hours</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.93rem', marginTop: '4px' }}>Monday – Saturday: 9:00 AM – 6:00 PM</p>
                  <p style={{ color: 'var(--gray-text)', fontSize: '0.82rem', marginTop: '4px' }}>Sunday: By appointment only</p>
                </div>
              </div>

              {/* Office Map Frame */}
              <div className="map-embedreveal reveal" style={{ marginTop: '32px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.03968832049!2d78.3361113!3d17.4190283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a8d9bfd4db%3A0xe543ef88ff3e4448!2sPlot%20No.%2078%2C%20TNGOs%20Colony%2C%20Phase%202%2C%20Financial%20District%2C%20Gachibowli%2C%20Hyderabad%2C%20Telangana%20500032!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="340"
                  style={{ border: 0, borderRadius: '12px', display: 'block', boxShadow: 'var(--shadow)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zylo Events — Financial District, Gachibowli, Hyderabad"
                ></iframe>
              </div>
            </div>

            {/* Reactive contact form wrap */}
            <div className="contact-form-wrap reveal">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '8px' }}>Send Us an Enquiry</h3>
              <p style={{ fontSize: '0.87rem', color: 'var(--gray-text)', marginBottom: '24px' }}>
                Tell us about your event and we'll send a tailored proposal within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* FAQ Area */}
        <section className="section-pad-lg bg-gray" id="contact-faq">
          <div className="container" style={{ maxWidth: '800px' }}>
            <SectionHeader
              tag="FAQ"
              title={<>Frequently Asked <span style={{ color: 'var(--brand)' }}>Questions</span></>}
              subtitle="Answers to common questions about working with Zylo Events."
            />

            <div className="faq-accordion reveal">
              {generalFAQ.map((faq, idx) => {
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
            backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=75&auto=format')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          aria-label="Call to action"
        >
          <div className="cta-banner-overlay"></div>
          <div className="container cta-banner-content reveal">
            <h2>Let's Make Your Next Event<br /><span style={{ color: '#60A5FA' }}>Truly Unforgettable</span></h2>
            <p>Call us now or fill in our contact form — we'd love to hear about your vision.</p>
            <Button href="tel:+918977611886" variant="outline-white" size="lg">
              Call +91 89776 11886
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
