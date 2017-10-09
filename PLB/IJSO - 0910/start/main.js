function askUser() {
    let isFalse = true;
    let ask;
    do {
        ask = parseInt(prompt('Number ?'));
        if(ask < 100 && ask > 0 ) {
            isFalse = false;
        }
    } while(isFalse)
    checkValue(ask);
}


function checkValue(ask) {
    for(let i = 0; i<ask; i++) {
        if(i === 0 ) {
            console.log(i);
        }
        else if(i % 3 === 0 && i % 5 ===0 ) {
            console.log('fizzbuzz');
        }
        else if(i % 3 === 0) {
            console.log('fizz');
        }
        else if(i % 5 === 0) {
            console.log('buzz');
        }
        else {
            console.log(i);
        }
    }
}

askUser();