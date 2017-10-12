let inputPseudo = document.querySelector('#pseudo');
let inputMessage = document.querySelector('#message');
let sendMessage = document.querySelector('button');
let div = document.querySelector('#ajax');

setInterval(getMessages, 5000);

function showMessages(data) {
    div.textContent = '';
    for(let item of data) {
        addMessage(item);
    }
}

function addMessage(message) {
    let e = document.createElement('p');
    e.innerHTML = message.pseudo + ' | ' + message.message;
    div.appendChild(e);
}

function getMessages() {
    let xhr = getXML();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log('xhr', JSON.parse(xhr.response));
            showMessages(JSON.parse(xhr.response));
        }
    }
    xhr.open("GET", "https://plbchat.herokuapp.com/messages");
    xhr.send(null);
}

sendMessage.addEventListener('click', function(e) {
    let xhr = getXML();
    xhr.open("POST", "https://plbchat.herokuapp.com/messages");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("pseudo="+inputPseudo.value+"&message="+inputMessage.value);

    getMessages();
});

function getXML() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        alert('Perhaps your browser does not support XMLHttpRequest?');
    }
}