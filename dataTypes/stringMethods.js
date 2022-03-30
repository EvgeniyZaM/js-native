// startsWith() - Проверяет, НАЧИНАЕТСЯ ли строка с тех символов, которые мы введем
// endsWith() - Проверяет, ЗАКАНЧИВАЕТСЯ ли строка с тех символов, которые мы введем
const languages = ['Java', 'TypeScript', 'C#', 'JavaScript', 'Julia']

const findlanguage = languages.filter(l => {
   return l.startsWith('J') || l.endsWith('#')
})
console.log(findlanguage) // ['Java', 'C#', 'JavaScript', 'Julia']

// includes() - поиск подстроки. Возвращает boolean значение
const exampleIncludes = (str) => {
   return str.includes('inc')
}
console.log(exampleIncludes('includes')) // true