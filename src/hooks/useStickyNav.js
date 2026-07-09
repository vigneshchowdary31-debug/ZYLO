import { useState, useEffect } from 'react';

/**
 * Custom hook to observe vertical scroll position and determine
 * if it has surpassed a specified pixel threshold.
 * @param {number} threshold - Scroll distance in pixels to trigger sticky behavior.
 * @returns {boolean} isScrolled
 */
export default function useStickyNav(threshold = 80) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check immediately on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
