import { useEffect } from 'react';

/**
 * Reusable SEO component that dynamically adjusts standard title and meta details.
 * @param {string} title - Page specific title.
 * @param {string} description - Page specific description.
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    // Keep standard suffix
    if (title) {
      document.title = title.includes('Zylo Events') ? title : `${title} — Zylo Events`;
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
