const CharacterBuilder = require('./CharacterBuilder');

class HeroBuilder extends CharacterBuilder {
    addGoodDeed(deed) {
        this.character.goodDeeds.push(deed);
        return this;
    }
}

module.exports = HeroBuilder;