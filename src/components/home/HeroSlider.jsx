import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../shared/Button';

const heroSlides = [
  {
    id: 1,
    bgImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=75&auto=format',
    badge: 'A Brand by Alankaran | Since 2011',
    title: <>Crafting Experiential Events<br/>&amp; <span>Corporate Productions</span><br/>Since 2011</>,
    subtitle: 'Zylo Events, the corporate and experiential events wing of Alankaran, designs state-of-the-art brand activations, conferences, and luxury corporate retreats.',
    btn1: 'Plan Your Event →',
    btn2: 'Explore Our Work',
    stats: [
      { label: 'Events Delivered', num: '500+' },
      { label: 'Happy Clients', num: '200+' },
      { label: 'Years Experience', num: '15+' },
      { label: 'Google Rating', num: '4.9', star: true }
    ]
  },
  {
    id: 2,
    bgImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&q=75&auto=format',
    badge: 'Luxury Brand Activations & Installations',
    title: <>Experiential Installations<br/>&amp; <span>Brand Activations</span><br/>That Command Attention</>,
    subtitle: 'Bespoke experiential design, high-end fabrication, and custom brand activations powered by the legacy and creative vision of Alankaran.',
    btn1: 'Get Exhibition Quote →',
    btn2: 'Our Services',
    stats: [
      { label: 'Exhibitions Managed', num: '150+' },
      { label: 'Stalls Designed', num: '500+' },
      { label: 'Coverage', num: 'Pan-India' },
      { label: 'Certified', num: 'ISO' }
    ]
  },
  {
    id: 3,
    bgImage: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1600&q=75&auto=format',
    badge: 'Corporate Product Launches & Reveals',
    title: <>Product Launch Events<br/>That Build <span>Brand Legacies</span></>,
    subtitle: 'Creating high-impact sensory experiences, product reveals, and luxury immersive setups that position your brand at the absolute pinnacle of your industry.',
    btn1: 'Launch Your Product →',
    btn2: 'See How We Do It',
    stats: [
      { label: 'Product Launches', num: '80+' },
      { label: 'On-Time Delivery', num: '100%' },
      { label: 'Years Experience', num: '15+' },
      { label: 'Client Satisfaction', num: '4.9', star: true }
    ]
  },
  {
    id: 4,
    bgImage: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1600&q=75&auto=format',
    badge: 'Conferences & MICE Global Logistics',
    title: <>Premium Corporate Conferences<br/>&amp; <span>MICE Experiences</span></>,
    subtitle: 'Seamless execution, international standard technical operations, and immersive delegate experiences delivered pan-India since 2011.',
    btn1: 'Plan MICE Event →',
    btn2: 'About Zylo',
    stats: [
      { label: 'Events Delivered', num: '500+' },
      { label: 'Team Members', num: '60+' },
      { label: 'Cities Covered', num: '3' },
      { label: 'Google Rating', num: '4.9', star: true }
    ]
  },
  {
    id: 5,
    bgImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=75&auto=format',
    badge: 'Corporate Retreats & Award Ceremonies',
    title: <>High-End Corporate Retreats<br/>&amp; <span>Awards Ceremonies</span></>,
    subtitle: 'Transformative executive experiences, dealer summits, and award ceremonies designed to celebrate excellence and foster lasting professional bonds.',
    btn1: 'Book Team Outing →',
    btn2: 'View Gallery',
    stats: [
      { label: 'Team Outings', num: '200+' },
      { label: 'Dealer Meets', num: '50+' },
      { label: 'Years Experience', num: '15+' },
      { label: 'Google Rating', num: '4.9', star: true }
    ]
  }
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Stats Number Animation
  useEffect(() => {
    const animateStats = () => {
      const stats = document.querySelectorAll('.stat strong');
      stats.forEach((el) => {
        // Prevent re-animating if already processed
        if (el.dataset.animated === 'true') return;
        el.dataset.animated = 'true';

        const text = el.textContent;
        const num = parseFloat(text.replace(/[^\d.]/g, ''));
        const suffix = text.replace(/[\d.]/g, '');
        if (isNaN(num)) return;

        let startTimestamp = null;
        const duration = 1400;

        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const current = 0 + num * easedProgress;

          el.textContent = (num % 1 === 0 ? Math.round(current).toString() : current.toFixed(1)) + suffix;
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      });
    };

    const timer = setTimeout(animateStats, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section" aria-label="Hero — Premier Corporate Event Management Hyderabad">
      <Helmet>
        <link rel="preload" as="image" href={heroSlides[0].bgImage} fetchpriority="high" />
      </Helmet>
      
      <div className="custom-swiper-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', overflow: 'hidden' }}>
        {heroSlides.map((slide, index) => {
          const isActive = index === activeIndex;
          
          return (
            <div 
              key={slide.id}
              className={`hero-slide ${isActive ? 'active-slide' : ''}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: isActive ? 1 : 0,
                visibility: isActive ? 'visible' : 'hidden',
                transition: 'opacity 1.2s ease-in-out, visibility 1.2s ease-in-out',
                zIndex: isActive ? 1 : 0
              }}
            >
              <img
                src={slide.bgImage}
                alt={slide.badge}
                className="hero-bg-image"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: -1
                }}
                loading={index === 0 ? "eager" : "lazy"}
                fetchpriority={index === 0 ? "high" : "auto"}
                decoding="async"
              />
              <div className="hero-overlay"></div>
              <div className="hero-particles"></div>
              <div className="hero-content container">
                {/* Rely on CSS for animations */}
                <div className="hero-badge animate-fade-up">
                  <span className="badge-dot"></span> {slide.badge}
                </div>
                <h1 className="hero-title animate-fade-up">{slide.title}</h1>
                <p className="hero-subtitle animate-fade-up">{slide.subtitle}</p>
                <div className="hero-ctas animate-fade-up">
                  <Button to="/contact" variant="gold" size="lg">
                    {slide.btn1}
                  </Button>
                  <Button to="/gallery" variant="outline-white" size="lg">
                    {slide.btn2}
                  </Button>
                </div>

                <div className="hero-stats animate-fade-up">
                  {slide.stats.map((stat, sIdx) => (
                    <React.Fragment key={sIdx}>
                      {sIdx > 0 && <div className="stat-divider"></div>}
                      <div className="stat">
                        <strong>
                          {stat.num}
                          {stat.star && <span className="rating-star">★</span>}
                        </strong>
                        <span>{stat.label}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bullet Pagination */}
      <div 
        className="hero-pagination" 
        style={{ 
          position: 'absolute', 
          bottom: '40px', 
          left: '0', 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '12px', 
          zIndex: 10 
        }}
      >
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: index === activeIndex ? '32px' : '10px',
              height: '10px',
              borderRadius: '6px',
              background: index === activeIndex ? 'var(--brand, #3B82F6)' : 'rgba(255,255,255,0.6)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator" style={{ zIndex: 10 }}>
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
