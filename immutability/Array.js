const friends = ['Dimych', 'Marina', 'Kirill', 31, 88, 50]
const number = [31, 88, 50, 49, 23]

const addFriend = (friends) => {
   return [...friends, 'Olga']
}
// console.log(addFriend(friends))

const removeFriend = (friends) => {
   return friends.filter(f => f !== 'Kirill')
}
// console.log(removeFriend(friends))

const changeFriend = (friends) => {
   return friends.map(f => f === 'Marina' ? 'Diana' : f)
}
// console.log(changeFriend(friends))

const addToNumber = (friends) => {
   return friends.map(f => f === 31 ? 31 + 1 : f)
}
// console.log(addToNumber(friends))

const sortedFriends = (friends) => {
   return [...friends].sort((a, b) => a > b ? 1 : -1)
}
// console.log(sortedFriends(friends))

const sortedNumbers = [...number].sort((a, b) => a - b)
// console.log(sortedNumbers)

// Найти самое большое число
const largeNumber = number.reduce((acc, num) => {
   return acc > num ? acc : num
}, 0)
// console.log(largeNumber)

// Вычислить единое число на основе всего массива 
const singleNumber = number.reduce((acc, num) => {
   return acc + num
}, 0)
// console.log(singleNumber)