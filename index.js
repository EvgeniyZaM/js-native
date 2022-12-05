let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// splice(start, deleteCount, ...items) - позволяет удалять, добавлять и заменять элементы исходного массива.
// Так же возвращает новый массив с удаленными элементами или пустой, если удаления не было
// start - индекс, с которого начинается удаление элементов, включая его самого (можно использовать отрицательный индекс)
// deleteCount - количество элементов, которые необходимо удалить (если нужно добавить элементы, то нужно указать 0)
// ...items - новые элементы, которые нужно добавить в исходный массив, либо заменить текущие элементы на новые

// Удаление и замена элементов с начала массива и возврат удаленных элементов в новый массив
// const removedItems = array.splice(1, 2, 22, 33, 44)
// console.log(removedItems) // [ 2, 3 ]

// Удаление и замена элементов с конца массива и возврат удаленных элементов в новый массив
// const removedItems2 = array.splice(-2, 2, 88, 99)
// console.log(removedItems2)

// slice(start?, end?) - возвращает новый массив, в который копирует другой массив, либо его часть
// start? - индекс, с которого начинается копирование элементов, включая его самого
// end? - индекс, с которого заканчивается  копирование элементов, не включая его самого

// Копирование массива array в новый массив newArray, без первого и последнего элемента
// const newArray = array.slice(1, -1)
// console.log(newArray) // [2, 3, 4, 5, 6, 7, 8]

// concat(...items) - возвращает новый массив, в который копирует другой массив и если нужно, то ещё какие-то дополнительные массивы
// ...items - массивы, или просто значения, которые попадут в конец нового массива

// const newArray = array.concat([10, 11], [12, 13, 14, 15], 16, 17, 18, 19)
// console.log(newArray) // [1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

// forEach(callbackfn: (value, index, array), thisArg?) - позволяет проитерироваться по исходному массиву, не возвращая новый
// callbackfn - коллбэк функция принимает 3 параметра, item, index, array. Вызывается 1 раз, для каждого элемента поочередно
// thisArg? -

// array.forEach((item, index, array) => {
//   console.log(`${item} имеет позицию ${index} в ${array}`)
// })

// includes(searchElement, fromIndex?) - ищет элемент в массиве и возвращает boolean значение
// indexOf(searchElement, fromIndex?) - ищет элемент в массиве и возвращает его индекс, если не находит элемент то возвращает -1
// lastIndexOf(searchElement, fromIndex?) - ищет элемент с конца и возвращает его индекс, если не находит элемент то возвращает -1
// searchElem - элемент который нужно найти
// fromIndex? - индекс, от которого нужно начинать поиск

// const isFound = array.includes(4, 0) // true
// const isFound2 = array.includes(4, 4) // false
// console.log(isFound) // true
// console.log(isFound2) // false

// const isFound3 = array.indexOf(4, 0)
// const isFound4 = array.indexOf(4, 4)
// console.log(isFound3) // 4
// console.log(isFound4) // -1

// const isFound5 = array.lastIndexOf(7, 6)
// const isFound6 = array.lastIndexOf(7, 5)
// console.log(isFound5) // 6
// console.log(isFound6) // -1

// push(...items) - добавляет новый элемент или элементы в конец массива
// ...items - элемент или элементы, которые будут добавлены в конец массива
// array.push(10, 11, 12)

// unshift(...items) - добавляет новый элемент или элементы в начало массива, сдвигая элементы вправо, увеличивая их индексы, что не очень хорошо
// ...items - элемент или элементы, которые будут добавлены в начало массива
// array.unshift(-2, -1, 0)

// pop() - удаляет последний элемент из массива и возвращает его (если массив пуст, возвращается undefined)
// const removedItem = array.pop()
// console.log(removedItem) // 9

// shift() - удаляет первый элемент из массива, сдвигая элементы влево, уменьшая их индексы, что не очень хорошо.
// Удаленный элемент возвращается (если массив пуст, возвращается undefined)
// const removedItem2 = array.shift()
// console.log(removedItem2) // 1

// find(predicate: (value, index, array]), thisArg?) - возвращает элемент, который первый прошел условие в коллбэк функции предикат
// Если ни один элемент не пройдет условие - вернется undefined
// findIndex(predicate: (value, index, array]), thisArg?) - возвращает индекс элемента, который первый прошел условие в коллбэк функции предикат
// Если ни один элемент не пройдет условие - вернется -1

// predicate: (value, index, array) - коллбэк функция предикат, принимает 3 параметра, item, index, array. Вызывается 1 раз для каждого элемента поочередно, пока не найдет первый элемент, прошедший условие
// thisArg? -

// const item = array.find((item, index, array) => {
//   return item === 6
// })
// console.log(item) // 6

// const index = array.findIndex((item, index, array) => {
//   return item === 6
// })
// console.log(index) // 5

// filter(predicate: (value, index, array), thisArg?) - возвращает новый массив с отфильтрованными элементами, которые прошли условие в коллбэк функции предикат.
// callbackfn - коллбэк функция принимает 3 параметра, item, index, array. Вызывается 1 раз, для каждого элемента поочередно
// thisArg? -

// Если ни один элемент не пройдет условие - вернется пустой массив
// const newArray = array.filter((item, index, array) => {
//   return item % 2 === 0
// })
// console.log(newArray) // [ 2, 4, 6, 8 ]

// map(callbackfn: (value, index, array), thisArg?) -
// const newArray = array.map((item, index, array) => {
//   return item + 10
// })
// console.log(newArray) // [ 11, 12, 13, 14, 15, 16, 17, 18, 19 ]

// flat(depth?: 1) - достает вложенные массивы и возвращает новый массив
// depth?: 1 - глубина вложенности (Infinity - достать все вложенные массивы)
// const newArray = array.flat()

// sort(compareFn?: (a, b)) -
// compareFn?: (a, b) - возвращает новый отсортированный массив элементов, мутируя исходный массив
// const newArray = array.sort((a, b) => a < b ? 1 : -1)
// console.log(newArray) // [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// reverse() - возвращает новый перевернутый массив элементов, мутируя исходный массив
// const newArray = array.reverse()
// console.log(newArray) // [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// join(separator?)
// separator? - заданный разделитель
// const items = array.join(", ")
// console.log(items) // 1, 2, 3, 4, 5, 6, 7, 8, 9
