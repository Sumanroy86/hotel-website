import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export default function RefinedLuxuryFeature({ onSelectImage }) {
  return (
    <section className="section" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="feature-showcase-grid">
          {/* Left storytelling column */}
          <div className="feature-showcase-text">
            <div className="section-eyebrow" style={{ justifyContent: 'flex-start' }}>
              The Coastal Standard
            </div>
            <h3>
              Discover Refined <span>Coastal Comfort</span>
            </h3>
            <p>
              At Coastal Stay, every element is designed to offer pure relaxation after a sun-kissed day at Digha beach.
              From plush mattresses and silent air conditioning to spotless en-suite bathrooms and warm ambient illumination,
              we bring five-star serenity into every corner of your stay.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              Whether you choose our luxury hotel wing or our intimate guest house, experience attentive care,
              delicious coastal dining, and the rejuvenating sound of the Bay of Bengal waves.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: '1.5rem 0 2rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)' }} />
                <span>Spotless, sanitized rooms & fresh linen prior to each check-in</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)' }} />
                <span>Dedicated power backup for uninterrupted coastal relaxation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)' }} />
                <span>Direct WhatsApp communication with on-site hospitality desk</span>
              </div>
            </div>

            <a
              href="#facilities"
              className="btn btn-outline-gold"
              aria-label="View all facilities"
            >
              <span>View All Facilities</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Middle card: Luxury Bathroom */}
          <div
            className="feature-img-card"
            onClick={() => onSelectImage && onSelectImage('/images/bathroom.jpg', 'Modern En-Suite Bathroom', 'Clean, modern en-suite bathrooms with instant geysers and rain showers.')}
            style={{ cursor: onSelectImage ? 'zoom-in' : 'default' }}
          >
            <img
              src="/images/bathroom.jpg"
              alt="Coastal Stay Modern Bathroom"
              loading="lazy"
            />
            <div className="feature-img-caption">Modern En-Suite Bathrooms</div>
          </div>

          {/* Right card: Scenic Coastal Sea Breeze */}
          <div
            className="feature-img-card"
            onClick={() => onSelectImage && onSelectImage('/images/beach.jpg', 'Digha Coastal Scenery', 'Minutes from gentle sea breezes and golden evening sunsets.')}
            style={{ cursor: onSelectImage ? 'zoom-in' : 'default' }}
          >
            <img
              src="/images/beach.jpg"
              alt="Digha Sea Beach Near Coastal Stay"
              loading="lazy"
            />
            <div className="feature-img-caption">Steps From Digha Shoreline</div>
          </div>
        </div>
      </div>
    </section>
  );
}
