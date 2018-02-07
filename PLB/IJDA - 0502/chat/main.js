let author = document.querySelector('#author');
let message = document.querySelector('#message');
let button = document.querySelector('button');
let div = document.querySelectorAll('div')[1];
let ft = document.querySelector('#fetch');

ft.addEventListener('click', function() {
    if(self.fetch) {
        fetch('https://plbchat.herokuapp.com/messages')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function(error) {

        })
    }
    else {
        let xhr = new getXHR();
    }
});

let bt = $('#button');
bt.click(function(){
    $.ajax({
        "type": 'POST',
        "url": 'https://plbchat.herokuapp.com/messages',
        "data": "pseudo="+author.value+"&message="+message.value,
        "success": function(response) {
            console.log(response);
        },
    })
});

function getMessagesJQ() {
    $.ajax({
        "type": 'GET',
        "url": 'https://plbchat.herokuapp.com/messages',
        "success": function(response) {
            console.log(response);
            div.textContent = '';
            for (let iterator of response) {
                div.appendChild(displayMessage(iterator))
            }
        }
    })
}

button.addEventListener('click', function() {
    let xhr = getXHR();
    let obj = {
        "pseudo": author.value,
        "message": message.value
    };
    xhr.open('POST', 'https://plbchat.herokuapp.com/messages');
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            message.value = '';
            div.appendChild(displayMessage(JSON.parse(xhr.response)))
        }
    };
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("pseudo="+author.value+"&message="+message.value);
});

function getMessages() {
    let xhr = getXHR();
    xhr.open('GET', 'https://plbchat.herokuapp.com/messages');
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let messages = JSON.parse(xhr.response)
            //console.log(messages);
            div.textContent = '';
            for(let mess of messages) {
                div.appendChild(displayMessage(mess));
            }
        }
    };
    xhr.send(null);
};

function displayMessage(mess) {
    let elem = document.createElement('p');
    elem.textContent = mess.pseudo +" | "+ mess.message;
    return elem;
};

function getXHR() {
    let xhr = null;
    xhr = new XMLHttpRequest();
    return xhr;
};

message.addEventListener('keypress', function(event) {
    if(event.keyCode === 13) {
        button.click();
    }
});

let interval = 1000;
let inter = setInterval(getMessages, interval);