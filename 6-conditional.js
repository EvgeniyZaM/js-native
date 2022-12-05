const number = 1

// 1 вариант: (условие в функции)
const f = () => {
  if (number === 0) {
    console.log("Вы ввели число 0")
    return
  }

  if (number === 1) {
    console.log("Вы ввели число 1")
    return
  }

  if (number === 2 || number === 3) {
    console.log("Вы ввели число 2, а может и 3")
    return
  }

  console.log("Другое число")
}

f()

// 2 вариант:
if (number === 0) {
  console.log("Вы ввели число 0")
} else if (number === 1) {
  console.log("Вы ввели число 1")
} else if (number === 2 || number === 3) {
  console.log("Вы ввели число 2, а может и 3")
} else {
  console.log("Другое число")
}

// 3 вариант:
number === 0
  ? console.log("Вы ввели число 0")
  : number === 1
    ? console.log("Вы ввели число 1")
    : number === 2 || number === 3
      ? console.log("Вы ввели число 2, а может и 3")
      : console.log("Другое число")

// 4 вариант:
switch (number) {
  case 0: // number === 0
    console.log("Вы ввели число 0")
    break

  case 1: // number === 1
    console.log("Вы ввели число 1")
    break

  case 2: // number === 0 || number === 3
  case 3:
    console.log("Вы ввели число 2, а может и 3")
    break

  default: {
    console.log("Другое число")
  }
}

// 5 вариант:
const f2 = () => {
  switch (number) {
    case 0: // number === 0
      console.log("Вы ввели число 0")
      return

    case 1: // number === 1
      console.log("Вы ввели число 1")
      return

    case 2: // number === 2 || number === 3
    case 3:
      console.log("Вы ввели число 2, а может и 3")
      return

    default: {
      console.log("Другое число")
    }
  }
}

f2()
