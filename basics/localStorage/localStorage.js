const person = { name: 'Evgeniy', age: 22 }
const friends = ['Mihail', 'Dmitriy']

localStorage.setItem('person', JSON.stringify(person))
localStorage.setItem('friends', JSON.stringify(friends))

console.log(JSON.parse(localStorage.getItem('person'))) // {name: 'Evgeniy', age: 22}
console.log(JSON.parse(localStorage.getItem('friends'))) // ['Mihail', 'Dmitriy']

console.log(localStorage.key(0)) // friends
console.log(localStorage.key(1)) // person

localStorage.removeItem('person')
localStorage.clear()