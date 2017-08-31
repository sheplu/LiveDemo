var tama = {
	"state" : "alive",
	"age": 0,
	"happiness" : 5,
	"weight" : 5,
	"feed" : function() {
		console.log('feed');
		this.weight+=1;
	},
	"sport" : function() {
		console.log('sport');
		this.happiness+=1;
		this.weight-=1;
	},
	"getOlder" : function() {
		this.age+=1;
		this.happiness-= 2;
		this.weight -= 2;
	},
	"show" : function () {
		state.textContent = this.state;
		age.textContent = this.age;
		happiness.textContent = this.happiness;
		weight.textContent = this.weight;
	},
	"check" : function() {
		if ((this.weight < this.age + 4) || (this.weight > this.age + 10) || 
			(this.weight <= 0)) {
			this.state = "dead";
		}
		else if(this.happiness <= 0) {
			this.state = "dead";
		}
	},
	"isDead" : function() {
		this.check();
		if (this.state == "dead") {
			return true;
		}
		else {
			return false;
		}
	}
}

var state = document.querySelector('#state');
var age = document.querySelector('#age');
var happiness = document.querySelector('#happiness');
var weight = document.querySelector('#weight');

var old = setInterval(function() {
	tama.getOlder();
	console.log(tama);
}, 10000);

setInterval(function() {
	if(tama.isDead()) {
		clearInterval(old);
	};
	tama.show();
}, 1000);

var feed = document.querySelector('#feed');
feed.addEventListener('click', function() {
	tama.feed();
	tama.show();
});

var sport = document.querySelector('#sport');
sport.addEventListener('click', function() {
	tama.sport();
	tama.show();
});