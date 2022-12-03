// Деструктуризация объекта:

const getItems = ({a, b}) => {
  console.log(a) // 1
  console.log(b) // 2
}
// getItems({a: 1, b: 2})

// Функция для примера:
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

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

const {
  age,
  value: v = "test",
  number = getRandomIntInclusive(1, 10),

  name: name1,
  id: id1,
  ["likes JS"]: isLikesJS,
  ["I likes" + technology]: isLikesTechnology,
  var: var1,
  let: let1,
  "0": zero,
  13: thirteen,
  address: {city, street},
  [friends]: [{
    id: id2, name: name2,
    favoriteDish: {
      title: title1,
      ingredients: [
        {id: id3, title: title2, amount: amount1},
        {id: id4, title: title3, amount: amount2},
        {id: id5, title: title4, amount: amount3}
      ]
    }
  }, {
    id: id6, name: name3,
    favoriteDish: {
      title: title5,
      ingredients: [
        {id: id7, title: title6, amount: amount4},
        {id: id8, title: title7, amount: amount5}
      ]
    }
  }],
  showInfo,
  sayBob
} = person

// Глубокая деструктуризация всего объекта:
// console.log(age) // undefined
// console.log(v) // test
// console.log(number) // random num (1-10)
// console.log(name1) // Evgeniy
// console.log(id1) // 1
// console.log(isLikesJS) // true
// console.log(isLikesTechnology) // true
// console.log(var1) // good
// console.log(let1) // good2
// console.log(zero) // good4
// console.log(thirteen) // good5
// console.log(city) // Gomel
// console.log(street) // Lenina
// console.log(id2) // 1
// console.log(name2) // Kevin
// console.log(title1) // borscht
// console.log(id3) // 1
// console.log(title2) // beet
// console.log(amount1) // 3
// console.log(id4) // 2
// console.log(title3) // potatoes
// console.log(amount2) // 5
// console.log(id5) // 3
// console.log(title4) // carrot
// console.log(amount3) // 1
// console.log(id6) // 2
// console.log(name3) // Bob
// console.log(title5) // sushi
// console.log(id7) // 1
// console.log(title6) // fish
// console.log(amount4) // 1
// console.log(id8) // 2
// console.log(title7) // rise
// console.log(amount5) // 0.5
// showInfo.bind(person, "Front-end developer")() // Evgeniy Front-end developer
// sayBob() // Bob!

// Частичная деструктуризация
// const {
//   age,
//   value: v = "test",
//   number = getRandomIntInclusive(1, 10),
//
//   name: name1,
//   id: id1,
//   ["likes JS"]: isLikesJS,
//   ["I likes" + technology]: isLikesTechnology,
//   var: var1,
//   let: let1,
//   "0": zero,
//   13: thirteen,
//   address,
//   [friends]: myFriends,
//   showInfo,
//   sayBob
// } = person

// console.log(age)
// console.log(v)
// console.log(number)
// console.log(name1)
// console.log(id1)
// console.log(isLikesJS)
// console.log(isLikesTechnology)
// console.log(var1)
// console.log(let1)
// console.log(zero)
// console.log(thirteen)
// console.log(myFriends)
// showInfo.bind(person, "Front-end developer")()
// sayBob()

// const {street, city} = person.address
// console.log(street)
// console.log(city)

// const [item1, item2] = person[friends]
// console.log(item1)
// console.log(item2)

// const {id: id2, name: name2, favoriteDish: favoriteDish1} = person[friends][0]
// console.log(id2)
// console.log(name2)
// console.log(favoriteDish1)

// const {id: id3, name: name3, favoriteDish: favoriteDish2} = person[friends][1]
// console.log(id3)
// console.log(name3)
// console.log(favoriteDish2)

// const {title: title1, ingredients: ingredients1} = person[friends][0].favoriteDish
// console.log(title1)
// console.log(ingredients1)

// const {title: title2, ingredients: ingredients2} = person[friends][1].favoriteDish
// console.log(title2)
// console.log(ingredients2)

// const [el1, el2, el3] = person[friends][0].favoriteDish.ingredients
// console.log(el1)
// console.log(el2)
// console.log(el3)

// const [el4, el5] = person[friends][1].favoriteDish.ingredients
// console.log(el4)
// console.log(el5)

// const {id: id4, title: title3, amount: amount1} = person[friends][0].favoriteDish.ingredients[0]
// console.log(id4)
// console.log(title3)
// console.log(amount1)

// const {id: id5, title: title4, amount: amount2} = person[friends][0].favoriteDish.ingredients[1]
// console.log(id5)
// console.log(title4)
// console.log(amount2)

// const {id: id6, title: title5, amount: amount3} = person[friends][0].favoriteDish.ingredients[2]
// console.log(id6)
// console.log(title5)
// console.log(amount3)

// const {id: id7, title: title6, amount: amount4} = person[friends][1].favoriteDish.ingredients[0]
// console.log(id7)
// console.log(title6)
// console.log(amount4)

// const {id: id8, title: title7, amount: amount5} = person[friends][1].favoriteDish.ingredients[1]
// console.log(id8)
// console.log(title7)
// console.log(amount5)
