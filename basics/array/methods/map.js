const people = [
   { id: 1, name: 'Evgeniy', age: '22', isOnline: true },
   { id: 2, name: 'Igor', age: 25, isOnline: true },
   { id: '3', name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

// Изменить свойство isOnline на true конкретному элементу
const changeIsOnline = people.map(p => p.id === 4
   ? { ...p, isOnline: true }
   : p
)
// console.log(changeIsOnline)

// Добавить фамилию конкретному элементу
const addSurName = people.map((p) => p.id === 1
   ? { ...p, name: p.name + ' Zamatevskiy' }
   : p)
// console.log(addSurName)

// Прибавить +1 к возрасту конкретному элементу и преобразовать строку в число
const addToAge = people.map(p => p.id === 1
   ? { ...p, age: + p.age + 1 }
   : p
)
// console.log(addToAge)

// Добавить всем элементам новое свойство
const addAllSurName = people.map(p => {
   return { ...p, surname: 'Ivanov' }
})
// console.log(addAllSurName)