let inputPseudo = document.querySelector('#pseudo');
let inputMessage = document.querySelector('#message');
let sendMessage = document.querySelector('button');
let div = document.querySelector('#ajax');

setInterval(getMessagesJQ, 5000);

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

function getMessagesJQ() {
    $.ajax({
        "url" : "https://plbchat.herokuapp.com/messages",
        "type" : "GET",
        "success" : function(messages) {
            console.log(messages);
            showMessages(messages);
        }
    });
}

$('#messJQ').click(function() {
    $.ajax({
        "url" : "https://plbchat.herokuapp.com/messages",
        "type" : "POST",
        "data" : "pseudo="+$('#pseudo').val()+'&message='+$('#message').val(),
        "success" : function(messages) {
            console.log(messages);
        }
    })
});

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

sendMessage.addEventListener('click', (e) => console.log('test'));

function getXML() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        alert('Perhaps your browser does not support XMLHttpRequest?');
    }
}