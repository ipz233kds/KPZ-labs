const CharacterBuilder = require('./CharacterBuilder');

class EnemyBuilder extends CharacterBuilder {
    addEvilDeed(deed) {
        this.character.evilDeeds.push(deed);
        return this;
    }
}

module.exports = EnemyBuilder;