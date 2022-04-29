// // Вывести числа от 4 до 400:
// let example = ''
// for (let i = 4; i <= 400; i++) {
//    example = example + i + ' '
// }
// console.log(example)

// // Вывести числа в последовательности: 4 7 10 13:
// let example2 = ''
// for (let i = 4; i <= 13; i = i + 3) {
//    example2 = example2 + i + ' '
// }
// console.log(example2)

// // Вывести числа от 654 до 0:
// let example3 = ''
// for (let i = 654; i >= 0; i--) {
//    example3 = example3 + i + ' '
// }
// console.log(example3)

// // Вывести числа -4 -3 -2 -1 0 1 2 ...100
// let example4 = ''
// for (let i = -4; i <= 100; i++) {
//    example4 = example4 + i + ' '
// }
// console.log(example4)

// // С помощью цикла напечатайте таблицу умножения на 7, от 1 до 9
// let example5 = ''
// for (let i = 1; i <= 9; i++) {
//    example5 = example5 + 7 * i + ' '
// }
// console.log(example5)

// // Выведите с помощью цикла коды спецсимволов от 1000 до 2000.
// // Спецсимвол получается комбинацией &#число; Например &#1222;
// let example6 = ''
// for (let i = 1000; i <= 2000; i++) {
//    example6 = example6 + '&#' + i + ' '
// }
// console.log(example6)

// // Найти сумму чисел от 0 до 100 (0+1+2+3+4+5...)
// let sum = 0
// for (let i = 0; i <= 100; i++) {
//    sum = sum + i
// }
// console.log(sum)

// Вывести произведение чисел от 1 до 50 (1*2*3*4...)
let sum = 1
for (let i = 1; i <= 50; i++) {
   sum = sum * i
   console.log(sum)
}
console.log(sum)

// // bubble sort:
// const numbers2 = [1, 100, 0, 999, 33, 456, 321, 1111]

// for (let j = 0; j < numbers2.length - 1; j++) {
//    for (let i = 0; i < numbers2.length - 1 - j; i++) {
//       if (numbers2[i] > numbers2[i + 1]) {
//          let temp = numbers2[i + 1]
//          numbers2[i + 1] = numbers2[i]
//          numbers2[i] = temp
//       }
//    }
// }
// console.log(numbers2) // [0, 1, 33, 100, 321, 456, 999, 1111]