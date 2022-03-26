// startsWith() - Проверяет, НАЧИНАЕТСЯ ли строка с тех символов, которые мы введем
// endsWith() - Проверяет, ЗАКАНЧИВАЕТСЯ ли строка с тех символов, которые мы введем
const languages = ['Java', 'TypeScript', 'C#', 'JavaScript', 'Julia']
console.log(languages.filter(l => {
   return l.startsWith('J') || l.endsWith('#')
}))

// includes() - поиск подстроки. Возвращает boolean значение
const exampleIncludes = (str) => {
   return str.includes('inc')
}
console.log(exampleIncludes('includes')) // true