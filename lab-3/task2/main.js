const { Warrior, Mage, Palladin } = require('./Hero');
const { ArmorDecorator, SwordDecorator, AmuletDecorator } = require('./InventoryDecorators');

function run() {
    let hero = new Mage();
    console.log("Базовий герой:", hero.getDescription(), "| Сила:", hero.getPower());
    
    hero = new ArmorDecorator(hero);
    hero = new SwordDecorator(hero);
    hero = new AmuletDecorator(hero);

    console.log("Оснащений герой:", hero.getDescription(), "| Сила:", hero.getPower());
}

run();