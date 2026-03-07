export enum Dimension {
  EXPLORATION = 'Eksplorasi Ide',
  ANALYSIS = 'Analisis Mendalam',
  EXECUTION = 'Eksekusi',
  RESILIENCE = 'Ketahanan terhadap Ketidakpastian',
  COLLABORATION = 'Kolaborasi',
}

export interface Option {
  text: string;
  scores: Partial<Record<Dimension, number>>;
}

export interface Question {
  id: number;
  text: string;
  dimension: Dimension;
  options: Option[];
}

export const QUESTIONS_BANK: Question[] = [
  // DIMENSI 1 — EKSPLORASI IDE
  {
    id: 1,
    dimension: Dimension.EXPLORATION,
    text: "Jika kamu menemukan topik menarik di internet, biasanya kamu:",
    options: [
      { text: "langsung mencoba sesuatu yang berkaitan dengan itu", scores: { [Dimension.EXPLORATION]: 1, [Dimension.EXECUTION]: 1 } },
      { text: "membaca atau menonton lebih banyak tentang topik itu", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "menyimpannya untuk nanti", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "membicarakannya dengan teman", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 2,
    dimension: Dimension.EXPLORATION,
    text: "Jika kamu punya ide proyek baru:",
    options: [
      { text: "langsung ingin mencobanya", scores: { [Dimension.EXPLORATION]: 1, [Dimension.EXECUTION]: 1 } },
      { text: "menuliskannya dulu", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari contoh apakah orang lain pernah melakukannya", scores: { [Dimension.EXPLORATION]: 0.5, [Dimension.ANALYSIS]: 0.5 } },
      { text: "menunggu waktu yang lebih tepat", scores: { [Dimension.RESILIENCE]: 0.5 } },
    ],
  },
  {
    id: 3,
    dimension: Dimension.EXPLORATION,
    text: "Ketika melihat peluang baru:",
    options: [
      { text: "ingin segera mencobanya", scores: { [Dimension.EXPLORATION]: 1, [Dimension.EXECUTION]: 1 } },
      { text: "mempelajari dulu apakah masuk akal", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "melihat apakah orang lain berhasil", scores: { [Dimension.ANALYSIS]: 0.5, [Dimension.RESILIENCE]: 0.5 } },
      { text: "mempertimbangkan risiko dulu", scores: { [Dimension.RESILIENCE]: 1 } },
    ],
  },
  {
    id: 4,
    dimension: Dimension.EXPLORATION,
    text: "Jika kamu bosan dengan rutinitas:",
    options: [
      { text: "mencari sesuatu yang baru untuk dicoba", scores: { [Dimension.EXPLORATION]: 1 } },
      { text: "memperbaiki cara yang sudah ada", scores: { [Dimension.EXECUTION]: 1, [Dimension.ANALYSIS]: 0.5 } },
      { text: "mencari inspirasi dari internet", scores: { [Dimension.EXPLORATION]: 0.5, [Dimension.ANALYSIS]: 0.5 } },
      { text: "menunggu sampai mood berubah", scores: { [Dimension.RESILIENCE]: 0.5 } },
    ],
  },
  {
    id: 5,
    dimension: Dimension.EXPLORATION,
    text: "Ketika belajar sesuatu yang baru:",
    options: [
      { text: "langsung mencoba praktek", scores: { [Dimension.EXECUTION]: 1, [Dimension.EXPLORATION]: 0.5 } },
      { text: "memahami konsep dulu", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "melihat tutorial", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "bertanya kepada orang lain", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 6,
    dimension: Dimension.EXPLORATION,
    text: "Saat melihat orang melakukan sesuatu yang menarik:",
    options: [
      { text: "ingin mencobanya juga", scores: { [Dimension.EXPLORATION]: 1, [Dimension.EXECUTION]: 0.5 } },
      { text: "penasaran bagaimana cara kerjanya", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "menyimpannya sebagai referensi", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "membicarakannya dengan teman", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 7,
    dimension: Dimension.EXPLORATION,
    text: "Jika ada teknologi baru:",
    options: [
      { text: "langsung ingin mencobanya", scores: { [Dimension.EXPLORATION]: 1, [Dimension.EXECUTION]: 1 } },
      { text: "membaca dulu bagaimana cara kerjanya", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "menunggu sampai lebih banyak orang memakainya", scores: { [Dimension.RESILIENCE]: 1 } },
      { text: "menonton review dulu", scores: { [Dimension.ANALYSIS]: 0.5 } },
    ],
  },
  {
    id: 8,
    dimension: Dimension.EXPLORATION,
    text: "Ketika menemukan peluang kecil:",
    options: [
      { text: "mencobanya dulu", scores: { [Dimension.EXPLORATION]: 1, [Dimension.EXECUTION]: 1 } },
      { text: "memikirkan apakah worth it", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari informasi tambahan", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "mengabaikannya dulu", scores: { [Dimension.RESILIENCE]: 0.5 } },
    ],
  },
  {
    id: 9,
    dimension: Dimension.EXPLORATION,
    text: "Jika kamu punya waktu luang:",
    options: [
      { text: "mencoba sesuatu yang belum pernah dilakukan", scores: { [Dimension.EXPLORATION]: 1 } },
      { text: "membaca atau belajar sesuatu", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "scrolling internet", scores: { [Dimension.EXPLORATION]: 0.5 } },
      { text: "ngobrol dengan teman", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 10,
    dimension: Dimension.EXPLORATION,
    text: "Saat mendapatkan inspirasi baru:",
    options: [
      { text: "langsung ingin mengeksekusi", scores: { [Dimension.EXECUTION]: 1, [Dimension.EXPLORATION]: 0.5 } },
      { text: "memikirkannya lebih dalam", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencatatnya untuk nanti", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "mendiskusikannya", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },

  // DIMENSI 2 — ANALISIS MENDALAM
  {
    id: 11,
    dimension: Dimension.ANALYSIS,
    text: "Jika menghadapi masalah baru:",
    options: [
      { text: "langsung mencoba solusi", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "memikirkan penyebabnya dulu", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari referensi", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "bertanya pada orang lain", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 12,
    dimension: Dimension.ANALYSIS,
    text: "Ketika membuat keputusan penting:",
    options: [
      { text: "mengikuti insting", scores: { [Dimension.EXPLORATION]: 1 } },
      { text: "menganalisis beberapa kemungkinan", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari informasi tambahan", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "berdiskusi dengan orang lain", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 13,
    dimension: Dimension.ANALYSIS,
    text: "Saat membaca sesuatu yang menarik:",
    options: [
      { text: "langsung mencoba menerapkannya", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "mencoba memahami logikanya", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari sumber lain", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "membicarakannya", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 14,
    dimension: Dimension.ANALYSIS,
    text: "Jika sebuah ide terlihat menarik:",
    options: [
      { text: "langsung ingin mencobanya", scores: { [Dimension.EXPLORATION]: 1, [Dimension.EXECUTION]: 1 } },
      { text: "memikirkan apakah masuk akal", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari bukti atau contoh", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "mendiskusikannya", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 15,
    dimension: Dimension.ANALYSIS,
    text: "Ketika belajar skill baru:",
    options: [
      { text: "langsung praktek", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "memahami konsepnya dulu", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "melihat tutorial", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "belajar bersama orang lain", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 16,
    dimension: Dimension.ANALYSIS,
    text: "Saat sesuatu tidak berjalan sesuai rencana:",
    options: [
      { text: "mencoba cara lain", scores: { [Dimension.EXPLORATION]: 1 } },
      { text: "mencari tahu penyebabnya", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari referensi", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "meminta saran", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 17,
    dimension: Dimension.ANALYSIS,
    text: "Ketika melihat sistem yang rumit:",
    options: [
      { text: "mencoba menggunakannya", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "ingin memahami cara kerjanya", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari panduan", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "bertanya pada orang lain", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 18,
    dimension: Dimension.ANALYSIS,
    text: "Jika ada dua pilihan yang sama-sama menarik:",
    options: [
      { text: "memilih salah satu", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "membandingkan keduanya", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari informasi tambahan", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "bertanya pada orang lain", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 19,
    dimension: Dimension.ANALYSIS,
    text: "Ketika membaca berita atau informasi:",
    options: [
      { text: "langsung percaya", scores: { [Dimension.RESILIENCE]: 0.5 } },
      { text: "mencoba memahami konteksnya", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari sumber lain", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "membicarakannya", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 20,
    dimension: Dimension.ANALYSIS,
    text: "Jika seseorang memberi saran:",
    options: [
      { text: "langsung mencobanya", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "memikirkan apakah masuk akal", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari opini lain", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "berdiskusi", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },

  // DIMENSI 3 — EKSEKUSI
  {
    id: 21,
    dimension: Dimension.EXECUTION,
    text: "Jika kamu punya rencana:",
    options: [
      { text: "langsung mulai", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "memikirkan langkahnya dulu", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari referensi", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "menunggu waktu yang tepat", scores: { [Dimension.RESILIENCE]: 0.5 } },
    ],
  },
  {
    id: 22,
    dimension: Dimension.EXECUTION,
    text: "Ketika ada deadline:",
    options: [
      { text: "langsung fokus menyelesaikan", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "menyusun strategi dulu", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari cara yang lebih efisien", scores: { [Dimension.ANALYSIS]: 0.5, [Dimension.EXPLORATION]: 0.5 } },
      { text: "bekerja bersama orang lain", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 23,
    dimension: Dimension.EXECUTION,
    text: "Jika ada ide yang ingin dilakukan:",
    options: [
      { text: "langsung mencoba", scores: { [Dimension.EXECUTION]: 1, [Dimension.EXPLORATION]: 0.5 } },
      { text: "merencanakan dulu", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari contoh", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "mengajak orang lain", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 24,
    dimension: Dimension.EXECUTION,
    text: "Ketika pekerjaan terasa sulit:",
    options: [
      { text: "tetap mencoba menyelesaikan", scores: { [Dimension.EXECUTION]: 1, [Dimension.RESILIENCE]: 0.5 } },
      { text: "berhenti sejenak untuk berpikir", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari referensi", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "meminta bantuan", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 25,
    dimension: Dimension.EXECUTION,
    text: "Jika ada tugas baru:",
    options: [
      { text: "langsung mulai", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "memahami instruksi dulu", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "melihat contoh", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "bertanya", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 26,
    dimension: Dimension.EXECUTION,
    text: "Ketika kamu merasa termotivasi:",
    options: [
      { text: "langsung bekerja", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "merencanakan langkah", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari inspirasi", scores: { [Dimension.EXPLORATION]: 1 } },
      { text: "berbagi ide", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 27,
    dimension: Dimension.EXECUTION,
    text: "Jika kamu ingin mencapai sesuatu:",
    options: [
      { text: "langsung mengambil langkah kecil", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "membuat rencana dulu", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari informasi", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "mengajak orang lain", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 28,
    dimension: Dimension.EXECUTION,
    text: "Saat ada peluang:",
    options: [
      { text: "langsung mencobanya", scores: { [Dimension.EXECUTION]: 1, [Dimension.EXPLORATION]: 0.5 } },
      { text: "memikirkan risikonya", scores: { [Dimension.RESILIENCE]: 1 } },
      { text: "mencari referensi", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "bertanya", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 29,
    dimension: Dimension.EXECUTION,
    text: "Ketika proyek berjalan lambat:",
    options: [
      { text: "meningkatkan usaha", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "mengevaluasi strategi", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari cara baru", scores: { [Dimension.EXPLORATION]: 1 } },
      { text: "berdiskusi", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 30,
    dimension: Dimension.EXECUTION,
    text: "Saat kamu memulai sesuatu:",
    options: [
      { text: "langsung bertindak", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "memikirkan langkah-langkahnya", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari contoh", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "bekerja dengan orang lain", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },

  // DIMENSI 4 — KETAHANAN TERHADAP KETIDAKPASTIAN
  {
    id: 31,
    dimension: Dimension.RESILIENCE,
    text: "Jika hasil sesuatu belum jelas:",
    options: [
      { text: "tetap mencoba", scores: { [Dimension.RESILIENCE]: 1, [Dimension.EXECUTION]: 0.5 } },
      { text: "memikirkan kemungkinan", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari informasi", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "bertanya pada orang lain", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 32,
    dimension: Dimension.RESILIENCE,
    text: "Ketika mencoba sesuatu yang belum pernah dilakukan:",
    options: [
      { text: "mencoba saja", scores: { [Dimension.RESILIENCE]: 1, [Dimension.EXPLORATION]: 1 } },
      { text: "mempelajari dulu", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari contoh", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "mengajak teman", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 33,
    dimension: Dimension.RESILIENCE,
    text: "Jika sebuah rencana gagal:",
    options: [
      { text: "mencoba lagi", scores: { [Dimension.RESILIENCE]: 1, [Dimension.EXECUTION]: 0.5 } },
      { text: "mengevaluasi penyebabnya", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari cara baru", scores: { [Dimension.EXPLORATION]: 1 } },
      { text: "meminta saran", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 34,
    dimension: Dimension.RESILIENCE,
    text: "Ketika menghadapi ketidakpastian:",
    options: [
      { text: "tetap bergerak", scores: { [Dimension.RESILIENCE]: 1, [Dimension.EXECUTION]: 1 } },
      { text: "mencoba memahami situasi", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari informasi tambahan", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "berdiskusi", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 35,
    dimension: Dimension.RESILIENCE,
    text: "Jika peluangnya belum jelas:",
    options: [
      { text: "mencobanya", scores: { [Dimension.RESILIENCE]: 1, [Dimension.EXPLORATION]: 0.5 } },
      { text: "memikirkan risikonya", scores: { [Dimension.RESILIENCE]: 0.5, [Dimension.ANALYSIS]: 0.5 } },
      { text: "mencari informasi", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "bertanya", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 36,
    dimension: Dimension.RESILIENCE,
    text: "Ketika situasi berubah cepat:",
    options: [
      { text: "menyesuaikan diri", scores: { [Dimension.RESILIENCE]: 1, [Dimension.EXECUTION]: 0.5 } },
      { text: "menganalisis situasi", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari referensi", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "berdiskusi", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 37,
    dimension: Dimension.RESILIENCE,
    text: "Jika keputusan harus diambil cepat:",
    options: [
      { text: "mengambil keputusan", scores: { [Dimension.RESILIENCE]: 1, [Dimension.EXECUTION]: 1 } },
      { text: "memikirkan dampaknya", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari informasi", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "bertanya", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 38,
    dimension: Dimension.RESILIENCE,
    text: "Ketika menghadapi tantangan besar:",
    options: [
      { text: "mencobanya", scores: { [Dimension.RESILIENCE]: 1, [Dimension.EXECUTION]: 0.5 } },
      { text: "memahami masalahnya", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari referensi", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "mencari bantuan", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 39,
    dimension: Dimension.RESILIENCE,
    text: "Jika sesuatu terasa tidak pasti:",
    options: [
      { text: "tetap melangkah", scores: { [Dimension.RESILIENCE]: 1, [Dimension.EXECUTION]: 0.5 } },
      { text: "mencoba memahami lebih dulu", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari informasi", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "bertanya", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 40,
    dimension: Dimension.RESILIENCE,
    text: "Ketika menghadapi risiko:",
    options: [
      { text: "mencobanya", scores: { [Dimension.RESILIENCE]: 1, [Dimension.EXPLORATION]: 0.5 } },
      { text: "menghitung kemungkinan", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari contoh", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "berdiskusi", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },

  // DIMENSI 5 — KOLABORASI
  {
    id: 41,
    dimension: Dimension.COLLABORATION,
    text: "Ketika bekerja dalam proyek:",
    options: [
      { text: "lebih suka bekerja sendiri", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "berbagi ide dengan orang lain", scores: { [Dimension.COLLABORATION]: 1, [Dimension.EXPLORATION]: 0.5 } },
      { text: "mengikuti struktur tim", scores: { [Dimension.ANALYSIS]: 0.5, [Dimension.RESILIENCE]: 0.5 } },
      { text: "membantu orang lain", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 42,
    dimension: Dimension.COLLABORATION,
    text: "Jika ada masalah:",
    options: [
      { text: "mencoba menyelesaikan sendiri", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "berdiskusi dengan orang lain", scores: { [Dimension.COLLABORATION]: 1 } },
      { text: "mencari referensi", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "meminta bantuan", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 43,
    dimension: Dimension.COLLABORATION,
    text: "Ketika memiliki ide:",
    options: [
      { text: "mencobanya sendiri", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "membagikannya kepada orang lain", scores: { [Dimension.COLLABORATION]: 1, [Dimension.EXPLORATION]: 0.5 } },
      { text: "menuliskannya", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mengajak orang lain", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 44,
    dimension: Dimension.COLLABORATION,
    text: "Saat belajar sesuatu:",
    options: [
      { text: "belajar sendiri", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "berdiskusi dengan teman", scores: { [Dimension.COLLABORATION]: 1 } },
      { text: "melihat tutorial", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "mengikuti kelas", scores: { [Dimension.COLLABORATION]: 0.5, [Dimension.ANALYSIS]: 0.5 } },
    ],
  },
  {
    id: 45,
    dimension: Dimension.COLLABORATION,
    text: "Jika teman mengalami kesulitan:",
    options: [
      { text: "membiarkan mereka mencoba dulu", scores: { [Dimension.RESILIENCE]: 0.5 } },
      { text: "membantu menjelaskan", scores: { [Dimension.COLLABORATION]: 1, [Dimension.ANALYSIS]: 0.5 } },
      { text: "mencari solusi bersama", scores: { [Dimension.COLLABORATION]: 1, [Dimension.EXPLORATION]: 0.5 } },
      { text: "memberi dukungan", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 46,
    dimension: Dimension.COLLABORATION,
    text: "Ketika bekerja dalam tim:",
    options: [
      { text: "fokus pada bagian sendiri", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "sering berdiskusi", scores: { [Dimension.COLLABORATION]: 1 } },
      { text: "mengikuti arahan", scores: { [Dimension.RESILIENCE]: 0.5 } },
      { text: "membantu anggota lain", scores: { [Dimension.COLLABORATION]: 1 } },
    ],
  },
  {
    id: 47,
    dimension: Dimension.COLLABORATION,
    text: "Jika ada konflik ide:",
    options: [
      { text: "mempertahankan ide sendiri", scores: { [Dimension.EXECUTION]: 0.5 } },
      { text: "mencoba memahami ide lain", scores: { [Dimension.ANALYSIS]: 1, [Dimension.COLLABORATION]: 0.5 } },
      { text: "mencari solusi bersama", scores: { [Dimension.COLLABORATION]: 1, [Dimension.EXPLORATION]: 0.5 } },
      { text: "meminta pendapat pihak ketiga", scores: { [Dimension.COLLABORATION]: 0.5, [Dimension.ANALYSIS]: 0.5 } },
    ],
  },
  {
    id: 48,
    dimension: Dimension.COLLABORATION,
    text: "Saat memulai proyek baru:",
    options: [
      { text: "mengerjakannya sendiri", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "mengajak teman", scores: { [Dimension.COLLABORATION]: 1 } },
      { text: "mencari tim", scores: { [Dimension.COLLABORATION]: 1, [Dimension.ANALYSIS]: 0.5 } },
      { text: "berdiskusi dulu", scores: { [Dimension.COLLABORATION]: 0.5, [Dimension.ANALYSIS]: 1 } },
    ],
  },
  {
    id: 49,
    dimension: Dimension.COLLABORATION,
    text: "Jika ada peluang kolaborasi:",
    options: [
      { text: "lebih suka sendiri", scores: { [Dimension.EXECUTION]: 1 } },
      { text: "mempertimbangkannya", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "mencari tahu lebih dulu", scores: { [Dimension.ANALYSIS]: 0.5 } },
      { text: "mencobanya", scores: { [Dimension.COLLABORATION]: 1, [Dimension.EXPLORATION]: 0.5 } },
    ],
  },
  {
    id: 50,
    dimension: Dimension.COLLABORATION,
    text: "Ketika berdiskusi:",
    options: [
      { text: "lebih banyak mendengar", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "berbagi ide", scores: { [Dimension.COLLABORATION]: 1, [Dimension.EXPLORATION]: 1 } },
      { text: "menganalisis pembicaraan", scores: { [Dimension.ANALYSIS]: 1 } },
      { text: "membantu merangkum", scores: { [Dimension.COLLABORATION]: 1, [Dimension.ANALYSIS]: 0.5 } },
    ],
  },
];

export enum Archetype {
  EXPLORER = 'Penjelajah Ide',
  DEEP_THINKER = 'Pemikir Mendalam',
  EXECUTOR = 'Pelaksana',
  STRATEGIST = 'Strategist',
  CONNECTOR = 'Penghubung',
}

export const ARCHETYPE_MAP: Record<Dimension, Archetype> = {
  [Dimension.EXPLORATION]: Archetype.EXPLORER,
  [Dimension.ANALYSIS]: Archetype.DEEP_THINKER,
  [Dimension.EXECUTION]: Archetype.EXECUTOR,
  [Dimension.RESILIENCE]: Archetype.STRATEGIST,
  [Dimension.COLLABORATION]: Archetype.CONNECTOR,
};

export const GOALS = [
  "Ingin membangun bisnis",
  "Ingin meningkatkan skill tertentu",
  "Ingin memahami sesuatu secara mendalam",
  "Ingin mendapatkan stabilitas finansial",
  "Ingin membuat proyek atau produk",
  "Ingin membantu atau membimbing orang lain",
];

export interface GoalContext {
  friction: string;
  strategies: string[];
  concretePaths: string[];
  reflectionQuestions: string[];
  smallStep: string;
}

export interface AnalysisResult {
  description: string;
  strengths: string[];
  goalContexts: Record<string, GoalContext>;
  defaultContext: GoalContext;
}

export const ANALYSIS_DATA: Record<Archetype, AnalysisResult> = {
  [Archetype.EXPLORER]: {
    description: "Kamu adalah seorang Penjelajah Ide. Kamu cenderung melihat dunia sebagai rangkaian kemungkinan yang tak terbatas. Kamu merasa paling hidup ketika menemukan konsep baru atau mencoba cara-cara yang belum pernah dilakukan sebelumnya.",
    strengths: ["Kreativitas tanpa batas", "Kemampuan adaptasi yang cepat", "Berani mengambil risiko pada ide baru"],
    goalContexts: {
      "Ingin membangun bisnis": {
        friction: "Bisnis membutuhkan konsistensi dan rutinitas yang seringkali terasa membosankan bagi jiwa penjelajahmu. Kamu mungkin cepat bosan setelah fase ide awal selesai.",
        strategies: [
          "Cari rekan bisnis yang kuat dalam operasional (Pelaksana) untuk menjaga stabilitas.",
          "Fokuslah pada inovasi produk atau strategi pemasaran yang kreatif.",
          "Gunakan sistem 'batching' untuk menyelesaikan tugas administratif agar kamu punya waktu bebas untuk eksplorasi."
        ],
        concretePaths: ["Agensi kreatif", "Startup teknologi tahap awal", "Bisnis berbasis tren"],
        reflectionQuestions: ["Apakah kamu sering berhenti di tengah jalan karena ide baru?", "Siapa yang bisa membantumu tetap membumi?"],
        smallStep: "Pilih satu ide bisnismu dan buat satu postingan media sosial untuk tes pasar hari ini."
      }
    },
    defaultContext: {
      friction: "Kecenderunganmu untuk terus mencari hal baru bisa membuatmu kehilangan fokus pada apa yang sedang dikerjakan saat ini.",
      strategies: ["Terapkan aturan 'satu ide besar dalam satu waktu'.", "Dokumentasikan ide-ide baru dalam jurnal.", "Cari lingkungan yang menghargai inovasi."],
      concretePaths: ["Konsultan inovasi", "Pengembang produk baru", "Penulis lepas"],
      reflectionQuestions: ["Apakah kamu merasa tercekik oleh rutinitas?", "Bagaimana kamu bisa menyisipkan elemen kejutan?"],
      smallStep: "Tuliskan 3 ide liar hari ini, lalu lupakan mereka sampai minggu depan."
    }
  },
  [Archetype.DEEP_THINKER]: {
    description: "Kamu adalah seorang Pemikir Mendalam. Kamu cenderung memahami segala sesuatu secara menyeluruh sebelum mengambil keputusan. Kamu merasa paling nyaman ketika memiliki gambaran yang jelas dan logis.",
    strengths: ["Analisis yang tajam", "Kemampuan melihat pola rumit", "Ketekunan dalam belajar"],
    goalContexts: {
      "Ingin membangun bisnis": {
        friction: "Dunia bisnis menuntut keputusan cepat, sementara kamu ingin menganalisis semuanya hingga sempurna.",
        strategies: ["Bangun bisnis berbasis keahlian khusus.", "Tetapkan batas waktu riset.", "Bekerjasamalah dengan Pelaksana."],
        concretePaths: ["Bisnis konsultasi", "Produk digital berbasis pengetahuan", "Layanan riset pasar"],
        reflectionQuestions: ["Apakah kamu terjebak dalam analysis paralysis?", "Bagaimana kamu bisa mempercepat ritme keputusan?"],
        smallStep: "Buat satu keputusan kecil dalam 48 jam tanpa analisis tambahan."
      }
    },
    defaultContext: {
      friction: "Kebutuhanmu akan kesempurnaan informasi bisa menghambat langkah pertamamu.",
      strategies: ["Ingatlah bahwa 'selesai lebih baik daripada sempurna'.", "Sederhanakan masalah besar menjadi langkah kecil.", "Cari waktu khusus untuk berpikir tanpa gangguan."],
      concretePaths: ["Peneliti", "Analis sistem", "Arsitek"],
      reflectionQuestions: ["Apakah dunia bergerak terlalu cepat untuk analisismu?", "Bagaimana kamu menciptakan pulau ketenangan?"],
      smallStep: "Matikan notifikasi selama 2 jam hari ini untuk fokus mendalami satu hal."
    }
  },
  [Archetype.EXECUTOR]: {
    description: "Kamu adalah seorang Pelaksana. Bagimu, hasil nyata adalah yang terpenting. Kamu cenderung langsung bertindak dan merasa puas saat tugas selesai.",
    strengths: ["Produktivitas tinggi", "Fokus pada solusi praktis", "Keandalan tinggi"],
    goalContexts: {
      "Ingin membangun bisnis": {
        friction: "Kamu mungkin terlalu fokus pada tugas harian sehingga lupa strategi jangka panjang.",
        strategies: ["Alokasikan waktu tinjauan strategi mingguan.", "Gunakan sistem manajemen tugas untuk delegasi.", "Pahami 'mengapa' di balik setiap tugas."],
        concretePaths: ["Bisnis ritel", "Layanan jasa profesional", "Manajemen proyek"],
        reflectionQuestions: ["Apakah kamu sibuk mengerjakan hal yang benar?", "Kapan terakhir kali kamu bertanya 'ada cara lebih cerdas'?"],
        smallStep: "Buat satu SOP untuk tugas yang paling sering kamu lakukan."
      }
    },
    defaultContext: {
      friction: "Keinginanmu untuk terus bergerak bisa membuatmu kurang reflektif terhadap kesalahan berulang.",
      strategies: ["Lakukan evaluasi singkat setelah proyek besar.", "Jangan takut berhenti sejenak jika arah tidak jelas.", "Bangun sistem yang bekerja otomatis."],
      concretePaths: ["Manajer operasional", "Spesialis logistik", "Teknisi lapangan"],
      reflectionQuestions: ["Apakah kamu merasa bersalah jika tidak melakukan apa-apa?", "Bagaimana membedakan gerak dan kemajuan?"],
      smallStep: "Duduk diam tanpa melakukan apapun selama 10 menit hari ini."
    }
  },
  [Archetype.STRATEGIST]: {
    description: "Kamu adalah seorang Strategist. Kamu memiliki ketahanan tinggi terhadap ketidakpastian dan mampu menavigasi situasi yang kompleks dengan tenang.",
    strengths: ["Ketenangan di bawah tekanan", "Visi strategis", "Kemampuan adaptasi tinggi"],
    goalContexts: {
      "Ingin membangun bisnis": {
        friction: "Kamu mungkin terlalu nyaman dengan ketidakpastian sehingga kurang disiplin dalam membangun struktur yang kokoh.",
        strategies: ["Fokus pada membangun fondasi yang stabil.", "Gunakan visimu untuk memimpin tim melewati masa sulit.", "Tetapkan milestone yang jelas untuk mengukur kemajuan."],
        concretePaths: ["Founder startup", "Manajer krisis", "Penasihat investasi"],
        reflectionQuestions: ["Apakah fleksibilitasmu menghambat konsistensi?", "Bagaimana kamu bisa membuat struktur tanpa mematikan kreativitas?"],
        smallStep: "Tentukan satu target utama untuk bulan depan dan tuliskan 3 langkah konkretnya."
      }
    },
    defaultContext: {
      friction: "Kemampuanmu menghadapi ketidakpastian bisa membuatmu terlihat kurang fokus bagi orang lain.",
      strategies: ["Komunikasikan visimu dengan lebih jelas kepada tim.", "Gunakan data untuk mendukung insting strategismu.", "Cari tantangan yang membutuhkan pemecahan masalah kompleks."],
      concretePaths: ["Konsultan manajemen", "Perencana strategis", "Wirausaha serial"],
      reflectionQuestions: ["Bagaimana kamu bisa membantu orang lain merasa aman di tengah ketidakpastian?", "Apa risiko terbesar yang sedang kamu hadapi?"],
      smallStep: "Identifikasi satu ketidakpastian dalam hidupmu saat ini dan buatlah rencana cadangan (Plan B)."
    }
  },
  [Archetype.CONNECTOR]: {
    description: "Kamu adalah seorang Penghubung. Kamu melihat nilai dalam hubungan antarmanusia dan merasa paling berenergi saat berkolaborasi.",
    strengths: ["Empati tinggi", "Komunikasi persuasif", "Pintar membangun jaringan"],
    goalContexts: {
      "Ingin membangun bisnis": {
        friction: "Kamu mungkin kesulitan mengambil keputusan tegas yang tidak populer demi menjaga perasaan orang lain.",
        strategies: ["Bangun bisnis berbasis komunitas.", "Cari mitra operasional yang tegas.", "Gunakan kemampuan komunikasimu untuk branding."],
        concretePaths: ["Agensi pemasaran", "Layanan pelatihan", "Bisnis event organizer"],
        reflectionQuestions: ["Apakah kamu mengorbankan profit demi harmoni?", "Siapa di jaringanmu yang bisa membantu tujuanmu?"],
        smallStep: "Hubungi satu orang di jaringanmu hari ini hanya untuk menawarkan bantuan."
      }
    },
    defaultContext: {
      friction: "Ketergantungan pada interaksi sosial bisa mengganggu produktivitas jika lingkungan tidak mendukung.",
      strategies: ["Cari lingkungan kerja kolaboratif.", "Belajarlah berkata 'tidak' pada permintaan yang tidak relevan.", "Gunakan jejaring untuk mencari solusi."],
      concretePaths: ["Hubungan masyarakat", "Partnership Manager", "Pekerja sosial"],
      reflectionQuestions: ["Apakah kamu merasa kesepian jika bekerja sendiri?", "Bagaimana menyeimbangkan waktu untuk orang lain dan diri sendiri?"],
      smallStep: "Jadwalkan satu waktu 'me-time' di kalendermu minggu ini."
    }
  }
};
