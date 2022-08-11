const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]

const findMinValue = (numbers) => {
	let minValue = numbers[0]

	for (let i = 0; i < numbers.length; i++) {
		if (minValue > numbers[i]) {
			minValue = numbers[i]
		}
	}

	return minValue
}

// console.log(findMinValue(numbers)) // -100
