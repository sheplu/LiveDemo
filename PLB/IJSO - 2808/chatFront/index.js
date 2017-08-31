var access = document.querySelector('#access');
var send = document.querySelector('#send');
var data = document.querySelector('#data');
var pseudo = document.querySelector('#pseudo');
var message = document.querySelector('#message');
access.addEventListener('click', function() {
	getMessagesJQ();
});
send.addEventListener('click', function() {
	sendMessages();
});

function getMessages() {
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
            console.log(result);
        }
        else if(xhr.readyState == 4) {
			console.log('error');
        }
    };
    xhr.open('GET', 'https://plbchat.herokuapp.com/messages');
    xhr.send(null);
};

function sendMessages() {
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
            console.log(xhr)
        }
        else if(xhr.readyState == 4) {
            console.log('error');
			console.log(xhr);
        }
    };
    xhr.open('POST', 'https://plbchat.herokuapp.com/messages');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("pseudo=ipsum&message=binny");
};

function getMessagesJQ() {
    $.ajax({
        url: 'https://plbchat.herokuapp.com/messages',
        type: 'GET',
        success : function (data) {
            console.log(data);
        }
    })
}
