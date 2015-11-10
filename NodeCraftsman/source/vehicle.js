var Vehicle = function() {};

Vehicle.prototpe.drive = function() {
    console.log('vrooom...');
};

var Car = function() {};

Car.prototype = new Vehicle();

Car.prototype.honk = function() {
    console.log('honk honk');
};

var myCar = new Car();

myCar.honk(); //output "honk honk"
myCar.drive(); //output "vrooom..."

