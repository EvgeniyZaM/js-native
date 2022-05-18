let test = new Set() // создание нового объекта

test.add(1) // добавить значение
test.add('Hello') // добавить значение

test.clear() // очищает все заданные ранее значения
test.delete('Hello') // удаляет определенный элемент

console.log(test.size) // посмотреть количество элементов, аналог length
console.log(test.has(1))   // возвращает true или false. Ищет, есть ли такой элемент

// Нельзя делать:
// test.add(1) // добавлять элемент, который уже был добавлен ранее
// console.log(test[0]) // обращаться по индексу
// console.log(test.length) // нет доступа к длине





// Проитерироваться можно ТОЛЬКО с помощью for of:
for (let item of test) {
	console.log(item)
}

// Применение на практике:
// Задача. Найти уникальные элементы в массиве:
let numbers = [1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 5]

let uniqueNumbers = new Set(numbers) // в uniqueNumbers хранятся уникальные элементы

let newNumbers = Array.from(uniqueNumbers) // uniqueNumbers преобразовал в массив и теперь в newNumbers хранится массив с уникальными элементами