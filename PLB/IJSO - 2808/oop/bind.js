function Person(fn, ln) {
	this.firstname = fn;
	this.lastname = ln;
	this.say = function() {
		console.log('je suis ' + this.firstname);
	}
};

function Employee(fn,ln, id) {
	Person.apply(this, [fn,ln]);
	this.id = id;
	this.work = function() {
		console.log('working');
	}
}

Employee.prototype.walk = function() {
	console.log('walk');
}

var barney = new Employee('barney', 'stinson', 1);
console.log(barney);
barney.walk();