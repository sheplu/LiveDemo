let barney = {
    'firstname': 'Barney',
    'lastname': 'Stinson',
    'say': function() {
        console.log("it's gonna be ...")
    }
};

let ted = Object.create(barney);