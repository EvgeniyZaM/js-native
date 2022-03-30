const friends = ['Dimych', 'Marina', 'Kirill', 31]

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