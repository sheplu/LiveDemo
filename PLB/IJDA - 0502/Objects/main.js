'use strict';

function Person(firstname, lastname) {
    let test = 'test';
    
    this.firstname = firstname;
    this.lastname = lastname;
    this.say = function(message) {
        console.log("message:" + message + test);
    }
    this.setTest = function(value) {
        test = value;
    }
};
Person.prototype.hello = function(message) {
    console.log("hello:" + message);
}

let barney = new Person('barney', 'stinson');
let ted = new Person('ted', 'mosby');


var marion = {
    name: "Marion Cotillard",
    age: 33,
    eat: function(foodType) {
        console.log(this.name+ " eat some " +foodType);
    },
    die: function() {
        this.age = 21;
        console.log(this.name + " says: bweeeeeuh...");
    }
};
var kevin = { name: "Kevin Doe" };
marion.eat.apply(kevin, ["beef"]);
marion.die.apply(Object);

kevin.eat = marion.eat.bind(kevin);
kevin.eat()

function Employee(firstName, lastName, employeeId) {
    Person.apply(this, [firstName, lastName]);
    this.employeeId = employeeId;
    
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.work = function() {
    console.log("He/She is working");
};

Object.defineProperty(barney, "myProp", {
    value: 42
});







































