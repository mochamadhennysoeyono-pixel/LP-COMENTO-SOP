import React, { useState } from 'react';
import { 
  Check, 
  User, 
  Users, 
  Plus, 
  Trash2, 
  MessageCircle, 
  Sparkles, 
  Building2, 
  Phone, 
  FileText,
  Copy,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { PackageType, Participant } from '../types';
import { PROGRAM_CONFIG } from '../data/content';

export const PricingRegistration: React.FC = () => {
  const [packageType, setPackageType] = useState<PackageType>('individual');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [sopFocus, setSopFocus] = useState('');
  const [copied, setCopied] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  // Participants list for Team mode
  const [participants, setParticipants] = useState<Participant[]>([
    { id: '1', name: '' },
    { id: '2', name: '' },
  ]);

  // Single participant name for Individual mode
  const [singleParticipantName, setSingleParticipantName] = useState('');

  const handlePackageChange = (type: PackageType) => {
    setPackageType(type);
    if (type === 'team' && participants.length < 2) {
      setParticipants([
        { id: '1', name: singleParticipantName || '' },
        { id: '2', name: '' },
      ]);
    }
  };

  const addParticipant = () => {
    if (participants.length >= 6) return;
    const newId = (participants.length + 1).toString();
    setParticipants([...participants, { id: newId, name: '' }]);
  };

  const removeParticipant = (index: number) => {
    if (participants.length <= 2) return;
    const updated = participants.filter((_, i) => i !== index);
    setParticipants(updated);
  };

  const updateParticipantName = (index: number, name: string) => {
    const updated = [...participants];
    updated[index].name = name;
    setParticipants(updated);
  };

  // Calculation
  const totalAmount = packageType === 'individual'
    ? PROGRAM_CONFIG.pricing.individual
    : participants.length * PROGRAM_CONFIG.pricing.teamPerPerson;

  const formattedTotal = 'Rp' + totalAmount.toLocaleString('id-ID');

  // Build WhatsApp text conforming to PRD 7.1
  const generateWhatsAppMessage = () => {
    const pList = packageType === 'individual'
      ? `1) ${singleParticipantName.trim() || '(Nama Peserta)'}`
      : participants
          .map((p, idx) => `${idx + 1}) ${p.name.trim() || `(Nama Peserta ${idx + 1})`}`)
          .join(', ');

    const pkgName = packageType === 'individual'
      ? 'Individual (Rp899.000/peserta)'
      : `Team Package (Rp749.000/peserta - ${participants.length} Peserta)`;

    return `Halo Comento, saya ingin mendaftar program SOP Sampai Jadi.

Paket: ${pkgName}
Perusahaan: ${companyName.trim() || '(Nama Perusahaan)'}
Kontak: ${phone.trim() || '-'}
${sopFocus.trim() ? `Fokus SOP: ${sopFocus.trim()}\n` : ''}Peserta: ${pList}
Total: ${formattedTotal}

Mohon info selanjutnya.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPreviewModal(true);
  };

  const handleOpenWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${PROGRAM_CONFIG.adminWhatsApp}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-[#070d1f] relative border-t border-white/5" id="investasi">
      <div className="ambient-glow bottom-10 left-1/2 -translate-x-1/2 opacity-25"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Investasi &amp; Pendaftaran
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
            Investasi Program
          </h2>
          <p className="text-base sm:text-lg text-[#c7c4d7] max-w-xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan Anda atau tim perusahaan.
          </p>
        </div>

        {/* 2 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Individual Package */}
          <div
            onClick={() => handlePackageChange('individual')}
            className={`glass-card p-7 sm:p-8 rounded-2xl cursor-pointer transition-all duration-300 relative border ${
              packageType === 'individual'
                ? 'border-indigo-400/80 bg-[#151b2d] shadow-xl shadow-indigo-500/10 ring-1 ring-indigo-400/30'
                : 'border-white/10 hover:border-white/20'
            }`}
            id="card-package-individual"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-[#c0c1ff]">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">Individual</h3>
                  <span className="text-xs text-[#908fa0]">1 PIC Utama</span>
                </div>
              </div>

              {/* Radio Indicator */}
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                packageType === 'individual' ? 'border-indigo-400 bg-indigo-500/20' : 'border-white/20'
              }`}>
                {packageType === 'individual' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#c0c1ff]"></div>
                )}
              </div>
            </div>

            <p className="text-3xl font-extrabold text-[#c0c1ff] mb-2 font-['Plus_Jakarta_Sans']">
              Rp899.000 <span className="text-xs font-normal text-[#c7c4d7]">/ peserta</span>
            </p>
            <p className="text-sm text-[#c7c4d7] leading-relaxed">
              Cocok untuk PIC tunggal atau leader yang ditugaskan membangun SOP spesifik perusahaan.
            </p>
          </div>

          {/* Team Package */}
          <div
            onClick={() => handlePackageChange('team')}
            className={`glass-card p-7 sm:p-8 rounded-2xl cursor-pointer transition-all duration-300 relative border ${
              packageType === 'team'
                ? 'border-orange-500/80 bg-[#151b2d] shadow-xl shadow-orange-500/10 ring-1 ring-orange-500/30'
                : 'border-white/10 hover:border-white/20'
            }`}
            id="card-package-team"
          >
            {/* Best Value Badge */}
            <div className="absolute -top-3 right-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-extrabold px-3 py-0.5 rounded-full shadow-md uppercase tracking-wider">
              Hemat Rp150.000/org
            </div>

            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">Team Package</h3>
                  <span className="text-xs text-[#908fa0]">Min. 2 Peserta</span>
                </div>
              </div>

              {/* Radio Indicator */}
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                packageType === 'team' ? 'border-orange-400 bg-orange-500/20' : 'border-white/20'
              }`}>
                {packageType === 'team' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div>
                )}
              </div>
            </div>

            <p className="text-3xl font-extrabold text-orange-400 mb-2 font-['Plus_Jakarta_Sans']">
              Rp749.000 <span className="text-xs font-normal text-[#c7c4d7]">/ peserta</span>
            </p>
            <p className="text-sm text-[#c7c4d7] leading-relaxed">
              Minimal 2 peserta. Cocok untuk kolaborasi tim lintas fungsi dalam menyusun SOP bersama.
            </p>
          </div>
        </div>

        {/* Interactive Dynamic Form */}
        <div className="glass-card p-7 sm:p-10 rounded-2xl max-w-2xl mx-auto shadow-2xl border border-white/10">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Lengkapi Data untuk Pendaftaran via WhatsApp
              </h3>
              <p className="text-xs text-[#c7c4d7]">
                Format chat WhatsApp terformat rapi otomatis disiapkan untuk Anda.
              </p>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} id="registration-form">
            {/* Nama Perusahaan */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#c7c4d7] mb-1.5 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                Nama Perusahaan / Bisnis <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Contoh: PT Sumber Rezeki Makmur"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                className="w-full bg-[#191f31] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none transition-all"
                id="input-company-name"
              />
            </div>

            {/* Nomor WhatsApp Pemesan */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#c7c4d7] mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                Nomor WhatsApp Kontak <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                placeholder="Contoh: 081234567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-[#191f31] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none transition-all"
                id="input-phone"
              />
            </div>

            {/* Participant Fields */}
            {packageType === 'individual' ? (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#c7c4d7] mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-indigo-400" />
                  Nama Peserta <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nama lengkap peserta"
                  value={singleParticipantName}
                  onChange={(e) => setSingleParticipantName(e.target.value)}
                  required
                  className="w-full bg-[#191f31] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none transition-all"
                  id="input-participant-single"
                />
              </div>
            ) : (
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#c7c4d7] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-orange-400" />
                    Daftar Peserta Tim (Min 2, Maks 6) <span className="text-red-400">*</span>
                  </label>
                  <span className="text-xs text-orange-300/90 font-semibold">
                    {participants.length} Peserta Terdaftar
                  </span>
                </div>

                {participants.map((participant, index) => (
                  <div key={participant.id} className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold text-white shrink-0">
                      {index + 1}
                    </div>
                    <input
                      type="text"
                      placeholder={`Nama lengkap peserta ${index + 1}`}
                      value={participant.name}
                      onChange={(e) => updateParticipantName(index, e.target.value)}
                      required
                      className="w-full bg-[#191f31] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none transition-all"
                      id={`input-participant-team-${index + 1}`}
                    />
                    {participants.length > 2 && (
                      <button
                        type="button"
                        onClick={() => removeParticipant(index)}
                        className="p-2.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-colors cursor-pointer"
                        title="Hapus Peserta"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}

                {participants.length < 6 && (
                  <button
                    type="button"
                    onClick={addParticipant}
                    className="text-xs text-[#c0c1ff] hover:text-white font-bold flex items-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer mt-2"
                    id="btn-add-participant"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#c0c1ff]" />
                    <span>Tambah Peserta ({participants.length}/6)</span>
                  </button>
                )}
              </div>
            )}

            {/* SOP Focus / Catatan */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#c7c4d7] mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                SOP / Proses yang Ingin Dibuat (Opsional)
              </label>
              <input
                type="text"
                placeholder="Misal: SOP Onboarding Karyawan, SOP Quality Control, SOP Closing Kasir..."
                value={sopFocus}
                onChange={(e) => setSopFocus(e.target.value)}
                className="w-full bg-[#191f31] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none transition-all"
                id="input-sop-focus"
              />
            </div>

            {/* Total Investment & CTA Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mt-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#908fa0] font-semibold">
                  Total Investasi {packageType === 'team' ? `(${participants.length} Peserta)` : '(1 Peserta)'}
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']" id="calc-total">
                  {formattedTotal}
                </p>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/25 hover:from-orange-500 hover:to-amber-500 transition-all border border-orange-400/30 text-center active:scale-98 cursor-pointer"
                id="btn-submit-registration"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Daftar via WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* WhatsApp Message Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#151b2d] border border-white/15 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
                  Konfirmasi Pendaftaran
                </h4>
              </div>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="text-[#908fa0] hover:text-white p-1 rounded-lg text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#c7c4d7]">
              Pesan berikut akan langsung dikirimkan ke WhatsApp Admin SOP Sampai Jadi:
            </p>

            {/* Formatted message box */}
            <div className="bg-[#0c1324] p-4 rounded-xl border border-white/10 text-xs font-mono text-indigo-100 whitespace-pre-wrap max-h-60 overflow-y-auto leading-relaxed">
              {generateWhatsAppMessage()}
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyMessage}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors cursor-pointer"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin Teks Chat'}</span>
              </button>

              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
                id="btn-open-wa-direct"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Buka WhatsApp Sekarang</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
