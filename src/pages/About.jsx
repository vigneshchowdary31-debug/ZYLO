import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';
import SectionHeader from '../components/shared/SectionHeader';
import Button from '../components/shared/Button';

// const teamMembers = [
//   {
//     name: 'Chaitanya Kulkarni',
//     role: 'Co-Founder & CEO',
//     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=75&auto=format',
//     bio: 'A visionary corporate strategist and experiential pioneer with 18+ years of legacy. Former Director of Operations for premium global events groups, Chaitanya co-founded Zylo in 2011 to bring scale and absolute precision to corporate events.',
//     traits: ['Corporate Strategy', 'Scale & Precision'],
//     linkedin: '#'
//   },
//   {
//     name: 'Chandrika Ganji',
//     role: 'Co-Founder & Creative Director',
//     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=75&auto=format',
//     bio: 'A highly acclaimed spatial designer and luxury brand architect. Chandrika transforms physical environments into breathtaking, immersive sensory brand spaces, leading Zylo\'s experiential creative wing.',
//     traits: ['Spatial Architect', 'Luxury Design'],
//     linkedin: '#'
//   },
//   {
//     name: 'Arun Mehta',
//     role: 'Operations Head',
//     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=75&auto=format',
//     bio: 'Logistics genius and master of AV production who ensures that Zylo\'s complex staging and mega-scale corporate logistics are executed with flawless precision.',
//     traits: ['AV Production', 'Logistics Master'],
//     linkedin: '#'
//   },
//   {
//     name: 'Neha Patel',
//     role: 'Client Relations',
//     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=75&auto=format',
//     bio: 'The heartbeat of our client relations, Neha manages key corporate accounts for over 15 Fortune 500 brands, translating corporate objectives into flawless execution plans.',
//     traits: ['Client Success', 'Enterprise Lead'],
//     linkedin: '#'
//   },
//   {
//     name: "Vidhi",
//     role: "Client Service Manager",
//     bio:
//       "Introducing our event client service manager extraordinaire! A multitasking marvel with a knack for show flow and a memory that never fails. She's best at handling guests and clients, making every event a breeze!",
//     traits: ['Brand Strategy', 'Experiential Design'],
//     linkedin: '#'
//     },
//   {
//     name: "Gowtham",
//     role: "Managing Director",
//     bio:
//       "Founder with entrepreneurial spirit and passion for creating experiences for clients. Sorcerer when it comes to planning and executing events.",
//   traits: ['Brand Strategy', 'Experiential Design'],
//     linkedin: '#'
//   },
//   {
//     name: "Snehal",
//     role: "Managing Director",
//     bio:
//       "Co-Founder and Event Designer! NO one as creative as her. She experiments with innovations. Works closely with our vendor partners and to deliver events with absolute perfection.",
//       traits: ['Creative Direction', 'Visual Storytelling'],
//     linkedin: '#'
//   },
//   {
//     name: "Naveen",
//     role: "Logistics Manager",
//     bio:
//       "Multi tasker and executes every job with utmost dedication. A person with big heart and helps people around him in anyway possible in all departments.",
//     traits: ['Logistics', 'Operations'],
//     linkedin: '#'
//   },
//   {
//     name: "Sadhana",
//     role: "Event Stylist",
//     bio:
//       "Organized and a person with eye for detail. An expert when it comes to executing event installations, and dealing with workforce from multiple departments.",
//     traits: ['Event Styling', 'Organization'],
//     linkedin: '#'
//   },
//   {
//     name: "Prashant",
//     role: "Event 3D Designer", 
//    bio: "An event 3D designer celebrated for his meticulous attention to detail and unwavering commitment to creativity and perfection. With a keen eye for aesthtics and a passion for precision, he crafts designs that captivate and inspire.",
//     traits: ['3D Design', 'Creativity'],
//     linkedin: '#'
//   },

// ];

