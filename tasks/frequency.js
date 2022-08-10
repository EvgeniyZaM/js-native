// Какая строка встречается чаще всего

const highestFrequency = (arr) => {
	const map = {}
	let maxFreq = 0
	let maxFreqStr = arr[0]

	for (let i = 0; i < arr.length; i++) {
		if (map[arr[i]]) {
			map[arr[i]]++
		} else {
			map[arr[i]] = 1
		}

		if (map[arr[i]] > maxFreq) {
			maxFreq = map[arr[i]]
			maxFreqStr = arr[i]
		}
	}

	return maxFreqStr
}

// console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) //  c
// console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) //  abc
// console.log(highestFrequency(['abc', 'def'])) // abc
// console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi'])) //  ghi
