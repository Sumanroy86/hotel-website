import React, { useState } from 'react';
import { Sparkles, MessageCircle, ArrowRight, BedDouble, Home, Calendar, Users } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hotelData';
import { getCustomEnquiryUrl } from '../utils/whatsapp';
import QuickInfoBar from './QuickInfoBar';

export default function Hero() {
  const [selectedRoomType, setSelectedRoomType] = useState('Deluxe Hotel Room');
  const [checkInDate, setCheckInDate] = useState('');
  const [guestsCount, setGuestsCount] = useState('2 Guests');

  const handleQuickEnquiry = (e) => {
    e.preventDefault();
    const url = getCustomEnquiryUrl({
      roomType: selectedRoomType,
      checkInDate: checkInDate || 'Flexible / To be confirmed',
      guests: guestsCount,
      messageNotes: 'Enquiry initiated via Homepage Quick Planner'
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="hero-section">
      {/* Background with luxury mood lighting */}
      <div className="hero-background-wrapper">
        <img
          src="/images/hero.jpg"
          alt="Coastal Stay Luxury Accommodation in Digha"
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div className="hero-content">
          {/* Eyebrow badge */}
          <div className="hero-badge">
            <Sparkles size={14} style={{ color: 'var(--gold-primary)' }} />
            <span>Hospitality in Digha, West Bengal</span>
          </div>

          {/* Heading requested by user */}
          <h1 className="hero-heading">
            Your Comfortable Stay <span>Away From Home</span>
          </h1>

          {/* Short introduction mentioning hotel and guest house accommodation */}
          <p className="hero-desc">
            Nestled near the serene beaches of Digha, <strong>Coastal Stay</strong> offers the perfect balance
            of sophisticated <strong>hotel luxury</strong> and peaceful, homely <strong>guest house accommodation</strong>.
            Enjoy pristine rooms, warm hospitality, and coastal tranquility.
          </p>

          {/* Two primary action buttons requested by user */}
          <div className="hero-buttons">
            <a href="#hotel-rooms" className="btn btn-gold" aria-label="Explore Hotel Rooms">
              <BedDouble size={18} />
              <span>Explore Hotel Rooms</span>
            </a>

            <a href="#guesthouse-rooms" className="btn btn-outline-gold" aria-label="Explore Guest House">
              <Home size={18} />
              <span>Explore Guest House</span>
            </a>
          </div>

          {/* Interactive Quick WhatsApp Trip Planner Strip */}
          <form
            onSubmit={handleQuickEnquiry}
            style={{
              background: 'rgba(14, 23, 17, 0.88)',
              border: '1px solid var(--gold-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.2rem 1.6rem',
              backdropFilter: 'blur(16px)',
              maxWidth: '840px',
              margin: '0 auto 2rem auto',
              boxShadow: '0 12px 36px rgba(0,0,0,0.6)'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                alignItems: 'flex-end',
                textAlign: 'left'
              }}
            >
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '0.35rem', fontFamily: 'var(--font-serif-display)' }}>
                  <BedDouble size={14} /> Stay Type
                </label>
                <select
                  value={selectedRoomType}
                  onChange={(e) => setSelectedRoomType(e.target.value)}
                  className="form-select"
                  aria-label="Select stay type"
                >
                  <optgroup label="Hotel Rooms">
                    <option value="Deluxe Hotel Room">Deluxe Hotel Room</option>
                    <option value="Premium Sea-Breeze Room">Premium Sea-Breeze Room</option>
                    <option value="Grand Family Hotel Suite">Grand Family Hotel Suite</option>
                  </optgroup>
                  <optgroup label="Guest House">
                    <option value="Cozy Standard Guest Room">Cozy Standard Guest Room</option>
                    <option value="Comfort AC Guest Room">Comfort AC Guest Room</option>
                    <option value="Spacious Family Guest Haven">Spacious Family Guest Haven</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '0.35rem', fontFamily: 'var(--font-serif-display)' }}>
                  <Calendar size={14} /> Tentative Date
                </label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="form-input"
                  aria-label="Tentative check-in date"
                />
              </div>

              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '0.35rem', fontFamily: 'var(--font-serif-display)' }}>
                  <Users size={14} /> Guests
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="form-select"
                  aria-label="Number of guests"
                >
                  <option value="1-2 Guests">1-2 Guests</option>
                  <option value="3-4 Guests">3-4 Guests</option>
                  <option value="5+ Family / Group">5+ Family / Group</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', height: '44px' }}
                  aria-label="Enquire selected stay on WhatsApp"
                >
                  <MessageCircle size={18} />
                  <span>Enquire Availability</span>
                </button>
              </div>
            </div>
            <div style={{ marginTop: '0.65rem', textAlign: 'center', fontSize: '0.76rem', color: 'var(--text-muted)' }}>
              * Manual enquiry via WhatsApp. No automated charges or instant booking commitments.
            </div>
          </form>

          {/* Quick Info Strip directly modeled on the reference image */}
          <QuickInfoBar />
        </div>
      </div>
    </section>
  );
}
