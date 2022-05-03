const asyncAwait = async () => {
   try { // Попытка выполнить какой-то код
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      const user = await data[0]
      const address = await user.address
      const geo = await address.geo
      const lat = await geo.lat
      console.log(lat)
   } catch (err) { // Если внутри блока try возникает ошибка, то выполнится catch
      console.warn(err)
   } finally { // Выполнится в любом случае
      console.log('Finally')
   }
}

asyncAwait()