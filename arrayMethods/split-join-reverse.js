const people = ['Evgeniy', 'Igor', 'Kirill', 'Mihail', 'Oleg']

// Поменять порядок элементов на обратный, преобразовать массив в строку,
// после чего строку в массив
const splitJoinExample = [...people].reverse().join(' ').split(' ')
// console.log(splitJoinExample)