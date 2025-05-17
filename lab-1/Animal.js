class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }
}

class Mammal extends Animal {
    constructor(name, species, age, isCarnivore) {
        super(name, species, age);
        this.isCarnivore = isCarnivore;
    }
}

class Bird extends Animal {
    constructor(name, species, age, canFly) {
        super(name, species, age);
        this.canFly = canFly;
    }
}

class Reptile extends Animal {
    constructor(name, species, age, isVenomous) {
        super(name, species, age);
        this.isVenomous = isVenomous;
    }
}

module.exports = { Animal, Mammal, Bird, Reptile };
