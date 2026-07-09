import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';
import SectionHeader from '../components/shared/SectionHeader';
import Button from '../components/shared/Button';
import { galleryItems } from '../data/gallery';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeImg, setActiveImg] = useState(null);

  // If a category tab is selected, filter matching sections
 
  return (
    <>
      <SEO
        title="Experiential Showcase &amp; Portfolio | Zylo Events"
        description="Browse our experiential event portfolio. View premium brand activations, massive trade show stalls, corporate conferences, and high-end retreats executed across India since 2011."
      />

      <main>
        {/* Inner Hero */}
        <section
          className="inner-hero"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80')` }}
        >
          <div className="inner-hero-overlay"></div>
          <div className="container inner-hero-content">
            <div className="hero-badge animate-fade-up">
              <span className="badge-dot"></span> 800+ Events Delivered
            </div>
            <h1 className="animate-fade-up">
              Experiential <span style={{ color: '#60A5FA' }}>Showcase</span>
            </h1>
            <p className="animate-fade-up">
              A visual journey through premium corporate productions, luxury brand activations, and state-of-the-art experiential setups crafted by Zylo since 2011.
            </p>
            <div className="inner-hero-breadcrumb animate-fade-up">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Gallery</span>
            </div>
          </div>
        </section>

        {/* Gallery grid sections */}
        <section className="section-pad-lg">
          <div className="container">
            {/* Filter Tabs */}
            

            {/* Gallery group sections */}
            <div className="gallery-masonry">
  {galleryItems.map(item => (
    <div
      key={item.id}
      className="gallery-masonry-item"
      style={{ cursor: 'zoom-in' }}
      tabIndex="0"
      onClick={() => setActiveImg(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setActiveImg(item);
        }
      }}
    >
      <img
        src={item.src}
        alt={item.alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />

      <div className="gallery-masonry-item-overlay">
        +
      </div>
    </div>
  ))}
</div>

            <div style={{ textAlign: 'center', marginTop: '48px' }} className="">
              <Button to="/contact" variant="gold" size="lg">
                Plan Your Event →
              </Button>
            </div>
          </div>
        </section>

        {/* Lightbox Zoom Modal overlay */}
        {activeImg && (
          <div
            className="gallery-overlay"
            style={{
              display: 'flex',
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.94)',
              zIndex: 9999,
              alignItems: 'center',
              justifyContent: 'center',
              padding: '32px',
              cursor: 'zoom-out'
            }}
            onClick={() => setActiveImg(null)}
          >
            <button
              className="close-lightbox"
              style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                color: 'white',
                fontSize: '1.5rem',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => setActiveImg(null)}
            >
              ✕
            </button>
            <img
              src={activeImg.src}
              alt={activeImg.alt}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
                cursor: 'default'
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* Bottom CTA Banner */}
        <section
          className="cta-banner"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          aria-label="Call to action"
        >
          <div className="cta-banner-overlay"></div>
          <div className="container cta-banner-content reveal">
            <h2>Want Your Event to Look<br />This <span style={{ color: '#60A5FA' }}>Extraordinary?</span></h2>
            <p>Let's plan something unforgettable together. Contact Zylo Events today.</p>
            <Button to="/contact" variant="outline-white" size="lg">
              Get a Free Quote →
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
