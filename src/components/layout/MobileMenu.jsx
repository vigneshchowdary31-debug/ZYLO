import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

/**
 * Mobile navigation overlay menu that syncs opening states with
 * the site Header hamburger control.
 */
export default function MobileMenu({ isOpen, onClose }) {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Corporate Events', path: '/corporate-events' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <div
      className={clsx('mobile-nav', { open: isOpen })}
      id="mobileNav"
      aria-hidden={!isOpen}
    >
      <ul role="list">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link to={link.path} onClick={onClose}>
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/contact"
            className="btn btn-gold"
            style={{
              marginTop: '8px',
              width: '100%',
              justifyContent: 'center',
              textAlign: 'center'
            }}
            onClick={onClose}
          >
            Get Quote
          </Link>
        </li>
      </ul>
    </div>
  );
}
