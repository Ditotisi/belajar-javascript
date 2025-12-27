import { logger } from './util.js'

/**
 * 3. Operator
 * operator adalah sintaks dalam javascript untuk melakukan perhitungan matematis, melakukan perbandingan, logika sederhana, dan assignment .
 * Pada penggunaan operator perbandingan nantinya akan mengembalikan value berupa boolean.
 */

/**
 * A. Operator Aritmetik
 * Adapun operator aritmethic yang ada pada javascript antara lain:
 * 1. Penjumlahan (+) -> 5 + 5 mengambalikan 10
 * 2. Pengurangan (-) -> 5 - 5 mengembalikan 0
 * 3. Perkalian (*) -> 5 * 5 mengembalikan 25
 * 4. Pembagian (/) -> 5 / 5 mengembalikan 1
 * 5. Modulus (sisa bagi) (%) -> 5 % 5 mengembalikan 0
 * Pattern dengan variable: nilai1 (operator) nilai2
 */
logger.log("Hasil operator aritmetik")
logger.info(`Penjumlahan 5 + 5 = ${5 + 5}`)
logger.info(`Pengurangan 5 - 5 = ${5 - 5}`)
logger.info(`Perkalian 5 * 5 = ${5 * 5}`)
logger.info(`Pembagian 5 / 5 = ${5 / 5}`)
logger.info(`Modulus 5 % 5 = ${5 % 5}`)
/**
 * B. Operator Perbandingan
 * Operator Perbandingan terdiri dari:
 * 1. == -> operator sama dengan (equal) tetapi tidak melakukan pengecekan sampai ke level tipe data
 * 2. === -> operator sama dengan (equal) melakukan pengecekan samapai level tipe data
 * 3. != -> operator tidak sama dengan (not equal) tetapi tidak melakukan pengecekan sampai ke level tipe data
 * 4. !== -> operator tidak sama dengan (not equal) melakukan pengecekan samapai level tipe data
 * 5. > -> operator lebih dari
 * 6. >= -> operator lebih dari atau sama dengan
 * 7. < -> operator lebih kecil dari
 * 8. <=  -> operator lebih kecil dari atau sama dengan
 */
logger.log('Hasil operator perbandingan')
logger.info(`5 == '5' : ${5 == '5'}`)
logger.info(`5 === 5 : ${5 === 5}`)
logger.info(`5 != 5 : ${5 != 5}`)
logger.info(`5 !== 5 : ${5 !== 5}`)
logger.info(`5 > 5 : ${5 > 5}`)
logger.info(`5 >= 5 : ${5 >= 5}`)
logger.info(`5 < 5 : ${5 < 5}`)
logger.info(`5 <= 5 : ${5 <= 5}`)

/**
 * C. Operator Logika
 * Adalah operator untuk melakukan pengecekan logika terhadap value atau variable apakah bersifat truthy or falsy.
 * Ciri data truthy:
 * 1. Semua value tipe data Number kecuali 0
 * 2. Semua value tipe data String kecuali string kosong
 * 3. boolean dengan value true
 * 
 * Ciri tipe data falsy:
 * 1. String kosong misal: '', "", ``.
 * 2. Number dengan value 0.
 * 3. Boolean dengan value false
 * 
 * Adapun operator logika antara lain:
 * 1. && (Logika 'And'). Pengecekan terhadap 2 value. Akan menghasilkan true jika hanya kedua value yang dicek bersifay truthy
 * 2. || (Logika 'Or'). Pengecekan terhadap 2 value. Akan menghasilkan true jika salah satu atau dua-duanya bersifat truhty dan akan menghasilkan false jika dua-duanya bersifat falsy.
 * 1. ! (Logika 'Not'). kebalikan dari tipe data saat ini. misal truthy akan jadi falsy dan sebaliknya
 */

logger.log('Hasil operator perbandingan')
logger.info(`true && true : ${true && true}`)
logger.info(`true && false : ${true && false}`)
logger.info(`true || false : ${true || false}`)
logger.info(`false || false : ${false || false}`)
logger.info(`!true : ${!true}`)
logger.info(`!false : ${!false}`)

/**
 * B. Operator Assignment
 * Adalah shortcut untuk mengganti sebuah variable sesuai dengan operator
 * 1. +=
 * format: variable1 += variable2 atau sama dengan variable1 = variable1 + variable2
 * 2. -=
 * format: variable2 -= variable2 atau sama dengan variable2 = variable2 - variable2
 */

let variable1 = 5;
let variable2 = 5;

variable1 += variable2;
logger.log('Hasil operator perbandingan')
logger.info(`variable1 setelah operasi variable1 += variable2: ${variable1}`)
variable1 -= variable2;
logger.info(`variable1 setelah operasi variable1 -= variable2: ${variable1}`)