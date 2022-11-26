const number = 1

// 1 вариант:
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

  console.log("Вы ничего не ввели")
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
  console.log("Вы ничего не ввели")
}

// 3 вариант:
number === 0
  ? console.log("Вы ввели число 0")
  : number === 1
    ? console.log("Вы ввели число 1")
    : number === 2 || number === 3
      ? console.log("Вы ввели число 2, а может и 3")
      : console.log("Вы ничего не ввели")

// 4 вариант:
switch (number) {
  case 0:
    console.log("Вы ввели число 0")
    break

  case 1:
    console.log("Вы ввели число 1")
    break

  case 2:
  case 3:
    console.log("Вы ввели число 2, а может и 3")
    break

  default: {
    console.log("Вы ничего не ввели")
  }
}
