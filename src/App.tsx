import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { HeroSection } from './components/HeroSection';
import { SocialProofBar } from './components/SocialProofBar';
import { ProblemSection } from './components/ProblemSection';
import { AudienceQualifierSection } from './components/AudienceQualifierSection';
import { ProgramStructure } from './components/ProgramStructure';
import { ScheduleAndFormatSection } from './components/ScheduleAndFormatSection';
import { ValueAndDifferentiationSection } from './components/ValueAndDifferentiationSection';
import { ScarcityBanner } from './components/ScarcityBanner';
import { PricingRegistration } from './components/PricingRegistration';
import { MentorSection } from './components/MentorSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { WhatsAppChatModal } from './components/WhatsAppChatModal';
import { TermsModal } from './components/TermsModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isChatModalOpen, setIsChatModalOpen] = useState<boolean>(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'curriculum' | 'privacy' | 'terms' | null>(null);

  // Scrollspy to detect currently visible section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'problems', 'audience', 'schedule', 'timeline', 'value-differ', 'investasi', 'mentor', 'faq'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRegisterClick = () => {
    const el = document.getElementById('investasi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c1324] text-[#dce1fb] relative overflow-x-hidden pb-16 md:pb-0">
      {/* Top Fixed App Bar */}
      <Navbar
        onOpenChat={() => setIsChatModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* 6.1 Hero Section */}
        <HeroSection
          onRegisterClick={handleRegisterClick}
          onOpenChat={() => setIsChatModalOpen(true)}
        />

        {/* 6.2 Social Proof Bar */}
        <SocialProofBar />

        {/* 6.3 Problem Section */}
        <ProblemSection />

        {/* 6.4 & 6.5 Target Audience Qualifier & Solution Approach */}
        <AudienceQualifierSection />

        {/* 6.6 Program Structure (3 Sesi) */}
        <ProgramStructure />

        {/* 6.8 & 6.9 Jadwal & Timeline + Format Program */}
        <ScheduleAndFormatSection />

        {/* 6.11 & 6.12 Value Deliverables Checklist & Differentiation Pillars */}
        <ValueAndDifferentiationSection />

        {/* 6.7 Urgensi & Scarcity (Max 6 Peserta, Sisa 3 Slot) */}
        <ScarcityBanner />

        {/* 6.13 Paket & Investasi + 7.1 Interactive WhatsApp Registration Form */}
        <PricingRegistration />

        {/* 6.10 Mentor Credentials & Profile */}
        <MentorSection />

        {/* 6.14 FAQ Accordion */}
        <FaqSection onOpenChat={() => setIsChatModalOpen(true)} />
      </main>

      {/* 6.15 Footer & Legal Modals */}
      <Footer onOpenModal={(type) => setActiveLegalModal(type)} />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeSection={activeSection} />

      {/* Floating WhatsApp Action Button (Desktop & Tablet) */}
      <button
        onClick={() => setIsChatModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-2xl shadow-emerald-500/40 border border-emerald-400/40 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        id="floating-wa-btn"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-200 animate-ping"></span>
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span className="tracking-wide">Tanya Coach / Admin</span>
      </button>

      {/* WhatsApp Chat Inquiry Modal */}
      <WhatsAppChatModal
        isOpen={isChatModalOpen}
        onClose={() => setIsChatModalOpen(false)}
      />

      {/* Legal & Curriculum Info Modal */}
      <TermsModal
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
