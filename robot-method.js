function Robot(name, version) { // robot class
    this.name = name;
    this.version = version;
}

var liz = new Robot("Liz Wiz", "MMXV-001"); // our new robots
var rokko = new Robot("Rokko Uaieo", "MMXV-002");

Robot.prototype.speak = function () { // method to make our robots speak
    console.log("Bzz, bzz, hello. I am a robot, bzz.");
}

liz.speak(); // call of the method so that the robots speak
rokko.speak();