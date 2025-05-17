class Character {
    constructor() {
        this.traits = {};
        this.inventory = [];
        this.goodDeeds = [];
        this.evilDeeds = [];
    }

    show() {
        console.log("️Персонаж:");
        console.log(this.traits);
        console.log("Інвентар:", this.inventory);
        if (this.goodDeeds.length) console.log("Добрі справи:", this.goodDeeds);
        if (this.evilDeeds.length) console.log("Злі справи:", this.evilDeeds);
    }
}

module.exports = Character;