// setTimeout - вызывает callback функцию один раз, через определённое количество времени и возвращает id
// setInterval - вызывает callback функцию каждый раз, через определенное количество времени и возвращает id

const timerId = setTimeout((value1, value2, value3) => {
  console.log(`${value1} ${value2} ${value3}`)
}, 1000, "1", "2", "3")

// Отмена вызова setTimeout
clearTimeout(timerId)

const timerId2 = setInterval((value1, value2, value3) => {
  console.log(`${value1} ${value2} ${value3}`)
}, 1000, "1", "2", "3")

// Отмена вызова setInterval
clearInterval(timerId2)

// Если первый аргумент является строкой, то JavaScript создаст из неё функцию (не рекомендуется)
// setTimeout("console.log('Работает!')", 1000) // "Работает"

// Arguments:
// handler - callback функция
// timeout? - задержка в мили-секундах, перед запуском callback функции (0 по умолчанию)
// ...arguments - аргументы, передаваемые в функцию
