const user = {
   name: 'Dimych',
   hair: 40,
   address: { city: 'Minsk', house: 12 },
   laptop: { title: 'Asus' },
   technologies: ['css', 'html', 'js', 'react'],
   companies: [
      { id: 1, title: 'Epam' },
      { id: 2, title: 'IT-INCUBATOR' },
   ]
}

const makeHairstyle = (user, number) => {
   return { ...user, hair: user.hair - number }
}
// console.log(makeHairstyle(user, 10))

const moveUser = (user, newCity) => {
   return { ...user, address: { ...user.address, city: newCity } }
}
// console.log(moveUser(user, 'Kiev'))

const moveUserToOtherHouse = (user, newHouse) => {
   return { ...user, address: { ...user.address, house: newHouse } }
}
// console.log(moveUserToOtherHouse(user, 99))

const upgradeUserLaptop = (user, newLaptop) => {
   return { ...user, laptop: { ...user.laptop, title: newLaptop } }
}
// console.log(upgradeUserLaptop(user, 'Macbook'))

const addNewTechnologyToUser = (user, newTechnology) => {
   return { ...user, technologies: [...user.technologies, newTechnology] }
}
// console.log(addNewTechnologyToUser(user, 'ts'))

const updateTechnology = (user, oldTechnology, newTechnology) => {
   return { ...user, technologies: user.technologies.map(t => t === oldTechnology ? newTechnology : t) }
}
// console.log(updateTechnology(user, 'js', 'ts'))

const removeTechnology = (user, TechnologyForDelete) => {
   return { ...user, technologies: user.technologies.filter(t => t !== TechnologyForDelete) }
}
// console.log(removeTechnology(user, 'js'))

const addNewCompany = (user, newCompany) => {
   return { ...user, companies: [...user.companies, newCompany] }
}
// console.log(addNewCompany(user, { id: 3, title: 'GOOGLE' })) 

const updateCompanyTitle = (user, idCompany, newTitle) => {
   return {
      ...user, companies: user.companies.map(c => c.id === idCompany
         ? { ...c, title: newTitle }
         : c
      )
   }
}
// console.log(updateCompanyTitle(user, 1, 'EPAM'))

// AssociativeArray:
const companies = {
   '1': [
      { id: 1, title: 'Епам' },
      { id: 2, title: 'Google' },
   ],
   '2': [
      { id: 1, title: 'IT-INCUBATOR' },
      { id: 2, title: 'Yandex' },
   ],
}

const changeCompanyTitle = (idCompany, idCompanyTitle, companies, newTitle,) => {
   return {
      ...companies, [idCompany]: companies[idCompany].map(c => c.id === idCompanyTitle
         ? { ...c, title: newTitle }
         : c
      )
   }
}
// console.log(changeCompanyTitle('1', 1, companies, 'Epam'))