let barney = {
    'firstname' : 'Barney',
    'lastname' : 'Stinson',
    'say' : function() {
        console.log(this.firstname + ' Legendary');
    }
};

let ted = Object.create(barney);
ted.age = 33;

let marshall = Object.create(ted);
marshall.firstname = 'Marshall';

console.log(barney);
console.log(ted);
console.log(marshall);

(function Scope() {
    var privateShare = 'private';
    barney.test = 'public';
    barney.privTest = function() {
        return privateShare;
    }
}());

let bob = {
    'firstnamewe' : 'bob'
};

function Person(firstname, lastname, age, param) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    let city = param;
    this.old = function() {
        console.log("I'm"+this.age+" old" + city);
    };
};

let jean = new Person('jean', 'burellier', 25, 'Lyon');
console.log(jean);

function Student (firstname, lastname, age, param, school) {
    Person.apply(this, [firstname, lastname, age, param])
    this.school = school;
}

let marie = new Student('marie', 'qwerty', 30, 'paris', 'SUPINFO');
console.log(marie);
Student.prototype.courses = function() {
    console.log('Javascript');
}

function Univ (firstname, lastname, age, param, school, primary) {
    Student.apply(this, [firstname, lastname, age, param, school])
    this.primary = primary;
};

Univ.prototype = Object.create(Student.prototype);

let robert = new Univ('robert', 'zxcv', 40, 'paris', 'Paris 1', 'IT');
console.log(robert);

Student.prototype.master = function() {
    console.log('Master');
}


