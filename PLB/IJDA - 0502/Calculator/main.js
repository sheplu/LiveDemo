let button = document.querySelector('button');
let div = document.querySelector('div');
button.addEventListener('click', function() {
    calculator.init();
});

let calculator = {
    "config": {
        "buffer": [''],
        "operator": false,
        "next": 'add'
    },
    "init": function() {
        let elem = document.createElement('table');
        elem.appendChild(calculator.drawRow('','','','/'));
        elem.appendChild(calculator.drawRow(7,8,9,'*'));
        elem.appendChild(calculator.drawRow(4,5,6,'-'));
        elem.appendChild(calculator.drawRow(1,2,3,'+'));
        elem.appendChild(calculator.drawRow('',0,'','='));
        div.appendChild(elem);
    },
    "drawRow": function(arg, arg1, arg2, arg3) {
        let elem = document.createElement('tr');
        elem.appendChild(calculator.drawCell(arg));
        elem.appendChild(calculator.drawCell(arg1));
        elem.appendChild(calculator.drawCell(arg2));
        elem.appendChild(calculator.drawCell(arg3));
        return elem;
    },
    "drawCell": function(value) {
        let elem = document.createElement('td');
        elem.textContent = value;
        if(value !== "") {
            elem.addEventListener('click', function(e){
                calculator.operation(e.target.textContent);
            });
        }
        return elem;
    },
    "operation": function(key) {
        if(key !== '+' && key !== '*' && key !== '/' && key !== '-' && key !== '=') {
            if(calculator.config.operator === true) {
                calculator.config.buffer.push(key.toString());
                calculator.config.operator = false;
            }
            else {
                let tmp = calculator.config.buffer.pop();
                calculator.config.buffer.push(tmp.toString() + key.toString());
            }
        }
        else if(key === '=') {
            calculator.result();
        }
        else {
            calculator.config.buffer.push(key);
            calculator.config.operator = true;
        }
    },
    "result": function() {
        let result = 0;
        for(let item of calculator.config.buffer) {
            if(item === '+') {
                calculator.config.next = 'add';
            }
            else if(item === '-') {
                calculator.config.next = 'sub';
            }
            else if(item === '/') {
                calculator.config.next = 'div';
            }
            else if(item === '*') {
                calculator.config.next = 'mult';
            }
            else {
                if(calculator.config.next === 'add'){
                    result = parseInt(result) +  parseInt(item);
                }
                else if(calculator.config.next === 'sub'){
                    result = parseInt(result) -  parseInt(item);
                }
                else if(calculator.config.next === 'mult'){
                    result = parseInt(result) *  parseInt(item);
                }
                else if(calculator.config.next === 'div'){
                    result = parseInt(result) /  parseInt(item);
                }
                else {
                    console.log('Error');
                }
            }
        }
        alert(result);
    }
};