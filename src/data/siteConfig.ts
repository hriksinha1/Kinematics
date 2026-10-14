/**
 * Aurora Dental - Site Configuration
 * All core brand, contact, and navigational configurations.
 */

// REPLACE: Primary booking platform URL (e.g. Jane App, NexHealth, Dentrix, or custom booking flow)
export const BOOKING_URL = 'https://example.com/book-appointment'; // REPLACE

// REPLACE: Main clinic telephone number (formatted for display and tel: URI)
export const PHONE_DISPLAY = '+1 (416) 555-0188'; // REPLACE
export const PHONE_TEL = '+14165550188'; // REPLACE

// REPLACE: Clinic physical location details
export const CLINIC_ADDRESS = {
  name: 'Aurora Dental Clinic',
  street: '245 King Street West, Suite 300', // REPLACE
  city: 'Toronto',
  province: 'ON',
  postalCode: 'M5V 1J2', // REPLACE
  fullAddress: '245 King Street West, Suite 300, Toronto, ON M5V 1J2',
  // Google Maps search query link built dynamically
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=245+King+Street+West+Suite+300+Toronto+ON+M5V+1J2',
};

// REPLACE: Clinic operating hours
export const CLINIC_HOURS = [
  { days: 'Mon to Fri', hours: '8:00 am to 6:00 pm' }, // REPLACE
  { days: 'Saturday', hours: 'By appointment' }, // REPLACE
  { days: 'Sunday', hours: 'Closed' }, // REPLACE
];

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Team', href: '#team' },
  { label: 'Visit', href: '#visit' },
  { label: 'FAQ', href: '#faq' },
];

export const SITE_METADATA = {
  title: 'Aurora Dental',
  tagline: 'Modern, comfortable dental care in Toronto, built around clarity and your pace.',
  copyrightYear: 2026,
};
