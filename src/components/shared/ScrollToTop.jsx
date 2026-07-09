import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll manager component that scrolls to top on route change,
 * or scrolls smoothly to hash anchors if present in the URL.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to allow route components to finish rendering
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const header = document.getElementById('siteHeader');
          const headerH = header ? header.offsetHeight : 0;
          const targetTop = element.getBoundingClientRect().top + window.scrollY - headerH - 16;
          window.scrollTo({ top: targetTop, behavior: 'smooth' });
        }
      }, 200);
      return () => clearTimeout(timer);
    } else {
      // No hash: reset to top immediately
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
