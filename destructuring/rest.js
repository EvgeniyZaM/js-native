// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]

let options2 = {
  title: "Menu",
  height: 200,
  width: 100
}

let {title, ...rest} = options2

console.log(rest)
