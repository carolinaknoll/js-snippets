/* JavaScript 'for', 'while' and 'do' loops! */
var x = 0;
var countOne = function(x) {
    for (x = 0; x < 10; x++) {
    console.log("For loop!");
    }
};

var y = 0;
var countTwo = function(y) {
    while (y < 10) {
        console.log("While loop!");
    }
};

var z = 0;
var countThree = function(z) { 
    do {
        console.log("Do loop!");
        z++;
    } while (z < 10);
};

countThree();
countTwo();
countOne();
