/**
 * Aurora Dental - Landing Page Content
 * All structured text, features, team bios, services, FAQs, and image metadata.
 */

export const HERO_CONTENT = {
  eyebrow: 'Now welcoming new patients in Toronto',
  headline: 'A healthier smile. A more confident you.',
  description:
    'Aurora is a modern dental clinic built around comfort, clarity and long-term oral health. Every plan is explained, and every visit moves at your pace.',
  primaryCta: 'Book an Appointment',
  secondaryCta: 'Explore Our Services',
  collage: [
    {
      id: 'collage-1',
      // Cropped sliver on the left edge
      src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
      alt: 'Dental instruments and clinician in clinic',
      width: 400,
      height: 600,
    },
    {
      id: 'collage-2',
      // Narrow image: Dentist with mask and surgical cap
      src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
      alt: 'Dentist in surgical mask, hair cap and scrubs preparing for procedure',
      pillLabel: 'Gentle care',
      pillPosition: 'top-left',
      width: 500,
      height: 600,
    },
    {
      id: 'collage-3',
      // WIDE central treatment photo: Patient in chair with overhead light and dentist's hands
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
      alt: 'Patient comfortably seated in dental chair with overhead lighting and practitioner examining teeth',
      pillLabel: 'Clear explanations',
      pillPosition: 'bottom-center',
      width: 1000,
      height: 600,
    },
    {
      id: 'collage-4',
      // Narrow image: Smiling male dentist holding tooth model
      src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
      alt: 'Smiling dentist in clinical scrubs presenting a dental anatomical model',
      width: 500,
      height: 600,
    },
    {
      id: 'collage-5',
      // Cropped sliver on the right edge
      src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
      alt: 'Modern dental suite and examination setup',
      width: 400,
      height: 600,
    },
  ],
  extraPill: {
    label: 'Digital scans',
  },
};

export const BENEFITS_CONTENT = [
  {
    title: 'Same-week visits',
    subtitle: 'For most appointments', // REPLACE
  },
  {
    title: 'Transparent plans',
    subtitle: 'Options and costs upfront', // REPLACE
  },
  {
    title: 'Comfort first',
    subtitle: 'Pause any time', // REPLACE
  },
  {
    title: 'Open Saturdays',
    subtitle: 'By appointment', // REPLACE
  },
];

export const SERVICES_CONTENT = {
  eyebrow: 'Our dental services',
  headline: 'Complete care for every smile.',
  description: 'From routine check-ups to complete smile restoration, all handled by one team.',
  featured: {
    title: 'General & Preventive Dentistry',
    description: 'Exams, cleanings, x-rays and fillings that keep small issues small.',
    linkText: 'Learn more →',
    href: '#services',
    image: {
      src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80',
      alt: 'Patient receiving a gentle dental checkup and teeth examination in chair',
      width: 800,
      height: 500,
    },
  },
  cards: [
    {
      id: 'cosmetic',
      iconType: 'sparkle',
      title: 'Cosmetic Dentistry',
      description: 'Whitening, bonding and veneers designed to look natural on you.',
      linkText: 'Learn more →',
      href: '#services',
    },
    {
      id: 'implants',
      iconType: 'tooth',
      title: 'Dental Implants & Restorations',
      description: 'Crowns, bridges and implants that restore function and confidence.',
      linkText: 'Learn more →',
      href: '#services',
    },
    {
      id: 'aligners',
      iconType: 'aligner',
      title: 'Clear Aligners',
      description:
        'Discreet straightening with a plan mapped out before you begin, so you know the path and the timeline.',
      linkText: 'Learn more →',
      href: '#services',
    },
  ],
};

export const EXPERIENCE_CONTENT = {
  eyebrow: 'The Aurora experience',
  headline: 'Dentistry, designed around you.',
  image: {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
    alt: 'Attentive dental team member discussing treatment comfortably with a patient in chair',
    width: 720,
    height: 900,
  },
  points: [
    {
      number: '1',
      title: 'A calm environment',
      text: 'Quiet rooms and a relaxed pace, for people who dislike the dentist.',
    },
    {
      number: '2',
      title: 'Transparent treatment',
      text: 'You see the options and the costs before anything begins.',
    },
    {
      number: '3',
      title: 'Modern technology',
      text: 'Digital tools that make visits shorter and plans easier to follow.',
    },
    {
      number: '4',
      title: 'Comfort first',
      text: 'Pause any time. Your comfort shapes how we work.',
    },
  ],
};

