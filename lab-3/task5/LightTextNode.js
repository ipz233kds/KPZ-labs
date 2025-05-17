const LightNode = require('./LightNode');

class LightTextNode extends LightNode {
    constructor(text) {
        super();
        this.text = text;
    }

    get outerHTML() {
        return this.text;
    }

    get innerHTML() {
        return this.text;
    }
}

module.exports = LightTextNode;