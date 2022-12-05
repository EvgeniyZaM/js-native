// object (ссылочный тип данных)
// Объект всегда приводит ключи к строкам

// Виды создания объекта:
// let obj = new Object()
// let obj2 = {}

let id = 1
let name = "Evgeniy"
let friends = "my friends"
let technology = "React"

let person = {
  name: name,
  id,
  "likes JS": true,
  ["I likes" + technology]: true,
  var: "good",
  let: "good2",
  0: "good4",
  13: "good5",
  address: {city: "Gomel", street: "Lenina"},
  [friends]: [
    {
      id: 1, name: "Kevin",
      favoriteDish: {
        title: "borscht",
        ingredients: [
          {id: 1, title: "beet", amount: 3},
          {id: 2, title: "potatoes", amount: 5},
          {id: 3, title: "carrot", amount: 1},
        ],
      }
    },
    {
      id: 2, name: "Bob",
      favoriteDish: {
        title: "sushi",
        ingredients: [
          {id: 1, title: "fish", amount: 1},
          {id: 2, title: "rise", amount: 0.5}
        ]
      }
    },
  ],
  showInfo(value) {
    console.log(`Меня зовут ${this.name} и я ${value}`)
  },
  sayBob: function () {
    console.log("Bob!")
  },
}

// Чтение свойств:
// console.log(person)
// console.log(person.name)
// console.log(person.id)
// console.log(person["likes JS"])
// console.log(person["I likes" + technology])
// console.log(person.var)
// console.log(person.let)
// console.log(person[0])
// console.log(person["0"])
// console.log(person[13])
// console.log(person["13"])
// console.log(person.address)
// console.log(person.address.city)
// console.log(person.address.street)
// console.log(person["my friends"])
// console.log(person["my friends"][0])
// console.log(person["my friends"][0].id)
// console.log(person["my friends"][0].name)
// console.log(person["my friends"][0].favoriteDish)
// console.log(person["my friends"][0].favoriteDish.title)
// console.log(person["my friends"][0].favoriteDish.ingredients)
// console.log(person["my friends"][0].favoriteDish.ingredients[0])
// console.log(person["my friends"][0].favoriteDish.ingredients[0].id)
// console.log(person["my friends"][0].favoriteDish.ingredients[0].title)
// console.log(person["my friends"][0].favoriteDish.ingredients[0].amount)
// console.log(person["my friends"][0].favoriteDish.ingredients[1])
// console.log(person["my friends"][0].favoriteDish.ingredients[1].id)
// console.log(person["my friends"][0].favoriteDish.ingredients[1].title)
// console.log(person["my friends"][0].favoriteDish.ingredients[1].amount)
// console.log(person["my friends"][0].favoriteDish.ingredients[2])
// console.log(person["my friends"][0].favoriteDish.ingredients[2].id)
// console.log(person["my friends"][0].favoriteDish.ingredients[2].title)
// console.log(person["my friends"][0].favoriteDish.ingredients[2].amount)
// console.log(person[friends][1])
// console.log(person[friends][1].id)
// console.log(person[friends][1].name)
// console.log(person[friends][1].favoriteDish)
// console.log(person[friends][1].favoriteDish.title)
// console.log(person[friends][1].favoriteDish.ingredients[0])
// console.log(person[friends][1].favoriteDish.ingredients[0].id)
// console.log(person[friends][1].favoriteDish.ingredients[0].title)
// console.log(person[friends][1].favoriteDish.ingredients[0].amount)
// console.log(person[friends][1].favoriteDish.ingredients[1])
// console.log(person[friends][1].favoriteDish.ingredients[1].id)
// console.log(person[friends][1].favoriteDish.ingredients[1].title)
// console.log(person[friends][1].favoriteDish.ingredients[1].amount)
// person.showInfo("Front-end developer")
// person.sayBob()

// Добавление свойств (изменение работает аналогичным образом):
person.age = 23
person["is online"] = true
person.const = "new good"
person[66] = "new good2"
person.work = {position: "doctor", experience: 15}
person.work.isActive = true
person[friends][2] = {
  id: 3, name: "Mark",
  favoriteDish: {
    title: "pizza",
    ingredients: [
      {id: 1, title: "cheese", amount: 1},
      {id: 2, title: "sausage", amount: 0.5},
      {id: 3, title: "dough", amount: 0.8},
      {id: 4, title: "ketchup", amount: 0.3},

    ]
  }
}
person[friends][2].age = 33
person[friends][2].favoriteDish.description = "very tasty"
person[friends][2].favoriteDish.ingredients[4] = {id: 5, title: "onion", amount: 0.1}
person[friends][2].favoriteDish.ingredients[4].description = "may not be added"
person.sayHi = function () {
  console.log(`hi ${this.name}`)
}

// Удаление свойств:
delete person.age
delete person["is online"]
delete person.const
delete person[66]
delete person.work.isActive
delete person.work
delete person["my friends"][2].favoriteDish.ingredients[4].description
delete person["my friends"][2].favoriteDish.ingredients[4]
delete person["my friends"][2].favoriteDish.description
delete person["my friends"][2].age
delete person["my friends"][2]
delete person.sayHi

// Итерация по объекту:
// for (let key in person) {
// console.log(key) // Ключи
// console.log(person[key]) // Значения
// }

// Проверка существования свойств:
// Простая проверка на undefined:
// console.log(person.name === undefined) // false
// console.log(person.age === undefined) // true
// Оператор in:
// console.log("name" in person) // true
// console.log("age" in person) // false
// let key = "name"
// console.log(key in person) // true (если мы опускаем кавычки, это значит, что мы указываем переменную, в которой находится имя свойства)
// Object.hasOwn:
// console.log(Object.hasOwn(person, "name")) // true
// console.log(Object.hasOwn(person, "name1")) // false

// 1. Цикл for in (поверхностная копия)
// let newPerson = {}
// for (let key in person) {
//   newPerson[key] = person[key]
// }

// Копирование объекта:
// 2. Object.assign() (поверхностная копия)
// const newPerson = {}
// Object.assign(newPerson, person, {newValue: 1}, {newValue2: 2})

// 3. JSON.parse(JSON.stringify()) (глубокая копия)
// const newPerson = JSON.parse(JSON.stringify(person))

// 4. Оператор spread (поверхностная копия, но можно сделать глубокую)
// const newPerson = {
//   ...person,
//   address: {...person.address},
//   [friends]: person[friends].map(friend => {
//     return {
//       ...friend, favoriteDish: {
//         ...friend.favoriteDish, ingredients: friend.favoriteDish.ingredients.map(ingredient => {
//           return {...ingredient}
//         })
//       }
//     }
//   })
// }

