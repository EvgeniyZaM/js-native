// Можно итерироваться по объекту, массиву, строке
// По массиву можно, но не нужно!

const str = "hello"
const user = {name: "Evgeny", age: 23}

for (let key in user) {
  console.log(key) // Ключи
  console.log(user[key]) // Значения
}

for (let key in str) {
  console.log(str[key]) // Символы
}
