var animal = {
    eats: true
}
var rabbit = {
    jump: true
}
var dog = {
    bark: true
}
rabbit.__proto__ = animal;
dog.__proto__ = animal;
console.log(rabbit);
console.log(dog);

var arr = [1, 2];
console.log(arr);

for(var key in rabbit) {
    console.log(key, rabbit[key]);
    if (rabbit.hasOwnProperty(key)) {
        console.log('own', key);
    }
}
// ________________________________________

// var car = {
//     drive: true
// }

function Car(model) {
    this.model = model;
    this.speed = 0;
    // this.__proto__ = car;
}

Car.prototype.drive = function (speed) {
    this.speed += speed;
    console.log(this.speed);
}
Car.prototype.stop = function () {
    this.speed = 0;
    console.log(this.speed);
}

var opel = new Car('Opel');
console.log(opel);
var bmw = new Car('BMW');
console.log(bmw);
opel.drive(20);
opel.drive(20);
opel.stop();
opel.drive(50);
// _______________________________________

String.prototype.newString = function () {
    return this[0].toUpperCase() + this.slice(1, -1) + this.slice(-1).toUpperCase();
}

console.log("lorem".newString());
console.log("hallo".newString());
// ________________________________________

Array.prototype.sum = function () {
    return this[1] + this[2];
}

console.log([1,4,6,7,8].sum());
// _____________________________________________

function Calc(a, b) {
    this.a = a;
    this.b = b;
}

Calc.prototype.sum = function () {
    return this.a + this.b;
}
Calc.prototype.mul = function () {
    return this.a * this.b;
}

var calc_1 = new Calc(2,7);
console.log(calc_1.sum());
console.log(calc_1.mul());
// ________________________

// class Timer{
//     constructor() {
//         this.count = 0;
//     }
//     start() {
//         setInterval(function() {
//             this.count++;
//             console.log(this.count);
//         }, 1000);
//     }
// }
// var timer_1 = new Timer();
// timer_1.start();

class Timer{
    constructor() {
        this.count = 0;
    }
    start() {
        this.id = setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
    stop() {
        clearInterval(this.id);
        console.log(this.count);
    }
    reset() {
        clearInterval(this.id);
        this.count = 0;
        console.log(this.count);
    }
}
var timer_1 = new Timer();
timer_1.start();
setTimeout(function () {
    timer_1.stop();
}, 5000);
setTimeout(function () {
    timer_1.reset();
}, 6000);