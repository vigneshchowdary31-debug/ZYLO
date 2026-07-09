import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../shared/SectionHeader';

const corporateServices = [
  {
    title: 'Conferences & Seminars',
    desc: 'State-of-the-art AV, seamless registration & expert moderation for corporate conferences Hyderabad.',
    img: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=700&q=75&auto=format',
    bg: 'linear-gradient(160deg, #1e3c72 0%, #2a5298 60%, #0d1b3e 100%)'
  },
  {
    title: 'Product Launches',
    desc: 'Spectacular product launch event management that makes your brand the talk of the industry.',
    img: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=700&q=75&auto=format',
    bg: 'linear-gradient(160deg, #0d4f8c 0%, #1d6fa4 60%, #082d50 100%)'
  },
  {
  title: 'Leadership Summits',
  desc: 'High-impact leadership summits, executive forums, and industry gatherings designed to inspire collaboration and strategic growth.',
  img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=75&auto=format',
  bg: 'linear-gradient(160deg, #1a365d 0%, #2563eb 60%, #0f172a 100%)'
},
  {
    title: 'Award Ceremonies',
    desc: 'Prestigious, polished celebrations of achievement and excellence — crafted to perfection.',
    img: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=700&q=75&auto=format',
    bg: 'linear-gradient(160deg, #0e5e63 0%, #0ea5a4 60%, #073e41 100%)'
  },
  {
    title: 'Corporate Team Outings',
    desc: 'Refreshing team outing experiences across Hyderabad to inspire and bond your workforce.',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=75&auto=format',
    bg: 'linear-gradient(160deg, #134e5e 0%, #71b280 60%, #0a2e36 100%)'
  }
];

const expoServices = [
  {
    title: 'B2B Trade Shows',
    desc: 'Powerful business networking events with curated exhibitor profiles and exhibition stall fabrication.',
    img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=700&q=75&auto=format',
    bg: 'linear-gradient(160deg, #141e30 0%, #243b55 60%, #0a1020 100%)'
  },
  {
    title: 'Tech Expos',
    desc: 'Innovative tech showcases with interactive demos, custom stall design, and keynotes.',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=75&auto=format',
    bg: 'linear-gradient(160deg, #16222a 0%, #3a6186 60%, #0a1318 100%)'
  },
  {
    title: 'Dealer & Distributor Meets',
    desc: 'Engaging dealer meet event management that strengthens your distribution network.',
    img: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=700&q=75&auto=format',
    bg: 'linear-gradient(160deg, #1a2a4a 0%, #2c4a8a 60%, #0d1830 100%)'
  },
  {
    title: 'MICE Events',
    desc: 'End-to-end MICE event management — Meetings, Incentives, Conferences & Exhibitions.',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=75&auto=format',
    bg: 'linear-gradient(160deg, #373b44 0%, #3B82F6 60%, #1a1d22 100%)'
  }
];

export default function ServicesSummary() {
   const navigate = useNavigate();
  return (
    <section className="services-section section-pad-lg bg-gray" id="services" aria-labelledby="services-title" style={{ paddingTop: '40px' }}>
      <div className="container">
        <SectionHeader
          tag="What We Do"
          title={<>Various Services Offered By <span style={{ color: 'var(--brand)' }}>Zylo Events</span></>}
          id="services-title"
        />

        {/* Corporate Events Group */}
        <div className="services-group reveal">
          <h3 className="services-group-title">
            <span className="gold-label">Corporate Events</span>
          </h3>
          <div className="services-grid bento-5">
            {corporateServices.map((service, idx) => (
              <article
                key={idx}
                className="service-card"
                style={{
    '--svc-bg': service.bg,
    cursor: 'pointer'
  }}
  onClick={() => navigate('/contact')}
              >
                <div
                  className="service-card-img"
                  role="img"
                  aria-label={service.title}
                  style={{
                    backgroundImage: `url('${service.img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="service-card-body">
                  <div className="service-card-line"></div>
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Exhibition & Trade Shows Group */}
        <div className="services-group reveal" style={{ marginTop: '64px' }}>
          <h3 className="services-group-title">
            <span className="gold-label">Exhibition &amp; Trade Shows</span>
          </h3>
          <div className="services-grid bento-4">
            {expoServices.map((service, idx) => (
              <article
  key={idx}
  className="service-card"
  style={{
    '--svc-bg': service.bg,
    cursor: 'pointer'
  }}
  onClick={() => navigate('/contact')}
>
              
                <div
                  className="service-card-img"
                  role="img"
                  aria-label={service.title}
                  style={{
                    backgroundImage: `url('${service.img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="service-card-body">
                  <div className="service-card-line"></div>
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
