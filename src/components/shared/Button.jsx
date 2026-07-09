import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

/**
 * Reusable premium button component matching ZYLO theme styling.
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'gold' | 'outline-blue' | 'gold-outline' | 'outline-white' | 'block'
  size = 'md', // 'md' | 'lg'
  type = 'button',
  onClick,
  className,
  disabled = false,
  ...props
}) {
  const isPrimary = variant === 'primary' || variant === 'gold';
  const isOutlineBlue = variant === 'outline-blue' || variant === 'gold-outline';
  const isOutlineWhite = variant === 'outline-white';
  const isBlock = variant === 'block';

  const classes = clsx(
    'btn',
    {
      'btn-primary btn-gold': isPrimary,
      'btn-outline-blue btn-gold-outline': isOutlineBlue,
      'btn-outline-white': isOutlineWhite,
      'btn-block': isBlock
    },
    {
      'btn-lg': size === 'lg'
    },
    className
  );

  // If internal route link
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // If hash or external anchor link
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
