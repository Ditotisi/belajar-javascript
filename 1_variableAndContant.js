import { logger } from './util.js'

/**
 * 1. Variable
 * Tempat untuk menyimpan data supaya bisa digunakan dan diubah saat program berjalan.
 * Dapat dideklarasikan dengan format var namaVariable = "Data/value"; atau bisa juga let namaVariable = "Data/Value"; (disarankan menggunakan let dibanding var)
 * Contoh:
 */

let nama = 'John Doe'
let umur = 20

logger.log('Variable nama & umur:')
logger.info(nama)
logger.info(umur)
/**
 * Variable juga dapat dideklarasikan tanpa menyebutkan initial value dari variable terkait.
 * Contoh:
 */

let alamat

logger.log('Variable alamat:')
logger.info(alamat)

/**
 * Variable yang sudah atau belum memiliki value, nantinya dapat diberikan value kemudian, dengan catatan posisi pemberian value berada dibawah code dari deklarasi.
 * Contoh pemberian valur pada varibale alamat:
 */

alamat = 'Jl. Milik Saya, Jakarta'

logger.log('Variable alamat setelah diberikan value:')
logger.info(alamat)

/**
 * 2. Contant (Konstanta)
 * Sama seperti variable tetapi data yang sudah disimpan tidak dapat diubah.
 * contoh:
 */

const jenisKelamin = 'Laki-laki'

logger.log('konstanta jenisKelamin:')
logger.success(jenisKelamin)

/**
 * Kontanta jenisKelamin tidak dapat diubah auat di-reassign.
 * Bila kita tidak sengaja meng-assign pada konstanta ini maka javascript akan menganggapnya sebagai error.
 * Contoh (coba kode ini untuk membuktikan):
 * jenisKelamin = 'Perempuan'
 */
