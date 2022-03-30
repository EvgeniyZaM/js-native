const person = {
   address: { country: 'Belarus', city: 'Gomel', house: 9 },
}

const addStreetInAddress = (person) => {
   return { ...person, address: { ...person.address, street: 'Lenina' } }
}
// console.log(addStreetInAddress(person))

const addInfo = (person) => {
   const info = { isMarried: false, isOnline: true }
   return { ...person, info: info }
}
// console.log(addInfo(person))

const moveHouse = (person) => {
   return { ...person, address: { ...person.address, house: 31 } }
}
// console.log(moveHouse(person))

const changeHouse = (person) => {
   return { ...person, address: { ...person.address, house: person.address.house + 23 } }
}
// console.log(changeHouse(person))