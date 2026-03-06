export enum Tendency {
  EXPLORER = 'Penjelajah Ide',
  DEEP_THINKER = 'Pemikir Mendalam',
  EXECUTOR = 'Pelaksana',
  CONNECTOR = 'Penghubung',
}

export interface Option {
  text: string;
  tendency: Tendency;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Ketika mempelajari sesuatu yang baru, kamu biasanya lebih suka:",
    options: [
      { text: "Mencoba langsung", tendency: Tendency.EXECUTOR },
      { text: "Membaca dan memahami dulu", tendency: Tendency.DEEP_THINKER },
      { text: "Melihat contoh orang lain", tendency: Tendency.EXPLORER },
      { text: "Berdiskusi dengan orang lain", tendency: Tendency.CONNECTOR },
    ],
  },
  {
    id: 2,
    text: "Jika menghadapi masalah yang sulit, kamu biasanya:",
    options: [
      { text: "Langsung mencoba berbagai solusi", tendency: Tendency.EXECUTOR },
      { text: "Menganalisis dulu sebelum bertindak", tendency: Tendency.DEEP_THINKER },
      { text: "Mencari referensi atau contoh", tendency: Tendency.EXPLORER },
      { text: "Meminta saran orang lain", tendency: Tendency.CONNECTOR },
    ],
  },
  {
    id: 3,
    text: "Ketika bekerja dalam proyek, kamu lebih nyaman:",
    options: [
      { text: "Bereksperimen dengan ide baru", tendency: Tendency.EXPLORER },
      { text: "Menyempurnakan sesuatu yang sudah ada", tendency: Tendency.DEEP_THINKER },
      { text: "Menjalankan rencana dengan rapi", tendency: Tendency.EXECUTOR },
      { text: "Membantu orang lain menyelesaikan pekerjaan", tendency: Tendency.CONNECTOR },
    ],
  },
  {
    id: 4,
    text: "Jika suatu rencana tidak berjalan sesuai harapan:",
    options: [
      { text: "Mencoba cara lain", tendency: Tendency.EXPLORER },
      { text: "Berhenti sejenak untuk berpikir ulang", tendency: Tendency.DEEP_THINKER },
      { text: "Mencari informasi tambahan", tendency: Tendency.EXECUTOR },
      { text: "Berdiskusi dengan orang lain", tendency: Tendency.CONNECTOR },
    ],
  },
  {
    id: 5,
    text: "Kamu biasanya merasa paling puas ketika:",
    options: [
      { text: "Menemukan ide baru", tendency: Tendency.EXPLORER },
      { text: "Memahami sesuatu secara mendalam", tendency: Tendency.DEEP_THINKER },
      { text: "Menyelesaikan sesuatu dengan baik", tendency: Tendency.EXECUTOR },
      { text: "Melihat orang lain terbantu", tendency: Tendency.CONNECTOR },
    ],
  },
  {
    id: 6,
    text: "Saat berada dalam tim, peran apa yang paling sering kamu ambil?",
    options: [
      { text: "Pemberi ide-ide segar", tendency: Tendency.EXPLORER },
      { text: "Penyusun strategi dan detail", tendency: Tendency.DEEP_THINKER },
      { text: "Orang yang memastikan tugas selesai", tendency: Tendency.EXECUTOR },
      { text: "Penengah atau penyemangat tim", tendency: Tendency.CONNECTOR },
    ],
  },
  {
    id: 7,
    text: "Bagaimana caramu mengatur waktu?",
    options: [
      { text: "Fleksibel, mengikuti aliran ide", tendency: Tendency.EXPLORER },
      { text: "Terstruktur dengan jadwal yang jelas", tendency: Tendency.DEEP_THINKER },
      { text: "Fokus pada daftar tugas harian", tendency: Tendency.EXECUTOR },
      { text: "Menyesuaikan dengan kebutuhan orang lain", tendency: Tendency.CONNECTOR },
    ],
  },
  {
    id: 8,
    text: "Apa yang paling membuatmu semangat di pagi hari?",
    options: [
      { text: "Kemungkinan menemukan hal baru", tendency: Tendency.EXPLORER },
      { text: "Kesempatan untuk belajar hal sulit", tendency: Tendency.DEEP_THINKER },
      { text: "Keinginan untuk menuntaskan pekerjaan", tendency: Tendency.EXECUTOR },
      { text: "Rencana untuk bertemu atau membantu teman", tendency: Tendency.CONNECTOR },
    ],
  },
  {
    id: 9,
    text: "Ketika menerima kritik, reaksi pertamamu adalah:",
    options: [
      { text: "Melihatnya sebagai sudut pandang baru", tendency: Tendency.EXPLORER },
      { text: "Memikirkannya secara logis dan mendalam", tendency: Tendency.DEEP_THINKER },
      { text: "Segera memperbaikinya", tendency: Tendency.EXECUTOR },
      { text: "Membicarakannya dengan orang tersebut", tendency: Tendency.CONNECTOR },
    ],
  },
  {
    id: 10,
    text: "Buku atau konten apa yang paling menarik bagimu?",
    options: [
      { text: "Inspirasi dan kreativitas", tendency: Tendency.EXPLORER },
      { text: "Sains, filsafat, atau panduan teknis", tendency: Tendency.DEEP_THINKER },
      { text: "Tips praktis dan produktivitas", tendency: Tendency.EXECUTOR },
      { text: "Biografi atau kisah kemanusiaan", tendency: Tendency.CONNECTOR },
    ],
  },
];

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
}

