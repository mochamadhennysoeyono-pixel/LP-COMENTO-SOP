import React from 'react';
import { X, Shield, FileText, BookOpen } from 'lucide-react';

interface TermsModalProps {
  type: 'curriculum' | 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#151b2d] border border-white/15 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
              {type === 'privacy' && <Shield className="w-5 h-5" />}
              {type === 'terms' && <FileText className="w-5 h-5" />}
              {type === 'curriculum' && <BookOpen className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                {type === 'privacy' && 'Kebijakan Privasi (Privacy Policy)'}
                {type === 'terms' && 'Syarat & Ketentuan (Terms of Service)'}
                {type === 'curriculum' && 'Kurikulum Lengkap Program SOP Sampai Jadi'}
              </h3>
              <p className="text-xs text-[#908fa0]">SOP Sampai Jadi by Mohamad Izza</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="text-sm text-[#c7c4d7] space-y-4 leading-relaxed font-['Inter']">
          {type === 'privacy' && (
            <>
              <p>
                <strong>1. Perlindungan Informasi Rahasia Bisnis:</strong> Kami memahami bahwa saat menyusun SOP, Anda mungkin membagikan proses internal, struktur PIC, dan alur kerja perusahaan. Kami berkomitmen menjaga 100% kerahasiaan seluruh data proses bisnis Anda dan tidak akan membagikannya ke pihak ketiga manapun.
              </p>
              <p>
                <strong>2. Penggunaan Data Pendaftaran:</strong> Nama, nomor WhatsApp, dan data perusahaan yang Anda daftarkan hanya digunakan untuk keperluan koordinasi jadwal mentoring, pengiriman materi, dan administrasi program.
              </p>
              <p>
                <strong>3. Hak Cipta Dokumen:</strong> Seluruh draft SOP, mapping, dan dokumen yang dihasilkan selama program berlangsung sepenuhnya menjadi hak milik eksklusif perusahaan Anda.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                <strong>1. Komitmen Peserta:</strong> Program ini bersifat action-oriented. Peserta diharapkan hadir pada 3 sesi pertemuan online dan menyelesaikan assignment penyusunan alur proses agar proses 1-on-1 review dapat berjalan optimal.
              </p>
              <p>
                <strong>2. Batasan Kuota:</strong> Maksimal 6 peserta per batch untuk menjamin kualitas pendampingan 1-on-1. Konfirmasi keikutsertaan ditentukan berdasarkan urutan pembayaran yang tervalidasi.
              </p>
              <p>
                <strong>3. Penjadwalan Sesi 1-on-1:</strong> Sesi privat bedah SOP Sesi 3 dijadwalkan secara fleksibel sesuai kesepakatan waktu antara peserta dan mentor dalam rentang 1 bulan program.
              </p>
            </>
          )}

          {type === 'curriculum' && (
            <>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#0c1324] border border-white/10">
                  <h4 className="font-bold text-white mb-2 text-[#c0c1ff]">Sesi 1: Learn &amp; Map (2.5 Jam)</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Prinsip SOP Usable vs SOP Pajangan</li>
                    <li>Value Chain &amp; Process Decomposition</li>
                    <li>SOP Priority Matrix: Memilih 1 SOP berdampak paling tinggi</li>
                    <li>Mapping Struktur Flowchart &amp; Cross-Functional Flow</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#0c1324] border border-white/10">
                  <h4 className="font-bold text-white mb-2 text-orange-400">Sesi 2: Build &amp; Coach (2.5 Jam)</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Review Template Standar &amp; RACI Matrix (Responsible, Accountable, Consulted, Informed)</li>
                    <li>Merumuskan Control Point, Input, Output &amp; Exception Handling</li>
                    <li>Penyusunan Form Pendukung &amp; Checklist Operasional</li>
                    <li>Live Feedback &amp; Perbaikan Draft Peserta</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#0c1324] border border-white/10">
                  <h4 className="font-bold text-white mb-2 text-emerald-400">Sesi 3: 1-on-1 SOP Review (~2 Jam Privat)</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Pembedahan klausul demi klausul secara privat</li>
                    <li>Simulasi alur operasional &amp; pengujian potensi bottleneck</li>
                    <li>Finalisasi dokumen SOP siap tanda tangan &amp; sosialisasi</li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
