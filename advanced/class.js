class Dad { // Класс Dad
	constructor(options) {
		this.name = options.name // Переменная this указывает на экземпляр класса Dad
		this.age = options.age
	}
	say() { // Метод. Наследуется всеми экземплярами класса Dad
		console.log('Отец тут главный!')
	}

	static info() { // Статический метод. Доступен как свойство класса Dad и не наследуется экземплярами класса
		console.log('Это семья отца!')
	}

	get yearOfBirth() {
		return 2022 - this.age
	}
}

const dad = new Dad({ // Экземпляр класса Dad
	name: 'Дмитрий',
	age: 55
})


class Mother extends Dad {
	constructor(options) {
		super(options)
		this.height = options.height
	}

	say() {
		super.say()
		console.log('Нет, мать тут главная!')
	}

	static info() {
		console.log('Это семья матери!')
	}

	get yearOfBirth() {
		return 2022 - this.age
	}

	set yearOfBirth(newAge) {
		this.age = newAge
	}
}

const mother = new Mother({
	name: 'Светлана',
	age: 50,
	height: 165
})

mother.yearOfBirth = 51 // Поменял с помощью set
console.log(mother.age) // 51

console.log(dad instanceof Dad) // true. Проверяет, есть ли экземпляр dad, у класса Dad
console.log(dad instanceof Object) // true. Проверяет, есть ли экземпляр dad, у класса Object

console.log(dad.hasOwnProperty('name')) // true. Проверяет, есть ли у объекта dad свойство name
console.log(dad.hasOwnProperty('say')) // false. say не собственный метод объекта Dad. Он наследуется от родительского класса Dad