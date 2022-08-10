// Уникальность всех символов в строке

// 1
const isUnique = (word) => {

	for (let i = 0; i < word.length; i++) {
		if (word.lastIndexOf(word[i]) !== i) {
			return false
		}
	}

	return true
}

// console.log(isUnique('abcdef')) // true
// console.log(isUnique('1234567')) // true
// console.log(isUnique('abcABC')) // true
// console.log(isUnique('abcadef')) // false

// 2
const isUnique2 = (word) => {

	const set = new Set()

	for (let i = 0; i < word.length; i++) {
		if (set.has(word[i])) {
			return false
		} else {
			set.add(word[i])
		}
	}

	return true
}

// console.log(isUnique2('abcdef')) // true
// console.log(isUnique2('1234567')) // true
// console.log(isUnique2('abcABC')) // true
// console.log(isUnique2('abcadef')) // false

// 3
const isUnique3 = (word) => {

	const set = new Set(word)

	if (set.size === word.length) {
		return true
	} else {
		return false
	}
}

// console.log(isUnique3('abcdef')) // true
// console.log(isUnique3('1234567')) // true
// console.log(isUnique3('abcABC')) // true
// console.log(isUnique3('abcadef')) // false
