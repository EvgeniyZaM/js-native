const asyncAwait = async () => {
   try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      const user = await data[0]
      const address = await user.address
      const geo = await address.geo
      const lat = await geo.lat
      console.log(lat)
   } catch (err) {
      console.warn(err)
   } finally {
      console.log('Finally')
   }
}

asyncAwait()