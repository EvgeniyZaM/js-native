const array = [2, 3, 4, 5]
const array1 = [7, 8]

console.log(...array) // 1 2 3 4 5 (распаковал элементы)
console.log(1, ...array, 6, ...array1, 9) // 1, 2, 3, 4, 5, 6, 7, 8, 9 (распаковал элементы)
console.log([1, ...array, 6, ...array1, 9]) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] (распаковал элементы и добавил в новый массив)

console.log(Math.min(...array)) // 1
console.log(Math.max(...array)) // 5

const str = "Привет"
console.log([...str]) // [ 'П', 'р', 'и', 'в', 'е', 'т' ]
// console.log(Array.from(str)) // [ 'П', 'р', 'и', 'в', 'е', 'т' ] (аналогичная запись)

const object = {name: "Evgeniy", age: 23}
console.log({...object, isOnline: true}) // (распаковал элементы и добавил в новый объект, с новым свойством)
