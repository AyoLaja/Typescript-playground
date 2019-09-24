"use strict";
// REST AND SPREAD
var numbers = [12, 32, -3, 4];
console.log(Math.max(33, 33, 22, -3));
console.log(Math.max.apply(Math, numbers));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray('Ayo', 1, 2, 3));
// DESTRUCTURING
var myHobbies = ['Sleeping', 'Fifa'];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var user = {
    username: 'ayo_laja',
    age: 24
};
var username = user.username, age = user.age;
console.log(username, age);
