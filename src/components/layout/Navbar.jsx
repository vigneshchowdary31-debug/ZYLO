import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navigationLinks } from '../../data/navigation';
import clsx from 'clsx';

/**
 * Responsive desktop Navbar. Manages open dropdowns for multi-page categories
 * (Corporate Events, Gallery) using native mouse hover and click helpers.
 */
export default function Navbar() {
  const [openDropdownIdx, setOpenDropdownIdx] = useState(null);

  const handleKeyDown = (idx, e) => {
    if (e.key === 'Escape') {
      setOpenDropdownIdx(null);
    }
  };

  return (
    <ul className="nav-links" role="list">
      {navigationLinks.map((link, idx) => {
        const hasDropdown = !!link.dropdown;

        if (hasDropdown) {
          const isOpen = openDropdownIdx === idx;
          return (
            <li
              key={idx}
              className={clsx('has-dropdown', { open: isOpen })}
              onMouseEnter={() => setOpenDropdownIdx(idx)}
              onMouseLeave={() => setOpenDropdownIdx(null)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) => clsx('nav-link', { active: isActive })}
                onClick={(e) => {
                  // If dropdown is clicked directly, toggle menu behavior
                  if (!isOpen) {
                    e.preventDefault();
                    setOpenDropdownIdx(idx);
                  }
                }}
              >
                {link.label} <span className="arrow">▾</span>
              </NavLink>
              <ul className="dropdown" role="list">
                {link.dropdown.map((subLink, sIdx) => (
                  <li key={sIdx}>
                    <Link
                      to={subLink.path}
                      onClick={() => setOpenDropdownIdx(null)}
                    >
                      {subLink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }

        return (
          <li key={idx}>
            <NavLink
              to={link.path}
              className={({ isActive }) => clsx('nav-link', { active: isActive })}
            >
              {link.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
