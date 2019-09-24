var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// CLASSES
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = ''; //only accessible witin Person object
        this.age = 24; //same as private but accessible form every object that inherits from Person
        this.name = name;
        //public username: string passes param username to object, 
        //sets username as a property of the object and assign the username value 
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('malam');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Ayo', 'ayo_laja');
console.log(person);
person.printAge();
// INHERITANCE
var Ayo = /** @class */ (function (_super) {
    __extends(Ayo, _super);
    // name = "Ayo"
    function Ayo(username) {
        var _this = _super.call(this, "Ayo", username) || this;
        _this.age = 33;
        return _this;
    }
    return Ayo;
}(Person));
var ayo = new Ayo('ann_a');
console.log(ayo);
// GETTERS AND SETTERS
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            this._species = value.length > 3 ? value : "Default";
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'french';
console.log(plant.species);
// STATIC PROPERTIES AND METHODS
// Static prperties can be accessed without instantiating the class
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(5));
// ABSTRACT CLASSES
// Cannot be instatiated directly. Must be inherited from (extended)
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 2323;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var proj = new ITProject();
console.log(proj);
proj.changeName('yshahys');
console.log(proj);
// PRIVATE CONSTRUCTORS
// Singleton use case
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The one and only');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('The only one')
var right = OnlyOne.getInstance();
console.log(right.name);
right.name = 'AYomide';
console.log(right.name);
