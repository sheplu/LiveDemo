var submit = document.querySelector('#form');
submit.addEventListener('submit', function(e){
	validateForm(e);
});

function validateForm(e){
	e.preventDefault();
	var firstname = document.querySelector('#firstname');
	var lastname = document.querySelector('#lastname');

	console.log(firstname.value);
	console.log(lastname.value);

	if (!checkEmpty(firstname.value) && !checkEmpty(lastname.value)) {
		console.log('test');
	}
	else {
		if (checkEmpty(firstname.value)) {
			firstname.style.backgroundColor = 'red';
		}
		if (checkEmpty(lastname.value)) {
			lastname.style.backgroundColor = 'red';
		}
	}
}

function checkEmpty(elem) {
	var empty = true;
	if(elem !== '' && elem.length > 0) {
		empty = false;
	}

	console.log(empty);
	return empty;
}