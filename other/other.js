// Каждое новое слово должно начинаться с большой буквы
const converter = (word) => {
	return word.split(' ').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')
}
// console.log(converter("How can mirrors")) // How Can Mirrors

// Вернуть время в миллисекундах
const past = (h, m, s) => {
	return ((h * 3600) + (m * 60) + s) * 1000
}
// console.log(past(1, 1, 1)) // 3661000

// Каждое положительное становится отрицательным, а отрицательное становится положительным
const invert = (array) => array.map(num => -num)
// console.log(invert([0, 1, 2, -3, -4])) // [-0, -1, -2, 3, 4]

// Удалить все восклицательный знаки
const removeExclamationMarks = (s) => s.replace(/!/g, '')
// console.log(removeExclamationMarks("Hello World!")) // Hello World