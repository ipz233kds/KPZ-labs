class Enclosure {
    constructor(id, type, capacity) {
        this.id = id;
        this.type = type;
        this.capacity = capacity;
        this.animals = [];
    }

    addAnimal(animal) {
        if (this.animals.length < this.capacity) {
            this.animals.push(animal);
        } else {
            console.log(`Вольєр ${this.id} заповнений`);
        }
    }

    getAnimalCount() {
        return this.animals.length;
    }
}

module.exports = { Enclosure };
