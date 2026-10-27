import React, { useState } from 'react';
import { Maximize2, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hotelData';

export default function PhotoGallery({ onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'hotel', label: 'Hotel Rooms' },
    { id: 'guesthouse', label: 'Guest House' },
    { id: 'dining', label: 'Dining & Food' },
    { id: 'beach', label: 'Digha Beach' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Visual Tour</div>
          <h2 className="section-title">
            Accommodation & <span>Property Gallery</span>
          </h2>
          <p className="section-subtitle">
            Take a visual tour through our warm hotel rooms, peaceful guest house units,
            dining area, and the scenic beauty of Digha's coastal landscape.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filters" role="tablist">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeFilter === tab.id}
              className={`gallery-filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => onOpenLightbox(item.image, item.title, item.caption)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenLightbox(item.image, item.title, item.caption);
                }
              }}
              aria-label={`View photo: ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-tag">{item.categoryLabel}</span>
                <h4 className="gallery-item-title">{item.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'rgba(250, 247, 242, 0.88)', marginTop: '0.2rem' }}>
                  {item.caption}
                </p>
                <div style={{ position: 'absolute', top: '16px', right: '16px', color: 'var(--gold-primary)' }}>
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
