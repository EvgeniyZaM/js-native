const palindrome = (word) => {
	word = word.toLowerCase()

	return word === word.split('').reverse().join('')
}

// console.log(palindrome('avava')) // true
// console.log(palindrome('avavab')) // false
