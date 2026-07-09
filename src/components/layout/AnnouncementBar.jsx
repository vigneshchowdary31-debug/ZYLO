import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Announcement strip at the very top of the layout. Dismissal state is kept
 * in sessionStorage for seamless, non-intrusive navigation.
 */
export default function AnnouncementBar() {
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('zylo-bar-dismissed') === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('zylo-bar-dismissed', 'true');
  };

  if (isDismissed) return null;

  return (
    <div className="announcement-bar" id="announcementBar">
      <div className="announcement-inner">
        <span className="announcement-dot"></span>
        <p>
          Now booking corporate events &nbsp;|&nbsp; Hyderabad &nbsp;|&nbsp;{' '}
          <Link to="/contact">Get a Free Quote →</Link>
        </p>
      </div>
      <button
        className="announcement-close"
        onClick={handleDismiss}
        aria-label="Close announcement"
      >
        ✕
      </button>
    </div>
  );
}
