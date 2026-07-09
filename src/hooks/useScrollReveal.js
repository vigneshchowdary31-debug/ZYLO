import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    reveals.forEach(el => {
      el.classList.remove('visible');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);
}