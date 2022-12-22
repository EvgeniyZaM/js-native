let count = 0
const f = function f2() {
  if (count === 3) {
    return
  }

  count++
  console.log(count) // 1, 2, 3
  return f2() // Можно использовать в теле функции, для рекурсии
}

f()
// f2() // Error
