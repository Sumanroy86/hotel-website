import React, { useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hotelData';

export default function LightboxModal({ isOpen, onClose, imageData }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageData) return null;

  const imgSrc = imageData.src || imageData.image;

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close enlarged preview"
        >
          <X size={20} />
        </button>

        <img
          src={imgSrc}
          alt={imageData.title || BUSINESS_INFO.name}
          className="lightbox-img"
        />

        <div className="lightbox-caption-bar">
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif-heading)', color: '#fff', fontSize: '1.2rem', marginBottom: '0.2rem' }}>
              {imageData.title}
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              {imageData.caption}
            </p>
          </div>

          <a
            href={BUSINESS_INFO.phoneTelLink}
            className="btn btn-phone-call"
            style={{ padding: '0.5rem 1.1rem', fontSize: '0.8rem', whiteSpace: 'nowrap' }}
            aria-label="Call front desk for reservations"
          >
            <Phone size={15} />
            <span>Call Reception</span>
          </a>
        </div>
      </div>
    </div>
  );
}
