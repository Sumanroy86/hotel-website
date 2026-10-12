import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, Users, Maximize2, Bed, Check, ArrowLeft, ShieldAlert, Sparkles, Building2, Home } from 'lucide-react';
import { BUSINESS_INFO, ALL_ROOMS } from '../data/hotelData';

export default function RoomDetailsPage() {
  const { roomId } = useParams();
  const room = ALL_ROOMS.find((r) => r.id === roomId || r.slug === roomId) || ALL_ROOMS[0];

  const [activePhoto, setActivePhoto] = useState(room ? room.image : '/images/real/hotel-deluxe-real.jpg');

  if (!room) {
    return (
      <div className="container" style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
        <h2>Accommodation Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', margin: '1rem 0 2rem 0' }}>
          The requested room profile could not be located.
        </p>
        <Link to="/" className="btn btn-primary-gold">
          Return to Home
        </Link>
      </div>
    );
  }

  const backLink = room.type === 'Hotel' ? '/hotel-rooms' : '/guest-house';
  const backLabel = room.type === 'Hotel' ? 'Back to Hotel Rooms' : 'Back to Guest House';
  const photos = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

  return (
    <div className="room-details-page">
      {/* Breadcrumb strip */}
      <section className="room-breadcrumb-strip">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to={backLink}>{room.typeLabel}</Link>
            <span>/</span>
            <span className="current">{room.name}</span>
          </div>

          <Link to={backLink} className="back-link-btn">
            <ArrowLeft size={16} />
            <span>{backLabel}</span>
          </Link>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="section" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <div className="room-detail-layout">
            {/* Left Column: Visual Gallery & Detailed Information */}
            <div className="room-detail-main">
              {/* Main Active Photo */}
              <div className="room-main-photo-frame">
                <img
                  src={activePhoto}
                  alt={`${room.name} photo preview`}
                  className="room-main-photo"
                />
                <div className="photo-category-tag">
                  {room.type === 'Hotel' ? <Building2 size={13} /> : <Home size={13} />}
                  <span>{room.category}</span>
                </div>
              </div>

              {/* Photo Switcher Thumbnails */}
              <div className="room-thumb-row">
                {photos.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`room-thumb-btn ${activePhoto === imgSrc ? 'active' : ''}`}
                    onClick={() => setActivePhoto(imgSrc)}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <img src={imgSrc} alt={`${room.name} angle ${idx + 1}`} />
                  </button>
                ))}
              </div>

              {/* Room Title & Specifications */}
              <div className="room-detail-info-block">
                <div className="detail-header">
                  <div>
                    <span className="room-type-tag">{room.typeLabel}</span>
                    <h1 className="room-detail-title">{room.name}</h1>
                  </div>
                  <span className="sample-badge">Sample Profile</span>
                </div>

                <div className="detail-meta-grid">
                  <div className="detail-meta-card">
                    <Users size={18} className="meta-icon" />
                    <div>
                      <div className="meta-label">Occupancy</div>
                      <div className="meta-val">{room.capacity}</div>
                    </div>
                  </div>

                  <div className="detail-meta-card">
                    <Bed size={18} className="meta-icon" />
                    <div>
                      <div className="meta-label">Bedding</div>
                      <div className="meta-val">{room.bedType}</div>
                    </div>
                  </div>

                  <div className="detail-meta-card">
                    <Maximize2 size={18} className="meta-icon" />
                    <div>
                      <div className="meta-label">Dimension</div>
                      <div className="meta-val">{room.roomSize}</div>
                    </div>
                  </div>
                </div>

                {/* Narrative Description */}
                <div className="room-text-description">
                  <h3>Overview & Atmosphere</h3>
                  <p>{room.longDescription || room.description}</p>
                </div>

                {/* Highlights Checklist */}
                <div className="room-amenities-section">
                  <h3>Included Amenities & Features</h3>
                  <div className="amenities-check-grid">
                    {room.highlights.map((h, i) => (
                      <div key={i} className="amenity-check-item">
                        <Check size={16} className="check-icon" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Booking Card (Phone Only) */}
            <aside className="room-detail-sidebar">
              <div className="booking-card-sticky">
                <div className="sidebar-price-block">
                  <span className="sidebar-price-label">Sample Baseline Tariff</span>
                  <div className="sidebar-price-value">
                    <span>{room.priceLabel}</span>
                    <em>/ night</em>
                  </div>
                  <div className="sidebar-tariff-badge">
                    * Sample rate subject to peak season & holiday demand
                  </div>
                </div>

                <div className="sidebar-phone-cta">
                  <h4>Direct Front Desk Reservation</h4>
                  <p>
                    Call our reception directly to confirm room availability for your travel dates,
                    verify current tariffs, or arrange customized check-in.
                  </p>

                  <a
                    href={BUSINESS_INFO.phoneTelLink}
                    className="btn btn-phone-call btn-lg"
                    style={{ width: '100%', justifyContent: 'center', marginBottom: '0.8rem' }}
                  >
                    <Phone size={20} />
                    <span>Call to Book: {BUSINESS_INFO.displayPhone}</span>
                  </a>

                  <div className="reception-timing">
                    <span>Reception Hours:</span> {BUSINESS_INFO.frontDeskHours}
                  </div>
                </div>

                <div className="sidebar-policy-box">
                  <div className="policy-row">
                    <ShieldAlert size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <strong>Reservation Policy:</strong> All tariffs displayed are editable sample figures.
                      No online transaction is processed on this site. Call our reception directly.
                    </div>
                  </div>
                </div>

                <div className="sidebar-hotel-specs">
                  <div className="spec-item">
                    <span>Check-in Time</span>
                    <strong>{BUSINESS_INFO.checkIn}</strong>
                  </div>
                  <div className="spec-item">
                    <span>Check-out Time</span>
                    <strong>{BUSINESS_INFO.checkOut}</strong>
                  </div>
                  <div className="spec-item">
                    <span>Assistance</span>
                    <strong>24/7 Front Desk</strong>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
