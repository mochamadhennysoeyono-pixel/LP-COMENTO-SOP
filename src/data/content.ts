import { SessionInfo, FaqItem } from '../types';

export const PROGRAM_CONFIG = {
  adminWhatsApp: '6281234599171', // Konsisten dengan PRD & creative ads (081234599171)
  adminPhoneDisplay: '081234599171',
  mentorImage: '/mentor-img.png',
  totalSlots: 6,
  remainingSlots: 3, // Statis per PRD 6.7
  pricing: {
    individual: 899000,
    teamPerPerson: 749000,
  }
};

export const SESSIONS_DATA: SessionInfo[] = [
  {
    sessionNumber: 'Sesi 01',
    title: 'Learn & Map',
    colorBorder: 'border-t-[#c0c1ff]',
    colorBadge: 'text-[#c0c1ff]',
    items: [
      'Konsep & fungsi SOP dalam operasional bisnis',
      'Jenis-jenis SOP & prinsip penyusunan efektif',
      'Identifikasi proses & mapping SOP terstruktur',
      'Menentukan prioritas & scope implementasi'
    ],
    outputTitle: 'Output:',
    outputDescription: 'SOP yang akan dibuat + SOP Mapping + struktur awal.',
    duration: 'Online Group Session (2.5 - 3 Jam)'
  },
  {
    sessionNumber: 'Sesi 02',
    title: 'Build & Live Coaching',
    colorBorder: 'border-t-[#ec6a06]',
    colorBadge: 'text-[#ec6a06]',
    items: [
      'Praktek langsung menyusun draft SOP perusahaan masing-masing',
      'Penerapan DACI Matrix (Driver, Approver, Contributor, Informed) untuk kejelasan peran & akuntabilitas PIC',
      'Live coaching & pendampingan langkah demi langkah alur kerja',
      'Penyusunan format, control point, input/output & exception handling'
    ],
    outputTitle: 'Output:',
    outputDescription: 'Draft SOP nyata perusahaan Anda dengan pemetaan peran akurat berbasis DACI Matrix.',
    duration: 'Online Group Coaching (2 Jam)'
  },
  {
    sessionNumber: 'Sesi 03',
    title: '1-on-1 SOP Review',
    colorBorder: 'border-t-[#22c55e]',
    colorBadge: 'text-[#22c55e]',
    items: [
      'Sesi privat one-on-one 1,5 jam per perusahaan/tim',
      'Bedah mendalam struktur, flow, PIC, dokumen & control point',
      'Cek potensi bottleneck, kejelasan instruksi & praktik lapangan',
      'Feedback langsung → Revisi on-the-spot → Finalisasi'
    ],
    outputTitle: 'Output:',
    outputDescription: 'SOP yang sudah direview mendalam dan siap langsung dipakai.',
    duration: 'Private 1-on-1 (1,5 Jam per Perusahaan)'
  }
];

export const SCHEDULE_DATA = [
  {
    sesi: 'Sesi 1',
    tanggal: 'Sabtu, 3 Okt 2026',
    waktu: '09.00 – 12.00 WIB',
    fokus: 'Learn & Map',
    keterangan: 'Pemetaan proses nyata & scoping SOP utama'
  },
  {
    sesi: 'Sesi 2',
    tanggal: 'Sabtu, 10 Okt 2026',
    waktu: '09.00 – 11.00 WIB',
    fokus: 'Build & Live Coaching (DACI Matrix)',
    keterangan: 'Coaching interaktif menyusun draft SOP & penetapan PIC akuntabel dengan kerangka DACI Matrix secara langsung di dalam sesi'
  },
  {
    sesi: 'Sesi 3 (1-on-1)',
    tanggal: 'Sabtu, 24 Okt 2026',
    waktu: '08.00 – 17.00 WIB',
    fokus: '1-on-1 SOP Review',
    keterangan: 'Sesi privat 1,5 jam terjadwal per perusahaan/tim'
  }
];

export const AUDIENCE_ROLES = [
  'HR / HRD & General Affairs',
  'HR Manager / Supervisor',
  'Kepala Divisi / Departemen',
  'Operational Manager',
  'Business Owner / Founder',
  'PIC Penyusunan SOP Perusahaan',
  'Profesional yang Sedang Ditugaskan Membuat SOP'
];

export const VALUE_DELIVERABLES = [
  'SOP Framework',
  'SOP Mapping',
  'Working Template',
  'Assignment & Praktik Nyata',
  'Coaching & Mentoring',
  'SOP Development',
  'Mentor Feedback Langsung',
  'One-on-One SOP Review 1,5 Jam',
  'Revisi & Penyempurnaan Tuntas'
];

