const Character = require('./Character');

class CharacterBuilder {
    constructor() {
        this.character = new Character();
    }

    setHeight(height) {
        this.character.traits.height = height;
        return this;
    }

    setHairColor(color) {
        this.character.traits.hairColor = color;
        return this;
    }

    setEyeColor(color) {
        this.character.traits.eyeColor = color;
        return this;
    }

    setClothes(clothes) {
        this.character.traits.clothes = clothes;
        return this;
    }

    addInventoryItem(item) {
        this.character.inventory.push(item);
        return this;
    }

    build() {
        return this.character;
    }
}

module.exports = CharacterBuilder;