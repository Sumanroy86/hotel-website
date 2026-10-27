import React from 'react';
import { Compass, Sparkles, Waves, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hotelData';

export default function AboutUs() {
  return (
    <section id="about" className="section section-darker">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Image with luxury overlay */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--gold-border)',
                boxShadow: '0 20px 45px rgba(0,0,0,0.6)',
                position: 'relative'
              }}
            >
              <img
                src="/images/beach.jpg"
                alt="Scenic Digha coastline near Coastal Stay"
                style={{ width: '100%', height: '440px', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(36, 23, 18, 0.95) 100%)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  padding: '1.2rem',
                  background: 'rgba(56, 37, 31, 0.88)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--gold-border-subtle)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--gold-primary)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'var(--font-serif-display)' }}>
                  <Waves size={15} /> Sea Beach Gateway
                </div>
                <div style={{ color: 'var(--text-on-dark)', fontSize: '1rem', fontWeight: 600, marginTop: '0.2rem' }}>
                  Walk to New Digha Sea Shore in Under 5 Minutes
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Us Content */}
          <div>
            <div className="section-eyebrow" style={{ justifyContent: 'flex-start' }}>
              About Coastal Stay
            </div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Warm Bengali Hospitality Meets <span>Serene Coastal Living</span>
            </h2>

            {/* Editable placeholder text clearly noted */}
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '1.2rem' }}>
              Welcome to <strong>{BUSINESS_INFO.name}</strong>, your tranquil getaway positioned at the heart
              of Digha, West Bengal's most beloved seaside destination. Designed for travelers who desire both
              peaceful rest and convenient access to the ocean waves, we bridge the gap between premium hotel luxury
              and authentic, homelike comfort.
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: '1.75', marginBottom: '1.8rem' }}>
              Whether you are planning a weekend escape from Kolkata, an annual family retreat, or a peaceful
              holiday with close friends, our dedicated property features both fully furnished modern hotel rooms
              and cozy, budget-friendly guest house accommodation. Our attentive on-site caretakers ensure your stay
              is hygienic, comfortable, and memorable.
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge-sample">
                * Editable Placeholder: Replace this background story with your property's specific founding journey prior to going live.
              </span>
            </div>

            {/* Feature Stat Boxes */}
            <div className="about-highlights-list">
              <div className="about-highlight-box">
                <div className="about-highlight-num">400m</div>
                <div className="about-highlight-title">Walking distance to sandy shoreline</div>
              </div>
              <div className="about-highlight-box">
                <div className="about-highlight-num">2 Stays</div>
                <div className="about-highlight-title">Hotel rooms + homestay guest house</div>
              </div>
              <div className="about-highlight-box">
                <div className="about-highlight-num">24 / 7</div>
                <div className="about-highlight-title">Careful power backup & reception</div>
              </div>
              <div className="about-highlight-box">
                <div className="about-highlight-num">100%</div>
                <div className="about-highlight-title">Direct WhatsApp assistance & queries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
