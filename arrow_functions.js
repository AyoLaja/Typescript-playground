"use strict";
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 4));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(2, 5));
var greet = function () {
    console.log('Hello');
};
greet();
var greetFriend = function (friend) { return console.log("Hi " + friend); };
greetFriend('Manu');
//DEFAULT PARAMS
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done', start);
};
countDown(20);
