const big = document.getElementById('big')
const medium = document.getElementById('medium')
const small = document.getElementById('small')

const handlerBig = (e) => {
	console.log('big')
}

const handlerMedium = (e) => {
	e.stopPropagation()
	console.log('medium')
}

const handlerSmall = (e) => {
	e.stopPropagation()
	console.log('small')
}

big.addEventListener('click', handlerBig)
medium.addEventListener('click', handlerMedium)
small.addEventListener('click', handlerSmall)