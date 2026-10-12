import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Users, Maximize2, Bed, Check, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hotelData';

export default function RoomCard({ room }) {
  const detailUrl = room.type === 'Hotel' ? `/hotel-rooms/${room.id}` : `/guest-house/${room.id}`;

  return (
    <div className="room-card" id={`card-${room.id}`}>
      {/* Top Header Section */}
      <div className="room-card-header">
        <div className="room-header-top">
          <span className="room-category-pill">{room.category}</span>
          <span className="badge-sample">Editable Sample</span>
        </div>
        <h3 className="room-card-title">
          <Link to={detailUrl} style={{ color: 'inherit', textDecoration: 'none' }}>
            {room.name}
          </Link>
        </h3>
        <p className="room-card-desc-short">{room.description}</p>
      </div>

      {/* Room Image Container */}
      <div className="room-image-box">
        <Link to={detailUrl}>
          <img
            src={room.image}
            alt={`${room.name} at ${BUSINESS_INFO.name}`}
            className="room-card-img"
            loading="lazy"
          />
        </Link>
        <div className="room-image-overlay" />
        {room.isPopular && (
          <div className="room-popular-badge">
            <Sparkles size={12} style={{ display: 'inline', marginRight: '4px' }} />
            Most Popular
          </div>
        )}
      </div>

      {/* Room Body & Features */}
      <div className="room-card-body">
        {/* Meta specifications */}
        <div className="room-meta-strip">
          <div className="room-meta-item">
            <Users size={15} />
            <span>{room.capacity}</span>
          </div>
          <div className="room-meta-item">
            <Bed size={15} />
            <span>{room.bedType}</span>
          </div>
          <div className="room-meta-item">
            <Maximize2 size={15} />
            <span>{room.roomSize}</span>
          </div>
        </div>

        {/* Highlights / Amenities tags */}
        <div className="room-highlights-list">
          {room.highlights.slice(0, 4).map((item, idx) => (
            <span key={idx} className="room-highlight-tag">
              <Check size={11} style={{ display: 'inline', color: 'var(--gold-primary)', marginRight: '3px' }} />
              {item}
            </span>
          ))}
        </div>

        {/* Footer with Price & Actions */}
        <div className="room-card-footer">
          <div className="room-price-row">
            <div>
              <div className="room-price-from">FROM</div>
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <span className="room-price-amount">{room.priceLabel}</span>
                <span className="room-price-period">/ NIGHT</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>
                Sample Rate
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--gold-primary)', fontStyle: 'italic' }}>
                Subject to season
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', width: '100%' }}>
            <Link
              to={detailUrl}
              className="btn btn-outline-gold"
              style={{ padding: '0.65rem 0.8rem', fontSize: '0.82rem', justifyContent: 'center' }}
            >
              <span>Details</span>
              <ArrowRight size={14} />
            </Link>

            <a
              href={BUSINESS_INFO.phoneTelLink}
              className="btn btn-phone-call"
              style={{ padding: '0.65rem 0.8rem', fontSize: '0.82rem', justifyContent: 'center' }}
              aria-label={`Call reception to reserve ${room.name}`}
            >
              <Phone size={14} />
              <span>Call to Book</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
