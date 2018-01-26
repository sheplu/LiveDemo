let inputPseudo = document.querySelector('#pseudo');
let inputMessage = document.querySelector('#message');
let button = document.querySelector('#mess');
let div = document.querySelector('#ajax');

function getMessages() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            showMessages(JSON.parse(xhr.response));
        }
    };

    xhr.open('GET', 'https://plbchat.herokuapp.com/messages');
    xhr.send(null);
};

function showMessages(data) {
    div.textContent = '';
    for(let item of data){
        addMessage(item);
    }
};

function addMessage(data) {
    let e = document.createElement('p');
    e.textContent = data.pseudo + ' : ' + data.message;
    div.appendChild(e);
}

function sendMessage() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://plbchat.herokuapp.com/messages');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('pseudo='+inputPseudo.value+'&message='+inputMessage.value);
}

let config = {
    method: 'GET'
};

function fetchData() {
    fetch('https://plbchat.herokuapp.com/messages', config)
    .then( (response) => response.json())
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    })
};

function PromiseDate() {
    let prom = new Promise( (resolv, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://plbchat.herokuapp.com/messages');
        xhr.onload = resolv(xhr.response);
        xhr.onerror = reject(xhr.response);
    })
}

setInterval(fetchData, 1000);

button.addEventListener('click', sendMessage);