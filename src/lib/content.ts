// src/lib/content.ts

// 1. Fail-fast validation untuk WhatsApp Number
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

if (!whatsappNumber) {
  throw new Error("NEXT_PUBLIC_WHATSAPP_NUMBER is required in environment variables");
}

export const siteConfig = {
  name: "BUMIVERSA",
  domain: process.env.NEXT_PUBLIC_DOMAIN || "discovery.bumiversa.dev",
  whatsappNumber, // 2. Gunakan variabel yang sudah divalidasi
};

export const pageContent = {
  hero: {
    eyebrow: "Digital Discovery",
    headline: "Punya Masalah Digital yang Belum Jelas Solusinya? Mari Kita Petakan Bersama.",
    subheadline: "Anda tidak perlu tahu apakah Anda butuh Website, AI, atau Otomasi. Tugas kami adalah mendengarkan cerita Anda, membedah akar masalahnya, dan merumuskan langkah paling masuk akal. Terkadang, solusinya bukan teknologi.",
    ctaText: "Ceritakan Masalah Anda",
  },
  reality: {
    title: "Teknologi Seharusnya Memudahkan, Bukan Menambah Kebingungan.",
    points: [
      "Saya merasa proses di tim masih manual dan melelahkan, tapi tidak tahu harus mulai memperbaikinya dari mana.",
      "Saya dengar AI bisa membantu, tapi takut berinvestasi pada tools yang akhirnya tidak dipakai.",
      "Vendor sebelumnya langsung menawarkan software mahal tanpa benar-benar memahami bagaimana bisnis saya berjalan.",
      "Saya butuh solusi digital, tapi saya belum punya gambaran bentuk akhirnya seperti apa."
    ]
  },
  process: {
    title: "Bagaimana Kami Bekerja: Dari Kekacauan Menuju Kejelasan.",
    steps: [
      {
        number: "01",
        title: "Dengarkan (Listen)",
        desc: "Apa yang sebenarnya terjadi? Kami ingin mendengar hambatan sehari-hari yang Anda alami, tanpa jargon teknis yang membingungkan."
      },
      {
        number: "02",
        title: "Petakan (Map)",
        desc: "Di mana proses, orang, informasi, dan hambatannya saling berhubungan? Kami membantu memisahkan gejala dari akar masalah."
      },
      {
        number: "03",
        title: "Pahami (Understand)",
        desc: "Apa yang sebenarnya perlu diperbaiki? Apakah ini masalah proses, cara kerja, manusia, teknologi, atau kombinasi semuanya?"
      },
      {
        number: "04",
        title: "Rancang (Design)",
        desc: "Baru kemudian kami menyusun opsi yang proporsional. Bisa berupa perbaikan SOP, solusi digital sederhana, atau arsitektur yang terukur."
      },
      {
        number: "05",
        title: "Langkah Berikutnya (Next Step)",
        desc: "Anda mendapatkan gambaran yang lebih jelas tentang masalah, pilihan yang tersedia, dan langkah paling masuk akal untuk dilakukan sekarang (membangun, memperbaiki, mencoba kecil, atau belum melakukan apa-apa)."
      }
    ]
  },
  boundary: {
    title: "Komitmen Kami pada Kejelasan Anda.",
    willGet: [
      "Perspektif luar yang membantu melihat masalah dari sudut yang berbeda.",
      "Peta jalan solusi yang realistis (termasuk estimasi upaya).",
      "Kejujuran: Jika masalah Anda bisa diselesaikan tanpa teknologi, kami akan mengatakannya."
    ],
    willNot: [
      "Memaksakan paket 'AI' atau 'Website' jika itu bukan akar solusinya.",
      "Menggunakan jargon teknis untuk membuat Anda merasa ketinggalan.",
      "Memberikan janji solusi instan sebelum kami benar-benar memahami konteks bisnis Anda."
    ]
  },
  finalCta: {
    headline: "Jangan Biarkan Masalah Kecil Menumpuk Menjadi Hambatan Besar.",
    subheadline: "Ceritakan sedikit tentang apa yang sedang Anda hadapi. Kita akan jadwalkan obrolan santai selama 30 menit untuk melihat apakah kami bisa membantu.",
    buttonText: "Mulai Obrolan Discovery via WhatsApp",
  }
};
