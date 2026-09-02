import React from 'react';
import { AlertTriangle, Users, Lock, Check } from 'lucide-react';
import { PROGRAM_CONFIG } from '../data/content';

export const ScarcityBanner: React.FC = () => {
  const totalSlots = PROGRAM_CONFIG.totalSlots;
  const remainingSlots = PROGRAM_CONFIG.remainingSlots;
  const takenSlots = totalSlots - remainingSlots;

  return (
    <section className="py-14 bg-gradient-to-b from-[#1c0f18]/60 via-[#180d16]/80 to-[#1c0f18]/60 border-y border-red-500/20 text-center px-4 sm:px-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-500/5 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center relative z-10">
        {/* Scarcity Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 font-bold text-xs tracking-wider uppercase mb-4 shadow-sm">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <span>MAXIMUM 6 PARTICIPANTS</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-['Plus_Jakarta_Sans']">
          Bukan gimmick.
        </h2>

        {/* Explanation */}
        <p className="text-sm sm:text-base text-[#c7c4d7] leading-relaxed mb-6 max-w-2xl font-['Inter']">
          Program ini butuh coaching mendalam, bedah assignment, review feedback, dan sesi privat 1-on-1 yang tidak bisa diberikan ke banyak orang sekaligus. Jumlah peserta dibatasi secara ketat agar setiap peserta mendapatkan pendampingan yang intensif dan tuntas.
        </p>

        {/* Slot tracker interactive cards */}
        <div className="bg-[#0f172a]/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-xl max-w-md w-full">
          <div className="flex items-center justify-between text-xs font-bold text-white mb-3">
            <span className="flex items-center gap-1.5 text-red-400">
              <Users className="w-4 h-4" /> Status Ketersediaan Kursi
            </span>
            <span className="text-amber-300">
              Sisa {remainingSlots} dari {totalSlots} slot
            </span>
          </div>

          {/* Slots grid representation */}
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: totalSlots }).map((_, i) => {
              const isTaken = i < takenSlots;
              return (
                <div
                  key={i}
                  className={`py-2 px-1 rounded-lg border text-center text-xs font-bold flex flex-col items-center justify-center transition-all ${
                    isTaken
                      ? 'bg-red-950/40 border-red-500/30 text-red-400/80 opacity-60'
                      : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300 ring-1 ring-emerald-500/20 animate-pulse'
                  }`}
                  title={isTaken ? `Slot ${i + 1} Terisi` : `Slot ${i + 1} Masih Tersedia`}
                >
                  <span className="text-[10px] mb-0.5">#{i + 1}</span>
                  {isTaken ? (
                    <Lock className="w-3.5 h-3.5 text-red-400" />
                  ) : (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-[11px] text-[#908fa0] mt-3">
            Pendaftaran otomatis ditutup ketika seluruh 6 slot terisi penuh.
          </p>
        </div>
      </div>
    </section>
  );
};
