var city = {
    'Zarephath': 728375,
    'Reinerton': 864402,
    'Spelter': 340533,
    'Henrietta': 932557,
    'Dyckesville': 421758,
    'Yettem': 250492,
    'Gracey': 551885,
    'Floris': 216435,
    'Davenport': 290139,
    'Tioga': 653031
}
var biggest = 0;
var cityname;
for (var key in city) {
    if (biggest < city[key]) {
        biggest = city[key];
        cityname = key;
    }
}
console.log(cityname, biggest);

function Worker(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.getSalary = function () {
        return this.rate * this.days;
    };
}
var worker = new Worker ('Іван', 'Іванов', 10, 31);
console.log (worker.name); // виведе 'Іван'
console.log (worker.surname); // виведе 'Іванов'
console.log (worker.rate); // виведе 10
console.log (worker.days); // виведе 31
console.log (worker.getSalary ()); // виведе 310 - тобто 10 * 31
