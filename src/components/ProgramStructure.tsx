import React, { useState } from 'react';
import { Check, Clock, Calendar, Sparkles, FileText, ChevronRight } from 'lucide-react';
import { SESSIONS_DATA } from '../data/content';

export const ProgramStructure: React.FC = () => {
  const [activeSessionIdx, setActiveSessionIdx] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 relative bg-[#0c1324]" id="schedule">
      <div className="ambient-glow top-1/3 right-1/4 opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-[#c0c1ff] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" /> Roadmap Pendampingan
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans'] tracking-tight">
            3 Pertemuan. 1 Bulan. <br className="hidden sm:inline" />
            <span className="gradient-text">1 SOP Dibangun Sampai Jadi.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#c7c4d7] max-w-2xl mx-auto">
            Scope SOP disesuaikan dengan kebutuhan dan kesiapan masing-masing peserta. Kami tidak mengajarkan teori kosong, kami mendampingi pembuatan dokumen Anda.
          </p>
        </div>

        {/* 3 Session Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SESSIONS_DATA.map((session, idx) => (
            <div
              key={session.sessionNumber}
              className={`glass-card p-7 sm:p-8 rounded-2xl flex flex-col justify-between border-t-4 transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${
                idx === 0
                  ? 'border-t-[#c0c1ff] hover:shadow-indigo-500/10'
                  : idx === 1
                  ? 'border-t-[#ec6a06] hover:shadow-orange-500/10'
                  : 'border-t-[#22c55e] hover:shadow-emerald-500/10'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs uppercase tracking-widest font-extrabold ${session.colorBadge}`}>
                    {session.sessionNumber}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#908fa0] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                    <Clock className="w-3 h-3 text-indigo-400" />
                    {session.duration}
                  </span>
                </div>

                {/* Session Title */}
                <h3 className="text-2xl font-extrabold text-white mb-5 font-['Plus_Jakarta_Sans']">
                  {session.title}
                </h3>

                {/* Checklist items */}
                <ul className="space-y-3.5 text-[#c7c4d7] mb-8 text-sm">
                  {session.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                        <Check className="w-3 h-3 text-indigo-300" strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Output Box */}
              <div className="bg-[#151b2d]/90 p-4 rounded-xl border border-white/10 mt-auto">
                <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-1.5 uppercase tracking-wide">
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{session.outputTitle}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#c0c1ff] font-medium leading-relaxed">
                  {session.outputDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Roadmap */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/50 via-[#151b2d] to-indigo-950/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Butuh konsultasi scope proses perusahaan Anda?</p>
              <p className="text-xs text-[#c7c4d7]">Diskusikan dulu proses yang ingin dibakukan sebelum sesi dimulai.</p>
            </div>
          </div>
          <a
            href="#investasi"
            className="text-xs font-bold text-[#c0c1ff] hover:text-white flex items-center gap-1 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg border border-white/10 transition-colors whitespace-nowrap"
          >
            <span>Pilih Paket &amp; Konsultasi</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
