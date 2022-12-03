// Если перед "use strict" будет какой-то код, то дальнейшая запись "use strict" не включит строгий режим
// Над "use strict" могут быть записаны только комментарии
// Нет никакого способа отменить use strict

"use strict" // Включить строгий режим для всего файла
// Этот код работает в строгом режиме:

// a = 1 // Error (не в строгом сработало бы)

// В function expression, function declaration - this будет равен undefined. В стрелочной - объект window (для IIFE все аналогично)
function f() {
  console.log(this) // undefined (не в строгом объект window)
}

f()

const f2 = function () {
  console.log(this) // undefined (не в строгом объект window)
}
f2()
