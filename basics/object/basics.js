const getStatus = 'isOnline' // Передаем имя. Теперь значение isOnline будет ключом в объекте person
const myName = 'Evgeniy'

const person = {
   myName: myName, // Будет сидеть то значение, которое сидит в константе myName. Сокращенный синтаксис - myName
   [getStatus]: true,
   'likes javascript': true, // Если ключ состоит из двух или более слов, его следует закрыть в кавычки
   let: 'boss', // В объектах допускается использование зарезервированных слов
   0: 'Hello', // 0 это строка, потому что в качестве ключа может быть ТОЛЬКО строка
   address: { // Вложенный объект
      city: 'Gomel',
      street: 'Lenina',
   },
   friends: ['Miha', 'Kolyan', 'Dima'], // Массив
   showInfo() { // Метод
      console.log(`${this.let}, ${this[0]}, ${this.address.city}`) // this ссылается контекст объекта person
   },
}

console.log(person) // Посмотреть объект целиком
console.log(person.address) // Посмотреть вложенный объект
console.log(person.address.city) // Посмотреть свойство у вложенного объекта
console.log(person['likes javascript']) // Посмотреть значение, которое в кавычках
console.log(person[0]) // Посмотреть значение в строке 0. Либо таким образом '0'
person.showInfo() // Вызов метода

// Добавление свойства:
person.name = 'Evgeniy'
person['i love frontend'] = true
person.matherInfo = { name: 'Olga', age: 55 }
person.hobby = ['Programming', 'sleep']

// Изменение свойства:
person.name = 'Dmitriy'
person['i love frontend'] = false
person.matherInfo = { name: 'Maria', age: 66 }
person.hobby = ['GTA5', 'WoT']

// Удаление свойства:
delete person.name
delete person['i love frontend']
delete person.matherInfo
delete person.hobby


// Для перебора всех свойств объекта используется цикл for in ( for и for of для объектов не работает )
for (let key in person) {
   console.log(key) // Ключи объекта
   console.log(person[key]) // Значения объекта
}