export interface AnalysisResult {
  description: string;
  strengths: string[];
  goalContexts: Record<string, GoalContext>;
  defaultContext: GoalContext;
}

export const ANALYSIS_DATA: Record<Tendency, AnalysisResult> = {
  [Tendency.EXPLORER]: {
    description: "Kamu adalah seorang Penjelajah Ide. Kamu cenderung melihat dunia sebagai rangkaian kemungkinan yang tak terbatas. Kamu merasa paling hidup ketika menemukan konsep baru atau mencoba cara-cara yang belum pernah dilakukan sebelumnya.",
    strengths: ["Kreativitas tanpa batas", "Kemampuan adaptasi yang cepat", "Berani mengambil risiko pada ide baru"],
    goalContexts: {
      "Ingin membangun bisnis": {
        friction: "Bisnis membutuhkan konsistensi dan rutinitas yang seringkali terasa membosankan bagi jiwa penjelajahmu. Kamu mungkin cepat bosan setelah fase ide awal selesai.",
        strategies: [
          "Cari rekan bisnis yang kuat dalam operasional (Pelaksana) untuk menjaga stabilitas.",
          "Fokuslah pada inovasi produk atau strategi pemasaran yang kreatif.",
          "Gunakan sistem 'batching' untuk menyelesaikan tugas administratif agar kamu punya waktu bebas untuk eksplorasi."
        ]
      },
      "Ingin meningkatkan skill tertentu": {
        friction: "Mempelajari skill seringkali membutuhkan pengulangan yang membosankan. Kamu mungkin tergoda untuk pindah ke skill lain sebelum benar-benar menguasai yang satu ini.",
        strategies: [
          "Gunakan metode belajar yang variatif (video, praktik, diskusi) agar tidak bosan.",
          "Cari cara untuk langsung menerapkan skill tersebut pada proyek nyata yang menarik bagimu.",
          "Tetapkan target jangka pendek yang menantang agar rasa ingin tahumu tetap terjaga."
        ]
      },
      "Ingin mendapatkan stabilitas finansial": {
        friction: "Stabilitas membutuhkan disiplin dan jalur yang terprediksi, sementara kamu cenderung ingin mencoba banyak peluang baru yang belum tentu stabil.",
        strategies: [
          "Coba beberapa peluang kecil secara paralel untuk menemukan mana yang paling menguntungkan.",
          "Setelah menemukan satu jalur yang bekerja, paksa dirimu untuk fokus di sana selama periode tertentu.",
          "Alokasikan 'dana eksperimen' agar kamu tetap bisa mencoba ide baru tanpa mengganggu keamanan finansial utamamu."
        ]
      },
      "Ingin membuat proyek atau produk": {
        friction: "Kamu sangat hebat dalam memulai, tapi seringkali kesulitan dalam menyelesaikan detail akhir yang rumit.",
        strategies: [
          "Buatlah versi minimal (MVP) secepat mungkin agar kamu bisa melihat hasil nyata.",
          "Gunakan alat bantu otomatisasi untuk menangani detail teknis yang repetitif.",
          "Bekerjalah dalam sprint pendek agar antusiasmemu tetap tinggi."
        ]
      }
    },
    defaultContext: {
      friction: "Kecenderunganmu untuk terus mencari hal baru bisa membuatmu kehilangan fokus pada apa yang sedang dikerjakan saat ini.",
      strategies: [
        "Terapkan aturan 'satu ide besar dalam satu waktu' agar energimu tidak tersebar.",
        "Dokumentasikan ide-ide barumu dalam sebuah jurnal agar tidak hilang, tapi jangan langsung dikerjakan.",
        "Cari lingkungan yang menghargai inovasi dan perubahan cepat."
      ]
    }
  },
  [Tendency.DEEP_THINKER]: {
    description: "Kamu adalah seorang Pemikir Mendalam. Kamu cenderung memahami segala sesuatu secara menyeluruh sebelum mengambil keputusan. Kamu merasa paling nyaman ketika memiliki gambaran yang jelas dan logis tentang suatu sistem atau ide.",
    strengths: ["Analisis yang tajam dan akurat", "Kemampuan melihat pola yang rumit", "Ketekunan dalam mempelajari hal sulit"],
    goalContexts: {
      "Ingin membangun bisnis": {
        friction: "Dunia bisnis seringkali menuntut keputusan cepat dengan informasi yang tidak lengkap, sementara kamu ingin menganalisis semuanya hingga sempurna.",
        strategies: [
          "Bangun bisnis yang berbasis pada keahlian khusus atau riset mendalam.",
          "Tetapkan batas waktu untuk riset agar kamu tidak terjebak dalam 'analysis paralysis'.",
          "Bekerjasamalah dengan orang yang berorientasi pada aksi (Pelaksana) untuk mendorong kemajuan."
        ]
      },
      "Ingin mendapatkan stabilitas finansial": {
        friction: "Tujuan finansial sering membutuhkan keputusan yang cukup cepat. Karena kamu cenderung menganalisis cukup lama, kadang peluang emas bisa terlewat.",
        strategies: [
          "Fokuslah pada membangun keahlian yang bernilai tinggi (high-value skill) terlebih dahulu.",
          "Pahami sistem investasi secara mendalam agar kamu merasa aman saat menempatkan uangmu.",
          "Buatlah rencana finansial berbasis data yang bisa kamu tinjau secara berkala."
        ]
      },
      "Ingin meningkatkan skill tertentu": {
        friction: "Kamu mungkin menghabiskan terlalu banyak waktu pada teori dan kurang pada praktik nyata.",
        strategies: [
          "Gunakan metode belajar yang terstruktur dan mendalam.",
          "Paksa dirimu untuk mempraktikkan teori yang baru dipelajari dalam waktu 24 jam.",
          "Cari mentor yang bisa memberikan tantangan teknis yang sesuai dengan level pemahamanmu."
        ]
      },
      "Ingin membantu atau membimbing orang lain": {
        friction: "Kamu mungkin cenderung memberikan penjelasan yang terlalu teknis atau rumit bagi orang lain.",
        strategies: [
          "Gunakan analogi sederhana untuk menjelaskan konsep yang kamu pahami secara mendalam.",
          "Fokuslah pada mendengarkan kebutuhan mereka sebelum memberikan solusi analitis.",
          "Jadilah mentor bagi mereka yang benar-benar ingin belajar secara serius dan mendalam."
        ]
      }
    },
    defaultContext: {
      friction: "Kebutuhanmu akan kesempurnaan informasi bisa menghambat langkah pertamamu.",
      strategies: [
        "Ingatlah bahwa 'selesai lebih baik daripada sempurna'.",
        "Gunakan kerangka berpikir yang membantu menyederhanakan masalah besar menjadi langkah kecil.",
        "Cari waktu khusus untuk berpikir tanpa gangguan agar kualitas analisismu tetap terjaga."
      ]
    }
  },
  [Tendency.EXECUTOR]: {
    description: "Kamu adalah seorang Pelaksana. Bagimu, hasil nyata adalah yang terpenting. Kamu cenderung langsung bertindak dan merasa paling puas ketika melihat tugas-tugas selesai dengan baik dan efisien.",
    strengths: ["Produktivitas yang sangat tinggi", "Fokus pada solusi praktis", "Keandalan dalam menuntaskan pekerjaan"],
    goalContexts: {
      "Ingin membangun bisnis": {
        friction: "Kamu mungkin terlalu fokus pada tugas harian sehingga lupa memperhatikan strategi jangka panjang atau arah besar bisnis.",
        strategies: [
          "Alokasikan waktu khusus setiap minggu untuk meninjau strategi dan visi bisnismu.",
          "Gunakan sistem manajemen tugas yang rapi untuk mendelegasikan pekerjaan yang repetitif.",
          "Pastikan kamu memahami 'mengapa' di balik setiap tugas agar tidak sekadar sibuk."
        ]
      },
      "Ingin mendapatkan stabilitas finansial": {
        friction: "Kamu mungkin tergoda untuk mengambil terlalu banyak pekerjaan demi pendapatan instan, yang bisa menyebabkan kelelahan (burnout).",
        strategies: [
          "Bangun rutinitas pengelolaan keuangan yang konsisten dan otomatis.",
          "Pilihlah jalur pendapatan yang stabil dan memiliki sistem yang sudah teruji.",
          "Hindari terlalu banyak eksperimen finansial yang berisiko tinggi tanpa rencana cadangan."
        ]
      },
      "Ingin meningkatkan skill tertentu": {
        friction: "Kamu mungkin ingin cepat-cepat bisa tanpa memahami dasar-dasar yang penting, yang bisa membuat skill-mu kurang kuat di masa depan.",
        strategies: [
          "Gunakan metode 'learning by doing' dengan proyek nyata.",
          "Sediakan waktu sebentar untuk membaca teori dasar sebelum langsung praktik.",
          "Gunakan checklist untuk memastikan semua bagian dari skill tersebut sudah kamu kuasai."
        ]
      },
      "Ingin membuat proyek atau produk": {
        friction: "Kamu hebat dalam membuat sesuatu jadi, tapi mungkin kurang memperhatikan sisi estetika atau pengalaman pengguna yang lebih halus.",
        strategies: [
          "Fokuslah pada pembuatan prototipe cepat untuk mendapatkan feedback.",
          "Mintalah masukan dari tipe 'Pemikir Mendalam' atau 'Penjelajah' untuk menyempurnakan konsepmu.",
          "Gunakan standar kualitas yang jelas agar hasil kerjamu tetap konsisten."
        ]
      }
    },
    defaultContext: {
      friction: "Keinginanmu untuk terus bergerak bisa membuatmu kurang reflektif terhadap kesalahan yang berulang.",
      strategies: [
        "Lakukan evaluasi singkat setelah menyelesaikan proyek besar.",
        "Jangan takut untuk berhenti sejenak jika arah pekerjaanmu mulai tidak jelas.",
        "Gunakan energimu untuk membangun sistem yang bisa bekerja secara otomatis."
      ]
    }
  },
  [Tendency.CONNECTOR]: {
    description: "Kamu adalah seorang Penghubung. Kamu cenderung melihat nilai dalam hubungan antarmanusia. Kamu merasa paling berenergi ketika bekerja bersama orang lain dan membantu mereka mencapai potensi terbaiknya.",
    strengths: ["Empati dan kecerdasan emosional", "Kemampuan komunikasi yang persuasif", "Pintar membangun jaringan dan kolaborasi"],
    goalContexts: {
      "Ingin membangun bisnis": {
        friction: "Kamu mungkin kesulitan mengambil keputusan tegas yang tidak populer atau menghadapi konflik dalam tim.",
        strategies: [
          "Bangun bisnis yang mengandalkan jaringan, komunitas, atau layanan personal.",
          "Cari mitra yang bisa menangani sisi teknis atau operasional yang dingin.",
          "Gunakan kemampuan komunikasimu untuk membangun merek yang dicintai pelanggan."
        ]
      },
      "Ingin membantu atau membimbing orang lain": {
        friction: "Kamu mungkin terlalu banyak memberikan energimu untuk orang lain sehingga lupa mengurus kebutuhanmu sendiri.",
        strategies: [
          "Tetapkan batasan yang jelas tentang kapan dan bagaimana kamu membantu orang lain.",
          "Fokuslah pada membangun sistem bimbingan yang bisa menjangkau banyak orang sekaligus.",
          "Cari komunitas sesama mentor untuk saling mendukung dan berbagi energi."
        ]
      },
      "Ingin meningkatkan skill tertentu": {
        friction: "Belajar sendirian mungkin terasa sangat membosankan dan menguras energimu.",
        strategies: [
          "Cari kelompok belajar atau komunitas yang sedang mempelajari hal yang sama.",
          "Gunakan metode belajar mengajar (belajar sesuatu lalu langsung menjelaskannya pada orang lain).",
          "Cari mentor yang bisa memberikan dukungan emosional selain bimbingan teknis."
        ]
      },
      "Ingin mendapatkan stabilitas finansial": {
        friction: "Kamu mungkin merasa tidak enak untuk menagih bayaran yang pantas atau menegosiasikan gaji.",
        strategies: [
          "Gunakan kemampuan sosialmu untuk membuka peluang kolaborasi yang menguntungkan.",
          "Pahami bahwa stabilitas finansialmu akan membantumu menolong lebih banyak orang di masa depan.",
          "Cari pekerjaan yang menghargai 'soft skill' dan kemampuan membangun hubungan."
        ]
      }
    },
    defaultContext: {
      friction: "Ketergantunganmu pada interaksi sosial bisa membuat produktivitasmu terganggu jika lingkunganmu tidak mendukung.",
      strategies: [
        "Cari lingkungan kerja yang kolaboratif dan suportif.",
        "Belajarlah untuk berkata 'tidak' pada permintaan yang tidak sesuai dengan tujuan utamamu.",
        "Gunakan jejaringmu untuk menemukan solusi dari masalah yang sedang kamu hadapi."
      ]
    }
  }
};
