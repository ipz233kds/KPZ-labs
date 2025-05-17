class ArmorDecorator {
    constructor(hero) {
        this.hero = hero;
    }

    getDescription() {
        return this.hero.getDescription() + " + Armor";
    }

    getPower() {
        return this.hero.getPower() + 5;
    }
}

class SwordDecorator {
    constructor(hero) {
        this.hero = hero;
    }

    getDescription() {
        return this.hero.getDescription() + " + Sword";
    }

    getPower() {
        return this.hero.getPower() + 7;
    }
}

class AmuletDecorator {
    constructor(hero) {
        this.hero = hero;
    }

    getDescription() {
        return this.hero.getDescription() + " + Amulet";
    }

    getPower() {
        return this.hero.getPower() + 3;
    }
}

module.exports = { ArmorDecorator, SwordDecorator, AmuletDecorator };