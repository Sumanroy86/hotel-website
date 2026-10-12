import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Building2, Home, Star } from 'lucide-react';
import { BUSINESS_INFO, SLIDESHOW_IMAGES } from '../data/hotelData';

export default function SlideshowHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDESHOW_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
  };

  const currentSlide = SLIDESHOW_IMAGES[currentIndex];

  return (
    <section className="slideshow-hero" aria-label="Royal Stay Hero Slideshow">
      {/* Background Slides with Ken Burns transition */}
      {SLIDESHOW_IMAGES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`hero-slide ${idx === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.src})` }}
          aria-hidden={idx !== currentIndex}
        />
      ))}

      {/* Cinematic Dark Royal Gradient Vignette */}
      <div className="hero-gradient-overlay" />

      {/* Main Content */}
      <div className="container hero-content-container">
        <div className="hero-text-content">
          {/* Royal Crest / Monogram Eyebrow */}
          <div className="hero-brand-badge">
            <Sparkles size={14} style={{ color: 'var(--gold-primary)' }} />
            <span>✦ EXPERIENCE THE GRANDEUR OF ROYAL HOSPITALITY ✦</span>
          </div>

          {/* Main Title - STRICTLY ROYAL STAY, NO CITY UNDERNEATH */}
          <h1 className="hero-main-title">
            WELCOME TO <br />
            <span>{BUSINESS_INFO.name}</span>
          </h1>

          <p className="hero-subtitle">
            {currentSlide.subtitle}
          </p>

          <p className="hero-disclaimer-note">
            Offering executive luxury hotel suites and serene, budget-friendly guest house accommodations.
          </p>

          {/* Navigation & Action Buttons */}
          <div className="hero-action-buttons">
            <Link to="/hotel-rooms" className="btn btn-primary-gold btn-lg">
              <Building2 size={18} />
              <span>Explore Hotel Rooms</span>
            </Link>

            <Link to="/guest-house" className="btn btn-outline-gold btn-lg">
              <Home size={18} />
              <span>Explore Guest House</span>
            </Link>

            <a
              href={BUSINESS_INFO.phoneTelLink}
              className="btn btn-phone-call btn-lg"
              aria-label={`Call ${BUSINESS_INFO.name} reception directly`}
            >
              <Phone size={18} />
              <span>Call Reception: {BUSINESS_INFO.displayPhone}</span>
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="hero-trust-bar">
            <div className="hero-trust-pill">
              <div style={{ display: 'flex', gap: '2px', color: 'var(--gold-primary)' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>4.9/5 Rating</span>
            </div>

            <div className="hero-trust-pill">
              <ShieldCheck size={14} style={{ color: 'var(--gold-primary)' }} />
              <span>24/7 Front Desk Concierge</span>
            </div>

            <div className="hero-trust-pill">
              <Sparkles size={14} style={{ color: 'var(--gold-primary)' }} />
              <span>Sanitized & Soundproof Suites</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="hero-controls-bar">
        <button
          className="hero-nav-arrow"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="hero-dots-indicator">
          {SLIDESHOW_IMAGES.map((slide, idx) => (
            <button
              key={slide.id}
              className={`hero-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          className="hero-nav-arrow"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
