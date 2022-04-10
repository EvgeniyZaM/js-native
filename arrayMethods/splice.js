const people = [
   { id: 1, name: 'Evgeniy', age: 22, isOnline: true },
   { id: 2, name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

// splice - изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые

// Отсчитать первые 2 элемента и оставить 3 последующих
// const newPeople = people.splice(2, 3)
// console.log(newPeople) // 3 el
// console.log(people) // 2 el

// Отсчитать первые 0 элементов, оставить 1 последующий и заменить его на { id: 0, name: 'Incognito', age: 0, isOnline: true }
// const newPeople = people.splice(0, 1, { id: 0, name: 'Incognito', age: 0, isOnline: true })
// console.log(newPeople) // {id: 1, name: 'Evgeniy', age: 22, isOnline: true}
// console.log(people[0]) // {id: 0, name: 'Incognito', age: 0, isOnline: true}