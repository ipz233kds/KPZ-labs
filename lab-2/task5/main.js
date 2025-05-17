const HeroBuilder = require('./HeroBuilder');
const EnemyBuilder = require('./EnemyBuilder');
const Director = require('./Director');

function run() {
    const director = new Director();

    const hero = director.createLegendaryHero(new HeroBuilder());
    const villain = director.createDreadfulEnemy(new EnemyBuilder());

    console.log(" Герой мрії:");
    hero.show();

    console.log("\n Найзапекліший ворог:");
    villain.show();
}

run();