import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Wrench, 
  UserCheck, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { PROGRAM_CONFIG } from '../data/content';
import heroMentorImage from '../assets/images/hero_mentor.png';

interface HeroSectionProps {
  onRegisterClick: () => void;
  onOpenChat: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRegisterClick, onOpenChat }) => {
  const steps = [
    { name: 'Learn', icon: GraduationCap, color: 'text-indigo-300' },
    { name: 'Map', icon: MapPin, color: 'text-indigo-300' },
    { name: 'Build', icon: Wrench, color: 'text-indigo-300' },
    { name: 'Coach', icon: UserCheck, color: 'text-indigo-300' },
    { name: 'Review', icon: Search, color: 'text-indigo-300' },
    { name: 'SOP Ready', icon: CheckCircle2, color: 'text-emerald-400 font-semibold' },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-28 px-4 sm:px-6 overflow-hidden" id="home">
      {/* Background ambient lighting */}
      <div className="ambient-glow top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
      <div className="ambient-glow bottom-0 right-10 opacity-30 w-96 h-96"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        {/* Left Column: Text & CTAs */}
        <div className="flex-1 space-y-6 text-left">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-[#c0c1ff] text-xs font-bold tracking-wider font-['Inter'] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            MOHAMAD IZZA PRESENTS
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans'] leading-[1.1]">
            <span className="gradient-text drop-shadow-sm">SOP SAMPAI JADI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-bold text-white max-w-xl font-['Plus_Jakarta_Sans'] tracking-tight">
            Bring Your Process. Build Your SOP.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#c7c4d7] max-w-xl leading-relaxed font-['Inter']">
            Online Coaching &amp; Mentoring Penyusunan SOP. Bawa proses nyata perusahaan Anda. Bangun SOP-nya dengan pendampingan intensif dari praktisi berpengalaman.
          </p>

          {/* Visual Step Workflow Pipeline */}
          <div className="py-2">
            <p className="text-xs uppercase tracking-wider text-indigo-200/60 font-semibold mb-3">
              Tahapan Pendampingan Praktis:
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-3 rounded-xl bg-[#151b2d]/80 border border-white/10 text-xs sm:text-sm text-[#c7c4d7] backdrop-blur-sm">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={step.name}>
                    <div className="flex items-center gap-1.5 py-1 px-2 rounded-lg bg-white/5 border border-white/5 hover:border-indigo-400/40 transition-colors">
                      <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${step.color}`} />
                      <span className={step.color}>{step.name}</span>
                    </div>
                    {idx < steps.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-indigo-400/40 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onRegisterClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/25 hover:from-orange-500 hover:to-amber-500 transition-all border border-orange-400/30 text-center active:scale-98 cursor-pointer"
              id="hero-btn-whatsapp"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Daftar via WhatsApp</span>
            </button>

            <div className="inline-flex items-center justify-between sm:justify-start gap-3 px-4 py-2.5 rounded-xl bg-[#0f172a]/80 border border-red-500/30 text-red-400 text-center shadow-sm">
              <div className="flex items-center gap-2 font-bold text-xs">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 animate-bounce" />
                <span>Only 06 Selected Participants</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-red-500/20 text-red-300 font-medium whitespace-nowrap">
                Sisa {PROGRAM_CONFIG.remainingSlots} dari {PROGRAM_CONFIG.totalSlots} slot
              </span>
            </div>
          </div>

          {/* Quick Info Micro Badges */}
          <div className="flex flex-wrap gap-4 text-xs text-[#908fa0] pt-1">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> 100% Real Case Company
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> 1-on-1 Personalized Review
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Lifetime Ready Format
            </span>
          </div>
        </div>

        {/* Right Column: Mentor Showcase Card */}
        <div className="w-full max-w-md mx-auto lg:max-w-none lg:w-[450px] shrink-0">
          <div className="glass-card p-2.5 rounded-2xl group relative shadow-2xl shadow-indigo-950/50 border border-white/10">
            <div className="w-full aspect-[4/5] rounded-xl bg-[#191f31] relative overflow-hidden border border-white/5">
              <img
                src={heroMentorImage}
                alt="Mohamad Izza - SOP Specialist & Corporate Coach"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Bottom Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090e1c] via-[#090e1c]/40 to-transparent pointer-events-none"></div>

              {/* Top status chip */}
              <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0c1324]/85 backdrop-blur-md border border-white/10 text-xs font-semibold text-emerald-400 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Batch Open - Limited Seats</span>
              </div>

              {/* Mentor Identity & Branding */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-center bg-[#0c1324]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/15 shadow-xl">
                <p className="text-lg sm:text-xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
                  Mohamad Izza
                </p>
                <p className="text-xs uppercase tracking-wider font-bold text-[#c0c1ff] mt-0.5">
                  SOP Specialist &amp; Corporate Coach
                </p>
                <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] font-semibold text-[#dce1fb]">
                  <span>HRDKU.COM</span>
                  <span className="text-indigo-400">•</span>
                  <span>Ex-Transretail</span>
                  <span className="text-indigo-400">•</span>
                  <span>Ex-First Media</span>
                </div>
              </div>
            </div>
            
            {/* Ambient Glowing border */}
            <div className="glow-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
