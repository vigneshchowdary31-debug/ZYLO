import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../shared/SectionHeader';

const expertiseCards = [
  {
    title: 'Corporate Conferences',
    desc: 'World-class AV, expert logistics',
    bg: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=75&auto=format',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    title: 'Product Launches',
    desc: 'Make your brand unforgettable',
    bg: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=75&auto=format',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    title: 'Award Ceremonies',
    desc: 'Recognise excellence in style',
    bg: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=75&auto=format',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    )
  },
  {
    title: 'Team Outing & Dealer Meets',
    desc: 'Unite, energise, inspire your team',
    bg: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=75&auto=format',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: 'Inaugurations & Ceremonies',
    desc: 'Opening & ground breaking events',
    bg: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=75&auto=format',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: 'Trade Shows & Exhibitions',
    desc: 'Exhibitions that command attention',
    bg: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=75&auto=format',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )
  }
];

export default function PlanningExpertise() {
  const navigate = useNavigate();

  return (
    <section
      className="planning-section section-pad-lg"
      id="planning"
      aria-labelledby="planning-title"
    >
      <div className="container">
        <SectionHeader
          tag="Our Expertise"
          title={
            <>
              What Are You <span style={{ color: 'var(--brand)' }}>Planning?</span>
            </>
          }
          subtitle="From intimate boardroom sessions to massive trade shows and exhibitions — we specialise in bringing every vision to life across Hyderabad and pan-India."
          id="planning-title"
        />

        <div className="planning-grid">
          {expertiseCards.map((card, idx) => (
            <article
              key={idx}
              className="planning-card reveal"
              onClick={() => navigate('/contact')}
            >
              <div 
                className="planning-card-bg" 
                style={{ backgroundImage: `url('${card.bg}')` }}
              ></div>
              <div className="planning-card-overlay"></div>

              <div className="planning-card-icon">
                {card.icon}
              </div>

              <div className="planning-card-body">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>

                <span className="planning-cta">
                  Enquire Now →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );}