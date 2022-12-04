// Объявление Function Declaration видимо только внутри блока кода, в котором располагается
if (2 > 1) {
  function showA() {
    console.log("a")
  }

  showA() // Выполнится
} else {
  function showB() {
    console.log("b")
  }

  showB() // Выполнится
}
showA() // Error (не в строгом бы сработало, с expression и arrow не сработает ни в каком режиме)

// let show
// if (2 > 1) {
//   show = function () {
//     console.log("a")
//   }
// } else {
//   show = function () {
//     console.log("b")
//   }
// }
// show()

// let show = 2 > 1
//   ? function () {
//     console.log("a")
//   }
//   : function () {
//     console.log("b")
//   }
// show()
