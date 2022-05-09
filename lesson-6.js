const students = [
   { name: 'Evgeniy', age: 17, isMarried: false, scores: 110 },
   { name: 'Dmitriy', age: 15, isMarried: false, scores: 84 },
   { name: 'Olga', age: 20, isMarried: true, scores: 54 },
   { name: 'Marina', age: 39, isMarried: true, scores: 23 },
   { name: 'Misha', age: 45, isMarried: false, scores: 55 },
   { name: 'Diana', age: 30, isMarried: true, scores: 89 },
]

const user = {
   name: 'Bob', age: 23,
   friends: ['Alex', 'Nick', 'John'],
}

// 1. Создайте поверхностную копию объекта user
const copyUser = { ...user }
// console.log(copyUser === user) // false
// console.log(copyUser.friends === user.friends) // true

// 2. Глубокая копия объекта user
const deepCopyUser = { ...copyUser, friends: [...copyUser.friends] }
// console.log(deepCopyUser === copyUser)
// console.log(deepCopyUser.friends === copyUser.friends) // false

// 3. Поверхностная копия массива students
const copyStudents = [...students]
// console.log(copyStudents === students) // false

// 4. Глубокая копия массива students
const deepCopyStudents = students.map(s => ({ ...s }))
// console.log(deepCopyStudents === students) // false
// console.log(deepCopyStudents[0] === students[0]) // false

// 5. Отсортируйте deepCopyStudents по алфавиту
const sortByName = [...deepCopyStudents].sort((a, b) => a.name > b.name ? 1 : -1)
// console.log(sortByName)

// 5a. Отсортируйте deepCopyStudents по успеваемости ( лучший идет первым )
const sortByScores = [...deepCopyStudents].sort((a, b) => b.scores - a.scores)
// console.log(sortByScores)
// console.log(students)

// 6. Сформируйте массив студентов, у которых 100 и более баллов
const bestStudents = students.filter(s => s.scores >= 100)
// console.log(bestStudents)

// 6a. Получите массив ( "вырежьте" ) из трех лучших студентов из массива deepCopyStudents
const topStudents = deepCopyStudents.map(s => ({ ...s })).sort((a, b) => b.scores - a.scores).splice(0, 3)
// console.log(topStudents)

// 6b. Объедините массивы deepCopyStudents и topStudents так, чтобы сохранился порядок сортировки
const newDeepCopyStudents = [...topStudents, ...deepCopyStudents]
// console.log(newDeepCopyStudents)

// 7. Сформируйте массив холостых студентов
const notMarriedStudents = students.filter(s => !s.isMarried)
// console.log(notMarriedStudents)

// 8. Сформируйте массив имен студентов
const studentsName = students.map(s => s.name)
// console.log(studentsName)

// 8a. Сформируйте строку из имен студентов, разделенных
// - запятой
// - пробелом
const nameWithSpace = students.map(s => s.name).join(', ')
// console.log(nameWithSpace)

const namesWithComma = students.map(s => s.name).join(' ')
// console.log(namesWithComma)

// 9. Добавьте всем студентам свойство 'isStudent' со значением true
const trueStudents = students.map(s => ({ ...s, isStudent: true }))
// console.log(trueStudents)

// 10. Misha женился. Выполните соответствующие преобразование массива students
const studentsWithMarriedMisha = students.map(s => s.name === 'Misha' ? { ...s, isMarried: true } : s)
// console.log(studentsWithMarriedMisha)

// 11. Найдите студента по имени Olga
const olga = students.find(s => s.name === 'Olga')
// console.log(olga)

// 12. Найдите студента с самым высоким баллом
const bestStudent = students.reduce((acc, s) => {
   return acc.scores > s.scores ? acc : s
}, [])
// console.log(bestStudent)

// 13. Найдите сумму баллов всех студентов
const scoresSum = students.reduce((acc, s) => {
   return acc + s.scores
}, 0)
// console.log(scoresSum)

// 14. Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет каждому студенту свойство 'friends',
// значением которого является массив имен всех остальных студентов из массива,
// за исключением собственного имени студента. Т.е. в друзьях у Евгения Евгения быть не должно.
const addFriends = (students) => {
   return students.map(s => {
      return { ...s, friends: students.map(s => s.name).filter(n => n !== s.name) }
   })
}
// console.log(addFriends(students))