import React from 'react';
import clsx from 'clsx';

/**
 * Reusable premium section header matching the layout structure of ZYLO.
 */
export default function SectionHeader({
  tag,
  title,
  subtitle,
  white = false,
  alignLeft = false,
  className
}) {
  return (
    <div
      className={clsx(
        'section-header reveal',
        {
          'text-left': alignLeft,
          'text-center': !alignLeft
        },
        className
      )}
      style={alignLeft ? { textAlign: 'left', margin: '0 0 44px', maxWidth: 'none' } : undefined}
    >
      {tag && (
        <span className={clsx('section-tag', { 'section-tag-gold': white })} style={white ? { background: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' } : undefined}>
          {tag}
        </span>
      )}
      {title && (
        <h2 className="section-title" style={white ? { color: '#ffffff' } : undefined}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="section-subtitle" style={white ? { color: 'rgba(255,255,255,0.9)' } : undefined}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
