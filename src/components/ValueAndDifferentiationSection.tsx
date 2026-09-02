import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  X, 
  Check, 
  ShieldAlert, 
  Layers, 
  Award,
  ArrowRight,
  Flame
} from 'lucide-react';
import { VALUE_DELIVERABLES, DIFFERENTIATION_PILLARS } from '../data/content';

export const ValueAndDifferentiationSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 relative bg-[#0a0f21] border-b border-white/5" id="value-differ">
      <div className="ambient-glow top-1/2 left-1/4 opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-20">
        {/* ========================================================
            SECTION 6.11: VALUE / APA YANG DIDAPAT (9 DELIVERABLES)
           ======================================================== */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Tangible Deliverables
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Apa yang Anda Dapatkan?
            </h2>
            <p className="text-base sm:text-lg text-[#c7c4d7]">
              9 komponen kunci untuk memastikan hasil akhir bukan sekadar wacana.
            </p>
          </div>

          {/* 9 Deliverables Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUE_DELIVERABLES.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-xl border border-white/10 hover:border-emerald-400/40 transition-all flex items-center gap-3.5 shadow-lg group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-extrabold text-[#908fa0] uppercase tracking-wider block mb-0.5">
                    Item #{idx + 1}
                  </span>
                  <p className="text-sm font-bold text-white leading-snug">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Highlight Statement */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-[#151b2d] to-emerald-950/40 border border-emerald-500/30 text-center">
            <p className="text-sm sm:text-base font-extrabold text-white font-['Plus_Jakarta_Sans']">
              🎯 Inti Program: <span className="text-emerald-300">Anda membuat SOP Anda sendiri</span> dengan pendampingan langsung sampai siap dipakai.
            </p>
          </div>
        </div>

        {/* ========================================================
            SECTION 6.12: DIFERENSIASI (TRAINING BIASA VS COMENTO)
           ======================================================== */}
        <div className="space-y-12 pt-8 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" /> Mengapa Beda?
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Training Biasa vs. SOP Sampai Jadi
            </h2>
            <p className="text-base sm:text-lg text-[#c7c4d7]">
              Kenapa metode coaching &amp; mentoring ini jauh lebih efektif menghasilkan SOP operasional:
            </p>
          </div>

          {/* Side-by-side comparison table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Training Biasa */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#140c14]/80 border border-red-500/20 shadow-xl space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-red-500/20">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center">
                  <X className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-300 font-['Plus_Jakarta_Sans']">
                    Training Biasa
                  </h3>
                  <p className="text-xs text-[#908fa0]">Metode Klasik / Kelas Massal</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-[#c7c4d7]">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0 font-bold text-xs">
                    ✕
                  </div>
                  <div>
                    <strong className="text-white">Watch &amp; Listen:</strong> Pasif mendengarkan slide teori yang umum selama berjam-jam.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0 font-bold text-xs">
                    ✕
                  </div>
                  <div>
                    <strong className="text-white">Take Notes:</strong> Mencatat konsep tanpa sempat membedah proses riil unit bisnis sendiri.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0 font-bold text-xs">
                    ✕
                  </div>
                  <div>
                    <strong className="text-white">Go Home:</strong> Pulang hanya membawa sertifikat &amp; template kosong yang tidak pernah diisi.
                  </div>
                </li>
              </ul>
            </div>

            {/* SOP Sampai Jadi */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-indigo-950/40 via-[#151b2d] to-indigo-950/40 border-2 border-indigo-400/50 shadow-2xl shadow-indigo-950/50 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-500 to-amber-500 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                Recommended
              </div>

              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/30 text-[#c0c1ff] flex items-center justify-center">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                    SOP Sampai Jadi
                  </h3>
                  <p className="text-xs text-[#c0c1ff]">Mentoring Intensif Small Group</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-[#c7c4d7]">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white">Bring Your Process:</strong> Bawa alur kerja perusahaan yang nyata untuk langsung dipetakan.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white">Build &amp; Get Coached:</strong> Menyusun dokumen SOP langkah demi langkah dengan feedback live.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white">Reviewed Until Ready:</strong> 1-on-1 privat review 1,5 jam per perusahaan memastikan dokumen lolos uji operasional.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {DIFFERENTIATION_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-xl border border-white/10 hover:border-indigo-400/40 transition-all space-y-2 text-left"
              >
                <div className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#c0c1ff] bg-indigo-500/15 px-2.5 py-0.5 rounded-md border border-indigo-400/30">
                  {pillar.title}
                </div>
                <p className="text-xs font-semibold text-amber-300">{pillar.subtitle}</p>
                <p className="text-xs text-[#c7c4d7] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
