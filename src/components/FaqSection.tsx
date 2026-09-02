import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/content';

interface FaqSectionProps {
  onOpenChat: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenChat }) => {
  // Keep first open by default
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFaq = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 relative bg-[#0c1324]" id="faq">
      <div className="ambient-glow top-1/2 left-1/3 opacity-15"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-[#c0c1ff] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Tanya Jawab
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#c7c4d7]">
            Pertanyaan umum yang sering ditanyakan seputar pelaksanaan program SOP Sampai Jadi.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 text-left">
          {FAQ_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-indigo-400/40 bg-[#151b2d]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans'] leading-snug">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-indigo-500/20 text-[#c0c1ff]' : 'text-[#908fa0]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#c7c4d7] leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-[#191f31] to-indigo-950/40 border border-white/10 text-center space-y-3">
          <p className="text-sm font-bold text-white">Masih ada pertanyaan lain yang belum terjawab?</p>
          <p className="text-xs text-[#c7c4d7] max-w-md mx-auto">
            Tim kami siap membantu menjawab pertanyaan teknis maupun jadwal yang sesuai untuk perusahaan Anda.
          </p>
          <button
            onClick={onOpenChat}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#c0c1ff]" />
            <span>Tanya Admin via WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
