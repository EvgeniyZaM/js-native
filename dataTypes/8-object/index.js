// object (ссылочный тип данных)

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
    console.log(`${this.name} ${value}`)
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
// console.log(person[friends])
// console.log(person["my friends"][0])
// console.log(person["my friends"][0].id)
// console.log(person["my friends"][0].name)
// console.log(person["my friends"][0].favoriteDish.title)
// console.log(person["my friends"][0].favoriteDish.ingredients[0].id)
// console.log(person["my friends"][0].favoriteDish.ingredients[0].title)
// console.log(person["my friends"][0].favoriteDish.ingredients[0].amount)
// console.log(person["my friends"][0].favoriteDish.ingredients[1].id)
// console.log(person["my friends"][0].favoriteDish.ingredients[1].title)
// console.log(person["my friends"][0].favoriteDish.ingredients[1].amount)
// console.log(person["my friends"][0].favoriteDish.ingredients[2].id)
// console.log(person["my friends"][0].favoriteDish.ingredients[2].title)
// console.log(person["my friends"][0].favoriteDish.ingredients[2].amount)
// console.log(person[friends][1])
// console.log(person[friends][1].id)
// console.log(person[friends][1].name)
// console.log(person[friends][1].favoriteDish.title)
// console.log(person[friends][1].favoriteDish.ingredients[0].id)
// console.log(person[friends][1].favoriteDish.ingredients[0].title)
// console.log(person[friends][1].favoriteDish.ingredients[0].amount)
// console.log(person[friends][1].favoriteDish.ingredients[1].id)
// console.log(person[friends][1].favoriteDish.ingredients[1].title)
// console.log(person[friends][1].favoriteDish.ingredients[1].amount)
// person.showInfo("человек")
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

// Проверка существования свойств:
// console.log(person.name === undefined) // false
// console.log(person.age === undefined) // true
// console.log("name" in person) // true
// console.log("age" in person) // false
// let key = "name"
// console.log(key in person) // true (если мы опускаем кавычки, это значит, что мы указываем переменную, в которой находится имя свойства)

// Перебор свойств объекта:
// for (let key in person) {
// // Если свойств нету - цикл не начнет выполнятся
//   console.log(key) // Ключи
//   console.log(person[key]) // Значения ключей
// }

// Проверка на пустоту. Если свойств нету, вернуть true, а иначе false
// let schedule = {}
// const isEmpty = (schedule) => {
//   for (let key in schedule) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false
//   }
//
//   return true
// }
// console.log(isEmpty(schedule)) // true

// 1. Цикл for in (поверхностная копия)
// let newPerson = {}
// for (let key in person) {
//   newPerson[key] = person[key]
// }

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


// ?. (Опциональная цепочка)
// Если значение перед ?. равно undefined или null, ?. остановит вычисление и вернет undefined
// Синтаксис:
// obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined
// obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined
// obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined

let key = "is likes"
const user = null

const user2 = {
  sayHi() {
    console.log("Hi")
  }
}

// console.log(user) // null
// console.log(user.address) // Error
// console.log(user.address.city) // Error
// console.log(user.address.city.name) // Error

// console.log(user?.address) // undefined
// console.log(user?.address?.city) // undefined
// console.log(user?.address?.city?.name) // undefined

// delete user.address.city // Error
// delete user?.address // Ошибки нету

// console.log(user[key]) // Error
// console.log(user?.[key]) // undefined

// user.sayHi() // Error
// user?.sayHi?.() // ничего не произошло
// user2.sayHi?.() // Hi

// console.log(user3?.address) // Error (объекта user3 не существует)

// user2.name = "John" // Работает
// user2?.name = "John" // Error
