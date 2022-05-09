// // Урок делать в React приложении!

// // КОД:

// // 1. Функция sum принимает параметром целые положительные числа (неопределенное кол-во) и возвращает их сумму (rest)
// export function sum(...numbers: Array<any>): number {
//    return numbers.reduce((acc, el) => {
//       return acc + el
//    }, 0)
// }

// // 2. Функция getTriangleType принимает три параметра:
// // длины сторон треугольника.
// // Функция должна возвращать:
// // - '10', если треугольник равносторонний,
// // - '01', если треугольник равнобедренный,
// // - '11', если треугольник обычный,
// // - '00', если такого треугольника не существует
// export function getTriangleType(a: number, b: number, c: number): string {
//    if (a + b <= c || a + c <= b || b + c <= a)
//       return '00'
//    else if (a === b && b === c)
//       return '10'
//    else if (a === b || a === c || b === c)
//       return '01'
//    else
//       return '11'
// }

// // 3. Функция getSum принимает параметром целое число и возвращает сумму цифр этого числа
// export function getSum(number: number): number {
//    const res = String(number)
//    let sum = 0
//    for (let i = 0; i < res.length; i++) {
//       sum += Number(res[i])
//    }
//    return sum
// }

// // 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// // Если сумма чисел с четными ИНДЕКСАМИ!!! (0 как четный индекс) больше суммы чисел с нечетным ИНДЕКСАМИ!!!
// // то функция возвращает true. В противном случае - false
// export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
//    let even = arr.reduce((acc, num, index) => index % 2 === 0 ? acc + num : acc, 0)
//    let notEven = arr.reduce((acc, num, index) => index % 2 !== 0 ? acc + num : acc, 0)
//    return even > notEven
// }

// // 5. Функция isSquareGreater принимает два параметра: площадь круга и площадь квадрата.
// // Функция должна возвращать true если круг не будет выступать за пределы квадрата и false в противном случае. Центры фигур совпадают
// export function isSquareGreater(areaCr: number, areaSq: number): boolean {
//    return areaCr / areaSq <= Math.PI / 4
// }

// // ТЕСТЫ:

// import { sum, getTriangleType, getSum, isEvenIndexSumGreater, isSquareGreater } from './tasks'

// test('get sum', () => {
//    expect(sum(3, 5, 7, 6, 4, 9)).toBe(34)
//    expect(sum(1, 1, 1, 6)).toBe(9)
//    expect(sum(0)).toBe(0)
// })

// test('get Triangle Type', () => {
//    expect(getTriangleType(1, 1, 1)).toBe('10')
//    expect(getTriangleType(2, 3, 3)).toBe('01')
//    expect(getTriangleType(4, 5, 3)).toBe('11')
//    expect(getTriangleType(10, 2, 2)).toBe('00')
// })

// test('get Sum', () => {
//    expect(getSum(1000)).toBe(1)
//    expect(getSum(0)).toBe(0)
//    expect(getSum(1234)).toBe(10)
//    expect(getSum(9999)).toBe(36)
// })

// test('is Even Sum Greater', () => {
//    expect(isEvenIndexSumGreater([1, 100, 2, 200])).toBe(false)
//    expect(isEvenIndexSumGreater([100, 1, 200, 2])).toBe(true)
//    expect(isEvenIndexSumGreater([100, 1, 200, 2, 300, 4])).toBe(true)
//    expect(isEvenIndexSumGreater([100, 1, 200, 2, 4])).toBe(true)
// })

// test('is Square Greater Than Circle', () => {
//    const sCr = 3.14
//    const sSq = 4
//    const result = isSquareGreater(sCr, sSq)
//    expect(result).toBe(true)
// })