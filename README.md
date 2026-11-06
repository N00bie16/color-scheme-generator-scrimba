# Color Scheme Generator

Aplikasi web untuk membuat dan menjelajahi skema warna berdasarkan warna dasar yang dipilih. Proyek ini dibuat sebagai latihan pengembangan antarmuka React dan integrasi API dari kursus Scrimba.

## Fitur

- Memilih warna dasar melalui color picker.
- Memilih mode skema:
  - Monochrome
  - Monochrome Dark
  - Monochrome Light
  - Analogic
  - Complement
  - Analogic Complement
  - Triad
  - Quad
- Mengambil lima warna dari The Color API.
- Menampilkan warna dalam kolom visual beserta kode heksadesimalnya.

## Teknologi

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion
- Vitest dan Testing Library
- Playwright

## Prasyarat

- Node.js 18 atau versi yang lebih baru
- npm

## Instalasi dan Pengembangan

1. Instal dependensi:

   ```bash
   npm install
   ```

2. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

3. Buka URL lokal yang ditampilkan Vite di terminal.

## Perintah

```bash
npm run dev       # Menjalankan server pengembangan
npm run build     # Membuat build produksi
npm run preview   # Meninjau build produksi
npm run lint      # Menjalankan ESLint
npm test          # Menjalankan unit test
npm run test:e2e  # Menjalankan Playwright test
```

## Cara Penggunaan

1. Pilih warna dasar menggunakan color picker.
2. Pilih jenis skema warna pada dropdown.
3. Klik **Get Color Scheme**.
4. Aplikasi menampilkan lima warna beserta kode HEX-nya.

## API

Aplikasi menggunakan [The Color API](https://www.thecolorapi.com/docs#schemes) untuk menghasilkan skema warna. Permintaan dibuat berdasarkan warna HEX, mode skema, dan jumlah lima warna:

```text
https://www.thecolorapi.com/scheme?hex={hex}&format=json&mode={mode}&count=5
```
