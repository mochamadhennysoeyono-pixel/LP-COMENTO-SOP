import React from 'react';
import { 
  UserCheck, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ArrowRight,
  Briefcase,
  Target
} from 'lucide-react';
import { AUDIENCE_ROLES } from '../data/content';

export const AudienceQualifierSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 relative bg-[#090e1c] border-b border-white/5" id="audience">
      <div className="ambient-glow top-1/2 left-1/3 opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-[#c0c1ff] text-xs font-bold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5" /> Kualifikasi Peserta
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans'] leading-tight">
            Untuk Siapa Program Ini?
          </h2>
          <p className="text-base sm:text-lg text-[#c7c4d7]">
            Program ini dirancang khusus untuk profesional &amp; bisnis yang <span className="text-white font-bold underline decoration-indigo-400">SIAP MEMBUAT SOP</span> — bukan sekadar ingin tahu teori.
          </p>
        </div>

        {/* Roles Grid + Qualifier Requirement Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 7 Target Roles */}
          <div className="lg:col-span-7 glass-card p-7 sm:p-8 rounded-2xl flex flex-col justify-between border border-white/10 shadow-xl">
            <div>
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-white/10">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/20 flex items-center justify-center text-[#c0c1ff]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
                    Peran &amp; Tanggung Jawab yang Tepat
                  </h3>
                  <p className="text-xs text-[#908fa0]">Siapa saja yang akan mendapat dampak langsung dari program ini:</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {AUDIENCE_ROLES.map((role, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-400/30 transition-colors text-xs font-semibold text-[#dce1fb]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Crucial Prerequisite Callout */}
            <div className="mt-6 p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-indigo-300 shrink-0 mt-0.5" />
              <div className="text-xs text-[#c7c4d7] leading-relaxed">
                <strong className="text-white">Syarat Utama:</strong> Peserta wajib memiliki proses nyata di perusahaan/tim yang ingin dibuatkan SOP, agar materi langsung dipraktikkan on-the-spot.
              </div>
            </div>
          </div>

          {/* Right Column: Comparison Card (Just Learning vs SOP Builder) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Siapa yang Cocok */}
            <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex-1 space-y-3">
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm uppercase tracking-wide">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Program Ini Sangat Cocok Jika:</span>
              </div>
              <ul className="space-y-2 text-xs text-[#c7c4d7] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Anda butuh SOP nyata yang siap operasional dalam 1 bulan ke depan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Ingin draft SOP Anda dibedah dan direview langsung 1-on-1 oleh praktisi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Ingin SOP yang usable di lapangan, bukan sekadar dokumen formalitas di arsip.</span>
                </li>
              </ul>
            </div>

            {/* Siapa yang Tidak Cocok */}
            <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/30 flex-1 space-y-3">
              <div className="flex items-center gap-2 text-red-300 font-bold text-sm uppercase tracking-wide">
                <XCircle className="w-5 h-5 text-red-400" />
                <span>Tidak Direkomendasikan Jika:</span>
              </div>
              <ul className="space-y-2 text-xs text-[#c7c4d7] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Hanya ingin menonton materi/ceramah umum tanpa mengerjakan tugas proses bisnis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Belum memiliki proses bisnis riil yang ingin distandardisasi.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 6.5: Pendekatan Solusi Callout */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-[#151b2d] to-indigo-950/60 border border-white/10 text-center space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#c0c1ff] font-extrabold">
            Pendekatan Solusi Hands-on
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] max-w-3xl mx-auto">
            Bukan training biasa. Ini program pendampingan step-by-step sampai dokumen SOP Anda terwujud.
          </h3>
          <p className="text-sm text-[#c7c4d7] max-w-2xl mx-auto leading-relaxed">
            Anda datang membawa proses nyata di perusahaan, memetakannya bersama mentor, menulis draftnya dengan template terstandar, lalu mereviewnya secara personal sampai siap dipakai.
          </p>
        </div>
      </div>
    </section>
  );
};
