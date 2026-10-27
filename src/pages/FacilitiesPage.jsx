import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, Sparkles, Utensils, Wifi, Zap, Car, Clock, ShieldCheck, Waves } from 'lucide-react';
import { BUSINESS_INFO, FACILITIES } from '../data/hotelData';

export default function FacilitiesPage() {
  const iconMap = {
    utensils: Utensils,
    wifi: Wifi,
    zap: Zap,
    car: Car,
    clock: Clock,
    geyser: Waves,
    security: ShieldCheck
  };

  return (
    <div className="facilities-page">
      {/* Page Hero Header */}
      <section className="page-hero-section">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(/images/real/hotel-dining-real.jpg)' }} />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-on-dark)' }}>Facilities</span>
          </div>

          <div className="hero-brand-badge" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} style={{ color: 'var(--gold-primary)' }} />
            <span>Guest Comfort</span>
          </div>

          <h1 className="page-hero-heading">
            Hotel & Guest House <span>Facilities</span>
          </h1>

          <p style={{ color: 'var(--text-on-dark-secondary)', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto 1.5rem auto', lineHeight: '1.7' }}>
            From high-speed wireless connectivity and 24-hour power backup to delicious dining
            and secure on-site parking, discover everything designed to elevate your stay.
          </p>

          <Link to="/" className="btn btn-outline-gold" style={{ padding: '0.75rem 1.4rem', fontSize: '0.84rem' }}>
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section">
        <div className="container">
          <div className="facilities-grid">
            {FACILITIES.map((f) => {
              const IconComp = iconMap[f.id] || Sparkles;
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

          {/* Dining Highlight Box */}
          <div className="dining-feature-block" style={{ marginTop: '4rem' }}>
            <div className="dining-grid">
              <div className="dining-media">
                <img
                  src="/images/real/hotel-dining-real.jpg"
                  alt="On-Site Dining at Royal Stay"
                  className="dining-img"
                  loading="lazy"
                />
              </div>
              <div className="dining-content">
                <div className="section-eyebrow">Culinary Delights</div>
                <h3 className="dining-title">Fresh, Wholesome On-Site Dining</h3>
                <p className="dining-p">
                  Enjoy flavorful meals prepared fresh daily. From authentic regional Bengali delicacies
                  to comforting North Indian classics and tailored breakfast platters, our kitchen caters
                  to your appetite with hygiene and care.
                </p>
                <div className="dining-meta-strip">
                  <div className="dining-meta-pill">
                    <strong>Breakfast:</strong> 7:30 AM – 10:30 AM
                  </div>
                  <div className="dining-meta-pill">
                    <strong>Lunch & Dinner:</strong> Available On Order
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
