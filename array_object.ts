// REST AND SPREAD
// const numbers = [12, 32, -3, 4]
// console.log(Math.max(33, 33, 22, -3))
// console.log(Math.max(...numbers))

function makeArray(name: string, ...args: number[]) {
    return args
}
console.log(makeArray('Ayo', 1, 2, 3))

// DESTRUCTURING
const myHobbies = ['Sleeping', 'Fifa']
const [hobby1, hobby2] = myHobbies
console.log(hobby1, hobby2)

const user = {
    username: 'ayo_laja',
    age: 24
}
const { username, age } = user
console.log(username, age)