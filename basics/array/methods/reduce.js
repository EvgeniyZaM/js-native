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

// Найти элемент с самым большим числом
const maxNumber = people.reduce((acc, p) => {
  return acc.age > p.age ? acc : p
})
// console.log(maxNumber)

// Other =========================================================================================
// Сделать копию массива
const copyPeople = people.reduce((acc, el) => {
  acc.push({ ...el })
  return acc
}, [])
// console.log(copyPeople)

// Получить строку с именами всех людей
const names = people.reduce((acc, el) => {
  acc = `${acc} ${el.name}`
  return acc
}, '')
// console.log(names)

// Отфильтровать элементы ( аналог filter )
const filtered = people.reduce((acc, el) => {
  el.age > 25 ? acc.push(el) : el
  return acc
}, [])
// console.log(filtered)

// Создать ассоциативный массив
const sts = people.reduce((acc, el) => {
  acc[el.id] = { ...el }
  delete acc[el.id].id
  return acc
}, {})
// console.log(sts)