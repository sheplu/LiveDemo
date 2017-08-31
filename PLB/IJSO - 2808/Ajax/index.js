var input = document.querySelector('#submit');
var data = document.querySelector('#data');
input.addEventListener('click', function() {
	//getDatas();
	sendData();
});

function getDatasJQ() {
	$.ajax('http://api.github.com/users/sheplu?client_id=d8ac9a892682cfac681a&client_secret=9347b273d72b1bc491671b6588d2bf1717a67e4d')
	.done(function(val) {
		console.log('success');
		console.log(val.login);
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
		url: "http://api.github.com/users/sheplu",
		data: ''
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
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) { // success
            var result = xhr.response;
            var messages = JSON.parse(result);
            console.log(result['login']);
            data.textContent = messages.login

        }
        else if(xhr.readyState == 4) {

        }
    };
    xhr.open('GET', 'http://api.github.com/users/'+ user.value+'?client_id=d8ac9a892682cfac681a&client_secret=9347b273d72b1bc491671b6588d2bf1717a67e4d');
    xhr.send(null);
};

var sendData = function () {
	console.log('senddata');
	var user = document.querySelector('#user');
	var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        alert('Perhaps your browser does not support XMLHttpRequest?');
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) { // success
            var result = xhr.response;
            var messages = JSON.parse(result);
            for (var i = 0; i < messages.length ; i++) {
            	console.log(messages[i].pseudo)
            }
        }
    };
	var sendMessage = 'pseudo=Bob&message=test';

	
    xhr.open('POST', 'https://plbchat.herokuapp.com/messages');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send(sendMessage);
};
