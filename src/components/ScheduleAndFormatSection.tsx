import React from 'react';
import { 
  Calendar, 
  Clock, 
  Video, 
  Users, 
  FileCheck2, 
  UserCheck2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SCHEDULE_DATA } from '../data/content';

export const ScheduleAndFormatSection: React.FC = () => {
  const formatBadges = [
    {
      title: '100% Online',
      desc: 'Platform Zoom / Google Meet interaktif',
      icon: Video
    },
    {
      title: 'Small Group Intim',
      desc: 'Maksimum 6 peserta per batch',
      icon: Users
    },
    {
      title: '3 Pertemuan / 1 Bulan',
      desc: 'Jarak 1-2 minggu untuk menyelesaikan tugas',
      icon: Calendar
    },
    {
      title: 'Coaching + Mentoring',
      desc: 'Hands-on live problem solving proses riil',
      icon: UserCheck2
    },
    {
      title: '1-on-1 SOP Review',
      desc: 'Sesi privat 2 jam bedah dokumen tuntas',
      icon: FileCheck2
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 relative bg-[#070d1f] border-b border-white/5" id="timeline">
      <div className="ambient-glow top-1/3 right-10 opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-[#c0c1ff] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" /> Jadwal &amp; Format
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans'] leading-tight">
            Jadwal &amp; Timeline Pelaksanaan
          </h2>
          <p className="text-base sm:text-lg text-[#c7c4d7]">
            Dirancang berjarak agar peserta punya waktu untuk mengerjakan, bukan sekadar mendengarkan materi.
          </p>
        </div>

        {/* Schedule Timeline Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SCHEDULE_DATA.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-indigo-400/40 transition-all shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-widest font-extrabold text-[#c0c1ff] bg-indigo-500/15 px-3 py-1 rounded-lg border border-indigo-400/30">
                    {item.sesi}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-[#908fa0]">
                    <Clock className="w-3 h-3 text-indigo-400" />
                    <span>{item.waktu}</span>
                  </div>
                </div>

                <p className="text-sm font-bold text-emerald-400 mb-1">
                  {item.tanggal}
                </p>

                <h3 className="text-xl font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                  {item.fokus}
                </h3>

                <p className="text-xs text-[#c7c4d7] leading-relaxed">
                  {item.keterangan}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-indigo-300/80 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>
                  {idx === 0
                    ? 'Output: SOP Mapping & Scope'
                    : idx === 1
                    ? 'Output: Draft SOP Perusahaan'
                    : 'Output: Final SOP Siap Pakai'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section 6.9: Format Program Highlight Badges */}
        <div className="glass-card p-8 rounded-2xl border border-white/10 shadow-2xl">
          <div className="text-center mb-8 space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Format Program &amp; Fasilitas Pelaksanaan
            </h3>
            <p className="text-xs sm:text-sm text-[#908fa0]">
              Semua yang Anda butuhkan untuk menyelesaikan dokumen SOP dengan standar korporat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {formatBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-400/30 transition-all flex flex-col items-center text-center space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-[#c0c1ff] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-white">{badge.title}</h4>
                  <p className="text-[11px] text-[#c7c4d7] leading-snug">{badge.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
