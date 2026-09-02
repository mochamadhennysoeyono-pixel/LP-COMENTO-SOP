import React from 'react';
import { Layers, MessageSquare, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenChat: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat, activeSection }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 inset-x-4 rounded-full bg-[#0f172a]/70 backdrop-blur-md border border-white/10 shadow-lg shadow-indigo-500/5 flex justify-between items-center px-6 py-3 max-w-6xl mx-auto z-50 transition-all">
      {/* Brand */}
      <button 
        onClick={() => scrollToSection('home')} 
        className="flex items-center gap-2.5 text-left group focus:outline-none"
        id="navbar-brand-button"
      >
        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-[#c0c1ff] group-hover:scale-105 transition-transform">
          <Layers className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-base md:text-lg font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans']">
            COMENTO SOP
          </span>
        </div>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-semibold font-['Inter']">
        <button
          onClick={() => scrollToSection('home')}
          className={`transition-colors cursor-pointer hover:text-white ${
            activeSection === 'home' ? 'text-[#c0c1ff] font-bold' : 'text-[#c7c4d7]'
          }`}
          id="nav-link-home"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('problems')}
          className={`transition-colors cursor-pointer hover:text-white ${
            activeSection === 'problems' ? 'text-[#c0c1ff] font-bold' : 'text-[#c7c4d7]'
          }`}
          id="nav-link-problems"
        >
          Masalah
        </button>
        <button
          onClick={() => scrollToSection('audience')}
          className={`transition-colors cursor-pointer hover:text-white ${
            activeSection === 'audience' ? 'text-[#c0c1ff] font-bold' : 'text-[#c7c4d7]'
          }`}
          id="nav-link-audience"
        >
          Peserta
        </button>
        <button
          onClick={() => scrollToSection('schedule')}
          className={`transition-colors cursor-pointer hover:text-white ${
            activeSection === 'schedule' ? 'text-[#c0c1ff] font-bold' : 'text-[#c7c4d7]'
          }`}
          id="nav-link-schedule"
        >
          Roadmap
        </button>
        <button
          onClick={() => scrollToSection('timeline')}
          className={`transition-colors cursor-pointer hover:text-white ${
            activeSection === 'timeline' ? 'text-[#c0c1ff] font-bold' : 'text-[#c7c4d7]'
          }`}
          id="nav-link-timeline"
        >
          Jadwal
        </button>
        <button
          onClick={() => scrollToSection('value-differ')}
          className={`transition-colors cursor-pointer hover:text-white ${
            activeSection === 'value-differ' ? 'text-[#c0c1ff] font-bold' : 'text-[#c7c4d7]'
          }`}
          id="nav-link-value"
        >
          Benefit
        </button>
        <button
          onClick={() => scrollToSection('investasi')}
          className={`transition-colors cursor-pointer hover:text-white ${
            activeSection === 'investasi' ? 'text-[#c0c1ff] font-bold' : 'text-[#c7c4d7]'
          }`}
          id="nav-link-pricing"
        >
          Pricing
        </button>
        <button
          onClick={() => scrollToSection('mentor')}
          className={`transition-colors cursor-pointer hover:text-white ${
            activeSection === 'mentor' ? 'text-[#c0c1ff] font-bold' : 'text-[#c7c4d7]'
          }`}
          id="nav-link-mentor"
        >
          Mentor
        </button>
        <button
          onClick={() => scrollToSection('faq')}
          className={`transition-colors cursor-pointer hover:text-white ${
            activeSection === 'faq' ? 'text-[#c0c1ff] font-bold' : 'text-[#c7c4d7]'
          }`}
          id="nav-link-faq"
        >
          FAQ
        </button>
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenChat}
          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 active:scale-95 transition-all border border-white/10 rounded-full px-4 py-2 text-xs font-semibold text-white cursor-pointer"
          id="btn-chat-admin-header"
        >
          <span>Chat Admin</span>
          <MessageSquare className="w-3.5 h-3.5 text-[#c0c1ff]" />
        </button>
        <button
          onClick={() => scrollToSection('investasi')}
          className="hidden lg:inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-full px-4 py-2 text-xs font-bold shadow-lg shadow-orange-500/20 active:scale-95 transition-all cursor-pointer"
          id="btn-daftar-header"
        >
          <span>Daftar</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
};
