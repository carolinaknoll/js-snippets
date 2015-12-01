/* Person constructor */
function Person (name, age) {
    this.name = name;
    this.age = age;
}

/* array of people */
var family = [];
family[0] = new Person("brianna", 39);
family[1] = new Person("adam", 38);
family[2] = new Person("tiffany", 9);
family[3] = new Person("timmy", 8);

/* loop through the new array */
for (var i = 0; i < family.length; i++) {
    console.log(family[i].name);
}
