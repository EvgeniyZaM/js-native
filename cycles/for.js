// let i = 0 - начало (выполняется один раз при входе в цикл)
// i < 20 - условие (проверяется перед каждой итерацией цикла. Если оно вычислится в false, цикл остановится)
// i++ - шаг (выполняется после тела цикла на каждой итерации перед проверкой условия)

for (let i = 0; i < 20; i++) { // Если условие === true → Выполняй итерацию, выполняй шаг
                               // тело цикла (выполняется, если условие === true)

  if (i % 2 === 0) {
    continue // переход к следующей итерации (нельзя использовать с тернарным оператором)
  }

  if (i === 11) {
    break // прерывание цикла (нельзя использовать с тернарным оператором)
  }
  console.log(i)
}

// Пропуск частей for:
// let i = 0
// for (; i < 10; i++) {
//   console.log(i)
// }

// let i = 0
// for (; i < 10;) {
//   console.log(i)
//   i++
// }

// for(;;){} Будет выполняться вечно
