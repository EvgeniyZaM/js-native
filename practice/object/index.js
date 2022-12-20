// Цепочка вызовов
const object = {
  getSum(a, b) {
    console.log(a + b)
    return this
  }
}

object
  .getSum(10, 5) // 15
  .getSum(20, 10) // 30
  .getSum(30, 20) // 50
