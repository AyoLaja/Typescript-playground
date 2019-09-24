const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2
}
console.log(addNumbers(10, 4))

const multiplyNumbers = (number1: number, number2: number) => number1 * number2
console.log(multiplyNumbers(2, 5))

// const greet = () => {
//     console.log('Hello')
// }
// greet()

const greetFriend = (friend: string) => console.log(`Hi ${friend}`)
greetFriend('Manu')

//DEFAULT PARAMS
const countDown = (start: number = 10): void => {
    console.log(start)
    while (start > 0) {
        start--
    }
    console.log('Done', start)
}
countDown(20)