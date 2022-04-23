const p = new Promise((resolve, reject) => {
   fetch('https://jsonplaceholder.typicode.com/users') // fetch делает запрос и возвращает promise
      .then((res) => resolve(res.json())) // json() - это метод, который нужен для того, чтобы мы получили json, который прилетает к нам с сервера. Он также возвращает promise
})

p
   .then(data => console.log(data))
   .catch(err => console.log('Error:', err))
   .finally(() => console.log('finally'))

const p2 = new Promise((resolve, reject) => {
   fetch('https://jsonplaceholder.typicode.com/todos') // fetch делает запрос и возвращает promise
      .then((res) => resolve(res.json())) // json() - это метод, который нужен для того, чтобы мы получили json, который прилетает к нам с сервера. Он также возвращает promise
})

p2
   .then((data) => console.log(data))
   .catch((err) => console.log('Error:', err))
   .finally(() => console.log('finally'))

Promise.all([p, p2])
   .then((results) => console.log('All promises:', results))

Promise.race([p, p2])
   .then((result) => console.log('Race promises:', result))

Promise.allSettled([p, p2])
   .then((results) => console.log('All settled promises:', results))