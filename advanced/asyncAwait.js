const fetchRequest = async () => {
   try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users') // fetch делает запрос и возвращает promise
      const data = await res.json() // json() - это метод, который нужен для того, чтобы мы получили json, который прилетает к нам с сервера. Он так же возвращает promise
      console.log(data)
   } catch (err) {
      console.log('Error:', err.message)
   } finally {
      console.log('Finally')
   }
}

fetchRequest()