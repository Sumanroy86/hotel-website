import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowLeft, Building2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hotelData';

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Page Hero Header */}
      <section className="page-hero-section">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(/images/real/hotel-exterior-real.jpg)' }} />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: '#ffffff' }}>Contact</span>
          </div>

          <div className="hero-brand-badge" style={{ marginBottom: '1rem' }}>
            <Phone size={14} style={{ color: 'var(--gold-primary)' }} />
            <span>Direct Reservations</span>
          </div>

          <h1 className="page-hero-heading">
            Contact <span>{BUSINESS_INFO.name}</span>
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', maxWidth: '680px', margin: '0 auto 1.8rem auto', lineHeight: '1.7' }}>
            We look forward to welcoming you. Call our front desk directly for live room availability,
            seasonal tariffs, and personalized booking arrangements.
          </p>

          <Link to="/" className="btn btn-outline-gold" style={{ padding: '0.75rem 1.4rem', fontSize: '0.84rem' }}>
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Direct Phone Calling Hub */}
            <div className="contact-card primary-contact-card">
              <div className="contact-card-icon-wrap">
                <Phone size={28} style={{ color: 'var(--gold-primary)' }} />
              </div>
              <h2 className="contact-card-title">Front Desk Telephone</h2>
              <p className="contact-card-p">
                Speak directly with our reservation team for instant booking confirmations,
                tariff queries, or arrival assistance.
              </p>

              <div className="phone-number-showcase">
                <div className="phone-tag">Reservation Desk</div>
                <div className="phone-digits">{BUSINESS_INFO.displayPhone}</div>
              </div>

              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="btn btn-phone-call btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Phone size={20} />
                <span>Call Us Now ({BUSINESS_INFO.displayPhone})</span>
              </a>

              <div className="contact-note">
                <ShieldCheck size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <span>No advance payment via unverified links. Speak to our staff directly.</span>
              </div>
            </div>

            {/* Right Column: Property & Policy Details */}
            <div className="contact-card details-contact-card">
              <h3 className="contact-subheading">Property & Front Desk Information</h3>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="info-icon-box">
                    <Clock size={20} style={{ color: 'var(--gold-primary)' }} />
                  </div>
                  <div>
                    <div className="info-title">Reception Hours</div>
                    <div className="info-val">{BUSINESS_INFO.frontDeskHours}</div>
                    <div className="info-sub">Check-in: {BUSINESS_INFO.checkIn} | Check-out: {BUSINESS_INFO.checkOut}</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon-box">
                    <MapPin size={20} style={{ color: 'var(--gold-primary)' }} />
                  </div>
                  <div>
                    <div className="info-title">Property Location</div>
                    <div className="info-val">{BUSINESS_INFO.addressPlaceholder}</div>
                    <div className="info-sub">* Address placeholder: Update with exact verified street address</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon-box">
                    <Mail size={20} style={{ color: 'var(--gold-primary)' }} />
                  </div>
                  <div>
                    <div className="info-title">Email Inquiries</div>
                    <div className="info-val">{BUSINESS_INFO.displayEmail}</div>
                    <div className="info-sub">For group booking quotation requests and official inquiries</div>
                  </div>
                </div>
              </div>

              <div className="contact-disclaimer-box">
                <strong>Disclaimer Notice:</strong> {BUSINESS_INFO.disclaimerNotice}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
