import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Home, ArrowRight, Check, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hotelData';

export default function AccommodationSplit() {
  return (
    <section className="section section-dark" id="accommodations-hub">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Distinct Accommodation Styles</div>
          <h2 className="section-title">
            Choose Your Preferred <span>Stay Experience</span>
          </h2>
          <p className="section-subtitle">
            At {BUSINESS_INFO.name}, we cater to both upscale travelers seeking premium hotel suites
            and guests looking for relaxed, economical guest house accommodations.
          </p>
        </div>

        {/* 2 Main Split Feature Cards */}
        <div className="split-cards-grid">
          {/* Card 1: Hotel Rooms */}
          <div className="split-card hotel-style-card">
            <div className="split-card-media">
              <img
                src="/images/real/hotel-premium-real.jpg"
                alt="Hotel Rooms & Suites at Royal Stay"
                className="split-card-img"
                loading="lazy"
              />
              <div className="split-card-badge">
                <Building2 size={15} />
                <span>Executive Hotel Wing</span>
              </div>
            </div>

            <div className="split-card-content">
              <div className="split-card-eyebrow">Premium Hospitality</div>
              <h3 className="split-card-title">Hotel Rooms & Suites</h3>
              <p className="split-card-desc">
                Immerse yourself in elevated comfort with elegant king-size beds, quiet air conditioning,
                designer marble bathrooms, flat-screen entertainment, and prompt room service.
              </p>

              <ul className="split-card-features">
                <li>
                  <Check size={14} className="feature-icon" />
                  <span>King & Queen Bed Layouts with Rich Millwork</span>
                </li>
                <li>
                  <Check size={14} className="feature-icon" />
                  <span>En-Suite Marble Bathrooms & Hot Showers</span>
                </li>
                <li>
                  <Check size={14} className="feature-icon" />
                  <span>Split Air Conditioning & High-Speed Wi-Fi</span>
                </li>
              </ul>

              <div className="split-card-footer">
                <div className="split-price-tag">
                  <span className="price-label">Sample Tariffs from</span>
                  <span className="price-value">₹2,800 <em>/ night</em></span>
                </div>

                <Link to="/hotel-rooms" className="btn btn-primary-gold">
                  <span>Explore Hotel Rooms</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Guest House */}
          <div className="split-card guesthouse-style-card">
            <div className="split-card-media">
              <img
                src="/images/real/guesthouse-family-real.jpg"
                alt="Guest House Accommodations at Royal Stay"
                className="split-card-img"
                loading="lazy"
              />
              <div className="split-card-badge">
                <Home size={15} />
                <span>Peaceful Guest House</span>
              </div>
            </div>

            <div className="split-card-content">
              <div className="split-card-eyebrow">Homely & Budget-Friendly</div>
              <h3 className="split-card-title">Guest House Accommodations</h3>
              <p className="split-card-desc">
                Ideal for family groups, friends, and budget-conscious travelers seeking a welcoming,
                clean, and authentic residential atmosphere with complete security.
              </p>

              <ul className="split-card-features">
                <li>
                  <Check size={14} className="feature-icon" />
                  <span>Standard & AC Rooms with Sanitized Linens</span>
                </li>
                <li>
                  <Check size={14} className="feature-icon" />
                  <span>Multi-Bed Family Rooms with Generous Space</span>
                </li>
                <li>
                  <Check size={14} className="feature-icon" />
                  <span>Peaceful Environment with 24-Hour Assistance</span>
                </li>
              </ul>

              <div className="split-card-footer">
                <div className="split-price-tag">
                  <span className="price-label">Sample Tariffs from</span>
                  <span className="price-value">₹1,200 <em>/ night</em></span>
                </div>

                <Link to="/guest-house" className="btn btn-primary-gold">
                  <span>Explore Guest House</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
