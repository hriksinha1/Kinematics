/**
 * Kinematics — landing page copy and image metadata.
 * Verify real contact information, clinician credentials and clinical claims before launch.
 */
export const HERO_CONTENT = {
  eyebrow: 'Physiotherapy · Sports Rehabilitation · Chiropractic',
  headline: 'Move better. Recover stronger.',
  description: 'Personalised care for pain, movement and recovery. From everyday aches to sports injuries, Kinematics helps you build strength, restore confidence and get back to what matters.',
  primaryCta: 'Book an Appointment',
  secondaryCta: 'Explore Our Services',
  collage: [
    {
      id: 'collage-1',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
      alt: 'Athlete working through a guided strength and mobility exercise',
      width: 400,
      height: 600,
    },
    {
      id: 'collage-2',
      src: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=600&q=80',
      alt: 'Physiotherapist guiding a patient through a rehabilitation exercise',
      pillLabel: 'Care built around you',
      pillPosition: 'top-left',
      width: 500,
      height: 600,
    },
    {
      id: 'collage-3',
      src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
      alt: 'Athlete training with a focus on controlled movement and strength',
      pillLabel: 'Progress at your pace',
      pillPosition: 'bottom-center',
      width: 1000,
      height: 600,
    },
    {
      id: 'collage-4',
      src: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=600&q=80',
      alt: 'Sports rehabilitation session focused on mobility and movement',
      width: 500,
      height: 600,
    },
    {
      id: 'collage-5',
      src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
      alt: 'Person doing a guided stretching and mobility routine',
      width: 400,
      height: 600,
    },
  ],
  extraPill: { label: 'Movement-led recovery' },
};

export const BENEFITS_CONTENT = [
  { title: 'Personalised plans', subtitle: 'Built around your goals' },
  { title: 'Move with confidence', subtitle: 'Progress you can track' },
  { title: 'Whole-person care', subtitle: 'More than symptom relief' },
  { title: 'Active recovery', subtitle: 'Build strength for daily life' },
];

export const SERVICES_CONTENT = {
  eyebrow: 'How we can help',
  headline: 'Care that gets you moving.',
  description: 'A coordinated approach to pain, rehabilitation and performance, shaped around your body, your routine and your goals.',
  featured: {
    title: 'Physiotherapy',
    description: 'Individual assessment and practical treatment to improve mobility, build strength and support recovery from pain or injury.',
    linkText: 'Explore physiotherapy →',
    href: '#experience',
    image: {
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
      alt: 'Physiotherapist discussing a personalised recovery plan with a patient',
      width: 800,
      height: 500,
    },
  },
  cards: [
    {
      id: 'sports-rehab',
      iconType: 'sparkle',
      title: 'Sports Injury Rehabilitation',
      description: 'Structured recovery for strains, sprains, overuse injuries and a supported return to sport.',
      linkText: 'Explore sports rehab →',
      href: '#technology',
    },
    {
      id: 'chiropractic',
      iconType: 'tooth',
      title: 'Chiropractic Care',
      description: 'Assessment and hands-on care focused on spinal and joint movement, alongside practical guidance.',
      linkText: 'Explore chiropractic →',
      href: '#experience',
    },
    {
      id: 'mobility',
      iconType: 'aligner',
      title: 'Mobility, Strength & Injury Prevention',
      description: 'Build movement confidence with progressive exercise, mobility work and strategies tailored to your everyday activities or sport.',
      linkText: 'Explore movement care →',
      href: '#technology',
    },
  ],
};

export const EXPERIENCE_CONTENT = {
  eyebrow: 'The Kinematics approach',
  headline: 'Your recovery. Your goals. Your pace.',
  image: {
    src: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=900&q=80',
    alt: 'Physiotherapist supporting a patient during a guided movement assessment',
    width: 720,
    height: 900,
  },
  points: [
    { number: '1', title: 'Understand the whole picture', text: 'We start by listening to your concerns, reviewing your movement and understanding what you want to get back to.' },
    { number: '2', title: 'A plan made for you', text: 'Your care plan should reflect your symptoms, activity level, preferences and recovery goals.' },
    { number: '3', title: 'Hands-on care and active rehab', text: 'Where appropriate, treatment combines guided movement, exercise and hands-on techniques.' },
    { number: '4', title: 'Build for the long term', text: 'We help you develop practical strategies and strength to support everyday movement and a confident return to activity.' },
  ],
};

