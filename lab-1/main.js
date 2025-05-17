const { Mammal, Bird, Reptile } = require('./Animal');
const { Enclosure } = require('./Enclosure');
const { Food } = require('./Food');
const { Employee } = require('./Employee');
const { Inventory } = require('./Inventory');

//ТЕСТ 1
const lion = new Mammal("Simba", "Lion", 5, true);
const eagle = new Bird("Aquila", "Eagle", 3, true);
const snake = new Reptile("Kaa", "Python", 4, false);

console.log("Тварини створені:");
console.log(lion, eagle, snake);

//ТЕСТ 2
const savanna = new Enclosure(1, "Savanna", 2);
const aviary = new Enclosure(2, "Aviary", 2);
const terrarium = new Enclosure(3, "Terrarium", 1);

savanna.addAnimal(lion);
aviary.addAnimal(eagle);
terrarium.addAnimal(snake);

console.log("\nТварини додані до вольєрів:");
console.log("Savanna:", savanna.animals.map(a => a.name));
console.log("Aviary:", aviary.animals.map(a => a.name));
console.log("Terrarium:", terrarium.animals.map(a => a.name));

//ТЕСТ 3
const emp1 = new Employee("Olena", "Veterinarian");
const emp2 = new Employee("Andrii", "Feeder");

console.log("\nПрацівники:");
console.log(emp1, emp2);

//ТЕСТ 4
const inventory = new Inventory([savanna, aviary, terrarium], [emp1, emp2]);

console.log("\nЗвіт про стан зоопарку:");
inventory.printSummary();