const zyloDifferences = [
  {
    id: '01',
    title: '14+ Years of Industry Excellence',
    desc: 'Delivering premium corporate and experiential events since 2011.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    )
  },
  {
    id: '02',
    title: 'End-to-End Event Execution',
    desc: 'Strategy, design, production, fabrication, logistics, and flawless on-ground execution under one roof.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    )
  },
  {
    id: '03',
    title: 'Pan-India Operations',
    desc: 'Successfully executing events across major cities in India.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    )
  },
  {
    id: '04',
    title: 'Bespoke & Experiential Approach',
    desc: 'Every event is uniquely designed to create memorable brand experiences.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    id: '05',
    title: 'Trusted by Leading Enterprises',
    desc: 'Preferred partner for corporate conferences, leadership summits, product launches, and brand activations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    )
  },
  {
    id: '06',
    title: 'Dedicated On-Ground Support',
    desc: 'Experienced teams ensuring seamless coordination and flawless execution throughout every event.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  }
];

export default function About() {
    const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

const fetchEmployees = async () => {
  const q = query(
    collection(db, 'employees'),
    orderBy('order', 'asc')
  );

  const data = await getDocs(q);

  setTeamMembers(
    data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
  );
};
  return (
    <>
      <SEO
        title="Our Story — Premium Experiential Design Since 2011 | Zylo Events"
        description="Learn about Zylo Events — the corporate and experiential events wing of Alankaran, delivering premium corporate events, conferences, and brand activations since 2011."
        path="/about"
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
      "name": "About",
      "item": "https://zylo.events/about"
    }
  ]
}]}
      />

      <main className="about-page">
        {/* Inner Hero */}
        <section
          className="inner-hero"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=75&auto=format')` }}
        >
          <div className="inner-hero-overlay"></div>
          <div className="container inner-hero-content">
            <div className="hero-badge animate-fade-up">
              <span className="badge-dot"></span> Premium Corporate &amp; Experiential Specialists
            </div>
            <h1 className="animate-fade-up">
              About <span style={{ color: 'var(--brand, #3B82F6)' }}>Zylo Events</span>
            </h1>
            <p className="animate-fade-up">
              Crafting extraordinary experiential events since 2011 — powered by the legacy and creative vision of Alankaran.
            </p>
            <div className="inner-hero-breadcrumb animate-fade-up">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>About</span>
            </div>

            {/* Premium Experiential Stats Strip */}
            <div className="about-hero-stats animate-fade-up">
              <div className="about-stat-item">
                <strong>2011</strong>
                <span>Established</span>
              </div>
              <div className="about-stat-divider"></div>
              <div className="about-stat-item">
                <strong>800+</strong>
                <span>Events Designed</span>
              </div>
              <div className="about-stat-divider"></div>
              <div className="about-stat-item">
                <strong>200+</strong>
                <span>Global Brands</span>
              </div>
              <div className="about-stat-divider"></div>
              <div className="about-stat-item">
                <strong>Pan-India</strong>
                <span>Operations</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="story-section section-pad-lg">
          <div className="container story-grid">
            <div className="reveal">
              <span className="section-tag">Our Story &amp; Legacy</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Leading the Corporate{' '}
                <span style={{ color: 'var(--brand)' }}>Experiential Revolution</span>
              </h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '16px', lineHeight: '1.75' }}>
                <strong>Incorporated in 2011</strong>, Zylo Events was established with a singular vision: to bridge the gap between heavy corporate logistics and artistic brand storytelling. Founded by corporate strategist <strong>Chaitanya Kulkarni</strong> and later joined by luxury spatial designer <strong>Chandrika Ganji</strong>, Zylo was conceptualized as the specialized corporate and experiential events wing under the illustrious <strong>Alankaran</strong> parent banner.
              </p>
              <p style={{ color: 'var(--text-light)', marginBottom: '16px', lineHeight: '1.75' }}>
                Over the past 15 years, Zylo has grown from a boutique setup into a multi-city experiential events powerhouse. Powered by Alankaran's deep-rooted design legacy and high-end production yards, Zylo has successfully delivered over 800 premium events across India, spanning corporate conferences, brand activations, custom experiential installations, product launches, trade shows, and high-level corporate retreats.
              </p>
              <p style={{ color: 'var(--text-light)', marginBottom: '28px', lineHeight: '1.75' }}>
                Our Brand Philosophy revolves around "experiential architecture"—the belief that every corporate gathering should be an immersive, sensory-rich brand story. From our headquarters in Hyderabad to regional offices in Mumbai and Delhi, we combine ISO 9001 certified execution quality with groundbreaking creative production to serve the world's most prestigious brands.
              </p>
              <div className="founders-quote-box" style={{ borderLeft: '3px solid var(--brand)', paddingLeft: '20px', marginBottom: '28px', fontStyle: 'italic' }}>
                <p style={{ color: 'var(--white)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '8px' }}>
                  "We don't just organize events; we construct high-value spatial environments where brand stories come alive, forging real human connections."
                </p>
                <cite style={{ color: 'var(--brand)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  — Chaitanya &amp; Chandrika, Founders
                </cite>
              </div>
              <Button to="/contact" variant="gold">
                Work With Us →
              </Button>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <img width="800" height="533"
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=75&auto=format"
                alt="Zylo Events team collaboration"
                loading="lazy"
                className="story-img"
                style={{ borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              />
              <div className="alankaran-badge-card" style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', position: 'relative' }}>
                <h4 style={{ color: 'var(--white)', marginBottom: '8px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--brand)', fontSize: '1.2rem' }}>✦</span> The Alankaran Connection
                </h4>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  As the dedicated corporate and experiential events wing of Alankaran, Zylo Events leverages the immense fabrication yards, direct logistics networks, and unparalleled design legacy of South India's premium events empire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="mission-vision-section" style={{ padding: '0 0 96px' }}>
          <div className="container">
            <div className="section-header reveal" style={{ marginBottom: '48px' }}>
              <span className="section-tag">What Drives Us</span>
              <h2 className="section-title white">
                Mission, Vision &amp; <span style={{ color: '#2563EB' }}>Values</span>
              </h2>
            </div>
            <div className="mission-vision-grid reveal">
              <div className="mv-card">
                <div className="mv-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To deliver world-class corporate and experiential events that evoke emotional resonance, drive brand loyalty, and deliver absolute operational perfection, carrying forward Alankaran's creative pedigree.
                </p>
              </div>
              <div className="mv-card">
                <div className="mv-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be recognized as India's leading experiential marketing and corporate production authority, setting global benchmarks in technical execution, artistic innovation, and sustainable premium event management.
                </p>
              </div>
              <div className="mv-card">
                <div className="mv-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3>Our Core Values</h3>
                <p style={{ fontSize: '0.9rem', textAlign: 'left', margin: '0' }}>
                  <strong>Artistry & Innovation:</strong> We believe spatial design is a brand’s greatest storyteller.<br/>
                  <strong>Meticulous Execution:</strong> Flawless logistics, technical operations, and support.<br/>
                  <strong>Unwavering Integrity:</strong> Transparent corporate billing, safety, and excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-pad-lg bg-dark" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="container">
            <SectionHeader
              tag="Leadership &amp; Vision"
              title={<>Leadership Behind <span style={{ color: 'var(--brand)' }}>Extraordinary Events</span></>}
              subtitle="Our executive committee brings together industry-leading operations strategy, luxury spatial design, and world-class event production to deliver unparalleled brand experiences across India."
              white={true}
            />

            <div className="leadership-grid reveal">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="leadership-card"
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--x', `${x}px`);
                    card.style.setProperty('--y', `${y}px`);
                  }}
                >
                  <div className="avatar-container">
                    <div className="avatar-ring"></div>
                    <div className="avatar-image-wrapper">
                      <img width="800" height="533"
                        src={
                              member.image ||
                              'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=75&auto=format'
                            }
                        alt={`${member.name}, ${member.role}`}
                        loading="lazy"
                        className="avatar-image"
                      />
                    </div>
                  </div>
                  <h3 className="leader-name">{member.name}</h3>
                  <span className="leader-role">{member.role}</span>
                  {member.traits && member.traits.length > 0 && (
                    <div className="leader-traits">
                      {member.traits.map((trait, tIdx) => (
                        <span key={tIdx} className="trait-tag">{trait}</span>
                      ))}
                    </div>
                  )}
                  <p className="leader-bio">{member.description}</p>
                  <div className="leader-socials">
                    <a
                      href={member.linkedin}
                      className="leader-social-btn"
                      aria-label={`${member.name} LinkedIn Profile`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Zylo Difference - Interactive Stacking Cards Theme (Light Luxury) */}
        <section className="stacking-section">
          <div className="container">
            <div className="stacking-header text-center reveal">
              <span className="stacking-tag">The Zylo Difference</span>
              <h2 className="stacking-title">
                Why Leading Brands <br /> Choose <span>Zylo</span>
              </h2>
              <p className="stacking-subtitle">
                We combine unparalleled scale with bespoke experiential design to deliver world-class corporate environments.
              </p>
            </div>

            <div className="stacking-container">
              {zyloDifferences.map((item, idx) => {
                // Array of high-quality event images for each card
                const images = [
                  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=75&auto=format', // Industry Excellence (Elegant corporate event)
                  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=75&auto=format', // Event Execution (Production setup)
                  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=75&auto=format', // Pan-India (City Skyline)
                  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=75&auto=format', // Bespoke / Experiential
                  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=75&auto=format', // Enterprises (Corporate meeting)
                  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=75&auto=format'  // On-ground Support (Team working)
                ];
                
                return (
                  <div key={idx} className={`stack-card stack-card-${idx + 1}`}>
                    <div className="stack-card-inner">
                      <div className="stack-card-content">
                        <div className="stack-watermark">0{idx + 1}</div>
                        <h4 className="stack-card-title">{item.title}</h4>
                        <p className="stack-card-desc">{item.desc}</p>
                      </div>
                      <div className="stack-card-image" style={{ backgroundImage: `url('${images[idx]}')` }}>
                        <div className="stack-card-image-overlay"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
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
            <h2>Where Corporate Events<br />Become <span style={{ color: '#60A5FA' }}>Experiential Milestones</span></h2>
            <p>Let's discuss your next brand activations, conferences, or spatial installations. Connect with our experiential strategy leads today.</p>
            <Button to="/contact" variant="gold" size="lg">
              Get in Touch →
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
