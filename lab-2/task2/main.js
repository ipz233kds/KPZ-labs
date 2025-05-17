const { IPRoneFactory, KiaomiFactory, BalaxyFactory } = require('./abstractFactory');

function run() {
    const iprone = new IPRoneFactory();
    const kiaomi = new KiaomiFactory();
    const balaxy = new BalaxyFactory();

    const devices = [
        iprone.createLaptop(),
        kiaomi.createNetbook(),
        balaxy.createEBook(),
        iprone.createSmartphone(),
    ];

    devices.forEach(device => {
        console.log(`${device.brand} ${device.type}`);
    });
}

run();