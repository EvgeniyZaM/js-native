const str = '   hello   '

console.log(str.toUpperCase()) //   HELLO
console.log(str.toLowerCase()) //   hello

console.log(str.trimStart()) //hello
console.log(str.trimEnd()) //   hello
console.log(str.trim()) //hello

console.log(str.startsWith('   hel')) //true
console.log(str.endsWith('lo   ')) //true

console.log(str.includes('ll')) //true
console.log(str.indexOf('llo', 5)) //true

console.log(str.slice(5, 7)) //ll

console.log(str.repeat(3)) //   hello      hello      hello   