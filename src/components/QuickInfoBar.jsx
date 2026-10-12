import React from 'react';
import { Clock, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hotelData';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export default function QuickInfoBar() {
  return (
    <div className="quick-info-bar">
      {/* 1. Check-In / Out */}
      <div className="quick-info-item">
        <div className="quick-info-icon">
          <Clock size={20} />
        </div>
        <div>
          <div className="quick-info-label">Check-In / Out</div>
          <div className="quick-info-val">
            {BUSINESS_INFO.checkIn} / {BUSINESS_INFO.checkOut}
          </div>
        </div>
      </div>

      {/* 2. Location */}
      <div className="quick-info-item">
        <div className="quick-info-icon">
          <MapPin size={20} />
        </div>
        <div>
          <div className="quick-info-label">Location</div>
          <div className="quick-info-val">
            {BUSINESS_INFO.locationShort}
          </div>
        </div>
      </div>

      {/* 3. Direct WhatsApp Support */}
      <div className="quick-info-item">
        <div className="quick-info-icon" style={{ borderColor: 'rgba(37, 211, 102, 0.4)', color: '#38ef7d' }}>
          <MessageCircle size={20} />
        </div>
        <div>
          <div className="quick-info-label">WhatsApp Support</div>
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="quick-info-val"
            style={{ color: '#4ade80', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            aria-label="Direct WhatsApp enquiry"
          >
            {BUSINESS_INFO.displayPhone}
          </a>
        </div>
      </div>
    </div>
  );
}
