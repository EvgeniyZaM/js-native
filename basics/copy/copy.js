let man = {
   name: 'John', age: 28,
   mother: {
      name: 'Kate', age: 50,
      work: { position: 'doctor', experience: 15 },
      parents: [
         {
            name: 'Kevin', age: 80,
            favoriteDish: {
               title: 'borscht',
               ingredients: [
                  { title: 'beet', amount: 3 },
                  { title: 'potatoes', amount: 5 },
                  { title: 'carrot', amount: 1 },
               ]
            }
         },
         {
            name: 'Jennifer', age: 78,
            favoriteDish: {
               title: 'sushi',
               ingredients: [
                  { title: 'fish', amount: 1 },
                  { title: 'rise', amount: 0.5 }
               ]
            }
         },
      ]
   }
}

// JSON.parse(JSON.stringify() ( deep copy )
// const copyMan = JSON.parse(JSON.stringify(man))

// Object.assign{} ( superficial copy )
// const copyMan = Object.assign({}, man, { isOnline: true })

// Spread ( deep copy )
const copyMan = {
   ...man, mother: {
      ...man.mother, work: { ...man.mother.work }, parents: man.mother.parents.map(p => ({
         ...p, favoriteDish: {
            ...p.favoriteDish, ingredients: p.favoriteDish.ingredients.map(f => ({ ...f }))
         }
      }))
   }
}

console.log(copyMan === man) // false
console.log(copyMan.mother === man.mother) // false
console.log(copyMan.mother.work === man.mother.work) // false
console.log(copyMan.mother.parents === man.mother.parents) // false
console.log(copyMan.mother.parents === man.mother.parents) // false
console.log(copyMan.mother.parents[0] === man.mother.parents[0]) // false
console.log(copyMan.mother.parents[0].favoriteDish === man.mother.parents[0].favoriteDish) // false
console.log(copyMan.mother.parents[0].favoriteDish.ingredients === man.mother.parents[0].favoriteDish.ingredients) // false
console.log(copyMan.mother.parents[0].favoriteDish.ingredients[0] === man.mother.parents[0].favoriteDish.ingredients[0]) // false
console.log(copyMan.mother.parents[0].favoriteDish.ingredients[1] === man.mother.parents[0].favoriteDish.ingredients[1]) // false
console.log(copyMan.mother.parents[0].favoriteDish.ingredients[2] === man.mother.parents[0].favoriteDish.ingredients[2]) // false
console.log(copyMan.mother.parents[1] === man.mother.parents[1]) // false
console.log(copyMan.mother.parents[1].favoriteDish === man.mother.parents[1].favoriteDish) // false
console.log(copyMan.mother.parents[1].favoriteDish.ingredients === man.mother.parents[1].favoriteDish.ingredients) // false
console.log(copyMan.mother.parents[1].favoriteDish.ingredients[0] === man.mother.parents[1].favoriteDish.ingredients[0]) // false
console.log(copyMan.mother.parents[1].favoriteDish.ingredients[1] === man.mother.parents[1].favoriteDish.ingredients[1]) // false