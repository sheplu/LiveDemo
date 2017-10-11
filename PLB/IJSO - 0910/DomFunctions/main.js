function main() {
    let users = ["Jean", "Bob", "Marie", "Robert"];

    let inputName = document.querySelector('input');
    let button = document.querySelector('button');
    let area = document.querySelector('#usersList');
    console.log(area);
    button.addEventListener('click', function() {
        users.push(inputName.value);
        area.childNodes[0].appendChild(createUser(inputName.value, 'li'));
        inputName.value = '';
    });

    inputName.addEventListener('keydown', function(event) {
        console.log(event);
        if(event.keyCode === 13) {
            button.click();
        }
    });


    let e = document.createElement('ul');
    for(let user of users) {
        e.appendChild(createUser(user, 'li'));
    }  
    area.appendChild(e); 
}

function createUser(param, tag) {
    let e = document.createElement(tag);
    e.textContent = param;
    return e;
}


main();