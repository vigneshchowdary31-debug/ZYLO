import React from 'react';
import SEO from '../components/shared/SEO';
import HeroSlider from '../components/home/HeroSlider';
import BrandsStrip from '../components/home/BrandsStrip';
import PlanningExpertise from '../components/home/PlanningExpertise';
import AboutSection from '../components/home/AboutSection';
import ServicesSummary from '../components/home/ServicesSummary';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import SubsidiaryProduction from '../components/home/SubsidiaryProduction';
import Button from '../components/shared/Button';
import SectionHeader from '../components/shared/SectionHeader';
import ContactForm from '../components/contact/ContactForm';

export default function Home() {
  return (
    <>
      <SEO
        title="Zylo Events — Corporate & Experiential Events powered by Alankaran"
        description="Zylo Events is the dedicated corporate and luxury experiential events wing of Alankaran. Specializing in high-end brand activations, corporate conferences, product launches, global MICE, trade shows, and experiential installations across India since 2011."
        path="/"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Zylo Events",
            "url": "https://zylo.events",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://zylo.events/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        ]}
      />

      <main id="home">
        {/* 1. HERO SLIDER */}
        <HeroSlider />

        {/* 2. BRAND LOGOS STRIP */}
        <BrandsStrip />

        {/* 3. WHAT ARE YOU PLANNING? */}
        <PlanningExpertise />

        {/* 4. ABOUT SPLIT SECTION */}
        <AboutSection />

        {/* 5. SERVICES SECTION */}
        <ServicesSummary />

        {/* 6. WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 7. WORKFLOW / PROCESS SECTION */}
        <section className="process-section section-pad-lg bg-gray" id="process" aria-labelledby="process-title">
          <div className="container">
            <SectionHeader
              tag="Our Workflow"
              title={<>How We <span style={{ color: 'var(--brand)' }}>Work</span></>}
              subtitle="Our proven four-step methodology ensures every experiential installation, brand activation, and corporate conference is executed with absolute perfection."
              id="process-title"
            />

            <div className="process-grid">
              {/* Step 1: Strategic Consulting */}
              <div className="process-card">
                <div className="process-card-header">
                  <div className="process-icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-compass">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                    </svg>
                  </div>
                  <span className="process-badge">01</span>
                </div>
                <h3>Strategic Consulting</h3>
                <p>We align with your objectives, target audience, and brand vision to architect a strategic event roadmap with detailed feasibility and budget plans.</p>
              </div>

              {/* Step 2: Experiential Design */}
              <div className="process-card">
                <div className="process-card-header">
                  <div className="process-icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-aperture">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                      <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                      <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                      <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                      <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                      <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                    </svg>
                  </div>
                  <span className="process-badge">02</span>
                </div>
                <h3>Experiential Design</h3>
                <p>Our creative team crafts full visual concepts, bespoke theme elements, immersive lighting designs, and interactive 3D spatial renders.</p>
              </div>

              {/* Step 3: Technical Production */}
              <div className="process-card">
                <div className="process-card-header">
                  <div className="process-icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </div>
                  <span className="process-badge">03</span>
                </div>
                <h3>Technical Production</h3>
                <p>We manage full-scale technical layouts, vendor coordination, licensing, and rigorous logistical timelines to secure a robust event foundation.</p>
              </div>

              {/* Step 4: Flawless Execution */}
              <div className="process-card">
                <div className="process-card-header">
                  <div className="process-icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                  <span className="process-badge">04</span>
                </div>
                <h3>Flawless Execution</h3>
                <p>Under the guidance of our veteran executive team, we direct the setup, live show orchestration, and teardown with absolute precision.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. GALLERY PREVIEW */}
        <section className="gallery-section section-pad-lg" id="gallery" aria-labelledby="gallery-title">
          <div className="container">
            <SectionHeader
              tag="Portfolio"
              title={<>Our <span style={{ color: 'var(--brand)' }}>Gallery</span></>}
              subtitle="A glimpse into the world of extraordinary events, exhibitions, and corporate experiences we've crafted across Hyderabad and India."
              id="gallery-title"
            />

            <div className="gallery-grid">
              <div
                className="gallery-item gi-tall"
                style={{
                  background: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=75&auto=format') center/cover no-repeat`,
                  cursor: 'pointer'
                }}
                role="img"
                aria-label="Corporate conference event — Exhibition Management Company Hyderabad"
              ></div>
              <div
                className="gallery-item"
                style={{
                  background: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=75&auto=format') center/cover no-repeat`,
                  cursor: 'pointer'
                }}
                role="img"
                aria-label="Product launch event management Hyderabad"
              ></div>
              <div
                className="gallery-item"
                style={{
                  background: `url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=75&auto=format') center/cover no-repeat`,
                  cursor: 'pointer'
                }}
                role="img"
                aria-label="Award ceremony event organizers Hyderabad"
              ></div>
              <div
                className="gallery-item gi-wide"
                style={{
                  background: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=75&auto=format') center/cover no-repeat`,
                  cursor: 'pointer'
                }}
                role="img"
                aria-label="Corporate team outing Hyderabad"
              ></div>
              <div
                className="gallery-item"
                style={{
                  background: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=75&auto=format') center/cover no-repeat`,
                  cursor: 'pointer'
                }}
                role="img"
                aria-label="Exhibition stall designers Hyderabad trade show"
              ></div>
              <div
                className="gallery-item"
                style={{
                  background: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=75&auto=format') center/cover no-repeat`,
                  cursor: 'pointer'
                }}
                role="img"
                aria-label="MICE event management Hyderabad"
              ></div>
            </div>

            <div className="gallery-cta" style={{ textAlign: 'center', marginTop: '40px' }}>
              <Button to="/gallery" variant="gold-outline">
                View Full Gallery →
              </Button>
            </div>
          </div>
        </section>

        {/* 9. ZYLO PRODUCTION DIVISION */}
        <SubsidiaryProduction />

        {/* 10. CTA BANNER */}
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
          <div className="cta-banner-content reveal">
            <h2>Looking for Premium Corporate<br />&amp; <span style={{ color: '#60A5FA' }}>Experiential Event Specialists?</span></h2>
            <p>We turn brand strategies into high-impact physical realities. Connect with Zylo Events, a specialized brand by Alankaran, to discuss your next experiential showcase.</p>
            <Button to="/contact" variant="outline-white" size="lg">
              Book Your Event Now
            </Button>
          </div>
        </section>

        {/* 11. CLIENT TESTIMONIALS */}
        <Testimonials />

        
        {/* 13. CONTACT SECTION */}
        <section className="contact-section section-pad-lg" id="contact" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div className="contact-info reveal">
              <span className="section-tag">Get In Touch</span>
              <h2 id="contact-title" className="section-title">
                Let's Create Something <span style={{ color: 'var(--brand)' }}>Extraordinary</span>
              </h2>
              <p style={{ marginBottom: '32px' }}>
                Tell us about your event objectives — whether it is an experiential brand activation, corporate conference, high-end product launch, or private corporate retreat — and our design leads will reach out within 24 hours with a tailored visual proposal.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <strong>Our Office</strong>
                    <span>Plot No. 78, TNGOs Colony, Phase 2, Financial District, Gachibowli, Hyderabad, Telangana 500032</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.75A16 16 0 0 0 15.25 16.09l.93-.93a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Call Us</strong>
                    <span><a href="tel:+918977611886">+91 89776 11886</a></span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <strong>Email Us</strong>
                    <span><a href="mailto:hello@zylo.events">hello@zylo.events</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap reveal">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
