import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  HelpCircle,
  Calendar,
  Users
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/hotelData';
import { getGeneralWhatsAppUrl, getCustomEnquiryUrl } from '../utils/whatsapp';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: 'Deluxe Hotel Room',
    checkInDate: '',
    guests: '2 Adults',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const url = getCustomEnquiryUrl({
      guestName: formData.name,
      roomType: formData.roomType,
      checkInDate: formData.checkInDate || 'Flexible / Date TBD',
      guests: formData.guests,
      messageNotes: formData.notes
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section section-darker">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Connect With Us</div>
          <h2 className="section-title">
            Enquire via <span>WhatsApp & Contact Desk</span>
          </h2>
          <p className="section-subtitle">
            Have questions about room availability, group bookings, tariffs, or directions?
            Message us directly on WhatsApp or submit your travel dates below for instant assistance.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Details Cards */}
          <div className="contact-info-cards">
            {/* WhatsApp Direct */}
            <div className="contact-card">
              <div className="contact-card-icon wa">
                <MessageCircle size={24} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div className="contact-card-label">WhatsApp Business (Recommended)</div>
                <div className="contact-card-val">{BUSINESS_INFO.displayPhone}</div>
                <div className="contact-card-sub">
                  Instant chat for rates, photos, and room availability confirmation.
                </div>
                <div style={{ marginTop: '0.8rem' }}>
                  <a
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ padding: '0.55rem 1.2rem', fontSize: '0.82rem' }}
                    aria-label="Start direct WhatsApp conversation"
                  >
                    <MessageCircle size={16} />
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Calling Phone */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <Phone size={24} />
              </div>
              <div>
                <div className="contact-card-label">Front Desk Phone</div>
                <div className="contact-card-val">{BUSINESS_INFO.displayPhone}</div>
                <div className="contact-card-sub">
                  Operational daily for direct telephone enquiries.
                </div>
              </div>
            </div>

            {/* Location Address */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <MapPin size={24} />
              </div>
              <div>
                <div className="contact-card-label">Address (Sample Placeholder)</div>
                <div className="contact-card-val" style={{ fontSize: '0.94rem', fontWeight: 500 }}>
                  {BUSINESS_INFO.locationFull}
                </div>
                <div className="contact-card-sub">
                  Minutes from New Digha Sea Beach & Railway Station.
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <Clock size={24} />
              </div>
              <div>
                <div className="contact-card-label">Check-in / Check-out & Hours</div>
                <div className="contact-card-val" style={{ fontSize: '0.94rem' }}>
                  Check-in: {BUSINESS_INFO.checkIn} | Check-out: {BUSINESS_INFO.checkOut}
                </div>
                <div className="contact-card-sub">
                  Front Desk: {BUSINESS_INFO.frontDeskHours}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Trip Enquiry Form */}
          <div className="contact-form-box">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif-heading)', fontSize: '1.45rem', color: 'var(--text-primary)' }}>
                Quick WhatsApp Enquiry Form
              </h3>
              <span className="badge-green" style={{ fontSize: '0.72rem' }}>
                Instant Connect
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Fill in your details below and click <strong>"Send Enquiry via WhatsApp"</strong>.
              This prepares a formatted WhatsApp message with your travel dates for our team to review.
            </p>

            <form onSubmit={handleFormSubmit}>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Suman Roy"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Contact Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="roomType" className="form-label">
                    Room Preference
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <optgroup label="Hotel Rooms">
                      <option value="Deluxe Hotel Room">Deluxe Hotel Room (₹2,499 Sample)</option>
                      <option value="Premium Sea-Breeze Room">Premium Sea-Breeze Room (₹3,299 Sample)</option>
                      <option value="Grand Family Hotel Suite">Grand Family Hotel Suite (₹4,299 Sample)</option>
                    </optgroup>
                    <optgroup label="Guest House">
                      <option value="Cozy Standard Guest Room">Cozy Standard Guest Room (₹1,199 Sample)</option>
                      <option value="Comfort AC Guest Room">Comfort AC Guest Room (₹1,899 Sample)</option>
                      <option value="Spacious Family Guest Haven">Spacious Family Guest Haven (₹2,699 Sample)</option>
                    </optgroup>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="guests" className="form-label">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="1 Adult">1 Adult</option>
                    <option value="2 Adults">2 Adults</option>
                    <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                    <option value="3-4 Adults (Family)">3-4 Adults (Family)</option>
                    <option value="5+ Group / Multiple Rooms">5+ Group / Multiple Rooms</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="checkInDate" className="form-label">
                  Tentative Check-in Date
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="notes" className="form-label">
                  Any Special Requests or Queries
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="e.g. Need extra bed, sea view preference, car parking requirement..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '0.95rem 1.6rem' }}
                aria-label="Send formatted enquiry message via WhatsApp"
              >
                <MessageCircle size={19} />
                <span>Send Enquiry via WhatsApp</span>
              </button>

              <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                * Clicking will open WhatsApp in a new tab with your message pre-composed. You must manually send the message.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
