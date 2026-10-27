import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hotelData';

export default function GuestTestimonials() {
  const reviews = [
    {
      id: 1,
      name: "Dr. S. Mukherjee",
      role: "Executive Suite Guest",
      avatar: "SM",
      rating: 5,
      quote: `An extraordinary experience at ${BUSINESS_INFO.name}. The suite was impeccably sanitized, the timber millwork and ambient lighting created a deeply relaxing environment, and the front desk staff treated us like royalty.`
    },
    {
      id: 2,
      name: "Ananya Roy & Family",
      role: "Guest House Family Stay",
      avatar: "AR",
      rating: 5,
      quote: `Traveling with elder parents and kids, we stayed in the Guest House Wing. The rooms were spotless, spacious, and wonderfully peaceful. The direct telephone booking with the reception made our check-in seamless.`
    },
    {
      id: 3,
      name: "R. Banerjee",
      role: "Deluxe Hotel Room Guest",
      avatar: "RB",
      rating: 5,
      quote: `Warm hospitality, quiet and effective air conditioning, and delicious hot meals prepared fresh. Having 24-hour reception assistance gave our entire trip complete peace of mind. Truly lives up to its name!`
    }
  ];

  return (
    <section className="section section-darker">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Guest Impressions</div>
          <h2 className="section-title">
            Words from <span>Our Distinguished Guests</span>
          </h2>
          <p className="section-subtitle">
            Read what travelers say about their stays, the comfort of our rooms, and our dedicated hospitality.
          </p>
        </div>

        {/* Reviews Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {reviews.map((r) => (
            <div
              key={r.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--gold-border)',
                borderRadius: 'var(--radius-md)',
                padding: '2.4rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-md)',
                transition: 'all var(--transition-smooth)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                  {/* Gold Stars */}
                  <div style={{ display: 'flex', gap: '3px', color: 'var(--gold-primary)' }}>
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={20} style={{ color: 'var(--gold-border)', opacity: 0.6 }} />
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: '1.75', fontStyle: 'italic', marginBottom: '2rem' }}>
                  "{r.quote}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--gold-border-subtle)', paddingTop: '1.2rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #38251F 0%, #241712 100%)',
                    border: '1px solid var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: 'var(--gold-primary)',
                    flexShrink: 0
                  }}
                >
                  {r.avatar}
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem', display: 'block' }}>
                    {r.name}
                  </strong>
                  <span style={{ color: 'var(--gold-primary)', fontSize: '0.78rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <ShieldCheck size={12} />
                    {r.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
