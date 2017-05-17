var input = document.querySelector('#submit');
var data = document.querySelector('#data');
input.addEventListener('click', function() {
	getDatasJQ();
});

function getDatasJQ() {
	$.ajax('http://api.github.com/users/sheplu')
	.done(function(val) {
		console.log('success');
		console.log(val);
	})
	.fail(function(val) {
		console.log('error');
		console.log(val);
	})
	.always(function(val) {
		console.log('complete');
		console.log(val);
	});
}

function test() {
	$.ajax({
		method: "GET",
		url: "http://api.github.com/users/sheplu"
	})
	.done(function( msg ) {
		console.log(msg );
	});
}

var getDatas = function () {
	var user = document.querySelector('#user');
	var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        alert('Perhaps your browser does not support XMLHttpRequest?');
    }

    xhr.open('GET', 'http://api.github.com/users/'+ user.value);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) { // success
            var result = xhr.responseText;
            var messages = JSON.parse(result);
            console.log(result);
            data.textContent = messages.login

        }
    };

};