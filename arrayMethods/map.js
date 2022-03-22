const people = [
   { id: 1, name: 'Evgeniy', age: 22, isOnline: true },
   { id: '2', name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

// Преобразовать все значения в числа
console.log(people.map(p => {
   return {
      ...p, id: +p.id
   }
}))

// Изменить всем isOnline на false и всем прибавить + 10 к возрасту
console.log(people.map(p => {
   return {
      ...p, isOnline: false, age: p.age += 10
   }
}))

// Изменить isOnline на true конкретному человеку
console.log(people.map(p => {
   return p.id === 3
      ? { ...p, isOnline: true }
      : p
}))

// Добавить всем фамилию
console.log(people.map(p => {
   return {
      ...p, surName: 'Ivanov'
   }
}))