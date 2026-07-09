import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/shared/ScrollToTop';
import CallbackTab from './components/shared/CallbackTab';
import WhatsappBtn from './components/shared/WhatsappBtn';
import clsx from 'clsx';

// Import CSS variables, animations, and global sets
import './styles/variables.css';
import './styles/animations.css';
import './styles/global.css';

/**
 * Primary App structure wrapper. Bundles announcement bars, headers,
 * active routing outlets, footers, back-to-top triggers, and WhatsApp float chats.
 */
export default function App() {
  // Activate scroll entry animation reveal hooks
  

  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBackToTopVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
        {/* Route hash scroll helper */}
        <ScrollToTop />

        {/* Announcement Info Bar */}
        <AnnouncementBar />

        {/* Header layout navigation */}
        <Header />

        {/* Page Routing Outlet */}
        <Outlet />

        {/* Footer layout mapping */}
        <Footer />

        {/* Floating callbacks tab */}
        <CallbackTab />

        {/* WhatsApp bubble chat */}
        <WhatsappBtn />

        {/* Back to top reactive pointer */}
        <button
          className={clsx('back-to-top', { visible: backToTopVisible })}
          id="backToTop"
          aria-label="Back to top"
          onClick={scrollToTop}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </div>
  );
}
