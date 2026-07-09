import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Reusable SEO component using react-helmet-async for SSR/Static generation.
 */
export default function SEO({ 
  title = "Zylo Events", 
  description = "Premier Corporate Event Management & Exhibition Organizers Hyderabad", 
  path = "", 
  schemaData = [],
  image = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
  type = "website",
  noindex = false
}) {
  const fullTitle = title.includes('Zylo Events') ? title : `${title} — Zylo Events`;
  const canonicalUrl = `https://zylo.events${path}`;

  // Organization Schema is base for all pages
  const baseSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ZYLO",
      "url": "https://zylo.events",
      "email": "hello@zylo.events",
      "telephone": "+91 89776 11886",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Corporate Office, Plot No. 78, TNGOs Colony Phase 2, Financial District, Gachibowli",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500032",
        "addressCountry": "IN"
      }
    },
    ...schemaData
  ];

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zylo Events" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Analytics Placeholders (Google Analytics 4 & GTM) */}
      {/* TODO: Add real measurement ID and GTM ID here */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </script>

      {/* JSON-LD Schema */}
      {baseSchema.map((schema, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
