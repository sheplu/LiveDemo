function Tamagocci() {
    this.weight      = 5;
    this.happiness   = 5;
    this.age         = 0;
    this.minWeight   = 1;
    this.maxWeight   = 10;

    this.eat = function() {
    	this.weight += 2;
    };

    this.play = function() {
    	this.weight--;
    	this.happiness++;
    }
}