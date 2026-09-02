import React, { useState } from 'react';
import { X, MessageSquare, Send, Sparkles, UserCheck } from 'lucide-react';
import { PROGRAM_CONFIG } from '../data/content';

interface WhatsAppChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppChatModal: React.FC<WhatsAppChatModalProps> = ({ isOpen, onClose }) => {
  const [customQuery, setCustomQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('Jadwal Batch Terdekat');

  if (!isOpen) return null;

  const quickTopics = [
    'Jadwal Batch Terdekat',
    'Tanya Scope SOP Perusahaan Saya',
    'Pendaftaran Paket Tim (In-House)',
    'Metode Pembayaran & Faktur',
  ];

  const handleSend = () => {
    const text = `Halo Admin SOP Sampai Jadi, saya ingin menanyakan perihal: ${selectedTopic}.
${customQuery ? `\nPertanyaan tambahan: ${customQuery}` : ''}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${PROGRAM_CONFIG.adminWhatsApp}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#151b2d] border border-white/15 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
                Chat dengan Admin Program
              </h3>
              <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Admin Online via WhatsApp
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick topics */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#c7c4d7] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Pilih Topik Pertanyaan:
          </label>
          <div className="grid grid-cols-1 gap-1.5">
            {quickTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setSelectedTopic(topic)}
                className={`text-left text-xs p-2.5 rounded-xl border transition-all cursor-pointer ${
                  selectedTopic === topic
                    ? 'border-emerald-500/60 bg-emerald-950/40 text-emerald-300 font-semibold'
                    : 'border-white/10 bg-[#0c1324] text-[#c7c4d7] hover:border-white/20'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Custom text */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#c7c4d7]">
            Pesan Tambahan (Opsional):
          </label>
          <textarea
            rows={3}
            value={customQuery}
            onChange={(e) => setCustomQuery(e.target.value)}
            placeholder="Tuliskan nama Anda, nama perusahaan, atau pertanyaan spesifik..."
            className="w-full bg-[#0c1324] border border-white/10 rounded-xl p-3 text-xs text-white placeholder:text-[#908fa0] focus:border-emerald-400 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          onClick={handleSend}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Lanjutkan ke WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
