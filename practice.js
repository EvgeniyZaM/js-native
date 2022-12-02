// Вернуть массив уникальных значений:
const getUniqueValues = (values) => {
  const set = new Set(values)

  // return [...set]
  return Array.from(set) // второй способ
}

console.log(getUniqueValues(["Hare", "Krishna", "Hare", "Krishna", "Hare", "Hare", ":-O"])) // [ 'Hare', 'Krishna', ':-O' ]

// Анаграмма. Вернуть массив слов, очищенный от анаграмм
const anagram2 = (arr) => {
  const obj = {}

  for (let i = 0; i < arr.length; i++) {
    const sorted = arr[i].toLowerCase().split("").sort().join("")
    obj[sorted] = arr[i]
  }

  return Object.values(obj)
}

console.log(anagram2(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"])) // [ 'PAN', 'hectares', 'era' ]

// Анаграмма. Вернуть массив слов, очищенный от анаграмм
const anagram = (arr) => {
  let map = new Map()

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("")
    map.set(sorted, word)
  }

  return Array.from(map.values())
}
console.log(anagram(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"])) // [ 'PAN', 'hectares', 'era' ]

// Вернуть случайное, целое число (максимум и минимум включаются)
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(getRandomIntInclusive(1, 3))
