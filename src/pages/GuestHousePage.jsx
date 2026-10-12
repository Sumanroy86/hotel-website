import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Home, Check, ArrowLeft, ShieldCheck, HeartHandshake } from 'lucide-react';
import RoomCard from '../components/RoomCard';
import { BUSINESS_INFO, GUEST_HOUSE_ROOMS } from '../data/hotelData';

export default function GuestHousePage() {
  return (
    <div className="guesthouse-page">
      {/* Page Hero Header */}
      <section className="page-hero-section">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(/images/real/guesthouse-family-real.jpg)' }} />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: '#ffffff' }}>Guest House</span>
          </div>

          <div className="hero-brand-badge" style={{ marginBottom: '1rem' }}>
            <Home size={14} style={{ color: 'var(--gold-primary)' }} />
            <span>Peaceful Guest House Wing</span>
          </div>

          <h1 className="page-hero-heading">
            Comfortable & Affordable <span>Guest House Stays</span>
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto 1.5rem auto', lineHeight: '1.7' }}>
            Experience warm residential serenity, immaculate hygiene, and economical pricing.
            Our guest house rooms are perfect for extended visits, group holidays, and family getaways.
          </p>

          <Link to="/" className="btn btn-outline-gold" style={{ padding: '0.75rem 1.4rem', fontSize: '0.84rem' }}>
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>

      {/* Guest House Rooms Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Homely & Budget-Friendly</div>
            <h2 className="section-title">
              Guest House <span>Room Options</span>
            </h2>
            <p className="section-subtitle">
              All guest house rooms feature private attached bathrooms, clean sanitized linens,
              24-hour running water, and a safe, peaceful ambience.
            </p>
          </div>

          <div className="rooms-grid">
            {GUEST_HOUSE_ROOMS.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Guest House Wing Advantages */}
      <section className="section section-darker">
        <div className="container">
          <div className="hotel-features-banner">
            <div className="banner-col">
              <HeartHandshake size={28} style={{ color: 'var(--gold-primary)', marginBottom: '0.8rem' }} />
              <h3>The Warmth of a Homestay</h3>
              <p>
                Relax in peaceful, residential calm with spacious multi-bed family rooms,
                attentive on-site staff, and flexible family check-in options.
              </p>
            </div>
            <div className="banner-col">
              <ShieldCheck size={28} style={{ color: 'var(--gold-primary)', marginBottom: '0.8rem' }} />
              <h3>Affordable Group Bookings</h3>
              <p>
                Traveling with a larger party? Call our front desk at <strong>{BUSINESS_INFO.displayPhone}</strong>
                for exclusive multi-room discounts and dedicated arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
