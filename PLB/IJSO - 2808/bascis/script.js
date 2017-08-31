var btn = document.querySelector('#send');
var data = document.querySelector('#flavor');
var list = document.querySelector('ul');

btn.addEventListener('click', function(e) {
	clearInterval(inter);
	if(data.value) {
		var item = document.createElement('li');
		item.textContent = data.value;
		list.appendChild(item);
		data.value = '';
	} 
	else {
		data.style.backgroundColor = 'red';
	}
});

btn.addEventListener('click', function() {
	console.log('test');
});

data.addEventListener('keydown', function() {
	data.style.backgroundColor = 'white';
});

data.addEventListener('keyup', function() {
	data.style.backgroundColor = 'yellow';
});
