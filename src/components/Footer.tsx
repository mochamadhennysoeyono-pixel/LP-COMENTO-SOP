import React from 'react';
import { Layers, ArrowUp, AlertTriangle } from 'lucide-react';
import { PROGRAM_CONFIG } from '../data/content';

interface FooterProps {
  onOpenModal: (type: 'curriculum' | 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070d1f] border-t border-white/10 mt-12 relative overflow-hidden">
      <div className="ambient-glow bottom-0 left-1/2 -translate-x-1/2 opacity-15"></div>

      <div className="w-full py-16 px-6 sm:px-8 flex flex-col md:flex-row justify-between items-start gap-10 max-w-6xl mx-auto relative z-10">
        {/* Left Column: Brand & Tagline */}
        <div className="flex flex-col gap-3 max-w-md">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-[#c0c1ff]">
              <Layers className="w-4 h-4" />
            </div>
            <span className="text-xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              SOP Sampai Jadi
            </span>
          </div>

          <p className="text-white font-bold text-base sm:text-lg">
            Jangan cuma belajar membuat SOP. Buat SOP-nya.
          </p>

          <div className="inline-flex items-center gap-2 bg-red-500/15 text-red-400 border border-red-500/30 px-3.5 py-1 rounded-full text-xs font-bold w-fit">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Only 06 Selected Participants — Sisa {PROGRAM_CONFIG.remainingSlots} slot</span>
          </div>

          <p className="text-xs text-[#908fa0] leading-relaxed pt-2">
            © {new Date().getFullYear()} SOP Sampai Jadi. High-End Coaching for High-Growth Teams by Mohamad Izza.
          </p>
        </div>

        {/* Right Navigation & Links */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 text-xs font-semibold uppercase tracking-wider font-['Inter']">
          <div className="flex flex-col gap-3">
            <span className="text-white text-[11px] font-extrabold text-[#c0c1ff] pb-1 border-b border-white/10">
              Navigasi
            </span>
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-[#c7c4d7] hover:text-white transition-colors cursor-pointer"
            >
              The Program
            </button>
            <button
              onClick={() => onOpenModal('curriculum')}
              className="text-left text-[#c7c4d7] hover:text-white transition-colors cursor-pointer"
            >
              Curriculum Details
            </button>
            <button
              onClick={() => scrollToSection('investasi')}
              className="text-left text-[#c7c4d7] hover:text-white transition-colors cursor-pointer"
            >
              Pricing &amp; Slots
            </button>
            <button
              onClick={() => scrollToSection('mentor')}
              className="text-left text-[#c7c4d7] hover:text-white transition-colors cursor-pointer"
            >
              Mentor Profile
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-white text-[11px] font-extrabold text-[#c0c1ff] pb-1 border-b border-white/10">
              Legal &amp; Privacy
            </span>
            <button
              onClick={() => onOpenModal('privacy')}
              className="text-left text-[#c7c4d7] hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenModal('terms')}
              className="text-left text-[#c7c4d7] hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-white pt-2 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
