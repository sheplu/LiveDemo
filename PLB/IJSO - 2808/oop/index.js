function Person(fn, ln) {
	this.firstname = fn;
	this.lastname = ln;
	this.say = function() {
		console.log('je suis ' + this.firstname);
	}
}

var ted = {
	'firstname' : 'ted',
	'lastname' : 'mosby'
}

var barney = new Person('barney', 'stinson');
var marshall = new Person('Marshall', 'eriksen');

barney.prototype.drink = function() {
	console.log("i'm drinking");
};

Person.prototype.age = 33;

console.log(barney);
console.log(marshall);
console.log(ted);

barney.drink();