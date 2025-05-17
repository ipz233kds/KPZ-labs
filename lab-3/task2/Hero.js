class Hero {
    getDescription() {
        return "Unknown Hero";
    }

    getPower() {
        return 0;
    }
}

class Warrior extends Hero {
    getDescription() {
        return "Warrior";
    }

    getPower() {
        return 10;
    }
}

class Mage extends Hero {
    getDescription() {
        return "Mage";
    }

    getPower() {
        return 8;
    }
}

class Palladin extends Hero {
    getDescription() {
        return "Palladin";
    }

    getPower() {
        return 9;
    }
}

module.exports = { Hero, Warrior, Mage, Palladin };