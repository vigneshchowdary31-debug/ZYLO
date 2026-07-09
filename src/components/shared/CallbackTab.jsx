import React from 'react';
import { useLocation, Link } from 'react-router-dom';

/**
 * Premium floating callback tab that scrolls dynamically to the contact section
 * or redirects to the dedicated contact page depending on current route context.
 */
export default function CallbackTab() {
  const { pathname } = useLocation();

  const handleScroll = (e) => {
    const contactSection = document.getElementById('contact') || document.getElementById('contactForm') || document.getElementById('contact-form');
    if (contactSection) {
      e.preventDefault();
      const header = document.getElementById('siteHeader');
      const headerH = header ? header.offsetHeight : 0;
      const targetTop = contactSection.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  };

  const isScrollablePage = pathname === '/' || pathname === '/contact';

  return (
    <div className="callback-tab" id="callbackTab" role="complementary" aria-label="Request a callback">
      {isScrollablePage ? (
        <a href="#contact" className="callback-tab-link" onClick={handleScroll}>
          <span>Request a Callback</span>
        </a>
      ) : (
        <Link to="/contact#contact" className="callback-tab-link">
          <span>Request a Callback</span>
        </Link>
      )}
    </div>
  );
}
