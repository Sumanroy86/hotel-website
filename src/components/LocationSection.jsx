import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink, Map } from 'lucide-react';
import { BUSINESS_INFO, NEARBY_POINTS } from '../data/hotelData';

export default function LocationSection() {
  return (
    <section id="location" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Getting Here</div>
          <h2 className="section-title">
            Prime Location in <span>Digha, West Bengal</span>
          </h2>
          <p className="section-subtitle">
            Easily accessible from Digha Railway Station and the national highway.
            Enjoy peaceful evenings away from noisy commercial markets while staying within walking reach of the beach.
          </p>
        </div>

        <div className="location-grid">
          {/* Left Column: Interactive Map Placeholder & Address Box */}
          <div className="map-card-container">
            {/* Visual Map Canvas Placeholder */}
            <div className="map-placeholder-body">
              <div className="map-radar-pin">
                <MapPin size={30} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif-heading)', color: 'var(--text-on-dark)', fontSize: '1.4rem', marginBottom: '0.4rem' }}>
                Coastal Stay Location
              </h3>
              <p style={{ color: 'var(--text-on-dark-secondary)', fontSize: '0.9rem', maxWidth: '420px', marginBottom: '1.2rem' }}>
                {BUSINESS_INFO.locationFull}
              </p>

              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a
                  href={BUSINESS_INFO.googleMapsPlaceholderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-gold"
                  style={{ padding: '0.65rem 1.4rem', fontSize: '0.82rem' }}
                  aria-label="Open location in Google Maps"
                >
                  <Navigation size={16} />
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Explicit Placeholder Notice */}
              <div style={{ marginTop: '1.5rem' }}>
                <span className="badge-sample">
                  * Address Placeholder: Insert verified physical plot & GPS coordinates before live deployment.
                </span>
              </div>
            </div>

            {/* Bottom Address Strip */}
            <div
              style={{
                background: 'var(--bg-dark-surface)',
                borderTop: '1px solid var(--gold-border-subtle)',
                padding: '1.2rem 1.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'var(--font-serif-display)' }}>
                  Registered Region
                </div>
                <div style={{ color: 'var(--text-on-dark)', fontSize: '0.92rem', fontWeight: 600 }}>
                  Purba Medinipur, West Bengal - Pin: 721428
                </div>
              </div>
              <div>
                <span className="badge-green" style={{ fontSize: '0.72rem' }}>
                  Easy Beach Access
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Distances to Key Attractions in Digha */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif-heading)',
                fontSize: '1.35rem',
                color: 'var(--text-primary)',
                marginBottom: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <Compass size={20} style={{ color: 'var(--gold-primary)' }} />
              Nearby Sightseeing & Hubs
            </h3>

            <div className="nearby-attractions-list">
              {NEARBY_POINTS.map((pt, idx) => (
                <div key={idx} className="nearby-attraction-item">
                  <div>
                    <div className="nearby-name">{pt.name}</div>
                    <div className="nearby-note">{pt.note}</div>
                  </div>
                  <span className="nearby-distance">{pt.distance}</span>
                </div>
              ))}
            </div>

            {/* How to Reach travel tip */}
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1.2rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--gold-border-subtle)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.84rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}
            >
              <strong style={{ color: 'var(--gold-primary)' }}>Travel Tip:</strong> Regular express trains
              (Tamralipta Express, Kandari Express) connect Howrah / Shalimar directly to Digha Railway Station.
              Totos (e-rickshaws) and auto-rickshaws are readily available outside the station to reach Coastal Stay in 5-7 minutes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
