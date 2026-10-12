import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Building2, Home, Users, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hotelData';

export default function QuickReservationDock() {
  const navigate = useNavigate();
  const [selectedWing, setSelectedWing] = useState('hotel');
  const [guests, setGuests] = useState('2');

  const handleWingChange = (e) => {
    setSelectedWing(e.target.value);
  };

  const handleExplore = () => {
    if (selectedWing === 'hotel') {
      navigate('/hotel-rooms');
    } else {
      navigate('/guest-house');
    }
  };

  return (
    <div className="container" style={{ position: 'relative', zIndex: 20 }}>
      <div className="quick-booking-dock">
        <div className="quick-booking-grid">
          {/* Column 1: Accommodation Wing */}
          <div className="quick-dock-col">
            <label className="quick-dock-label">
              <Building2 size={14} />
              <span>Accommodation Wing</span>
            </label>
            <select
              className="quick-dock-select"
              value={selectedWing}
              onChange={handleWingChange}
              aria-label="Select Accommodation Wing"
            >
              <option value="hotel">Executive Hotel Wing (Suites)</option>
              <option value="guesthouse">Peaceful Guest House Wing</option>
            </select>
          </div>

          {/* Column 2: Guest Count */}
          <div className="quick-dock-col">
            <label className="quick-dock-label">
              <Users size={14} />
              <span>Guests / Occupancy</span>
            </label>
            <select
              className="quick-dock-select"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              aria-label="Select Number of Guests"
            >
              <option value="1">1 Adult (Solo Stay)</option>
              <option value="2">2 Adults (Couple / Deluxe)</option>
              <option value="3">3 Adults (Extra Bed)</option>
              <option value="4">4+ Adults (Family Suite / Haven)</option>
            </select>
          </div>

          {/* Column 3: Tariff Range Preview */}
          <div className="quick-dock-col">
            <label className="quick-dock-label">
              <Sparkles size={14} />
              <span>Sample Baseline Tariff</span>
            </label>
            <div className="quick-dock-val" style={{ color: 'var(--gold-secondary)' }}>
              {selectedWing === 'hotel' ? 'From ₹2,800 / night' : 'From ₹1,200 / night'}
            </div>
          </div>

          {/* Column 4: Quick Action CTA */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-outline-gold"
              onClick={handleExplore}
              style={{ padding: '0.8rem 1.2rem', fontSize: '0.84rem' }}
            >
              <span>View Wing</span>
            </button>

            <a
              href={BUSINESS_INFO.phoneTelLink}
              className="btn btn-phone-call"
              style={{ padding: '0.8rem 1.4rem', fontSize: '0.84rem' }}
              aria-label={`Call front desk at ${BUSINESS_INFO.displayPhone}`}
            >
              <Phone size={15} />
              <span>Call: {BUSINESS_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
