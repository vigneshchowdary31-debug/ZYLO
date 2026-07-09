import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';
import SectionHeader from '../components/shared/SectionHeader';
import Button from '../components/shared/Button';
import { blogCategories, blogPosts, recentPosts } from '../data/blog';
import clsx from 'clsx';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on active category & search query
  const filteredPosts = blogPosts.filter((post) => {
  const matchesCategory =
    activeCategory === 'all' ||
    (post.category &&
      post.category.toLowerCase() === activeCategory.toLowerCase());

  const matchesSearch =
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

  return matchesCategory && matchesSearch;
});

console.log(filteredPosts);

  return (
    <>
      <SEO
        title="Event Strategy &amp; Experiential Marketing Insights | Zylo Events"
        description="Explore the latest event design, strategic B2B brand activation trends, global MICE logistics, and corporate event management insights from Zylo Events."
        path="/blog"
        schemaData={[{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://zylo.events/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://zylo.events/blog"
    }
  ]
}]}
      />

      <main>
        {/* Inner Hero */}
        <section
          className="inner-hero"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80')` }}
        >
          <div className="inner-hero-overlay"></div>
          <div className="container inner-hero-content">
            <div className="hero-badge animate-fade-up">
              <span className="badge-dot"></span> Corporate &amp; Experiential Event Insights
            </div>
            <h1 className="animate-fade-up">
              Strategic Event <span style={{ color: '#BAE6FD' }}>Insights</span>
            </h1>
            <p className="animate-fade-up">
              Advanced B2B branding trends, immersive experiential strategies, and professional logistics guides from the design desks of Zylo &amp; Alankaran.
            </p>
            <div className="inner-hero-breadcrumb animate-fade-up">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Blog</span>
            </div>
          </div>
        </section>

        {/* Blog layout grid */}
        <section className="section-pad-lg bg-gray">
          <div className="container">
            <SectionHeader
              tag="Latest Articles"
              title={<>Event Planning Tips &amp; <span style={{ color: 'var(--brand)' }}>Industry Insights</span></>}
              subtitle="Expert advice from Hyderabad's leading event management professionals."
            />

            {/* Category filter tabs */}
            <div className="gallery-filter-tabs" style={{ marginBottom: '32px' }}>
              {blogCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={clsx('filter-tab', { active: activeCategory === cat.id })}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Main two-column content grid */}
            <div
              className="blog-content-layout"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '40px',
                alignItems: 'start'
              }}
            >
              {/* Desktop media query adjustment inline */}
              <style>{`
                @media (min-width: 1024px) {
                  .blog-content-layout {
                    grid-template-columns: 2fr 1fr !important;
                  }
                }
              `}</style>

              {/* Left Column: Blog Grid */}
              <div className="blog-posts-column">
                {filteredPosts.length === 0 ? (
                  <div
                    className=""
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      padding: '48px',
                      textAlign: 'center',
                      border: '1px solid #e2e8f0'
                    }}
                  >
                    <h3>No articles found</h3>
                    <p style={{ marginTop: '12px', color: 'var(--text-light)' }}>
                      We couldn't find any articles matching your selection. Try clearing the search or category filters.
                    </p>
                    <Button
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('all');
                      }}
                      variant="gold"
                      style={{ marginTop: '20px' }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <div
                    className="blog-list-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: '32px'
                    }}
                  >
                    <style>{`
                      @media (min-width: 768px) {
                        .blog-list-grid {
                          grid-template-columns: repeat(2, 1fr) !important;
                        }
                      }
                    `}</style>

                    {filteredPosts.map((post) => (
                      <article
                        key={post.id}
                        className="blog-card reveal"
                        style={{
                          background: '#ffffff',
                          borderRadius: '16px',
                          overflow: 'hidden',
                          boxShadow: 'var(--shadow)',
                          border: '1px solid var(--border-solid)',
                          display: 'flex',
                          flexDirection: 'column',
                          height: '100%',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {/* Image wrap */}
                        <div
                          className="blog-card-img-wrap"
                          style={{ overflow: 'hidden', height: '200px', position: 'relative' }}
                        >
                          <img loading="lazy" key={`${activeCategory}-${post.id}`}
                            src={post.image}
                            alt={post.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.4s ease',
                              display: 'block'
                            }}
                            className="blog-card-img"
                          />
                        </div>

                        {/* Card details body */}
                        <div
                          className="blog-card-body"
                          style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}
                        >
                          <div
                            className="blog-card-meta"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              fontSize: '0.78rem',
                              color: 'var(--gray-text)',
                              marginBottom: '14px'
                            }}
                          >
                            <span
                              className="section-tag"
                              style={{ margin: 0, padding: '3px 10px', fontSize: '0.65rem' }}
                            >
                              {post.categoryLabel}
                            </span>
                            <span>{post.date}</span>
                          </div>

                          <h3
                            style={{
                              fontSize: '1.15rem',
                              fontWeight: '700',
                              color: 'var(--text-dark)',
                              lineHeight: '1.4',
                              marginBottom: '12px'
                            }}
                          >
                            {post.title}
                          </h3>

                          <p
                            style={{
                              fontSize: '0.88rem',
                              color: 'var(--text-light)',
                              lineHeight: '1.6',
                              marginBottom: '20px',
                              flex: 1
                            }}
                          >
                            {post.excerpt}
                          </p>

                          <div style={{ marginTop: 'auto' }}>
                            <Button to={`/blog#article-${post.id}`} variant="gold-outline" className="btn-block">
                              Read Article →
                            </Button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Sidebar */}
              <aside className="blog-sidebar-column" style={{ display: 'grid', gap: '32px' }}>
                {/* Search widget */}
                <div
                  className="sidebar-widget"
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    padding: '24px',
                    border: '1px solid #e2e8f0',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '16px' }}>Search Articles</h4>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      placeholder="Type keywords..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius)',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Recent posts widget */}
                <div
                  className="sidebar-widget"
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    padding: '24px',
                    border: '1px solid #e2e8f0',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '16px' }}>Recent Posts</h4>
                  <ul style={{ display: 'grid', gap: '14px' }}>
                    {recentPosts.map((rp) => (
                      <li key={rp.id} style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                        <Link
                          to={`/blog#article-${rp.id}`}
                          style={{
                            display: 'block',
                            fontSize: '0.88rem',
                            fontWeight: '600',
                            lineHeight: '1.4',
                            color: 'var(--text-dark)',
                            transition: 'color 0.2s'
                          }}
                          className="hover-color"
                        >
                          {rp.title}
                        </Link>
                        <span style={{ fontSize: '0.75rem', color: 'var(--gray-text)', marginTop: '4px', display: 'block' }}>
                          {rp.date}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Categories widget */}
                <div
                  className="sidebar-widget"
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    padding: '24px',
                    border: '1px solid #e2e8f0',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '16px' }}>Categories</h4>
                  <ul style={{ display: 'grid', gap: '8px' }}>
                    {blogCategories.map((cat) => (
                      <li key={cat.id}>
                        <button
                          onClick={() => setActiveCategory(cat.id)}
                          style={{
                            width: '100%',
                            textAlign: 'left',
                            fontSize: '0.88rem',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            background: activeCategory === cat.id ? 'rgba(59,130,246,0.06)' : 'transparent',
                            color: activeCategory === cat.id ? 'var(--brand)' : 'var(--text-mid)',
                            fontWeight: activeCategory === cat.id ? '600' : '500'
                          }}
                        >
                          {cat.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section
          className="cta-banner"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          aria-label="Call to action"
        >
          <div className="cta-banner-overlay"></div>
          <div className="container cta-banner-content reveal">
            <h2>Ready to Plan Your Next<br /><span style={{ color: '#60A5FA' }}>Extraordinary Event?</span></h2>
            <p>Let Zylo Events bring your vision to life. Contact us for a free consultation today.</p>
            <Button to="/contact" variant="outline-white" size="lg">
              Get in Touch →
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
