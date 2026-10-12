import React from 'react';
import { MessageCircle, HelpCircle, ShieldAlert, Sparkles } from 'lucide-react';
import { TARIFF_MATRIX } from '../data/hotelData';
import { getTariffWhatsAppUrl, getGeneralWhatsAppUrl } from '../utils/whatsapp';

export default function RoomTariff() {
  return (
    <section id="tariff" className="section section-darker">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Tariff & Pricing Guide</div>
          <h2 className="section-title">
            Transparent & Clear <span>Room Tariffs</span>
          </h2>
          <p className="section-subtitle">
            Compare tariffs between our luxury Hotel Suites and peaceful Guest House rooms.
            All figures shown below are sample baseline rates provided for preliminary estimation.
          </p>
          <div style={{ marginTop: '1.2rem' }}>
            <span className="badge-sample">
              * Placeholder Tariff — Final rates may vary during holidays, weekends, and peak seasons.
            </span>
          </div>
        </div>

        {/* Clean Responsive Tariff Matrix Table */}
        <div className="tariff-table-wrapper">
          <table className="tariff-table" aria-label="Room Tariff Matrix">
            <thead>
              <tr>
                <th>Room Type & Category</th>
                <th>Standard Occupancy</th>
                <th>Weekday Sample</th>
                <th>Weekend / Holiday Sample</th>
                <th>Extra Person</th>
                <th>Included Amenities</th>
                <th>Enquire Live Rate</th>
              </tr>
            </thead>
            <tbody>
              {TARIFF_MATRIX.map((item, idx) => (
                <tr key={idx}>
                  <td className="tariff-category-cell">
                    <div>{item.category}</div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: item.type === 'Hotel' ? 'var(--gold-light)' : '#4ade80',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em'
                      }}
                    >
                      {item.type} Accommodation
                    </span>
                  </td>
                  <td>{item.occupancy}</td>
                  <td className="tariff-price-cell">{item.weekdaySample}</td>
                  <td className="tariff-price-cell" style={{ color: '#fff' }}>
                    {item.weekendSample}
                  </td>
                  <td>{item.extraPerson}</td>
                  <td style={{ maxWidth: '240px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {item.inclusions}
                  </td>
                  <td>
                    <a
                      href={getTariffWhatsAppUrl(item.category)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp-outline"
                      style={{ padding: '0.45rem 0.95rem', fontSize: '0.78rem' }}
                      aria-label={`Ask live rate for ${item.category} on WhatsApp`}
                    >
                      <MessageCircle size={14} />
                      <span>Check Rate</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Policy & Notes Callout */}
        <div className="tariff-notes-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <ShieldAlert size={22} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
            <div className="tariff-notes-text">
              <strong>Tariff Verification Policy:</strong> Prices listed above are placeholders for demo purposes.
              Digha accommodation rates fluctuate based on Durga Puja, New Year, long weekends, and seasonal demand.
              Always obtain written quotation on WhatsApp before sending any advance.
            </div>
          </div>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            aria-label="Request Live Tariff Sheet on WhatsApp"
          >
            <MessageCircle size={17} />
            <span>Verify Live Tariffs on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
