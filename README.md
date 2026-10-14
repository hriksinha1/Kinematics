# Aurora Dental — Modern Dental Clinic Landing Page

A responsive, accessible, high-performance landing page recreating the "Aurora Dental" reference design in Toronto.

## Tech Stack
- **React 19** (Functional Components + Hooks)
- **Vite** (Fast dev & production bundling)
- **Tailwind CSS v4** (Utility-first styling with custom CSS variables & theme tokens)
- **Lucide React** (Minimal, clean SVG icons)
- **Google Fonts** ("Bebas Neue" for display headings, "Inter" for UI & text)

---

## How to Customize Content

All editable content is centralized in two data files within `src/data/`:

### 1. Brand, Phone, Booking URL, Address & Hours (`src/data/siteConfig.ts`)
- **Booking URL**: Change `BOOKING_URL` to your online scheduling portal (e.g. Jane, NexHealth, Dentrix).
- **Telephone**: Update `PHONE_DISPLAY` (formatted number) and `PHONE_TEL` (`tel:` link).
- **Address & Google Maps**: Edit `CLINIC_ADDRESS` with your clinic name, street, suite, city, and postal code. The Google Maps link is generated dynamically.
- **Hours**: Adjust `CLINIC_HOURS` array for weekdays, Saturdays, and Sundays.
- **Nav Links**: Customize header and mobile menu anchor links in `NAV_LINKS`.

### 2. Services, Team, FAQs, and Sections (`src/data/content.ts`)
- **Hero & Benefits Strip**: Edit headlines, subtext, and the 4 claims in `BENEFITS_CONTENT`.
- **Services**: Update `SERVICES_CONTENT.featured` (General & Preventive card) and `SERVICES_CONTENT.cards` (Cosmetic Dentistry, Implants & Restorations, Clear Aligners).
- **Patient Experience**: Modify the 4 numbered steps in `EXPERIENCE_CONTENT.points`.
- **Dental Team**: Update `TEAM_CONTENT.members` with dentist names, roles, credentials (`DDS`, `RDH`, etc.), and photo paths.
- **Technology Panel**: Update `TECHNOLOGY_CONTENT.rows` with clinic equipment specifications (Scanning, Imaging, Planning).
- **Visit Card & Accessibility**: Update `VISIT_CONTENT.bottomCards` for parking, transit, and new patient onboarding info.
- **FAQ Accordion**: Edit questions and answers in `FAQ_CONTENT.items`.
- **Final CTA**: Customize the call-to-action headline, description, and button text in `FINAL_CTA_CONTENT`.

---

## Development & Build Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run TypeScript linter
npm run lint

# Build for production (outputs to dist/)
npm run build
```
