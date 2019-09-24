// CLASSES
class Person {
    name: string
    private type: string = '' //only accessible witin Person object
    protected age: number = 24 //same as private but accessible form every object that inherits from Person

    constructor(name: string, public username: string) {
        this.name = name
        //public username: string passes param username to object, 
        //sets username as a property of the object and assign the username value 
    }

    printAge() {
        console.log(this.age)
        this.setType('malam')
    }

    private setType(type: string) {
        this.type = type
        console.log(this.type)
    }
}

const person = new Person('Ayo', 'ayo_laja')
console.log(person)
person.printAge()

// INHERITANCE
class Ayo extends Person {
    // name = "Ayo"

    constructor(username: string) {
        super("Ayo", username)
        this.age = 33
    }
}
const ayo = new Ayo('ann_a')
console.log(ayo)

// GETTERS AND SETTERS
class Plant {
    private _species: string = "Default"

    get species() {
        return this._species
    }

    set species(value: string) {
        this._species = value.length > 3 ? value : "Default"
    }
}

let plant = new Plant()
console.log(plant.species)
plant.species = 'french'
console.log(plant.species)

// STATIC PROPERTIES AND METHODS
// Static prperties can be accessed without instantiating the class
class Helpers {
    static PI: number = 3.14
    static calcCircumference(diameter: number): number {
        return this.PI * diameter
    }
}
console.log(2 * Helpers.PI)
console.log(Helpers.calcCircumference(5))

// ABSTRACT CLASSES
// Cannot be instatiated directly. Must be inherited from (extended)
abstract class Project {
    projectName: string = "Default"
    budget: number = 2323

    // Logic must be written in the child class when abstract keyword is used
    abstract changeName(name: string): void

    calcBudget() {
        return this.budget * 2
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name
    }
}

let proj = new ITProject()
console.log(proj)
proj.changeName('yshahys')
console.log(proj)

// PRIVATE CONSTRUCTORS
// Singleton use case
class OnlyOne {
    private static instance: OnlyOne

    private constructor(public readonly name: string) {

    }

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The one and only')
        }

        return OnlyOne.instance
    }
}

// let wrong = new OnlyOne('The only one')
let right = OnlyOne.getInstance()
console.log(right.name)
right.name = 'AYomide'
console.log(right.name)