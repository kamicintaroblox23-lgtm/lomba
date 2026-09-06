# YJ Store

**LIVE DEMO**  
Link URL : https://illustrious-travesseiro-d6bcb7.netlify.app

## Latar Belakang

Dalam kehidupan sehari-hari, pengguna seringkali harus mencari produk yang sama di berbagai e-commerce secara satu per satu. Ketika produk yang diinginkan tidak ditemukan di satu platform, pengguna perlu berpindah ke aplikasi lain dan mengulangi proses pencarian dari awal — hal ini memakan waktu dan cukup merepotkan.

Saat ini sudah terdapat layanan serupa seperti Google Shopping yang membantu pengguna membandingkan produk dari berbagai marketplace. Namun, layanan tersebut sebagian besar dioptimalkan untuk pengguna di luar Indonesia, karena hasil pencarian sering kali menampilkan produk dari Amazon, eBay, atau marketplace lain yang jarang digunakan oleh masyarakat Indonesia.

Oleh karena itu, kami membuat **YJ Store** — sebuah platform perbandingan produk yang dirancang khusus untuk pengguna lokal Indonesia dan Malaysia. YJ Store membantu pengguna mencari dan membandingkan harga produk dari beberapa marketplace populer (Shopee, Tokopedia, Lazada, TikTok Shop) dalam satu antarmuka. Selain itu, YJ Store dilengkapi dengan fitur AI Shopping Assistant untuk memberikan rekomendasi produk, desain antarmuka yang modern dan responsif, serta dukungan multi-bahasa dan multi-wilayah agar lebih mudah diakses oleh berbagai kalangan.

## Penjelasan Aplikasi

YJ Store adalah storefront perbandingan produk yang membantu pengguna menemukan produk dari beberapa marketplace (Shopee, Tokopedia, Lazada, TikTok Shop) melalui satu antarmuka. Aplikasi menyediakan pencarian produk, chat AI shopping assistant, perbandingan harga, keranjang belanja, rekomendasi personal, dan mendukung 4 bahasa (Indonesia, English, Melayu, 中文) dengan beberapa wilayah (ID, MY).

Konsep ini mendukung ekonomi digital dan UMKM dengan membuat informasi produk lebih mudah dibandingkan dan diakses. Aplikasi berjalan tanpa akun pengguna dan tidak memproses pembayaran.

## Teknologi

- **Node.js** CommonJS untuk server HTTP dan API pencarian.
- **HTML, CSS, JavaScript** vanilla untuk antarmuka responsif (tanpa framework).
- **SerpAPI** (opsional) untuk hasil pencarian produk live dari Google Shopping.
- **Google Gemini** (opsional) untuk AI shopping assistant — chat yang bisa menjawab pertanyaan belanja dan merekomendasikan produk.
- **Unsplash API** (opsional) untuk pencarian gambar produk otomatis berdasarkan kategori.
- Katalog lokal multi-bahasa digunakan sebagai fallback tanpa API key.
- `localStorage` digunakan untuk keranjang belanja per-wilayah, preferensi bahasa/wilayah, riwayat pencarian, dan profil rekomendasi.
- Light/dark theme toggle dengan persistensi di browser.

## Fitur Utama

- **Pencarian lintas marketplace** — mencari produk dari Shopee, Tokopedia, Lazada, dan TikTok Shop dalam satu kotak pencarian.
- **AI Shopping Assistant** — chat AI berbasis Gemini yang menjawab pertanyaan belanja dan merekomendasikan produk berdasarkan katalog.
- **Multi-bahasa** — mendukung Bahasa Indonesia, English, Bahasa Melayu, dan 中文.
- **Multi-wilayah** — Indonesia (ID) dan Malaysia (MY), dengan mata uang dan pengaturan regional masing-masing.
- **Keranjang belanja per-wilayah** — setiap wilayah punya keranjang tersimpan terpisah.
- **Rekomendasi personal** — rekomendasi produk berdasarkan riwayat pencarian, klik, dan isi keranjang.
- **Light/dark theme** — toggle tema terang dan gelap.
- **Fallback otomatis** — saat API tidak tersedia, menggunakan katalog lokal dengan nama produk multi-bahasa dan harga realistis.
- **Pemilihan gambar berdasarkan kategori** — gambar produk diambil dari Unsplash sesuai kategori barang (elektronik, sepatu, makanan, dll).
- **Deduplikasi produk** — berdasarkan nama, toko, marketplace, dan harga.
- **Keamanan** — header keamanan (CSP, HSTS), rate limit API, validasi URL marketplace, credential hanya di environment variable.

## Struktur Folder

```
├── public/
│   ├── index.html        # Halaman utama
│   ├── app.js            # Logika frontend (pencarian, keranjang, AI, i18n, rekomendasi)
│   ├── styles.css        # Styling (light/dark mode, responsif)
│   └── assets/           # Gambar kategori UI dan placeholder
├── server/
│   └── server.js         # Server HTTP, proxy API, AI chat endpoint
├── package.json          # Konfigurasi dan dependencies
├── package-lock.json     # Lockfile versi dependencies
├── .env.example          # Template environment variable
├── .gitignore
├── LICENSE               # MIT License
├── Buka-YJ-Store.cmd     # Launcher Windows
└── README.md             # Dokumentasi
```

## Cara Instalasi

1. Pastikan **Node.js 18** atau lebih baru tersedia.
2. Clone repositori ini:
   ```bash
   git clone https://github.com/username/yj-store.git
   cd yj-store
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Salin `.env.example` menjadi `.env`:
   ```bash
   cp .env.example .env
   ```
5. Isi API key di `.env` sesuai kebutuhan:
   - `SERPAPI_KEY` — untuk pencarian produk live (opsional, tanpa key pakai katalog lokal).
   - `GEMINI_API_KEY` — untuk AI shopping assistant (opsional).
   - `UNSPLASH_ACCESS_KEY` — untuk gambar produk dari Unsplash (opsional).

## Cara Penggunaan

Jalankan server:
```bash
npm start
```

Buka browser dan akses:
```
http://127.0.0.1:3000
```

Gunakan kotak pencarian untuk mencari produk, atau klik kategori untuk browsing. Tautan produk mengarah ke halaman pencarian atau produk di marketplace terkait.

Cek status server:
```bash
curl http://127.0.0.1:3000/health
```

Alternatif: gunakan `Buka-YJ-Store.cmd` untuk menjalankan langsung di Windows.

## Privasi dan Keamanan

Aplikasi tidak meminta akun, password, pembayaran, atau data identitas pengguna. Preferensi dan riwayat disimpan lokal di browser dan dapat dihapus dari pengaturan. API key tidak pernah disimpan di frontend atau source code.

Jangan pernah commit `.env` atau menaruh API key langsung di source code. Credential yang pernah terekspos harus di-revoke dan dibuat ulang dari dashboard penyedia API.

## Hak Cipta Aset

Gambar produk berasal dari Unsplash sesuai Unsplash License; source URLs dipertahankan agar asal aset dapat diaudit. Hasil produk live menggunakan metadata pencarian dari Google Shopping dan tautan menuju marketplace terkait. Repository ini tidak boleh berisi `.env`, credential, atau aset berlisensi yang tidak memiliki izin penggunaan.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Team RyKAD
```
