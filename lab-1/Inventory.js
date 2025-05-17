class Inventory {
    constructor(enclosures, employees) {
        this.enclosures = enclosures;
        this.employees = employees;
    }

    printSummary() {
        let totalAnimals = 0;
        this.enclosures.forEach(enc => {
            totalAnimals += enc.getAnimalCount();
        });

        console.log("Звіт по зоопарку");
        console.log(`Кількість вольєрів: ${this.enclosures.length}`);
        console.log(`Загальна кількість тварин: ${totalAnimals}`);
        console.log(`Кількість працівників: ${this.employees.length}`);
    }
}

module.exports = { Inventory };
