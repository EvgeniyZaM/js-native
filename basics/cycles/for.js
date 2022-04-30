// bubble sort:
const numbers2 = [1, 100, 0, 999, 33, 456, 321, 1111]

for (let j = 0; j < numbers2.length - 1; j++) {
   for (let i = 0; i < numbers2.length - 1 - j; i++) {
      if (numbers2[i] > numbers2[i + 1]) {
         let temp = numbers2[i + 1]
         numbers2[i + 1] = numbers2[i]
         numbers2[i] = temp
      }
   }
}
// console.log(numbers2) // [0, 1, 33, 100, 321, 456, 999, 1111]