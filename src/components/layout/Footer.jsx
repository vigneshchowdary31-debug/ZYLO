import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Clean corporate footer for ZYLO Events. Incorporates logo vectors, detailed
 * map structures for quick navigation, contact listings, and social links.
 */
export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand details column */}
          <div className="footer-col footer-brand reveal">
            <Link to="/" className="footer-logo" aria-label="Zylo Events Home">
              <svg width="140" height="46" viewBox="0 0 160 52" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="0" y="4" width="44" height="44" rx="6" fill="#3B82F6" />
                <rect x="8" y="10" width="28" height="7" rx="1" fill="#ffffff" />
                <rect x="8" y="35" width="28" height="7" rx="1" fill="#ffffff" />
                <line x1="34" y1="11" x2="10" y2="41" stroke="#14B8A6" strokeWidth="4.5" strokeLinecap="round" />
                <text x="54" y="32" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="22" letterSpacing="5" fill="#ffffff">ZYLO</text>
              </svg>
            </Link>
            <p style={{ marginTop: '16px' }}>
              Zylo Events, the corporate and experiential events wing of Alankaran, has been delivering premium event experiences since 2011.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col reveal">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/corporate-events">Corporate Events</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Corporate services */}
          <div className="footer-col reveal">
            <h4 className="footer-col-title">Corporate Events</h4>
            <ul>
              <li><Link to="/corporate-events#conferences">Conference Organizers</Link></li>
              <li><Link to="/corporate-events#product-launches">Product Launch Events</Link></li>
              <li><Link to="/corporate-events#awards">Award Ceremonies</Link></li>
              <li><Link to="/corporate-events#retreats">Corporate Retreats</Link></li>
              <li><Link to="/corporate-events#trade-shows">Trade Shows &amp; Expos</Link></li>
            </ul>
          </div>

          {/* Core sub services */}
          <div className="footer-col reveal">
            <h4 className="footer-col-title">More Services</h4>
            <ul>
              <li><Link to="/corporate-events#trade-shows">Exhibition Organizers Hyd</Link></li>
              <li><Link to="/corporate-events#product-launches">Inauguration Ceremonies</Link></li>
              <li><Link to="/corporate-events#retreats">Dealer &amp; Distributor Meets</Link></li>
              <li><Link to="/corporate-events#team-building">Team Outing Organizers</Link></li>
              <li><Link to="/corporate-events#trade-shows">MICE Event Management</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col reveal">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Corporate Office<br />
                Plot No. 78, TNGOs Colony,<br />
                Phase 2, Financial District,<br />
                Gachibowli, Hyderabad,<br />
                Telangana 500032
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.75A16 16 0 0 0 15.25 16.09l.93-.93a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+918977611886">+91 89776 11886</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:hello@zylo.events">hello@zylo.events</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Zylo Events. All rights reserved. Zylo Events is the corporate and experiential events wing of Alankaran, delivering premium events since 2011.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
