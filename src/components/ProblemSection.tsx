import React from 'react';
import { HelpCircle, ShieldAlert, MessagesSquare, CheckCircle, ArrowDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 relative bg-[#070d1f] border-y border-white/5" id="problems">
      {/* Subtle background glow */}
      <div className="ambient-glow top-1/2 left-1/4 -translate-y-1/2 opacity-25"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            Realita Lapangan
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans'] leading-tight">
            Masalah utama saat membuat SOP bukan karena gak tahu teorinya, tapi...
          </h2>
          <p className="text-sm sm:text-base text-[#c7c4d7]">
            Banyak perusahaan sudah berkali-kali ikut training, tapi SOP tetap berhenti di folder komputer dan tidak pernah berjalan di lantai operasi.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="glass-card p-7 sm:p-8 rounded-2xl group hover:-translate-y-2 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/40">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/25 transition-all text-[#c0c1ff]">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Bingung mulai dari mana?
              </h3>
              <p className="text-sm text-[#c7c4d7] leading-relaxed mb-4">
                Proses? Flow? PIC? Dokumen? Format? Urutan? Terlalu banyak variabel yang membingungkan saat pertama kali memetakan alur kerja.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-indigo-300/80 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              Solusi: Pemetaan bertahap di Sesi 1
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-7 sm:p-8 rounded-2xl group hover:-translate-y-2 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/40">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/25 transition-all text-[#c0c1ff]">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ragu SOP-nya benar?
              </h3>
              <p className="text-sm text-[#c7c4d7] leading-relaxed mb-4">
                PIC &amp; Responsibility jelas? Flow proses tepat? Input &amp; Output sesuai? Dokumen pendukung lengkap? Control point ada untuk cegah fraud/error?
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-indigo-300/80 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              Solusi: Audit alur &amp; control point di Sesi 2
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-7 sm:p-8 rounded-2xl group hover:-translate-y-2 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/40">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/25 transition-all text-[#c0c1ff]">
                <MessagesSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Punya SOP, tapi kerja masih "katanya"?
              </h3>
              <p className="text-xs text-amber-300/90 italic bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20 mb-3">
                "Biasanya saya begini", "Katanya begini", "Dulu diajarinya begitu"
              </p>
              <p className="text-sm text-[#c7c4d7] leading-relaxed">
                SOP ada di dokumen, tapi praktiknya beda-beda. Mungkin SOP-nya belum dibangun dari proses nyata lapangan.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-indigo-300/80 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              Solusi: 1-on-1 Review penyesuaian lapangan di Sesi 3
            </div>
          </div>
        </div>

        {/* Transition callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Pendekatan praktis kami memastikan SOP Anda langsung terpakai, bukan pajangan.</span>
            <ArrowDown className="w-3.5 h-3.5 text-indigo-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
