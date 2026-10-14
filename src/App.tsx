import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { BenefitsStrip } from './sections/BenefitsStrip';
import { Services } from './sections/Services';
import { PatientExperience } from './sections/PatientExperience';
import { Team } from './sections/Team';
import { Technology } from './sections/Technology';
import { Visit } from './sections/Visit';
import { Faq } from './sections/Faq';
import { FinalCta } from './sections/FinalCta';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#151923] flex flex-col font-sans selection:bg-[#EAF1FF] selection:text-[#2868F5]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#2868F5] focus:text-white focus:font-medium focus:rounded-md focus:shadow-md"
      >
        Skip to main content
      </a>

      {/* Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <Hero />
        <BenefitsStrip />
        <Services />
        <PatientExperience />
        <Team />
        <Technology />
        <Visit />
        <Faq />
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