export const DIFFERENTIATION_PILLARS = [
  {
    title: 'Practical',
    subtitle: 'Not theoretical',
    desc: 'Bukan sekadar ceramah teori yang membosankan, tapi langsung mengerjakan kasus proses nyata.'
  },
  {
    title: 'Build Your SOP',
    subtitle: 'Not just learn',
    desc: 'Bawa pulang dokumen SOP riil perusahaan sendiri, bukan sekadar sertifikat kehadiran.'
  },
  {
    title: 'Coached by Expert',
    subtitle: 'Not by slides',
    desc: 'Dibimbing langsung oleh praktisi berpengalaman di korporasi & bisnis, bukan presenter slide.'
  },
  {
    title: 'Reviewed Until Ready',
    subtitle: 'Not just finished',
    desc: 'Melalui bedah 1-on-1 privat hingga dokumen SOP benar-benar siap dan usable di lapangan.'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah harus punya tim atau departemen SOP dulu untuk ikut program ini?',
    answer: 'Tidak. Anda tidak perlu punya tim SOP khusus. Yang dibutuhkan hanya satu hal: ada proses nyata di perusahaan/tim Anda yang ingin didokumentasikan menjadi SOP — baik Anda kerjakan sendiri, mewakili tim, atau sebagai PIC yang ditugaskan.'
  },
  {
    id: 'faq-2',
    question: 'Bagaimana kalau proses di perusahaan saya masih belum jelas atau belum terdokumentasi sama sekali?',
    answer: 'Justru itu fungsi Sesi 1 (Learn & Map). Anda akan dibimbing memetakan proses dari nol — mengidentifikasi alur, menentukan prioritas, sampai menentukan scope SOP yang realistis untuk dikerjakan dalam program ini. Anda tidak perlu datang dengan proses yang sudah rapi.'
  },
  {
    id: 'faq-3',
    question: 'Apakah sesi bisa direkam kalau saya berhalangan hadir?',
    answer: 'Sesi kelompok (Sesi 1 & 2) direkam dan dapat diakses ulang oleh peserta yang berhalangan hadir. Untuk sesi 1-on-1 (Sesi 3), karena sifatnya personal dan dijadwalkan khusus per peserta, perubahan jadwal dapat dikoordinasikan langsung bersama mentor.'
  },
  {
    id: 'faq-4',
    question: 'Bagaimana skema pembayaran dan konfirmasi kuota peserta?',
    answer: 'Pembayaran dilakukan setelah kuota Anda dikonfirmasi oleh tim melalui WhatsApp. Karena kelas bersifat small-group intensif dengan kuota sangat terbatas (maks. 6 peserta), konfirmasi slot ditentukan berdasarkan validasi pendaftaran terlebih dahulu.'
  },
  {
    id: 'faq-5',
    question: 'Apakah SOP saya pasti selesai 100% jadi di akhir program?',
    answer: 'Di akhir program, Anda akan memiliki draft SOP yang sudah dibangun dari proses nyata dan sudah melalui review mentor secara 1-on-1. Kompleksitas dan cakupan SOP disesuaikan dengan kesiapan masing-masing peserta — program ini fokus membuat SOP Anda benar-benar usable, bukan sekadar template kosong yang "terlihat selesai".'
  },
  {
    id: 'faq-6',
    question: 'Apakah saya bisa membuat lebih dari 1 SOP dalam satu program?',
    answer: 'Program ini didesain untuk fokus menuntaskan 1 SOP utama sampai benar-benar matang dan direview, supaya hasilnya maksimal — bukan menyebar ke banyak SOP tapi setengah jadi. Kalau Anda punya kebutuhan lebih dari 1 proses, bisa didiskusikan langsung dengan tim untuk opsi lanjutan atau mengambil Team Package.'
  }
];

export const MENTOR_DATA = {
  name: 'Mohamad Izza, S.HI, MM, CBC, CCC',
  title: 'SOP Specialist & Corporate Coach',
  headline: 'Bukan cuma trainer. Praktisi yang sudah membangun sistem HR & operasional dari level korporat sampai bisnis sendiri.',
  quote: '"Bukan cuma trainer. Praktisi yang sudah membangun sistem HR & operasional dari level korporat sampai bisnis sendiri."',
  currentRole: 'Founder & CEO HRDKU.COM (PT. HRDKU Reksa Talenta) — HR Managed Service & People Development',
  education: "Master's in Human Resources Management, Universitas Jayabaya",
  experiences: [
    'Founder & CEO HRDKU.COM (PT. HRDKU Reksa Talenta)',
    'Group Head of Human Capital & Corporate Affair — Topsell Group',
    'Senior Manager Learning & Development — Transretail Group (Transmart & Carrefour)',
    'Corporate Training Manager — First Media Group (BOLT! 4G LTE, First Media, Linknet)'
  ],
  certifications: [
    'Corporate Coach — International Coaching Federation',
    'Behavioral Consultant — Power Character',
    'Practitioner Point of You — POY Indonesia',
    'Master Trainer Neo NLP — NNLP Society',
    'Public Speaker — BBC'
  ]
};

