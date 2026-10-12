import React from 'react';
import {
  Wifi,
  Wind,
  Car,
  UtensilsCrossed,
  Zap,
  Clock,
  Palmtree,
  ShowerHead,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { FACILITIES } from '../data/hotelData';

// Map icon strings to Lucide components
const iconMap = {
  Wifi,
  Wind,
  Car,
  UtensilsCrossed,
  Zap,
  Clock,
  Palmtree,
  ShowerHead
};

export default function Facilities() {
  return (
    <section id="facilities" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Amenities & Services</div>
          <h2 className="section-title">
            Thoughtful Facilities for a <span>Carefree Vacation</span>
          </h2>
          <p className="section-subtitle">
            Designed to ensure total peace of mind during your coastal holiday in Digha.
            Enjoy reliable comforts, round-the-clock power, dining choices, and secure premises.
          </p>

          {/* Prominent Verification Notice as strictly required by prompt */}
          <div
            style={{
              marginTop: '1.4rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.6rem 1.2rem',
              background: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid var(--gold-border)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              color: 'var(--gold-light)'
            }}
          >
            <AlertCircle size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
            <span>
              <strong>Editorial Notice:</strong> All listed amenities are sample offerings. Please verify specific room facilities with management via WhatsApp before booking.
            </span>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="facilities-grid">
          {FACILITIES.map((facility) => {
            const IconComponent = iconMap[facility.icon] || CheckCircle;

            return (
              <div key={facility.id} className="facility-card">
                <div className="facility-icon-wrap">
                  <IconComponent size={26} />
                </div>
                <div className="facility-tag">{facility.tag}</div>
                <h3 className="facility-title">{facility.title}</h3>
                <p className="facility-desc">{facility.description}</p>
                <div style={{ marginTop: '1.2rem' }}>
                  <span className="badge-sample" style={{ fontSize: '0.7rem' }}>
                    Sample Facility
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
