const asyncAwait = async () => {
  try { // Попытка выполнить какой-то код
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    const user = await data[0]
    const address = await user.address
    const geo = await address.geo
    const lat = await geo.lat
    console.log(lat)

    const all = await Promise.all([data, user, address, geo, lat])
    console.log(all)
    const allSettled = await Promise.allSettled([data, user, address, geo, lat])
    console.log(allSettled)
    const race = await Promise.race([data, user, address, geo, lat])
    console.log(race)

  } catch (err) { // Если внутри блока try возникает ошибка, то выполнится catch
    console.warn(err)
  } finally { // Выполнится в любом случае
    console.log('Finally')
  }
}
asyncAwait()

// const asyncAwait2 = async () => {
//    const resUsers = await fetch('https://jsonplaceholder.typicode.com/users')
//    const dataUsers = await resUsers.json()
//    console.log(dataUsers)
//    const resToDos = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//    const dataToDos = await resToDos.json()
//    console.log(dataToDos)
//    const resPosts = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//    const dataPosts = await resPosts.json()
//    console.log(dataPosts)
// }
// asyncAwait2()