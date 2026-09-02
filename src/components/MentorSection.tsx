import React from 'react';
import { Award, Briefcase, GraduationCap, Quote, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { MENTOR_DATA } from '../data/content';
import mentorProfileImage from '../assets/images/mentor_img.png';

export const MentorSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#0e1529] relative border-y border-white/5" id="mentor">
      <div className="ambient-glow top-1/2 right-10 opacity-20"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14 relative z-10">
        {/* Mentor Image Card with Glow & Badge */}
        <div className="w-full max-w-sm lg:w-[360px] shrink-0 text-center">
          <div className="glass-card p-3 rounded-2xl relative shadow-2xl shadow-indigo-950/50">
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#151b2d] relative border border-white/10">
              <img
                src={mentorProfileImage}
                alt={MENTOR_DATA.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1324] via-transparent to-transparent"></div>
              
              <div className="absolute bottom-3 inset-x-3 bg-[#0f172a]/90 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center">
                <p className="text-sm font-bold text-white font-['Plus_Jakarta_Sans']">
                  Mohamad Izza
                </p>
                <p className="text-[11px] text-[#c0c1ff] font-semibold">
                  SOP Specialist &amp; Corporate Coach
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mentor Content */}
        <div className="flex-1 space-y-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-[#c0c1ff] text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" /> Profil Mentor &amp; Praktisi
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              {MENTOR_DATA.name}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#c0c1ff] mt-1">
              {MENTOR_DATA.currentRole}
            </p>
          </div>

          {/* Mentor Quote Box */}
          <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20 text-[#c0c1ff] text-sm sm:text-base leading-relaxed flex items-start gap-3">
            <Quote className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <p className="italic font-medium">{MENTOR_DATA.quote}</p>
          </div>

          {/* Education */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#dce1fb] bg-white/[0.03] p-3 rounded-xl border border-white/5">
            <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
            <span><strong>Pendidikan:</strong> {MENTOR_DATA.education}</span>
          </div>

          {/* Corporate Track Records */}
          <div className="space-y-3 pt-2">
            <p className="text-xs uppercase tracking-wider text-[#908fa0] font-bold flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              Track Record &amp; Pengalaman Korporat:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {MENTOR_DATA.experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#c7c4d7]"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{exp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3 pt-2">
            <p className="text-xs uppercase tracking-wider text-[#908fa0] font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              Sertifikasi Profesional:
            </p>
            <div className="flex flex-wrap gap-2">
              {MENTOR_DATA.certifications.map((cert, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#c7c4d7] hover:border-indigo-400/40 hover:text-white transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

