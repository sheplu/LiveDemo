var init = document.querySelector('#init');
init.addEventListener("click", function() {
	calculator.init();
});


var calculator = {
	init: function() {
		var table = document.querySelector('.calculator');
		table.appendChild(calculator.drawTable());
		table.childNodes[0].appendChild(calculator.drawRow("", "+"));
		table.childNodes[0].appendChild(calculator.drawRow("7", "8", "9", "-"));
		table.childNodes[0].appendChild(calculator.drawRow("4", "5", "6", "*"));
		table.childNodes[0].appendChild(calculator.drawRow("1", "2", "3", "/"));
		table.childNodes[0].appendChild(calculator.drawRow("", "", "0", "="));
		table.childNodes[0].childNodes[0].childNodes[0].setAttribute('colspan', 3);
	},
	config: {
		last: false,
		next: 'add'
	},
	list: [''],
	operation: function(val){
		if (val === '=') {
			calculator.result();
		}
		else {
			if (val != '+' && val != '-' && val != '*' && val != '/' && val != '=' ) {
				if (calculator.config.last == true) {
					calculator.list.push('');
				}
				var tmp = calculator.list.pop();
				calculator.list.push(tmp + val);
				calculator.config.last = false;
			}
			else {
				calculator.config.last = true;
				calculator.list.push(val);
			}
			console.log(calculator.list);
		}		
	},
	result: function() {
		var result = 0;
		for (element in calculator.list) {
			console.log(calculator.list[element]);
			if (calculator.list[element] == '+') {
				calculator.config.next = 'add';
			}
			else if (calculator.list[element] == '-') {
				calculator.config.next = 'sub';
			}
			else if (calculator.list[element] == '*') {
				calculator.config.next = 'mult';
			}
			else if (calculator.list[element] == '/') {
				calculator.config.next = 'div';
			}
			else {
				if (calculator.config.next == 'add') {
					result = parseInt(result) + parseInt(calculator.list[element]);
				}
				else if (calculator.config.next == 'sub') {
					result = parseInt(result) - parseInt(calculator.list[element]);
				}
				else if (calculator.config.next == 'mult') {
					result = parseInt(result) * parseInt(calculator.list[element]);
				}
				else if (calculator.config.next == 'div') {
					result = parseInt(result) / parseInt(calculator.list[element]);
				}
				else {
					console.log('Error');
				}
			}
		}
		calculator.showResult(result);
	},
	showResult: function(val) {
		var table = document.querySelector('.calculator');
		table.childNodes[0].childNodes[0].childNodes[0].textContent = val;
		console.log(val);
	},
	drawTable: function() {
		return document.createElement('table');
	},
	drawRow: function(first, second, third, forth) {
		var tr = document.createElement('tr')
		tr.appendChild(calculator.generateCell(first));
		tr.appendChild(calculator.generateCell(second));
		if (arguments.length > 2) {
			tr.appendChild(calculator.generateCell(third));
			tr.appendChild(calculator.generateCell(forth));
		}
					
		return tr;
	},
	generateCell: function(val) {
		var td = document.createElement("td");
		td.textContent = val;
		if (val != "") {
			td.addEventListener("click", function() {
				calculator.operation(this.textContent);

			});
		}
		return td;
	},
}