import { BUSINESS_INFO } from '../data/hotelData';

/**
 * Returns phone link for mobile tel: dialing
 */
export function getPhoneCallUrl() {
  return BUSINESS_INFO.phoneTelLink || 'tel:+91XXXXXXXXXX';
}

/**
 * Clean phone number for display
 */
export function getDisplayPhone() {
  return BUSINESS_INFO.displayPhone || '+91 XXXXXXXXXX';
}
