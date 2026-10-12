import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Building2,
  Home,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Utensils,
  Wifi,
  Zap,
  Car,
  Clock,
  Waves,
  Award
} from 'lucide-react';
import SlideshowHero from '../components/SlideshowHero';
import QuickReservationDock from '../components/QuickReservationDock';
import InteractiveAccommodationsShowcase from '../components/InteractiveAccommodationsShowcase';
import GuestTestimonials from '../components/GuestTestimonials';
import { BUSINESS_INFO, FACILITIES, GALLERY_ITEMS } from '../data/hotelData';

export default function HomePage({ onOpenLightbox }) {
  const facilityIcons = {
    utensils: Utensils,
    wifi: Wifi,
    zap: Zap,
    car: Car,
    clock: Clock,
    geyser: Waves,
    security: ShieldCheck
  };

  return (
    <div className="home-page">
      {/* 1. Cinematic Slideshow Hero */}
      <SlideshowHero />

      {/* 2. Interactive Quick Reservation Dock */}
      <QuickReservationDock />

      {/* 3. The Royal Heritage & Welcome Experience */}
      <section className="section section-darker">
        <div className="container">
          <div className="welcome-grid">
            {/* Left Narrative Column */}
            <div className="welcome-text-col">
              <div className="section-eyebrow">The Royal Heritage</div>
              <h2 className="welcome-heading">
                The Epitome of <span>Gracious Hospitality</span>
              </h2>
              <p className="welcome-p">
                Welcome to <strong>{BUSINESS_INFO.name}</strong>, where timeless luxury meets heartfelt
                warmth. Whether you seek the quiet indulgence of our boutique hotel suites or the
                peaceful, welcoming atmosphere of our guest house rooms, every moment is crafted to
                feel effortless and memorable.
              </p>
              <p className="welcome-p">
                We believe exceptional hospitality begins with the details: hand-selected furnishings,
                crisp sanitized linens, sound-dampened acoustics, and a 24-hour reception team dedicated
                to catering to your travel schedule.
              </p>

              {/* 3 Signature Pillars */}
              <div className="welcome-checklist">
                <div className="welcome-check-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <div>
                    <strong>Bespoke Comfort for Every Budget:</strong>
                    <span style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.86rem' }}>
                      Choose between our executive hotel suites and economical guest house rooms.
                    </span>
                  </div>
                </div>

                <div className="welcome-check-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <div>
                    <strong>Direct Front Desk Reservations:</strong>
                    <span style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.86rem' }}>
                      Speak directly with our team with zero intermediary markups or delays.
                    </span>
                  </div>
                </div>

                <div className="welcome-check-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <div>
                    <strong>Uncompromising Sanitization:</strong>
                    <span style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.86rem' }}>
                      Daily comprehensive housekeeping, sparkling marble baths, and hot water 24/7.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ marginTop: '2.4rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={BUSINESS_INFO.phoneTelLink} className="btn btn-primary-gold">
                  <Phone size={16} />
                  <span>Call {BUSINESS_INFO.displayPhone}</span>
                </a>
                <Link to="/facilities" className="btn btn-outline-gold">
                  <span>Explore Facilities</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Overlapping Visual Composition */}
            <div className="welcome-image-col">
              <div className="welcome-photo-wrapper">
                <img
                  src="/images/real/hotel-lounge-real.jpg"
                  alt={`${BUSINESS_INFO.name} Luxury Lounge Experience`}
                  className="welcome-photo-main"
                  loading="lazy"
                />
                <div className="welcome-badge-float">
                  <Award size={22} style={{ color: 'var(--gold-primary)' }} />
                  <div>
                    <strong>ROYAL HOSPITALITY</strong>
                    <span>100% Genuine Accommodations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Accommodations Showcase (Hotel Suites vs Guest House) */}
      <InteractiveAccommodationsShowcase />

      {/* 5. The Royal Distinction (Amenities & Services) */}
      <section className="section section-darker">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">The Royal Distinction</div>
            <h2 className="section-title">
              Services Designed for <span>Effortless Comfort</span>
            </h2>
            <p className="section-subtitle">
              Every amenity at {BUSINESS_INFO.name} is thoughtfully provided so you can relax, recharge,
              and enjoy total peace of mind throughout your stay.
            </p>
          </div>

          <div className="facilities-grid">
            {FACILITIES.slice(0, 6).map((f) => {
              const IconComp = facilityIcons[f.id] || Sparkles;
              return (
                <div key={f.id} className="facility-card">
                  <div className="facility-icon-wrap">
                    <IconComp size={24} style={{ color: 'var(--gold-primary)' }} />
                  </div>
                  <div className="facility-tag">{f.tag}</div>
                  <h3 className="facility-title">{f.title}</h3>
                  <p className="facility-desc">{f.description}</p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/facilities" className="btn btn-outline-gold btn-lg">
              <span>View All Property Facilities & Dining</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Editorial Visual Gallery Preview */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Authentic Photography</div>
            <h2 className="section-title">
              A Glimpse into <span>{BUSINESS_INFO.name}</span>
            </h2>
            <p className="section-subtitle">
              Browse authentic, real-camera photographs of our actual hotel rooms, guest house quarters,
              marble bathrooms, and dining spaces.
            </p>
          </div>

          <div className="gallery-grid">
            {GALLERY_ITEMS.slice(0, 6).map((item, idx) => (
              <div
                key={item.id}
                className="gallery-item-card"
                onClick={() => onOpenLightbox && onOpenLightbox(idx)}
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
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/gallery" className="btn btn-primary-gold btn-lg">
              <span>Explore Complete Photo Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Verified Guest Testimonials */}
      <GuestTestimonials />

      {/* 8. The Grand Telephone Reservation Suite */}
      <section className="section section-darker">
        <div className="container">
          <div className="phone-hub-card">
            <div className="phone-hub-badge">
              <ShieldCheck size={14} style={{ color: 'var(--gold-primary)' }} />
              <span>Direct Reservation Desk</span>
            </div>

            <h2 className="phone-hub-title">
              Experience the Elegance of <span>{BUSINESS_INFO.name}</span>
            </h2>

            <p className="phone-hub-desc">
              Call our front desk directly for real-time room availability, seasonal discounts,
              and tailored family booking arrangements. Our reception desk is at your service 24/7.
            </p>

            <div className="phone-hub-actions">
              <a href={BUSINESS_INFO.phoneTelLink} className="btn btn-phone-call btn-lg">
                <Phone size={22} />
                <span>Call {BUSINESS_INFO.displayPhone}</span>
              </a>

              <Link to="/contact" className="btn btn-outline-gold btn-lg">
                <span>Contact Desk Information</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
