const LightNode = require('./LightNode');

class LightImageNode extends LightNode {
    constructor(href, strategy) {
        super();
        this.href = href;
        this.strategy = strategy;
    }

    load() {
        this.strategy.load(this.href);
    }

    get innerHTML() {
        return '';
    }

    get outerHTML() {
        return `<img src="${this.href}" />`;
    }
}

module.exports = LightImageNode;