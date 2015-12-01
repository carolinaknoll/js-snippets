/* Properties are like variables that belong to an object, 
and are used to hold pieces of information. 

Properties can be accessed in two ways:
- Dot notation, with ObjectName.PropertyName
- Bracket notation, with ObjectName["PropertyName"]
*/

var bolt = new Object();
bolt.species = "dalmatian";
bolt.age = 8;

/* dot notation */
var species = bolt.species;
    
/* bracket notation */
var age = bolt["age"];

/* --- */

var myObject = {    
    name: "Timmy",
    age: 3
};

console.log(myObject.hasOwnProperty("name"));     // true
console.log(myObject.hasOwnProperty("age"));      // true
console.log(myObject.hasOwnProperty("nickname")); // false


var shapes = {
    circle: "red",
    triangle: "yellow",
    rectangle: "green"
};

    if (shapes.hasOwnProperty("square")) {
    console.log(square);
    }

    else { 
    shapes.square = "blue";
    }
    
for (var property in shapes) {  // prints all the properties in shapes object
    console.log(property);      
}

for (var property in shapes) {  // prints the VALUE of each property in shapes object
    console.log(shapes["circle"]);    // will print red
    console.log(shapes["triangle"]);  // will print yellow
    console.log(shapes["rectangle"]); // will print green
}