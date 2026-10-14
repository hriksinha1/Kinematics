# Kinematics — Physiotherapy & Sports Rehabilitation

A responsive landing page for Kinematics, focused on physiotherapy, sports injury rehabilitation and chiropractic care.

## Tech Stack
- **React 19** (functional components and hooks)
- **Vite** (development and production bundling)
- **Tailwind CSS v4** (utilities and design tokens)
- **Lucide React** (interface icons)
- **Google Fonts** (Bebas Neue display headings and Inter body/interface text)

## Content and configuration

Content is centralised to simplify future updates.

- `src/data/siteConfig.ts`: brand, booking link, phone, clinic address, opening hours and navigation.
- `src/data/content.ts`: hero, benefits, services, approach, team, rehabilitation panel, visit section, FAQs and final CTA.

**Before launch:** replace the marked placeholder contact details, booking destination, clinic hours, team names and credentials with verified information. Ensure all clinical claims accurately reflect the services offered.

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```

The Vite production output is generated in `dist/` for deployment on Vercel.
