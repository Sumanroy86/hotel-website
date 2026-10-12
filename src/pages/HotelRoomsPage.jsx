import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Building2, Check, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';
import RoomCard from '../components/RoomCard';
import { BUSINESS_INFO, HOTEL_ROOMS } from '../data/hotelData';

export default function HotelRoomsPage() {
  return (
    <div className="hotel-rooms-page">
      {/* Page Hero Header */}
      <section className="page-hero-section">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(/images/real/hotel-premium-real.jpg)' }} />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: '#ffffff' }}>Hotel Rooms</span>
          </div>

          <div className="hero-brand-badge" style={{ marginBottom: '1rem' }}>
            <Building2 size={14} style={{ color: 'var(--gold-primary)' }} />
            <span>Executive Hotel Wing</span>
          </div>

          <h1 className="page-hero-heading">
            Executive <span>Hotel Rooms & Suites</span>
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto 1.5rem auto', lineHeight: '1.7' }}>
            Designed for superior comfort, privacy, and indulgence. Each hotel suite at {BUSINESS_INFO.name}
            features handcrafted hardwood elements, plush mattresses, sound isolation, and modern en-suite marble baths.
          </p>

          <Link to="/" className="btn btn-outline-gold" style={{ padding: '0.75rem 1.4rem', fontSize: '0.84rem' }}>
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>

      {/* Hotel Rooms Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Handcrafted Suites</div>
            <h2 className="section-title">
              Our Exclusive <span>Hotel Collections</span>
            </h2>
            <p className="section-subtitle">
              Choose from our curated Deluxe, Executive, and Royal Family suites. Click on any room
              to inspect full specifications, bed arrangements, and amenities.
            </p>
          </div>

          <div className="rooms-grid">
            {HOTEL_ROOMS.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Specific to Hotel Wing */}
      <section className="section section-darker">
        <div className="container">
          <div className="hotel-features-banner">
            <div className="banner-col">
              <Sparkles size={28} style={{ color: 'var(--gold-primary)', marginBottom: '0.8rem' }} />
              <h3>Luxury Hotel Privileges</h3>
              <p>
                Enjoy complimentary high-speed Wi-Fi, daily housekeeping, 24/7 power backup,
                and on-call room assistance for an effortless luxury experience.
              </p>
            </div>
            <div className="banner-col">
              <Phone size={28} style={{ color: 'var(--gold-primary)', marginBottom: '0.8rem' }} />
              <h3>Direct Telephone Reservations</h3>
              <p>
                Call reception at <strong>{BUSINESS_INFO.displayPhone}</strong> to request custom quotes,
                check availability for holiday dates, or book adjoining family suites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
