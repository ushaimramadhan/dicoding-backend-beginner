# Bookshelf API - Back-End Beginner Submission

Proyek ini adalah **Bookshelf API**, sebuah layanan web untuk manajemen koleksi buku yang dibangun sebagai tugas akhir kelas **Belajar Membuat Aplikasi Back-End untuk Pemula**.

## Fitur Utama

- **Manajemen Buku Lengkap (CRUD):** Tambah, lihat, ubah, dan hapus data buku.
- **Filter Pencarian:** Mencari buku berdasarkan nama, status sedang dibaca (*reading*), atau status sudah selesai (*finished*).
- **Validasi Data:** Memastikan input data buku sesuai dengan skema yang ditentukan.
- **Standardisasi Kode:** Menggunakan **ESLint** untuk menjaga konsistensi dan kualitas kode JavaScript.

## Stack Teknologi

- **Environment:** Node.js
- **Framework:** Express.js.
- **Linter:** ESLint.

## Instalasi & Menjalankan

1. Clone repositori:
   ```bash
   git clone https://github.com/ushaimramadhan/dicoding-backend-beginner.git
   ```
2. Instal dependensi:
    ```Bash
    npm install
    ```
3. Jalankan server:
    ```Bash
    npm run start
    ```
### Endpoint API
    POST /books : Menambahkan buku baru.
    GET /books : Menampilkan seluruh buku.
    GET /books/{id} : Menampilkan detail buku.
    PUT /books/{id} : Memperbarui data buku.
    DELETE /books/{id} : Menghapus buku.

Lulus kriteria submission Bookshelf API dari Dicoding Academy.
