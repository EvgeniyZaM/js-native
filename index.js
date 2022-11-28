// ?. (Опциональная цепочка)
// Если значение перед ?. равно undefined или null, ?. остановит вычисление и вернет undefined
// Синтаксис:
// obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined
// obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined
// obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined

let key = "is likes"
const user = null

const user2 = {
  sayHi() {
    console.log("Hi")
  }
}

// console.log(user) // null
// console.log(user.address) // Error
// console.log(user.address.city) // Error
// console.log(user.address.city.name) // Error

// console.log(user?.address) // undefined
// console.log(user?.address?.city) // undefined
// console.log(user?.address?.city?.name) // undefined

// delete user.address.city // Error
// delete user?.address // Ошибки нету

// console.log(user[key]) // Error
// console.log(user?.[key]) // undefined

// user.sayHi() // Error
// user?.sayHi?.() // ничего не произошло
// user2.sayHi?.() // Hi

// console.log(user3?.address) // Error (объекта user3 не существует)

// user2.name = "John" // Работает
// user2?.name = "John" // Error
