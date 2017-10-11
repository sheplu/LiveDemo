let init = document.querySelector('#init');
init.addEventListener('click', function () {
    calculator.init();
});

let calculator = {
    'list' : [''],
    'config' : {
        'sign' : false,
        'next' : 'add'
    },
    'init' : function() {
        let table = document.querySelector('.calculator');
        table.appendChild(calculator.drawTable())
        table.childNodes[0].appendChild(calculator.drawRow('','','','+'));
        table.childNodes[0].appendChild(calculator.drawRow(7,8,9,'/'));
        table.childNodes[0].appendChild(calculator.drawRow(4,5,6,'*'));
        table.childNodes[0].appendChild(calculator.drawRow(1,2,3,'-'));
        table.childNodes[0].appendChild(calculator.drawRow('','',0,'='));

    },
    'drawTable' : function() {
        return document.createElement('table');
    },
    'drawRow' : function(first, second, third, forth) {
        let tr = document.createElement('tr');
        tr.appendChild(calculator.generateCell(first));
        tr.appendChild(calculator.generateCell(second));
        tr.appendChild(calculator.generateCell(third));
        tr.appendChild(calculator.generateCell(forth));

        return tr;
    },
    'generateCell' : function(val) {
        let td = document.createElement('td');
        td.textContent = val;
        if(val !== '') {
            td.addEventListener('click', function() {
                calculator.operation(val);
            });
        }
        return td;
    },
    'operation' : function(param) {
        console.log(param);
        if(param === '=') {
            calculator.result();
        }
        else {
            if(param != '+' && param != '-' && param != '/' && param != '*') {
                if(calculator.config.sign === true) {
                    calculator.list.push(param.toString());
                    calculator.config.sign = false;
                }
                else {
                    let tmp = calculator.list.pop();
                    calculator.list.push(tmp +  param.toString());
                }
            }
            else {
                calculator.list.push(param);
                calculator.config.sign = true;
            }
        }
        console.log(calculator.list)
    },
    'result' : function() {
        console.log('result');
        let result = 0;
        for(let item of calculator.list) {
            if(item === '+') {
                calculator.config.next = 'add';
            }
            else if(item === '-') {
                calculator.config.next = 'sub';
            }
            else if(item === '*') {
                calculator.config.next = 'mult';
            }
            else if(item === '/') {
                calculator.config.next = 'div';
            }
            else {
                if(calculator.config.next === 'add') {
                    result = parseInt(result) + parseInt(item);
                }
                else if(calculator.config.next === 'sub') {
                    result = parseInt(result) - parseInt(item);
                }
                else if(calculator.config.next === 'mult') {
                    result = parseInt(result) * parseInt(item);
                }
                else if(calculator.config.next === 'div') {
                    result = parseInt(result) / parseInt(item);
                }
                else {
                    console.log('Error');
                }
            }
        }
        calculator.list = [''];
        calculator.config.next = 'add';
        alert(result);
        result = 0;
    }






};