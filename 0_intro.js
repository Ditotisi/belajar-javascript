import { logger } from './util.js'

/**
 * Kode ini tidak akan dieksekusi karena dianggap sebaga komentar (comment)
 * 
 * 0. Intro
 * Pada pembelajaran ini akan ada hal yang akan digunakan berulang-ulang namun belum akan dijelaskan sampai beberapa materi ke depan.
 */


/** 
 * A. console.log(argument): adalah funsi dalam javascript untuk menampilkan data/value yang diberikan pada bagian 'argument'
 * Contoh: 
  */

console.log('Ini adalah argument dalam fungsi console.log');

/**
 * Pada project pembelajaran ini sudah terinstall "pino" yang merupakan library untuk pretty printting agar tampilan pada terminal lebih mudah dibaca.
 * Contoh:
 */

logger.info('Ini adalah argument dalam fungsi logger.info')
logger.error('Ini adalah argument dalam fungsi logger.danger')
logger.success('Ini adalah argument dalam fungsi logger.success')
logger.warn('Ini adalah argument dalam fungsi logger.warning')

/**
 * Author akan menggunakan logger.info/error/success/warn pada materi pembelajaran. Tetapi ketika masuk pada sesi tugas/sandbox kalian dapat menggunakan console ataupub logger!
 */