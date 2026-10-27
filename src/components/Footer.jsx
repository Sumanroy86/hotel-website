import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowUp, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hotelData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div>
            <Link to="/" className="brand-logo" style={{ marginBottom: '1.2rem' }}>
              <div className="brand-icon-box">
                <span>RS</span>
              </div>
              <span className="brand-name">{BUSINESS_INFO.name}</span>
            </Link>

            <p style={{ color: 'var(--text-on-dark-secondary)', fontSize: '0.88rem', lineHeight: '1.75', marginBottom: '1.5rem', maxWidth: '340px' }}>
              {BUSINESS_INFO.tagline}. Offering boutique hotel suites and peaceful guest house accommodations 
              crafted with timeless elegance, natural warmth, and attentive hospitality.
            </p>

            <a
              href={BUSINESS_INFO.phoneTelLink}
              className="btn btn-phone"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.82rem' }}
              aria-label={`Call reception at ${BUSINESS_INFO.displayPhone}`}
            >
              <Phone size={15} />
              <span>Call {BUSINESS_INFO.displayPhone}</span>
            </a>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/hotel-rooms" className="footer-link">Hotel Rooms</Link></li>
              <li><Link to="/guest-house" className="footer-link">Guest House</Link></li>
              <li><Link to="/gallery" className="footer-link">Photo Gallery</Link></li>
              <li><Link to="/facilities" className="footer-link">Facilities</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Desk</Link></li>
            </ul>
          </div>

          {/* Col 3: Accommodations Quick Links */}
          <div>
            <div className="footer-col-title">Accommodations</div>
            <ul className="footer-links">
              <li><Link to="/hotel-rooms/deluxe-room" className="footer-link">Deluxe Hotel Room</Link></li>
              <li><Link to="/hotel-rooms/premium-suite" className="footer-link">Executive Premium Suite</Link></li>
              <li><Link to="/hotel-rooms/family-suite" className="footer-link">Royal Family Suite</Link></li>
              <li><Link to="/guest-house/standard-guest-room" className="footer-link">Standard Guest Room</Link></li>
              <li><Link to="/guest-house/comfort-ac-guest-room" className="footer-link">Comfort AC Guest Room</Link></li>
              <li><Link to="/guest-house/spacious-family-guest-haven" className="footer-link">Family Guest Haven</Link></li>
            </ul>
          </div>

          {/* Col 4: Important Regulatory / Sample Disclaimer */}
          <div>
            <div className="footer-col-title">Important Notice</div>
            <div
              style={{
                background: 'rgba(198, 161, 91, 0.12)',
                border: '1px solid var(--gold-border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.1rem',
                fontSize: '0.78rem',
                color: 'var(--text-on-dark-muted)',
                lineHeight: '1.65'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-primary)', marginBottom: '0.4rem', fontWeight: 600 }}>
                <ShieldCheck size={14} /> Demonstration Template
              </div>
              All prices, contact details, and facilities are editable sample placeholders. 
              This website does not process automated bookings or online payments. 
              Please contact the front desk by phone for verified information.
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Designed for Luxury Hospitality</span>
            <button
              onClick={scrollToTop}
              className="btn btn-outline-gold"
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.75rem', borderRadius: 'var(--radius-full)' }}
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
