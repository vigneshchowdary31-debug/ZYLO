import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to manage the state and layout implications
 * of the responsive mobile drawer menu.
 */
export default function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  // Auto-close mobile drawer when user changes pages/routes
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Manage body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return { isOpen, toggleMenu, closeMenu };
}
