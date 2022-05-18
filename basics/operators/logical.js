// ! - НЕ
console.log(!true) // false
console.log(!false) // true

// && - И
console.log(1 && 0) // 0
console.log(1 && 5) // 5
console.log(null && 5) // null
console.log(0 && 'hello') // 0

// || - //ИЛИ 
console.log(1 || 0) // 1
console.log(true || 'hello') // true
console.log(null || 1) // 1
console.log(null || 0 || 1) // 1
console.log(undefined || null || 0) // 0