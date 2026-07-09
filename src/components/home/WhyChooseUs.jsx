import React from 'react';
import Button from '../shared/Button';

const strengths = [
  {
    num: '01',
    title: 'Venue Selection & Management',
    desc: 'Access to 500+ premium venues across India with exclusive Zylo pricing and seamless coordination.'
  },
  {
    num: '02',
    title: 'Entertainment & AV Production',
    desc: 'World-class sound, lighting, LED walls, and curated entertainment acts to elevate every moment.'
  },
  {
    num: '03',
    title: 'Exhibition Stall Design & Fabrication',
    desc: 'Custom stall design, fabrication, and large-format printing that makes your brand stand out.'
  },
  {
    num: '04',
    title: 'Décor & Ambience Design',
    desc: 'Custom thematic décor, floral arrangements, and lighting design that transforms any space.'
  },
  {
    num: '05',
    title: 'Post-Event Analytics',
    desc: 'Comprehensive attendee feedback, ROI reporting, and post-event analytics to measure success.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-section section-pad-lg" id="why-us" aria-labelledby="why-title">
      <div className="container why-grid">
        <div className="why-left reveal">
          <span className="section-tag section-tag-gold">Our Strengths</span>
          <h2 id="why-title" className="section-title white">
            Why Choose Zylo for Your <span style={{ color: '#BAE6FD' }}>Experiential Events</span>
          </h2>
          <p className="why-desc white-60">
            We bring together the finest talent, technology, and creativity to deliver events that surpass expectations — every single time, across Hyderabad and pan-India.
          </p>
          <Button to="/contact" variant="gold" className="mt-3">
            Start Planning Today
          </Button>
        </div>

        <div className="why-right reveal">
          {strengths.map((item, idx) => (
            <div key={idx} className="why-item">
              <div className="why-number">{item.num}</div>
              <div className="why-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
