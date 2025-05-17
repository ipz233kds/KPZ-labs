class Laptop {
    constructor(brand) {
        this.type = 'Laptop';
        this.brand = brand;
    }
}

class Netbook {
    constructor(brand) {
        this.type = 'Netbook';
        this.brand = brand;
    }
}

class EBook {
    constructor(brand) {
        this.type = 'EBook';
        this.brand = brand;
    }
}

class Smartphone {
    constructor(brand) {
        this.type = 'Smartphone';
        this.brand = brand;
    }
}

module.exports = { Laptop, Netbook, EBook, Smartphone };
