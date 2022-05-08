const a = 'a - globalScope'

function f() {
	const b = 'b - funcScope'
	var c = 'c - funcScope'
	let l = 'l - funcScope'
	console.log(a) // a - globalScope
	console.log(b) // b - funcScope
	console.log(c) // c - funcScope
	console.log(l) // l - funcScope

	// Вложенность:
	for (let i = 0; i < 1; i++) {
		console.log(a, b, c, l) // a - globalScope b - funcScope c - funcScope l - funcScope
		if (true) {
			console.log(a, b, c, l) // a - globalScope b - funcScope c - funcScope l - funcScope
			try {
				console.log(a, b, c, l) // a - globalScope b - funcScope c - funcScope l - funcScope
				switch (true) {
					case true: {
						console.log(a, b, c, l) // a - globalScope b - funcScope c - funcScope l - funcScope
						{
							console.log(a, b, c, l) // a - globalScope b - funcScope c - funcScope l - funcScope
						}
					}
				}
			} catch (err) { }
		}
	}
}
f()
console.log(a) // a - globalScope
// console.log(b) // b is not defined 
// console.log(c) // c is not defined
// console.log(l) // l is not defined

if (true) {
	var v = 'v - blockScope'
	const c = 'c - blockScope'
	let l = 'l - blockScope'
	console.log(v) // v - blockScope
	console.log(c) // c - blockScope
	console.log(l) // l - blockScope
}
console.log(v) // v - blockScope ( У var глобальная или функциональная область видимости )
// console.log(c) // c is not defined ( У const и let блочная или функциональная область видимости )
// console.log(l) // l is not defined ( У const и let блочная или функциональная область видимости )

// Необъявленные переменные:
function f2() {
	// "use strict" ( В строгом режиме, без ключевого слова будет ошибка )
	g = 'g - globalScope' // Если мы не используем ключевое слово при определении переменной в функции, то такая переменная будет глобальной 
	console.log(g) // g - globalScope
}
f2() // ( Если не вызвать функцию 'f2', то переменная 'g' будет не определена )
console.log(g) // g - globalScope 