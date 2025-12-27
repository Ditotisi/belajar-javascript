import { logger } from './util.js'

/**
 * 2. Tipe Data
 * Pada javascript terdapat beberapa tipe data yang antara lain:
 * a. String
 * b. Number
 * c. Boolean
 * d. Undefined
 * e. null
 */

/**
 * A. String
 * adalah tipe data yang biasanya menyimpan nilai berupa kumpulan beberapa karakter, huruf atau angka. 
 * Cirinya diawali dan diakhiri dengan sepasan tanda petik. bisa double quoute (""), single quote ('') atau back tick (``)
 */

const contohString1 = 'Double Quoted String di variable contohString1'
const contohString2 = 'Single Quoted String di variable contohString2'
const contohString3 = `Back-Ticked String di variable contohString3`

logger.info(contohString1)
logger.info(contohString2)
logger.info(contohString3)

/**
 * B. Number
 * adalah tipe data yang biasanya menyimpan nilai angka yang dapat dilakukan operator aritmetik matematika.
 * tipe data ini dapat menyimpan tipe data integer atau decimal 
 */

const contohNumber1 = 100
const contohNumber2 = 2.5

logger.info(contohNumber1)
logger.info(contohNumber2)

/**
 * C.Boolean
 * adalah tipe data yang menyimpan value berupa true (benar) atau false (salah).
 * Tipe data ini hanya akan memiliki 2 nilai true/false tanpa tanda petik seperti string.
  */

const contohBoolean1 = true
const contohBoolean2 = false

logger.info(contohBoolean1)
logger.info(contohBoolean2)

/**
 * D. Undefined
 * adalah tipe data yang hanya memiliki value berupa undefined (tidak terdifinis).
 * Biasanya disebabkan oleh sebuah variable yang digunakan (misal diprint) tetapi tidak pernah diberikan value. atau jika dideklarasikan memiliki initial value berupa undefined tanpa tanda petik seperti string.
  */

const contohUndefined1 = undefined
let contohUndefined2;

logger.info(contohUndefined1)
logger.info(contohUndefined2)

/**
 * E. Null
 * adalah tipe data yang menunjukan bahwa value adalah "tidak ada (null)" 
 * Tipe data ini harus dideklarasikan dengan keyword: null tanpa tanda petik seperti string.
 */

const contohNull = null;

logger.info(contohNull)