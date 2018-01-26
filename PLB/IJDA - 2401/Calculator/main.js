let init = document.querySelector('#init');

init.addEventListener('click', function() {
    calculator.init();
    Object.keys(calculator).forEach(function(key) {
        console.log(key + ' ' + calculator[key]);
    })
});

let calculator = {
    'buffer' : [''],
    'config' : {
        'sign' : false,
        "next" : 'add'
    },
    'init' : function() {
        let content = document.querySelector('div');
        content.appendChild(calculator.drawTable());
        let table = content.childNodes[0];
        table.appendChild(calculator.drawRow());
        table.appendChild(calculator.drawRow('', 0, '*', '='));
        table.appendChild(calculator.drawRow(7, 8, 9, '/'));
        table.appendChild(calculator.drawRow(4, 5, 6, '-'));
        table.appendChild(calculator.drawRow(1, 2, 3, '+'));
    },
    'drawTable' : function() {
        return document.createElement('table')
    },
    'drawRow' : function(first, second, third, forth) {
        let tr = document.createElement('tr');
        tr.appendChild(calculator.drawCell(first));
        tr.appendChild(calculator.drawCell(second));
        tr.appendChild(calculator.drawCell(third));
        tr.appendChild(calculator.drawCell(forth));
        return tr;
    },
    'drawCell' : function(value) {
        let td = document.createElement('td');
        td.textContent = value;
        if(value !== '') {
            td.addEventListener('click', function() {
                calculator.operation(value);
            });
        }
        return td;
    },
    'operation' : function(key) {
        if(key !== '+' && key !== '-' && key !== '*' && key !== '/' && key !== '=') {
            if(calculator.config.sign === true) {
                calculator.buffer.push(key.toString());
                calculator.config.sign = false;
            } 
            else {
                let tmp = calculator.buffer.pop();
                calculator.buffer.push(tmp + key.toString());
            } 
        }
        else {
            if(key !== '=') {
                calculator.buffer.push(key);
                calculator.config.sign = true;
            }
            else {
                calculator.result();
            }
        }
    },
    'result' : function() {
        let result = 0;
        for(let item of calculator.buffer) {
            console.log(item);
            if(item === "+") {
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
                // operation calcul
                if(calculator.config.next === 'add') {
                    result = parseInt(result) + parseInt(item);
                }
                else if(calculator.config.next === 'sub') {
                    result = parseInt(result) - parseInt(item);
                }
                else if(calculator.config.next === 'div') {
                    result = parseInt(result) / parseInt(item);
                }
                else if(calculator.config.next === 'mult') {
                    result = parseInt(result) * parseInt(item);
                }
            }
        }
        alert(result);
    }
}