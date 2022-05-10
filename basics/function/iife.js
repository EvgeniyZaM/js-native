// 1 вариант
(function iife() {
	console.log('Работает')
})();

// 2 вариант
(function () {
	console.log('Работает')
})();

// 3 вариант
(iife = () => {
	console.log('Работает')
})();

// 4 вариант 
(() => {
	console.log('Работает')
})();