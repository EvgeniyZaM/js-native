// Получить слово с первой заглавной буквой
const getWordWithFirstCapitalLetter = (word) => {

  if (!word.length) {
    return word
  }

  const firstLetter = word[0].toUpperCase()
  word = word.slice(1)

  return firstLetter + word
}

console.log(getWordWithFirstCapitalLetter("hello")) // "Hello"

// Если строка больше максимальной длинны - заменить конец строки на "..."
const truncateStr = (str, maxlength) => {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "..."
  } else {
    return str
  }
}

console.log(truncateStr("Вот, что мне хотелось бы сказать на эту тему:", 20)) // "Вот, что мне хотело…"
console.log(truncateStr("Всем привет!", 20)) // "Всем привет!"
