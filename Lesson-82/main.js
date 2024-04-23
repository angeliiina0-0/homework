// Задание 1
// function userName(name) {
//     return `Hello ${name}`
// }
// console.log(userName('Angelina'))



// Задание 2     !!!!Выводит только одно число из массива!!!!
const numbers = [10, 4, 14, 38, 2, 1000]
function numArray(array) {
    for (let i = 0; i < array.length; i ++) {
        if (array[i] > 10) {
            return `Число больше 10: ${array[i]}`
        }
    }
}
console.log(numArray( numbers ))





// Задание 3
// function calCul(firstNumber, lastNumber, actionNumbers){
//     if (actionNumbers === 'plus') {
//         return firstNumber + lastNumber
//     }
//     if (actionNumbers === 'minus') {
//         return firstNumber - lastNumber
//     }
//     if (actionNumbers === 'ymnogenie') {
//         return firstNumber * lastNumber
//     }
//     if (actionNumbers === 'del') {
//         return firstNumber / lastNumber
//     }
// }
// console.log(calCul(4, 4, 'plus'))
// console.log(calCul(10, 21, 'minus'))
// console.log(calCul(5, 5, 'ymnogenie'))
// console.log(calCul(40, 8, 'del'))