export const TEAM_CONTENT = {
  eyebrow: 'Meet your care team',
  headline: 'Expert guidance. Human care.',
  description: 'Meet the practitioners who help you understand your body, work towards your goals and take the next step in your recovery.',
  members: [
    {
      id: 'physiotherapist',
      name: 'Physiotherapy Team',
      role: 'Physiotherapy & Rehabilitation',
      credentials: 'Individual assessment · Goal-led recovery',
      image: {
        src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=700&q=80',
        alt: 'Healthcare professional in a clinical setting',
        width: 600,
        height: 750,
      },
    },
    {
      id: 'sports-rehab',
      name: 'Sports Rehabilitation Team',
      role: 'Sports Injury & Return to Activity',
      credentials: 'Movement · Strength · Sport-specific goals',
      image: {
        src: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=700&q=80',
        alt: 'Athlete running outdoors during training',
        width: 600,
        height: 750,
      },
    },
    {
      id: 'chiropractic',
      name: 'Chiropractic Care Team',
      role: 'Spinal & Joint Movement',
      credentials: 'Assessment · Manual care · Movement advice',
      image: {
        src: 'https://images.unsplash.com/photo-1768507423533-b87b62769758?auto=format&fit=crop&w=700&q=80',
        alt: 'Chiropractor adjusting a patient’s upper back and neck during a clinical treatment session',
        width: 600,
        height: 750,
      },
    },
  ],
};

export const TECHNOLOGY_CONTENT = {
  eyebrow: 'Assessment to action',
  headline: 'A clearer plan for better movement.',
  image: {
    src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80',
    alt: 'Athlete working with training and rehabilitation equipment in a gym setting',
    width: 800,
    height: 900,
  },
  rows: [
    { tag: 'Assess', title: 'Understand how you move', description: 'A thoughtful assessment helps identify movement limitations and set goals that matter to you.' },
    { tag: 'Rebuild', title: 'Progressive rehabilitation', description: 'A guided progression of mobility, strength and functional exercises matched to your current ability.' },
    { tag: 'Return', title: 'Get back to daily life or sport', description: 'Work towards practical milestones for activity, with your plan adapted as you progress.' },
  ],
};

export const VISIT_CONTENT = {
  eyebrow: 'Visit Kinematics',
  headline: 'Take the next step towards moving better.',
  subtitle: 'Ask our team about services, availability and the right starting point for your needs.',
  image: {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80',
    alt: 'Bright rehabilitation clinic consultation space with a clinician and patient',
    width: 1400,
    height: 650,
  },
  bottomCards: [
    { title: 'What to expect', description: 'Your first visit may include a discussion of your concerns, movement assessment and a plan for next steps.' },
    { title: 'Not sure which service to choose?', description: 'Tell us what has been bothering you and what you would like to get back to. The team can help you understand the available options.' },
  ],
};

export const FAQ_CONTENT = {
  eyebrow: 'FAQs',
  headline: 'Good to know before you get started.',
  items: [
    { id: 'faq-1', question: 'What happens at my first appointment?', answer: 'Your practitioner will discuss your concerns, relevant health and activity history, and goals. Depending on your needs, the visit may include an appropriate movement assessment and a plan for next steps.' },
    { id: 'faq-2', question: 'Do I need a referral?', answer: 'Referral requirements can vary by location, provider and insurance plan. Contact the clinic to confirm what applies to your situation before booking.' },
    { id: 'faq-3', question: 'Can you help with a sports injury?', answer: 'Sports injury rehabilitation may help with a range of muscle, tendon and joint problems. An assessment helps determine an appropriate plan and whether further medical review is needed.' },
    { id: 'faq-4', question: 'What should I wear?', answer: 'Choose comfortable clothing that lets you move easily and allows the affected area to be assessed when needed. Bring any relevant reports or previous rehabilitation notes you have.' },
    { id: 'faq-5', question: 'Can physiotherapy and chiropractic care work together?', answer: 'Depending on your goals and clinical needs, practitioners may coordinate different approaches. Your plan should be explained clearly and tailored to your circumstances.' },
    { id: 'faq-6', question: 'How many sessions will I need?', answer: 'This depends on your condition, goals, response to treatment and other individual factors. Your practitioner can discuss progress and review the plan with you over time.' },
  ],
};

export const FINAL_CTA_CONTENT = {
  headline: 'Ready to move with more confidence?',
  description: 'Start with a conversation about your goals, your movement and the support that may help you move forward.',
  primaryCta: 'Book an Appointment',
  secondaryCta: 'Contact the Clinic',
  image: {
    src: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=80',
    alt: 'Athlete running along a path during a training session',
    width: 800,
    height: 700,
  },
};

export const FOOTER_CONTENT = {
  explore: [
    { label: 'Services', href: '#services' },
    { label: 'Our approach', href: '#experience' },
    { label: 'Care team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
  ],
  services: [
    { label: 'Physiotherapy', href: '#services' },
    { label: 'Sports Injury Rehabilitation', href: '#services' },
    { label: 'Chiropractic Care', href: '#services' },
    { label: 'Mobility & Strength', href: '#services' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Accessibility', href: '#' },
    { label: 'Terms', href: '#' },
  ],
};
