import React from 'react';
import { Home, Calendar, CreditCard, UserCheck, HelpCircle } from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeSection }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'investasi', label: 'Pricing', icon: CreditCard },
    { id: 'mentor', label: 'Mentor', icon: UserCheck },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-3 py-2.5 md:hidden bg-[#191f31]/95 border-t border-white/10 backdrop-blur-xl shadow-2xl rounded-t-2xl">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 cursor-pointer ${
              isActive
                ? 'text-[#c0c1ff] font-bold bg-[#c0c1ff]/15 scale-105'
                : 'text-[#c7c4d7] hover:text-white'
            }`}
            id={`mobile-nav-${item.id}`}
          >
            <Icon className="w-5 h-5 mb-0.5" />
            <span className="text-[11px] font-medium tracking-tight">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
