var title = document.querySelector('h1');
console.log(title);

var divs = document.querySelectorAll('div');
console.log(divs);

var divId = document.querySelector('#bye');
console.log(divId);

var divIds = document.querySelectorAll('.world');
console.log(divIds);

var nom = document.querySelectorAll('#test[name="aa"]');
console.log(nom);

var test = document.querySelector('.test');
console.log(test.innerHTML);
test.style.backgroundColor = 'red';
test.innerHTML = '<p>COUCOUCOU</p>' + test.innerHTML;

setTimeout(createE, 10000);

function createE() {
    let elem = document.createElement('p');
    elem.setAttribute('name', 'newElement');
    elem.textContent = 'Bye Moon';
    
    divId.insertBefore(elem, divId.childNodes[0])
}









