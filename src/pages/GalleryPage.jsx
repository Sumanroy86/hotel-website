import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, Image as ImageIcon, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, GALLERY_ITEMS } from '../data/hotelData';

export default function GalleryPage({ onOpenLightbox }) {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const categories = [
    { key: 'all', label: 'All Photographs' },
    { key: 'hotel', label: 'Hotel Rooms & Suites' },
    { key: 'guesthouse', label: 'Guest House Rooms' },
    { key: 'dining', label: 'Dining & Lounges' }
  ];

  return (
    <div className="gallery-page">
      {/* Page Hero Header */}
      <section className="page-hero-section">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(/images/real/slide-1.jpg)' }} />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-on-dark)' }}>Gallery</span>
          </div>

          <div className="hero-brand-badge" style={{ marginBottom: '1rem' }}>
            <ImageIcon size={14} style={{ color: 'var(--gold-primary)' }} />
            <span>Visual Tour</span>
          </div>

          <h1 className="page-hero-heading">
            Authentic Photo <span>Gallery</span>
          </h1>

          <p style={{ color: 'var(--text-on-dark-secondary)', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto 1.5rem auto', lineHeight: '1.7' }}>
            Explore high-resolution, unedited interior photographs showcasing our rooms,
            suites, guest house spaces, and property facilities at {BUSINESS_INFO.name}.
          </p>

          <Link to="/" className="btn btn-outline-gold" style={{ padding: '0.75rem 1.4rem', fontSize: '0.84rem' }}>
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="gallery-filter-tabs">
            {categories.map((c) => (
              <button
                key={c.key}
                className={`gallery-tab-btn ${filter === c.key ? 'active' : ''}`}
                onClick={() => setFilter(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => {
              const originalIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
              return (
                <div
                  key={item.id}
                  className="gallery-item-card"
                  onClick={() => onOpenLightbox && onOpenLightbox(originalIndex)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-item-img"
                    loading="lazy"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-pill">{item.categoryLabel}</span>
                    <h4 className="gallery-item-title">{item.title}</h4>
                    <p className="gallery-item-sub">{item.caption}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct Phone Call Strip */}
          <div className="phone-strip-banner" style={{ marginTop: '4rem' }}>
            <div>
              <h3>Like What You See?</h3>
              <p>Call our reception desk directly to enquire about room availability.</p>
            </div>
            <a href={BUSINESS_INFO.phoneTelLink} className="btn btn-phone-call">
              <Phone size={16} />
              <span>Call {BUSINESS_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
