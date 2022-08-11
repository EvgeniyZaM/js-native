// Удаление всех повторяющихся значений в строке

const removeDupes = (word) => {
	const result = []
	const map = {}

	for (let i = 0; i < word.length; i++) {
		if (!map[word[i]]) {
			map[word[i]] = true
			result.push(word[i])
		}
	}

	return result.join('')
}

// console.log(removeDupes('abcd')) // 'abcd'
// console.log(removeDupes('aabbccdd')) // 'abcd'
// console.log(removeDupes('abcddbca')) // 'abcd'
// console.log(removeDupes('abababcdcdcd')) // 'abcd'

const removeDupes2 = word => [...new Set(word)].join('')

// console.log(removeDupes2('abcd')) // 'abcd'
// console.log(removeDupes2('aabbccdd')) // 'abcd'
// console.log(removeDupes2('abcddbca')) // 'abcd'
// console.log(removeDupes2('abababcdcdcd')) // 'abcd'