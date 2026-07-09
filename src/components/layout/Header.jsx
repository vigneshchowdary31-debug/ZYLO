import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import useStickyNav from '../../hooks/useStickyNav';
import useMobileMenu from '../../hooks/useMobileMenu';
import clsx from 'clsx';

/**
 * Unified Header layout component which aggregates top contact strips,
 * interactive branding logo vectors, Navbar links, and mobile side menus.
 */
export default function Header() {
  const isScrolled = useStickyNav(80);
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <header className={clsx('site-header', { scrolled: isScrolled })} id="siteHeader">
      {/* Top contact & social bar */}
      <div className="header-top">
        <div className="container header-top-inner">
          <div className="header-social">
            <a href="#" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter/X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
          <div className="header-contact">
            <a href="tel:+918977611886">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.75A16 16 0 0 0 15.25 16.09l.93-.93a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 89776 11886
            </a>
            <span className="divider">|</span>
            <a href="mailto:hello@zylo.events">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hello@zylo.events
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Container */}
      <nav className="main-nav" role="navigation" aria-label="Main navigation">
        <div className="container nav-inner">
          {/* Logo vector box */}
          <Link to="/" className="nav-logo animate-fade-in" aria-label="Zylo Events Home" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
            <svg width="185" height="60" viewBox="0 0 160 52" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ overflow: 'visible' }}>
              <rect x="0" y="4" width="44" height="44" rx="6" fill="#3B82F6" />
              <rect x="8" y="10" width="28" height="7" rx="1" fill="#ffffff" />
              <rect x="8" y="35" width="28" height="7" rx="1" fill="#ffffff" />
              <line x1="34" y1="11" x2="10" y2="41" stroke="#14B8A6" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="30" y1="8" x2="14" y2="44" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              <text x="54" y="34" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="24" letterSpacing="5" fill="#0F172A" className="header-logo-text">ZYLO</text>
            </svg>
            <div className="brand-badge-wrapper" style={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid rgba(15, 23, 42, 0.15)', paddingLeft: '18px', lineHeight: '1.25' }}>
              <span style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#64748b', fontWeight: '600' }}>Corporate Wing of</span>
              <span style={{ fontSize: '1.05rem', letterSpacing: '0.08em', color: 'var(--brand, #3B82F6)', fontWeight: '800', textTransform: 'uppercase' }}>Alankaran</span>
            </div>
          </Link>

          {/* Desktop NavLinks system */}
          <Navbar />

          {/* Quote action button & Hamburger toggler */}
          <div className="nav-right">
            <Link to="/contact" className="btn btn-gold nav-cta">Get Quote</Link>
            <button
              className={clsx('hamburger', { open: isOpen })}
              id="hamburger"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        {/* Mobile menu drawer overlay */}
        <MobileMenu isOpen={isOpen} onClose={closeMenu} />
      </nav>
    </header>
  );
}
