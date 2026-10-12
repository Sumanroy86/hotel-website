import React from 'react';
import { Info, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hotelData';

export default function DisclaimerBanner() {
  return (
    <div className="disclaimer-strip">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
        <Info size={14} style={{ color: 'var(--gold-primary)' }} />
        <span>
          <strong>Sample Preview Website:</strong> All tariffs, amenities, and addresses shown are sample placeholders. 
          Please call reception directly to verify live room availability & seasonal rates.
        </span>
        <a
          href={BUSINESS_INFO.phoneTelLink}
          style={{ color: 'var(--gold-secondary)', textDecoration: 'underline', marginLeft: '0.4rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
          aria-label={`Call front desk at ${BUSINESS_INFO.displayPhone}`}
        >
          <Phone size={12} />
          <span>Call: {BUSINESS_INFO.displayPhone}</span>
        </a>
      </div>
    </div>
  );
}
