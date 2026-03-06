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
        ],
        concretePaths: [
          "Agensi kreatif atau studio desain",
          "Startup teknologi tahap awal (Early-stage)",
          "Bisnis berbasis tren atau produk musiman",
          "Kreator konten atau media baru"
        ],
        reflectionQuestions: [
          "Apakah kamu sering berhenti di tengah jalan karena ada ide baru yang lebih menarik?",
          "Siapa orang yang bisa membantumu menjaga agar ide-idemu tetap membumi?"
        ],
        smallStep: "Pilih satu ide bisnismu yang paling sederhana dan buatlah satu postingan media sosial untuk mengetes minat pasar dalam 24 jam ke depan."
      },
      "Ingin meningkatkan skill tertentu": {
        friction: "Mempelajari skill seringkali membutuhkan pengulangan yang membosankan. Kamu mungkin tergoda untuk pindah ke skill lain sebelum benar-benar menguasai yang satu ini.",
        strategies: [
          "Gunakan metode belajar yang variatif (video, praktik, diskusi) agar tidak bosan.",
          "Cari cara untuk langsung menerapkan skill tersebut pada proyek nyata yang menarik bagimu.",
          "Tetapkan target jangka pendek yang menantang agar rasa ingin tahumu tetap terjaga."
        ],
        concretePaths: [
          "Belajar melalui hackathon atau kompetisi",
          "Mengikuti kursus kilat (bootcamp) yang intensif",
          "Belajar secara otodidak dengan proyek-proyek kecil yang berbeda setiap minggu"
        ],
        reflectionQuestions: [
          "Kapan terakhir kali kamu benar-benar menyelesaikan satu kursus hingga akhir?",
          "Apa satu skill yang jika kamu kuasai akan membuka 10 pintu peluang baru?"
        ],
        smallStep: "Cari satu tutorial singkat tentang skill tersebut dan selesaikan dalam satu duduk hari ini."
      },
      "Ingin mendapatkan stabilitas finansial": {
        friction: "Stabilitas membutuhkan disiplin dan jalur yang terprediksi, sementara kamu cenderung ingin mencoba banyak peluang baru yang belum tentu stabil.",
        strategies: [
          "Coba beberapa peluang kecil secara paralel untuk menemukan mana yang paling menguntungkan.",
          "Setelah menemukan satu jalur yang bekerja, paksa dirimu untuk fokus di sana selama periode tertentu.",
          "Alokasikan 'dana eksperimen' agar kamu tetap bisa mencoba ide baru tanpa mengganggu keamanan finansial utamamu."
        ],
        concretePaths: [
          "Pekerjaan freelance di beberapa bidang kreatif",
          "Investasi pada aset yang memiliki potensi pertumbuhan tinggi namun berisiko",
          "Membangun beberapa sumber pendapatan kecil (side hustles)"
        ],
        reflectionQuestions: [
          "Apakah keinginanmu mencoba hal baru sebenarnya adalah bentuk pelarian dari tanggung jawab finansial?",
          "Bagaimana jika kamu menetapkan satu 'jalur utama' dan membatasi eksplorasi hanya di waktu luang?"
        ],
        smallStep: "Catat semua sumber pengeluaranmu bulan lalu dan identifikasi satu pengeluaran 'eksplorasi' yang bisa kamu hemat untuk ditabung."
      }
    },
    defaultContext: {
      friction: "Kecenderunganmu untuk terus mencari hal baru bisa membuatmu kehilangan fokus pada apa yang sedang dikerjakan saat ini.",
      strategies: [
        "Terapkan aturan 'satu ide besar dalam satu waktu' agar energimu tidak tersebar.",
        "Dokumentasikan ide-ide barumu dalam sebuah jurnal agar tidak hilang, tapi jangan langsung dikerjakan.",
        "Cari lingkungan yang menghargai inovasi dan perubahan cepat."
      ],
      concretePaths: [
        "Konsultan inovasi",
        "Pengembang produk baru",
        "Penulis atau jurnalis lepas",
        "Penyelenggara acara kreatif"
      ],
      reflectionQuestions: [
        "Apakah kamu merasa tercekik oleh rutinitas yang terlalu kaku?",
        "Bagaimana kamu bisa menyisipkan elemen kejutan dalam pekerjaan harianmu?"
      ],
      smallStep: "Tuliskan 3 ide liar yang kamu miliki hari ini di sebuah buku catatan, lalu lupakan mereka sampai minggu depan."
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
        ],
        concretePaths: [
          "Bisnis konsultasi atau penasihat strategis",
          "Produk digital berbasis pengetahuan (kursus online, e-book)",
          "Layanan riset pasar atau analisis data",
          "Pengembangan perangkat lunak khusus (niche software)"
        ],
        reflectionQuestions: [
          "Apakah kamu sering tertahan karena terlalu lama menganalisis?",
          "Atau sebenarnya lingkungan sekitarmu yang tidak memberi ruang untuk berpikir mendalam?"
        ],
        smallStep: "Coba buat satu keputusan kecil dalam 48 jam tanpa analisis tambahan. Gunakan ini sebagai eksperimen untuk melatih ritme eksekusi."
      },
      "Ingin mendapatkan stabilitas finansial": {
        friction: "Tujuan finansial sering membutuhkan keputusan yang cukup cepat. Karena kamu cenderung menganalisis cukup lama, kadang peluang emas bisa terlewat.",
        strategies: [
          "Fokuslah pada membangun keahlian yang bernilai tinggi (high-value skill) terlebih dahulu.",
          "Pahami sistem investasi secara mendalam agar kamu merasa aman saat menempatkan uangmu.",
          "Buatlah rencana finansial berbasis data yang bisa kamu tinjau secara berkala."
        ],
        concretePaths: [
          "Investasi jangka panjang berbasis nilai (Value Investing)",
          "Membangun portofolio aset intelektual",
          "Bekerja di bidang keuangan, audit, atau perencanaan strategis"
        ],
        reflectionQuestions: [
          "Apakah ketakutanmu akan risiko finansial sebenarnya berasal dari kurangnya data atau kurangnya keberanian melangkah?",
          "Kapan terakhir kali kamu mengambil risiko yang sudah kamu hitung dengan matang?"
        ],
        smallStep: "Baca satu laporan tahunan perusahaan atau satu buku tentang manajemen keuangan dasar hari ini."
      },
      "Ingin meningkatkan skill tertentu": {
        friction: "Kamu mungkin menghabiskan terlalu banyak waktu pada teori dan kurang pada praktik nyata.",
        strategies: [
          "Gunakan metode belajar yang terstruktur dan mendalam.",
          "Paksa dirimu untuk mempraktikkan teori yang baru dipelajari dalam waktu 24 jam.",
          "Cari mentor yang bisa memberikan tantangan teknis yang sesuai dengan level pemahamanmu."
        ],
        concretePaths: [
          "Mengambil sertifikasi profesional yang diakui",
          "Menulis artikel atau jurnal tentang apa yang sedang kamu pelajari",
          "Mengikuti program pendidikan formal atau gelar lanjutan"
        ],
        reflectionQuestions: [
          "Apakah kamu belajar karena butuh, atau karena belajar adalah cara untuk menghindari aksi?",
          "Bagaimana kamu bisa mengukur kemajuan belajarmu secara objektif?"
        ],
        smallStep: "Tulis ringkasan satu halaman tentang satu konsep sulit yang baru kamu pelajari, seolah-olah kamu menjelaskannya pada anak kecil."
      }
    },
    defaultContext: {
      friction: "Kebutuhanmu akan kesempurnaan informasi bisa menghambat langkah pertamamu.",
      strategies: [
        "Ingatlah bahwa 'selesai lebih baik daripada sempurna'.",
        "Gunakan kerangka berpikir yang membantu menyederhanakan masalah besar menjadi langkah kecil.",
        "Cari waktu khusus untuk berpikir tanpa gangguan agar kualitas analisismu tetap terjaga."
      ],
      concretePaths: [
        "Peneliti atau akademisi",
        "Analis sistem atau data",
        "Arsitek atau perencana kota",
        "Penulis buku non-fiksi"
      ],
      reflectionQuestions: [
        "Apakah kamu merasa lelah karena dunia bergerak terlalu cepat untuk analisismu?",
        "Bagaimana kamu bisa menciptakan 'pulau ketenangan' di tengah kesibukanmu?"
      ],
      smallStep: "Matikan semua notifikasi selama 2 jam hari ini untuk fokus mendalami satu hal yang paling penting bagimu."
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
        ],
        concretePaths: [
          "Bisnis ritel atau e-commerce dengan sistem yang jelas",
          "Layanan jasa profesional (cleaning, logistik, konstruksi)",
          "Waralaba (franchise) yang sudah memiliki sistem teruji",
          "Manajemen proyek atau operasional"
        ],
        reflectionQuestions: [
          "Apakah kamu sibuk mengerjakan hal yang benar, atau hanya sekadar sibuk?",
          "Kapan terakhir kali kamu berhenti sejenak untuk bertanya 'apakah ada cara yang lebih cerdas'?"
        ],
        smallStep: "Identifikasi satu tugas yang paling sering kamu lakukan, lalu buatlah panduan tertulis (SOP) agar tugas itu bisa dilakukan lebih cepat atau didelegasikan."
      },
      "Ingin mendapatkan stabilitas finansial": {
        friction: "Kamu mungkin tergoda untuk mengambil terlalu banyak pekerjaan demi pendapatan instan, yang bisa menyebabkan kelelahan (burnout).",
        strategies: [
          "Bangun rutinitas pengelolaan keuangan yang konsisten dan otomatis.",
          "Pilihlah jalur pendapatan yang stabil dan memiliki sistem yang sudah teruji.",
          "Hindari terlalu banyak eksperimen finansial yang berisiko tinggi tanpa rencana cadangan."
        ],
        concretePaths: [
          "Pekerjaan dengan jenjang karir yang jelas di perusahaan besar",
          "Membangun aset properti atau bisnis yang menghasilkan arus kas rutin",
          "Menabung secara otomatis melalui sistem potong gaji"
        ],
        reflectionQuestions: [
          "Apakah kamu bekerja untuk uang, atau uang yang bekerja untukmu?",
          "Bagaimana kamu bisa meningkatkan nilai per jam kerjamu daripada menambah jam kerja?"
        ],
        smallStep: "Aktifkan fitur autodebet untuk tabungan atau investasi hari ini, meskipun jumlahnya kecil."
      }
    },
    defaultContext: {
      friction: "Keinginanmu untuk terus bergerak bisa membuatmu kurang reflektif terhadap kesalahan yang berulang.",
      strategies: [
        "Lakukan evaluasi singkat setelah menyelesaikan proyek besar.",
        "Jangan takut untuk berhenti sejenak jika arah pekerjaanmu mulai tidak jelas.",
        "Gunakan energimu untuk membangun sistem yang bisa bekerja secara otomatis."
      ],
      concretePaths: [
        "Manajer operasional",
        "Spesialis logistik",
        "Teknisi atau ahli lapangan",
        "Atlet atau pelatih fisik"
      ],
      reflectionQuestions: [
        "Apakah kamu merasa bersalah jika tidak melakukan apa-apa dalam satu jam?",
        "Bagaimana kamu bisa membedakan antara 'gerak' dan 'kemajuan'?"
      ],
      smallStep: "Duduk diam tanpa melakukan apapun selama 10 menit hari ini, hanya untuk melatih kesadaran diri."
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
        ],
        concretePaths: [
          "Bisnis berbasis komunitas atau keanggotaan",
          "Agensi pemasaran atau hubungan masyarakat",
          "Layanan pelatihan, coaching, atau mentoring",
          "Bisnis event organizer atau wedding planner"
        ],
        reflectionQuestions: [
          "Apakah kamu sering mengorbankan keuntungan bisnis demi menjaga perasaan orang lain?",
          "Siapa di jaringanmu yang bisa membantumu mencapai tujuan bisnismu lebih cepat?"
        ],
        smallStep: "Hubungi satu orang di jaringanmu hari ini hanya untuk bertanya kabar dan menawarkan bantuan tanpa mengharap imbalan."
      },
      "Ingin membantu atau membimbing orang lain": {
        friction: "Kamu mungkin terlalu banyak memberikan energimu untuk orang lain sehingga lupa mengurus kebutuhanmu sendiri.",
        strategies: [
          "Tetapkan batasan yang jelas tentang kapan dan bagaimana kamu membantu orang lain.",
          "Fokuslah pada membangun sistem bimbingan yang bisa menjangkau banyak orang sekaligus.",
          "Cari komunitas sesama mentor untuk saling mendukung dan berbagi energi."
        ],
        concretePaths: [
          "Guru, dosen, atau instruktur",
          "Psikolog, konselor, atau terapis",
          "Pemimpin komunitas atau organisasi nirlaba",
          "Manajer sumber daya manusia (HRD)"
        ],
        reflectionQuestions: [
          "Apakah kamu membantu orang lain untuk mengisi kekosongan dalam dirimu sendiri?",
          "Bagaimana kamu bisa membantu orang lain tanpa membuat mereka tergantung padamu?"
        ],
        smallStep: "Tuliskan satu pesan apresiasi yang tulus kepada seseorang yang pernah membantumu di masa lalu."
      }
    },
    defaultContext: {
      friction: "Ketergantunganmu pada interaksi sosial bisa membuat produktivitasmu terganggu jika lingkunganmu tidak mendukung.",
      strategies: [
        "Cari lingkungan kerja yang kolaboratif dan suportif.",
        "Belajarlah untuk berkata 'tidak' pada permintaan yang tidak sesuai dengan tujuan utamamu.",
        "Gunakan jejaringmu untuk menemukan solusi dari masalah yang sedang kamu hadapi."
      ],
      concretePaths: [
        "Hubungan masyarakat (PR)",
        "Manajer kemitraan (Partnership Manager)",
        "Pekerja sosial",
        "Koordinator relawan"
      ],
      reflectionQuestions: [
        "Apakah kamu merasa kesepian jika harus bekerja sendirian dalam waktu lama?",
        "Bagaimana kamu bisa menyeimbangkan antara waktu untuk orang lain dan waktu untuk dirimu sendiri?"
      ],
      smallStep: "Jadwalkan satu waktu 'me-time' di kalendermu minggu ini dan perlakukan itu sebagai janji yang tidak bisa dibatalkan."
    }
  }
};
