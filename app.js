"use strict";
//string 
var string = 'Yes';
// string = 34
//@array
var array = ['yes', 'no'];
console.log(array[0]);
//object
var obj = {
    data: [100, 34, 56],
    output: function (all) {
        return this.data;
    }
};
var obj2 = {
    data: [100, 34, 56],
    output: function (all) {
        return this.data;
    }
};
console.log(string);
console.log(obj.output(true));
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Reading']
};
myself.bankAccount.deposit(3000);
console.log(myself);
