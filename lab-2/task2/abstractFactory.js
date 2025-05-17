const { Laptop, Netbook, EBook, Smartphone } = require('./devices');

class DeviceFactory {
    createLaptop() {}
    createNetbook() {}
    createEBook() {}
    createSmartphone() {}
}

class IPRoneFactory extends DeviceFactory {
    createLaptop() {
        return new Laptop('IPRone');
    }
    createNetbook() {
        return new Netbook('IPRone');
    }
    createEBook() {
        return new EBook('IPRone');
    }
    createSmartphone() {
        return new Smartphone('IPRone');
    }
}

class KiaomiFactory extends DeviceFactory {
    createLaptop() {
        return new Laptop('Kiaomi');
    }
    createNetbook() {
        return new Netbook('Kiaomi');
    }
    createEBook() {
        return new EBook('Kiaomi');
    }
    createSmartphone() {
        return new Smartphone('Kiaomi');
    }
}

class BalaxyFactory extends DeviceFactory {
    createLaptop() {
        return new Laptop('Balaxy');
    }
    createNetbook() {
        return new Netbook('Balaxy');
    }
    createEBook() {
        return new EBook('Balaxy');
    }
    createSmartphone() {
        return new Smartphone('Balaxy');
    }
}

module.exports = {
    IPRoneFactory,
    KiaomiFactory,
    BalaxyFactory
};