const students = [
	{ name: 'Bob', age: 22, isOnline: true, scores: 85 },
	{ name: 'Alex', age: 21, isOnline: true, scores: 89 },
	{ name: 'Nick', age: 20, isOnline: false, scores: 120 },
	{ name: 'John', age: 19, isOnline: false, scores: 100 },
]

const myMap = (students, callback) => {
	let convertedArray = []
	for (let i = 0; i < students.length; i++) {
		convertedArray[i] = callback(students[i])
	}
	return convertedArray
}

// console.log(myMap(students, (s) => s.name))
// console.log(myMap(students, (s) => ({ ...s, isStudent: true })))

const myFilter = (students, callback) => {
	const filteredArray = []
	for (let i = 0; i < students.length; i++) {
		if (callback(students[i]) === true) {
			filteredArray[i] = students[i]
		}
	}
	return filteredArray
}

// console.log(myFilter(students, (s) => s.age >= 21))

const myFind = (students, callback) => {
	for (let i = 0; i < students.length; i++) {
		if (callback(students[i]) === true) {
			return students[i]
		}
	}
}

// console.log(myFind(students, (s) => s.age > 21))