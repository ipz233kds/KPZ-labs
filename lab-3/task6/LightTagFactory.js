const LightElementNode = require('./LightElementNode');

class LightTagFactory {
    constructor() {
        this.cache = {};
    }

    get(tagName) {
        if (!this.cache[tagName]) {
            const isSelfClosing = false;
            const displayType = ['h1', 'h2', 'p', 'blockquote'].includes(tagName) ? 'block' : 'inline';

            this.cache[tagName] = new LightElementNode({
                tagName,
                selfClosing: isSelfClosing,
                displayType,
                cssClasses: []
            });
        }
        return this.cache[tagName];
    }
}

module.exports = LightTagFactory;