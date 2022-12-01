let student = {name: "John", age: 30, isAdmin: false, courses: ["html", "css", "js"], wife: null}

// JSON.stringify (преобразует объект в JSON)
const json = JSON.stringify(student)
console.log(json) // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}

// JSON.parse (преобразует JSON в объект)
const obj = JSON.parse(json)
console.log(obj) // {name: 'John', age: 30, isAdmin: false, courses: ['html', 'css', 'js'], wife: null}
