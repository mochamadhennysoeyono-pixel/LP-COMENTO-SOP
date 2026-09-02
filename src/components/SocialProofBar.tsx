import React from 'react';
import { Building, Award, ShieldCheck, Briefcase } from 'lucide-react';

export const SocialProofBar: React.FC = () => {
  const corporateBrands = [
    { name: 'Transretail Group', sub: 'Transmart & Carrefour', icon: Building },
    { name: 'First Media Group', sub: 'BOLT! 4G LTE, First Media, Linknet', icon: Briefcase },
    { name: 'Topsell Group', sub: 'Retail & Distribution Network', icon: Award },
    { name: 'HRDKU.COM', sub: 'PT. HRDKU Reksa Talenta', icon: ShieldCheck }
  ];

  return (
    <div className="border-y border-white/5 bg-[#0a0f1d] py-8 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left shrink-0">
          <p className="text-[11px] uppercase tracking-widest text-[#908fa0] font-bold">
            Metode &amp; Pengalaman Teruji di:
          </p>
          <p className="text-sm font-extrabold text-white font-['Plus_Jakarta_Sans']">
            Multi-Industry Corporate Ecosystem
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full md:w-auto">
          {corporateBrands.map((brand, idx) => {
            const Icon = brand.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-400/30 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-500/15 flex items-center justify-center text-[#c0c1ff] shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white leading-tight">{brand.name}</p>
                  <p className="text-[10px] text-[#908fa0] truncate max-w-[130px]">{brand.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
