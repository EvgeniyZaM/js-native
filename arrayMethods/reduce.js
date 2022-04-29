const people = [
   { id: 1, name: 'Evgeniy', age: 22, isOnline: true },
   { id: 2, name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 42, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

// Найти сумму элементов
const findSumElements = people.reduce((acc, p) => {
   return acc + p.age
}, 0)
// console.log(findSumElements)

// Найтти самое большое число
const maxNumber = people.reduce((acc, p) => {
   return acc > p.age ? acc : p.age
}, 0)
// console.log(maxNumber)

// // Создать новый объект - {Evgeniy: 22, Igor: 25, Kirill: 18, Mihail: 32, Oleg: 41}
// console.log(people.reduce((acc, el) => {
//    acc[el.name] = el.age
//    return acc
// }, {}))

// // Вернуть массив объектов, у которых isOnline: true ( Аналог filter )
// console.log(people.reduce((acc, el) => {
//    if (el.isOnline) {
//       acc.push(el)
//    }
//    return acc
// }, []))

// // Получить строку с именами всех людей
// console.log(people.reduce((acc, el) => {
//    acc = `${acc} ${el.name}`
//    return acc
// }, ''))