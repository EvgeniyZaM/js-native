console.log('start')

setTimeout(function () {
	console.log('function1')
}, 2000)

setTimeout(function () {
	console.log('function2')
}, 4000)

console.log('end')

/* 
1. console.log('start') попадает в call stack, выполняется и сразу же уходит из call stack-а

2. Первый setTimeout попадает в call stack, передает анонимную функцию в Web Api, после чего уходит из call stack-а

3. Далее в Web Api идет отсчет 2 секунд, но процесс не останавливается

4. Второй setTimeout попадает в call stack, передает анонимную функцию в Web Api, после чего уходит из call stack-а

5. Далее в Web Api идет отсчет 4 секунд, но процесс по прежнему не останавливается

6. console.log('end') попадает в call stack, выполняется и сразу же уходит из call stack-а

7. К этому времени из Web Api, event loop пробрасывает первую, потом вторую анонимную функцию в очередь

8. И если call stack окажется пустым, event loop перебрасывает из очереди первую анонимную функцию в call stack

9. console.log('function1') попадает в call stack, выполняется и сразу же уходит из call stack-а

10. После чего уходит первая анонимная функция из call stack-а

11. Далее из очереди event loop перебрасывает вторую анонимную функцию в call stack

12. console.log('function2') попадает в call stack, выполняется и сразу же уходит из call stack-а

13. После чего уходит вторая анонимная функция из call stack-а
*/