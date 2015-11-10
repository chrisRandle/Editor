var Car = function() {};

Car.prototype.honk = function() {
    console.log('honk honk');
};

var myCar1 = new Car();

myCar1.honk(); //executes Car.prototype.honk() and outputs "honk honk"

Car.prototype.honk = function() {
    console.log('meep meep');
};

var myCar2 = new Car();

myCar2.honk(); //executes Car.prototype.honk() and outputes "meep meep"

//This behavior is changed for not only new car object but previously existing ones as well
myCar1.honk(); //executes the reclassified Car.prototype.honk() and outputs "meep meep"

Car.prototype.drive = function() {
    console.log('vrooom...');
};

myCar1.drive(); //executes Car.prototype.drive() and outputs "vrooom..."
myCar2.drive();

//Can overload honk function on a particular car so it does not affect all cars
myCar2.honk = function() {
    console.log('beep beep');
};

myCar1.honk(); //executes Car.prototype.drive() and outputs "meep meep"
myCar2.honk(); //executs myCar2.honk and outputs "beep beep"