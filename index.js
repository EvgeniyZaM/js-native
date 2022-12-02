// Деструктуризация объекта:

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
  value: v = "test",
  number = getRandomIntInclusive(1, 10),

  name: newName,
  id: myId,
  ["likes JS"]: isLikesJS,
  ["I likes" + technology]: isLikesTechnology,
  var: myVar,
  let: myLet,
  "0": myZero,
  13: myThirteen,
  address: {city, street},
  [friends]: [{
    id: item1Id, name: item1Name,
    favoriteDish: {
      title: favoriteDish1Title,
      ingredients: [
        {id: ingredient1Id, title: ingredient1Title, amount: ingredient1Amount},
        {id: ingredient2Id, title: ingredient2Title, amount: ingredient2Amount},
        {id: ingredient3Id, title: ingredient3Title, amount: ingredient3Amount}
      ]
    }
  }, {
    id: item2Id, name: item2Name,
    favoriteDish: {
      title: favoriteDish2Title,
      ingredients: [
        {id: ingredient11Id, title: ingredient111Title, amount: ingredient1111Amount},
        {id: ingredient22Id, title: ingredient222Title, amount: ingredient2222Amount}
      ]
    }
  }],
  showInfo,
  sayBob
} = person

console.log(v)
console.log(number)
console.log(newName)
console.log(myId)
console.log(isLikesJS)
console.log(isLikesTechnology)
console.log(myVar)
console.log(myLet)
console.log(myZero)
console.log(myThirteen)
console.log(city)
console.log(street)
console.log(item1Id)
console.log(item1Name)
console.log(favoriteDish1Title)
console.log(ingredient1Id)
console.log(ingredient1Title)
console.log(ingredient1Amount)
console.log(ingredient2Id)
console.log(ingredient2Title)
console.log(ingredient2Amount)
console.log(ingredient3Id)
console.log(ingredient3Title)
console.log(ingredient3Amount)
console.log(item2Id)
console.log(item2Name)
console.log(favoriteDish2Title)
console.log(ingredient11Id)
console.log(ingredient111Title)
console.log(ingredient1111Amount)
console.log(ingredient22Id)
console.log(ingredient222Title)
console.log(ingredient2222Amount)
showInfo.bind(person, "Front-end developer")()
sayBob()

//
// const options = {
//   title: "Menu",
//   width: 100,
// }
//
// const {title: t, width: w, height: h = 23, number = getRandomIntInclusive(1, 10)} = options
//
// // console.log(t)
// // console.log(w)
// // console.log(h)
// // console.log(number)
//
// // let {height2, width2, title2} = {title2: "Menu", height2: 200, width2: 100}
// //
// // console.log(title2)
// // console.log(width2)
// // console.log(height2)
//
// let options2 = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// }
//
// const {size: {width, height}, items: [value1, value2], extra} = options2
//
// // console.log(width)
// // console.log(height)
// // console.log(value1)
// // console.log(value2)
// // console.log(extra)
//
// let options3 = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// }
//
// const showMenu = ({title, items: [value1, value2]}) => {
//   // console.log(title)
//   // console.log(value1)
//   // console.log(value2)
// }
//
// // showMenu(options3)
