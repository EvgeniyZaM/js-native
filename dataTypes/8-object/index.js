// object - это ссылочный тип данных, который состоит из свойств [ключ, значение] и методов
// Объект всегда приводит ключи к строкам

// Виды создания объекта:
// let obj = new Object()
// let obj2 = {}

let name = "Evgeniy"
let id = 1
let address = "my address"
let value = "React"

const person = {
  name: name,
  id,
  "likes JS": true,
  ["I likes" + value]: true,
  var: "var good",
  0: "0 string",
  [address]: {city: "Gomel", street: "Lenina"},
  friends: [
    {
      id: 1, name: "Dima", age: 24, isMarried: false,
      friends: [
        {id: 1, name: "Nikolay", age: 53, isMarried: true},
        {id: 2, name: "Maria", age: 32, isMarried: false},
      ]
    },
    {
      id: 2, name: "Miha", age: 56, isMarried: true,
      friends: [
        {id: 1, name: "Sofia", age: 22, isMarried: false},
        {id: 2, name: "Bob", age: 76, isMarried: true},
      ]
    },
  ],
  showInfo1(value1, value2, value3) {
    console.log(`${this.name} ${value1} ${value2} ${value3}`) // Evgeniy 1 2 3
  },
  showInfo2: function (value1, value2, value3) {
    console.log(`${this.name} ${value1} ${value2} ${value3}`) // Evgeniy 1 2 3
  },
  showInfo3: (value1, value2, value3) => {
    console.log(`${this.name} ${value1} ${value2} ${value3}`) // undefined 1 2 3
  }
}

// Чтение свойств:
// console.log(person)
// console.log(person.name)
// console.log(person.id)
// console.log(person["likes JS"])
// console.log(person["I likes" + value])
// console.log(person.var)
// console.log(person["0"])
// console.log(person[address])
// console.log(person[address].city)
// console.log(person[address].street)
// console.log(person.friends)
// console.log(person.friends[0])
// console.log(person.friends[0].id)
// console.log(person.friends[0].name)
// console.log(person.friends[0].age)
// console.log(person.friends[0].isMarried)
// console.log(person.friends[0].friends)
// console.log(person.friends[0].friends[0])
// console.log(person.friends[0].friends[0].id)
// console.log(person.friends[0].friends[0].name)
// console.log(person.friends[0].friends[0].age)
// console.log(person.friends[0].friends[0].isMarried)
// console.log(person.friends[0].friends[1].id)
// console.log(person.friends[0].friends[1].name)
// console.log(person.friends[0].friends[1].age)
// console.log(person.friends[0].friends[1].isMarried)
// console.log(person.friends[1])
// console.log(person.friends[1].id)
// console.log(person.friends[1].name)
// console.log(person.friends[1].age)
// console.log(person.friends[1].isMarried)
// console.log(person.friends[1].friends)
// console.log(person.friends[1].friends[0])
// console.log(person.friends[1].friends[0].id)
// console.log(person.friends[1].friends[0].name)
// console.log(person.friends[1].friends[0].age)
// console.log(person.friends[1].friends[0].isMarried)
// console.log(person.friends[1].friends[1].id)
// console.log(person.friends[1].friends[1].name)
// console.log(person.friends[1].friends[1].age)
// console.log(person.friends[1].friends[1].isMarried)
// person.showInfo1("1", "2", "3")
// person.showInfo2("1", "2", "3")
// person.showInfo3("1", "2", "3")

// Добавление свойств (изменение работает аналогичным образом):
person.age = 23
person["is online"] = true
person.const = "const good"
person[66] = "66 string"
person.work = {position: "doctor", experience: 15}
person.work.isActive = true
person.friends[2] = {}
person.friends[2].id = 3
person.friends[2].name = "Kirill"
person.friends[2].age = 19
person.friends[2].isMarried = false
person.friends[2].friends = []
person.friends[2].friends[0] = {}
person.friends[2].friends[0].id = 1
person.friends[2].friends[0].name = "Vasiliy"
person.friends[2].friends[0].age = 34
person.friends[2].friends[0].isMarried = true
person.friends[2].friends[1] = {}
person.friends[2].friends[1].id = 2
person.friends[2].friends[1].name = "Kristina"
person.friends[2].friends[1].age = 15
person.friends[2].friends[1].isMarried = false
person.showInfo4 = function () {
  console.log(this.name) // "Evgeniy"
}
person.showInfo5 = () => {
  console.log(this.name) // undefined
}

// Удаление свойств:
delete person.age
delete person["is online"]
delete person.const
delete person["66"]
delete person.work.position
delete person.work.experience
delete person.work.isActive
delete person.work
delete person.friends[2].id
delete person.friends[2].name
delete person.friends[2].age
delete person.friends[2].isMarried
delete person.friends[2].friends[0].id
delete person.friends[2].friends[0].name
delete person.friends[2].friends[0].age
delete person.friends[2].friends[0].isMarried
delete person.friends[2].friends[0]
delete person.friends[2].friends[1].id
delete person.friends[2].friends[1].name
delete person.friends[2].friends[1].age
delete person.friends[2].friends[1].isMarried
delete person.friends[2].friends[1]
delete person.friends[2].friends
delete person.friends[2]
delete person.showInfo4
delete person.showInfo5

// Итерация по объекту:
for (let key in person) {
  // console.log(key) // Ключи
  // console.log(person[key]) // Значения
}

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

// Копирование объекта:
// 1. Цикл for in (поверхностная копия)
// const newPerson = {}
// for (let key in person) {
//   newPerson[key] = person[key]
// }

// 2. Object.assign() (поверхностная копия)
// const newPerson2 = {}
// Object.assign(newPerson2, person, {newValue: 1}, {newValue2: 2})

// 3. JSON.parse(JSON.stringify()) (глубокая копия)
// const newPerson3 = JSON.parse(JSON.stringify(person))

// 4. Оператор spread (поверхностная копия, но можно сделать глубокую)
// const newPerson4 = {
//   ...person,
//   address: {...person.address},
//   friends: person.friends.map(f => ({...f, friends: f.friends.map(f2 => ({...f2}))}))
// }

// Глубокая деструктуризация:
const {
  name: myName,
  id: myId,
  ["likes JS"]: isLikesJS,
  ["I likes" + value]: isLikesValue,
  var: myVar,
  ["0"]: zero,
  [address]: {city, street},
  friends: [
    {
      id: id1, name: name1, age: age1, isMarried: isMarried1,
      friends: [
        {id: id2, name: name2, age: age2, isMarried: isMarried2},
        {id: id3, name: name3, age: age3, isMarried: isMarried3}
      ]
    },
    {
      id: id4, name: name4, age: age4, isMarried: isMarried4,
      friends: [
        {id: id5, name: name5, age: age5, isMarried: isMarried5},
        {id: id6, name: name6, age: age6, isMarried: isMarried6}
      ]
    }
  ],
  ...rest
} = person

// bind, call, apply
// rest.showInfo1.bind(person, "1", "2", "3")() // Evgeniy 1 2 3
// rest.showInfo2.call(person, "1", "2", "3") // Evgeniy 1 2 3
// rest.showInfo3.apply(person, ["1", "2", "3"]) // undefined 1 2 3
