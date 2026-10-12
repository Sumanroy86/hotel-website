import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Home, ArrowRight, Check, Sparkles, SlidersHorizontal } from 'lucide-react';
import RoomCard from './RoomCard';
import { HOTEL_ROOMS, GUEST_HOUSE_ROOMS, BUSINESS_INFO } from '../data/hotelData';

export default function InteractiveAccommodationsShowcase() {
  const [activeTab, setActiveTab] = useState('hotel');

  return (
    <section className="section section-dark" id="accommodations-showcase">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Distinct Living Collections</div>
          <h2 className="section-title">
            Curated <span>Rooms & Suites</span>
          </h2>
          <p className="section-subtitle">
            Explore our two separate wings tailored for diverse travel desires — from executive luxury hotel suites
            to peaceful, budget-conscious guest house accommodations.
          </p>
        </div>

        {/* Tab Controls Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              display: 'inline-flex',
              background: 'var(--bg-secondary)',
              padding: '0.4rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--gold-border)',
              boxShadow: 'var(--shadow-md)',
              gap: '0.4rem'
            }}
          >
            <button
              type="button"
              className={`gallery-tab-btn ${activeTab === 'hotel' ? 'active' : ''}`}
              onClick={() => setActiveTab('hotel')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Building2 size={16} />
              <span>Hotel Suites Wing</span>
            </button>

            <button
              type="button"
              className={`gallery-tab-btn ${activeTab === 'guesthouse' ? 'active' : ''}`}
              onClick={() => setActiveTab('guesthouse')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Home size={16} />
              <span>Guest House Wing</span>
            </button>

            <button
              type="button"
              className={`gallery-tab-btn ${activeTab === 'compare' ? 'active' : ''}`}
              onClick={() => setActiveTab('compare')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <SlidersHorizontal size={16} />
              <span>Wing Comparison</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: Hotel Suites */}
        {activeTab === 'hotel' && (
          <div className="tab-pane-fade">
            <div
              style={{
                background: 'rgba(36, 32, 33, 0.6)',
                border: '1px solid var(--gold-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem 1.8rem',
                marginBottom: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <strong style={{ color: 'var(--gold-secondary)', fontSize: '1.1rem', display: 'block' }}>
                  The Executive Hotel Collection
                </strong>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  Premium hardwood finishes, marble en-suites, soundproof acoustics, and prompt room service.
                </span>
              </div>
              <Link to="/hotel-rooms" className="btn btn-outline-gold" style={{ fontSize: '0.82rem', padding: '0.6rem 1.2rem' }}>
                <span>Dedicated Hotel Page</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="rooms-grid">
              {HOTEL_ROOMS.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 2: Guest House */}
        {activeTab === 'guesthouse' && (
          <div className="tab-pane-fade">
            <div
              style={{
                background: 'rgba(36, 32, 33, 0.6)',
                border: '1px solid var(--gold-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem 1.8rem',
                marginBottom: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <strong style={{ color: 'var(--gold-secondary)', fontSize: '1.1rem', display: 'block' }}>
                  The Peaceful Guest House Collection
                </strong>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  Clean homestay charm, sanitized bedding, attached bathrooms, and tranquil privacy at honest rates.
                </span>
              </div>
              <Link to="/guest-house" className="btn btn-outline-gold" style={{ fontSize: '0.82rem', padding: '0.6rem 1.2rem' }}>
                <span>Dedicated Guest House Page</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="rooms-grid">
              {GUEST_HOUSE_ROOMS.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 3: Side-by-Side Comparison Matrix */}
        {activeTab === 'compare' && (
          <div className="tab-pane-fade">
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--gold-border)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--gold-border)' }}>
                      <th style={{ padding: '1.2rem 1.5rem', color: 'var(--gold-primary)', fontSize: '0.84rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        Feature / Amenity
                      </th>
                      <th style={{ padding: '1.2rem 1.5rem', color: 'var(--text-primary)', fontSize: '1rem', fontFamily: 'var(--font-serif-heading)' }}>
                        🏨 Hotel Rooms & Suites
                      </th>
                      <th style={{ padding: '1.2rem 1.5rem', color: 'var(--text-primary)', fontSize: '1rem', fontFamily: 'var(--font-serif-heading)' }}>
                        🏡 Guest House Wing
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(102, 80, 58, 0.25)' }}>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>Target Ambience</td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>Ultra-Luxury, Executive, Soundproof</td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>Peaceful, Homely, Family-Friendly</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(102, 80, 58, 0.25)', background: 'rgba(27, 23, 24, 0.3)' }}>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>Sample Tariff Range</td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--gold-secondary)', fontWeight: 700 }}>₹2,800 – ₹4,800 / night</td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--gold-secondary)', fontWeight: 700 }}>₹1,200 – ₹3,200 / night</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(102, 80, 58, 0.25)' }}>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>Bedding Types</td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Grand King & Queen Beds, 4-Star Linens</td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Comfort Double & Multi-Bed Arrangements</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(102, 80, 58, 0.25)', background: 'rgba(27, 23, 24, 0.3)' }}>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>Air Conditioning</td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Silent Split Climate Control in all suites</td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Available in AC Rooms & Family Haven</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(102, 80, 58, 0.25)' }}>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>Bathroom Fixtures</td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Marble En-Suite with Rain Shower & Geyser</td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Attached Private Bath with Hot Water Geyser</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(102, 80, 58, 0.25)', background: 'rgba(27, 23, 24, 0.3)' }}>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>Room Service</td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Dedicated in-room dining assistance</td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Dining Hall Access & On-Demand Order</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '1.2rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>Action</td>
                      <td style={{ padding: '1.2rem 1.5rem' }}>
                        <Link to="/hotel-rooms" className="btn btn-primary-gold" style={{ fontSize: '0.82rem', padding: '0.6rem 1.2rem' }}>
                          <span>View Hotel Rooms</span>
                          <ArrowRight size={14} />
                        </Link>
                      </td>
                      <td style={{ padding: '1.2rem 1.5rem' }}>
                        <Link to="/guest-house" className="btn btn-outline-gold" style={{ fontSize: '0.82rem', padding: '0.6rem 1.2rem' }}>
                          <span>View Guest House</span>
                          <ArrowRight size={14} />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
