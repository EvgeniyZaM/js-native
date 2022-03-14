const students = [
   { name: 'Bob', age: 22, isOnline: true, scores: 85 },
   { name: 'Alex', age: 21, isOnline: true, scores: 89 },
   { name: 'Nick', age: 20, isOnline: false, scores: 120 },
   { name: 'Bob', age: 19, isOnline: false, scores: 100 },
]

const myMap = (students, callback) => {

   const newStudents = []

   for (let i = 0; i < students.length; i++) {
      newStudents.push(callback(students[i]))
   }

   return newStudents
}
console.log(myMap(students, s => s.name))

const myFilter = (students, callback) => {

   const newStudents = []

   for (let i = 0; i < students.length; i++) {
      if (callback(students[i]) === true) {
         newStudents.push(students[i])
      }
   }
   return newStudents
}

console.log(myFilter(students, s => s.scores >= 100))

const myFind = (students, callback) => {
   for (let i = 0; i < students.length; i++) {
      if (callback(students[i]) === true) {
         return students[i]
      }
   }
}

console.log(myFind(students, s => s.name === 'Bob'))