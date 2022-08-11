// Простой поиск

// 1.
const search = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i
		}
	}
	return -1
}

// console.log(search([1, 3, 6, 13, 17], 13)) // 3
// console.log(search([1, 3, 6, 13, 17], 12)) // -1
