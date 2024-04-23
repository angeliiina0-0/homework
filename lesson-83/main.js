// Задание 1
// const user = {
//     name: 'angelina',
//     age: 18,
//     birthday: '14.01.2006',
// }
// console.log(user)



// Задание 2
// const user = {
//     sayHello(name) {
//         console.log(`Hello ${name}`)
//     }
// }
// user.sayHello('Max')



// Задание 3
const users = [
    {
        name: 'Max',
        age: 21,
        isAdmin: false,
    },
    {
        name: 'Tom',
        age: 25,
        isAdmin: true,
    },
    {
        name: 'Sofia',
        age: 22,
        isAdmin: false,
    },
    {
        name: 'Ivan',
        age: 20,
        isAdmin: false,
    }
]

let numberUsers = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        numberUsers += 1
    }
}
console.log(`Количество простых пользователей: ${numberUsers}`)