var tama = {
	"state" : "alive",
	"age" : 0,
	"weight" : 5,
	"happiness" : 5,
	"show" : function() {
		console.log('test');
		state.textContent = this.state;
		age.textContent = this.age;
		weight.textContent = this.weight;
		happiness.textContent = this.happiness;
	},
	"getOlder" : function() {
		this.age = this.age + 1;
		this.weight = this.weight - 2;
		this.happiness = this.happiness - 2;
		this.checkState();
	},
	"feed": function() {
		this.weight = this.weight + 1;
		this.checkState();
		this.show();
	}, 
	"sport": function() {
		this.happiness = this.happiness + 2;
		this.weight = this.weight - 1;
		this.checkState();
		this.show();
	},
	"checkState" : function() {
		if (this.happiness < 0) {
			this.state = "dead";
		}
		else if( (this.weight < this.age + 4) || (this.weight > this.age + 10 ) || (this.weight  < 0 )){
			this.state = "dead";
		}
	}
};

var state = document.querySelector('#state');
var age = document.querySelector('#age');
var happiness = document.querySelector('#happiness');
var weight = document.querySelector('#weight');

var feed = document.querySelector('#feed');
var sport = document.querySelector('#sport');

setInterval(function() {
	tama.show();
}, 1000);

var old = setInterval(function() {
	if(tama.state == "dead") {
		console.log('deaddddd');
		clearInterval(old);
	} 
	else {
		tama.getOlder();
	}
	
}, 5000);

feed.addEventListener('click', function() {
	tama.feed();
});

sport.addEventListener('click', function() {
	tama.sport();
});