export const TEAM_CONTENT = {
  eyebrow: 'Meet your dental team',
  headline: 'Expert hands. Thoughtful care.',
  description: 'Our dentists and hygienists, with their licensed qualifications.',
  members: [
    {
      id: 'emily-carter',
      name: 'Dr. Emily Carter', // REPLACE
      role: 'Principal Dentist', // REPLACE
      credentials: 'DDS · 14 years · Family & cosmetic dentistry', // REPLACE
      image: {
        src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80',
        alt: 'Dr. Emily Carter, Principal Dentist smiling warmly in lab coat',
        width: 600,
        height: 750,
      },
    },
    {
      id: 'daniel-park',
      name: 'Dr. Daniel Park', // REPLACE
      role: 'Associate Dentist', // REPLACE
      credentials: 'DMD · 9 years · Implants & restorations', // REPLACE
      image: {
        src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80',
        alt: 'Dr. Daniel Park, Associate Dentist in dental clinic uniform',
        width: 600,
        height: 750,
      },
    },
    {
      id: 'daniel-brooks',
      name: 'Daniel Brooks, RDH', // REPLACE
      role: 'Registered Dental Hygienist', // REPLACE
      credentials: 'RDH · 7 years · Preventive care', // REPLACE
      image: {
        src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80',
        alt: 'Daniel Brooks, Registered Dental Hygienist in clinical attire',
        width: 600,
        height: 750,
      },
    },
  ],
};

export const TECHNOLOGY_CONTENT = {
  eyebrow: 'Modern dentistry & technology',
  headline: 'Precision meets personalized care.',
  image: {
    src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80',
    alt: 'High-definition digital intraoral scanning display in modern dental operatory',
    width: 800,
    height: 900,
  },
  rows: [
    {
      tag: 'Scan',
      title: 'Digital scanning',
      description: 'Comfortable 3D scans can replace messy impressions and help you preview your plan.',
    },
    {
      tag: 'Image',
      title: 'Digital imaging',
      description: 'Clear images show you exactly what we see, using lower-dose x-rays.',
    },
    {
      tag: 'Plan',
      title: 'Treatment planning',
      description: 'A step-by-step plan covering timing and cost, so you decide with confidence.',
    },
  ],
};

export const VISIT_CONTENT = {
  eyebrow: 'Visit Aurora',
  headline: 'Your next visit starts here.',
  subtitle: 'Easy to find, easy to reach, and easy to book.',
  image: {
    src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80',
    alt: 'Sunlit modern dental operatory room with clean blue treatment chair and sterilization equipment',
    width: 1400,
    height: 650,
  },
  bottomCards: [
    {
      title: 'Parking & accessibility',
      description: 'Underground parking in the building, with a step-free entrance and accessible washroom.', // REPLACE
    },
    {
      title: 'New patients',
      description: 'Welcome. Please bring your health card and any insurance details.', // REPLACE
    },
  ],
};

export const FAQ_CONTENT = {
  eyebrow: 'FAQ',
  headline: 'Good to know before you book.',
  items: [
    {
      id: 'faq-1',
      question: 'What should I bring to my first appointment?',
      answer:
        'Please bring a government photo ID or health card, your current dental insurance details if applicable, and a list of any routine medications you are taking. Arriving 10 minutes early allows us to comfortably review your medical history.', // REPLACE
    },
    {
      id: 'faq-2',
      question: 'Do you work with dental insurance?',
      answer:
        'Yes, we accept and directly bill most Canadian dental insurance plans (assignment of benefits). We will verify your coverage details in advance and submit electronic claims directly on your behalf to minimize upfront out-of-pocket costs.', // REPLACE
    },
    {
      id: 'faq-3',
      question: 'Are emergency or same-day appointments available?',
      answer:
        'Yes, we reserve dedicated daily emergency slots for sudden tooth pain, broken teeth, lost restorations, or other urgent dental concerns. Call our clinic phone directly in the morning for priority triage.', // REPLACE
    },
    {
      id: 'faq-4',
      question: 'How can I pay?',
      answer:
        'We accept all major credit cards (Visa, MasterCard, American Express), debit (Interac), and flexible monthly payment plans through our dental financing partners. Transparent written estimates are always provided before treatment.', // REPLACE
    },
    {
      id: 'faq-5',
      question: 'What does the first consultation cost?',
      answer:
        'Our initial comprehensive exam fees follow the current Ontario Dental Association (ODA) suggested fee guide. Many dental insurance plans cover new patient exams and necessary diagnostics at 80% to 100%. We provide full cost breakdowns prior to beginning.', // REPLACE
    },
    {
      id: 'faq-6',
      question: 'What is your cancellation policy?',
      answer:
        'We request at least 48 business hours notice if you need to reschedule or cancel your appointment. This allows us to offer the reserved operatory time to another patient awaiting care.', // REPLACE
    },
  ],
};

export const FINAL_CTA_CONTENT = {
  headline: 'Ready for a different kind of dental experience?',
  description: 'Take the first step with a team that explains, listens and cares.',
  primaryCta: 'Book Your First Visit',
  secondaryCta: 'Call the clinic',
  image: {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    alt: 'Friendly dental professional discussing care with a patient',
    width: 800,
    height: 700,
  },
};

export const FOOTER_CONTENT = {
  explore: [
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Our team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
  ],
  services: [
    { label: 'General & Preventive', href: '#services' },
    { label: 'Cosmetic', href: '#services' },
    { label: 'Implants & Restorations', href: '#services' },
    { label: 'Clear Aligners', href: '#services' },
  ],
  legal: [
    { label: 'Privacy', href: '#' }, // REPLACE
    { label: 'Accessibility', href: '#' }, // REPLACE
    { label: 'Terms', href: '#' }, // REPLACE
  ],
};
