var barney = {
	"firstname" : "Barney",
	"lastname" : "Stinson",
	"say" : function() {
		console.log("It's gonna be Legend...")
	}
}

console.log(barney.firstname);
console.log(barney);

var anotherBarney = Object.create(barney);
console.log(anotherBarney.firstname);
console.log(anotherBarney);
anotherBarney.firstname = 'Ted';
console.log(anotherBarney.firstname);
console.log(anotherBarney);

barney.age = 44;

var ted = Object.create(anotherBarney);
console.log(ted);
