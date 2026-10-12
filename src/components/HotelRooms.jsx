import React from 'react';
import { HOTEL_ROOMS } from '../data/hotelData';
import RoomCard from './RoomCard';

export default function HotelRooms({ onSelectImage }) {
  return (
    <section id="hotel-rooms" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Hotel Accommodation</div>
          <h2 className="section-title">
            Refined Comfort & <span>Hotel Elegance</span>
          </h2>
          <p className="section-subtitle">
            Experience our curated hotel rooms featuring contemporary aesthetics, warm wooden tones,
            luxurious bedding, and attentive room service just minutes from Digha beach.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <span className="badge-sample">
              * Note: Displayed rates are sample placeholders. Live rates can be verified via WhatsApp.
            </span>
          </div>
        </div>

        {/* 3 Room Cards Grid matching reference layout */}
        <div className="rooms-grid">
          {HOTEL_ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} onSelectImage={onSelectImage} />
          ))}
        </div>
      </div>
    </section>
  );
}
