// // Урок делать в React приложении!

// // КОД:

// export const sum = (a: number, b: number) => a + b
// export const sub = (a: number, b: number) => a - b
// export const mult = (a: number, b: number) => a * b
// export const div = (a: number, b: number) => a / b

// export type ActionType = {
//    type: 'SUM' | 'SUB' | 'MULT' | 'DIV'
//    payload: number
// }

// export const numberReducer = (state: number, action: ActionType) => {
//    switch (action.type) {
//       case 'SUM': {
//          return state + action.payload
//       }
//       case 'SUB': {
//          return state - action.payload
//       }
//       case 'MULT': {
//          return state * action.payload
//       }
//       case 'DIV': {
//          return state / action.payload
//       }

//       default:
//          return state
//    }
// }

// // Тесты:

// import { ActionType, div, mult, numberReducer, sub, sum } from "./tasks"

// test('sum of two number', () => {

//    let a: number = 10
//    let b: number = 5

//    const result = sum(a, b)

//    expect(result).toBe(15)
// })

// test('sub of two number', () => {

//    let a: number = 20
//    let b: number = 10

//    const result = sub(a, b)

//    expect(result).toBe(10)
// })

// test('mult of two number', () => {

//    let a: number = 2
//    let b: number = 2

//    const result = mult(a, b)

//    expect(result).toBe(4)
// })

// test('div of two number', () => {

//    let a: number = 10
//    let b: number = 5

//    const result = div(a, b)

//    expect(result).toBe(2)
// })

// test('sum with numberReducer', () => {

//    let startState: number = 1000

//    let action: ActionType = { type: 'SUM', payload: 300 }

//    const endState = numberReducer(startState, action)

//    expect(endState).toBe(1300)
// })

// test('sub with numberReducer', () => {

//    let startState: number = 1300

//    let action: ActionType = { type: 'SUB', payload: 300 }

//    const endState = numberReducer(startState, action)

//    expect(endState).toBe(1000)
// })

// test('mult with numberReducer', () => {

//    let startState: number = 100

//    let action: ActionType = { type: 'MULT', payload: 100 }

//    const endState = numberReducer(startState, action)

//    expect(endState).toBe(10000)
// })

// test('div with numberReducer', () => {

//    let startState: number = 2000

//    let action: ActionType = { type: 'DIV', payload: 100 }

//    const endState = numberReducer(startState, action)

//    expect(endState).toBe(20)
// })