const dad = {
	name: 'Владимир',
	age: 55,
	logInfo(job, phone) {
		console.log(`Мое имя ${this.name}, мне ${this.age} лет, работаю ${job} разработчиком, мой номер ${phone}`)
	}
}

dad.logInfo('Frontend', 375441111111) // this ссылается на контекст объекта dad

const mother = {
	name: 'Людмила',
	age: 50
}

// Переопределяю контекст и теперь this ссылается на контекст объекта mother
dad.logInfo.bind(mother, 'Frontend', 375441111111)()
dad.logInfo.call(mother, 'Frontend', 375441111111)
dad.logInfo.apply(mother, ['Frontend', 375441111111])