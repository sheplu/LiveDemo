let button = document.querySelector('button');
let input = document.querySelector('input'); 
let data = document.querySelector('div');

button.addEventListener('click', function() {
    let e = document.createElement('p');
    e.textContent = input.value;
    input.value = '';
    data.appendChild(e);
});

input.addEventListener('keydown', function(event) {
    if(event.keyCode === 13) {
        button.click();
    }
});