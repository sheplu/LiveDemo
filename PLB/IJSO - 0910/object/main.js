var barney = {
    'firstname' : 'Jean',
    'lastname' : 'BURELLIER',
    'age' : 25,
    'say' : function () {
        console.log('hello');
    },
    'trip' : {
        'from' : 'Lyon',
        'to' : 'Paris',
        'with' : function() {
            return 'TchouTchou';
        }
    }
};

console.log(barney);