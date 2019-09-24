//string 
let string = 'Yes'
// string = 34

//@array
let array = ['yes', 'no']
console.log(array[0])

//type alias
type Complex = { data: number[], output: (all: boolean) => number[] } 

//object
let obj: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 34, 56],
    output: function(all: boolean): number[] {
        return this.data
    }
}

let obj2: Complex = {
    data: [100, 34, 56],
    output: function(all: boolean): number[] {
        return this.data
    }
}

console.log(string)
console.log(obj.output(true))

type account = { money: number, deposit: (value: number) => void }
let bankAccount: { money: number, deposit: (value: number) => void } = {
    money: 2000,
    deposit(value: number): void {
        this.money += value
    }
}

let myself: { name: string, bankAccount: account, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount, 
    hobbies: ['Sports', 'Reading']
}

myself.bankAccount.deposit(3000)

console.log(myself)