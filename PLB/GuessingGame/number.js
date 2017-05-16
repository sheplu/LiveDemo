function game() {
	var rnd = Math.floor(Math.random()*100);
	var remaining = 7;
	var again = true;

	document.querySelector('#result').textContent = '';
	do {
		var input = parseInt(prompt('Number ?', 0 ));
		if (input > rnd) {
			writeHTML('Smaller');
			remaining = remaining - 1;
		} 
		else if (input < rnd) {
			writeHTML('Bigger');
			remaining = remaining - 1;
		}
		else if (input == rnd) {
			writeHTML('Win');
			again = false;
		} 
		else {
			writeHTML('Error');
		}

		if(remaining == 0 ) {
			again = false;
			writeHTML('Lost', 'deux');
		}

	} while(again == true);
}

function writeHTML(value, val) {
	var elem = document.querySelector('#result');
	var p = document.createElement('p');
	p.textContent = 'The value you have to guess must be ' + value;
	elem.appendChild(p);
}

game();
