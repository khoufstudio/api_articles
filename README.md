# api_article

api_article adalah api yang digunakan untuk kebutuhan membuat, menampilkan, mengedit dan menghapus artikel. api ini dibuat menggunakan framework ExpressJS dan database MySQL.

Cara menggunakan API ini:
1. Clone/download repo ini
2. Buat MYSQL database dengan nama db_node kemudian import articles.sql
3. Edit db_conn.js dengan mengganti host, user, password, sesuai dengan setting MYSQL anda
4. jalankan api dengan cara masuk ke folder yang telah anda download melalui terminal/cmd kemudian ketik node index.js (pastikan nodejs telah terinstall)
5. Anda bisa menambah data, membaca data yang telah tersimpan, mengedit data dan menghapus dengan konfigurasi berikut
   [POST]	/articles/create -> untuk meninput data
   [GET]  	/articles/read/ -> untuk membaca data seluruhnya
   [GET]  	/articles/read/{id} -> untuk membaca data sesuai dengan id pada dimasukan pada address bar
   [PATCH] 	/articles/update/{id} -> untuk menedit data sesuai dengan id pada dimasukan pada address bar
   [DELETE]	/articles/delete/{id} -> untuk menghapus data sesuai dengan id pada dimasukan pada address bar
 6. Adapun untuk memanipulasi data (create, update, delete) berikut adalah sejumlah key, penjelasan: 
    - title = judul artikel 
    - createdAt = tanggal dibuat (yyyy-mm-dd)
    - updatedAt = tanggal diupdate (yyyy-mm-dd)
    - body = isi dari artikel
    - archived = diarsipkan tidaknya (true/false)
