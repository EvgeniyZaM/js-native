// Плоский массив

// 1
const flatten = (arr) => {

	const result = []

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			const flat = flatten(arr[i])
			for (let j = 0; j < flat.length; j++) {
				result.push(flat[j])
			}
		} else {
			result.push(arr[i])
		}
	}

	return result
}

// console.log(flatten([[1], [[2, 3]], [[[4]]]])) // [1, 2, 3, 4]

// 2
const flatten2 = arr => arr.flat(Infinity)

// console.log(flatten2([[1], [[2, 3]], [[[4]]]])) // [1, 2, 3, 4]
