import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat on WhatsApp with Coastal Stay Digha"
      title="Chat on WhatsApp"
    >
      <div className="floating-pulse" />
      <MessageCircle size={24} style={{ flexShrink: 0 }} />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
