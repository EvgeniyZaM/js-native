let person = [
   'Evgeniy',
   { isOnline: true, age: 22 },
   [1, 2, 3, 4, 5],
   () => console.log('Привет, я Evgeniy!'),
]

// Посмотреть значения:
console.log(person[0])
console.log(person[1].isOnline)
console.log(person[2])
person[3]()

// Добавить новое значение:
person[4] = 'актуальное 4 значение'

// Поменять существующее значение:
person[4] = 'новое 4 значение'

// Посмотреть длинну в массиве
console.log(person.length)

// Проверка на массив. Метод возвращает true, если массив, и false, если нет
console.log(Array.isArray(person)) // true


// Для перебора элементов в массиве можно использовать цикл for of, for, но рекомендуется метод forEach
// Но нельзя использовать for in для перебора массивов!
for (let i = 0; i < person.length; i++) {
   console.log(person[i]) // Элементы
   console.log(i) // ключи
}

for (let item of person) {
   console.log(item) // Элементы. Ключи в for of вывести нельзя
}

person.forEach((item, index, array) => {
   console.log(item, index) // Элементы или ключ
})

person.length = 0 // Очистил ввесь массив