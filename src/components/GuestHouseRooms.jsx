import React from 'react';
import { Home, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';
import { GUEST_HOUSE_ROOMS } from '../data/hotelData';
import RoomCard from './RoomCard';

export default function GuestHouseRooms({ onSelectImage }) {
  return (
    <section id="guesthouse-rooms" className="section section-darker">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Homestay & Guest House</div>
          <h2 className="section-title">
            Peaceful & Budget-Friendly <span>Guest House Stays</span>
          </h2>
          <p className="section-subtitle">
            Seeking a tranquil home away from home? Our guest house wing offers genuine homestay hospitality,
            peaceful surroundings, home-cooked food options on request, and unbeatable value for families and budget travelers.
          </p>
        </div>

        {/* Feature Pills for Guest House */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--gold-light)', fontSize: '0.86rem' }}>
            <HeartHandshake size={18} style={{ color: 'var(--gold-primary)' }} />
            <span>Homely Warmth & Privacy</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--gold-light)', fontSize: '0.86rem' }}>
            <Home size={18} style={{ color: 'var(--gold-primary)' }} />
            <span>Ideal for Families & Groups</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--gold-light)', fontSize: '0.86rem' }}>
            <ShieldCheck size={18} style={{ color: 'var(--gold-primary)' }} />
            <span>24/7 Security & Caretaker</span>
          </div>
        </div>

        {/* Guest House Rooms Grid */}
        <div className="rooms-grid">
          {GUEST_HOUSE_ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} onSelectImage={onSelectImage} />
          ))}
        </div>
      </div>
    </section>
  );
}
