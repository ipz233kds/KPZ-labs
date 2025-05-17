const LightNode = require('./LightNode');

class LightElementNode extends LightNode {
    constructor({ tagName, displayType = 'block', selfClosing = false, cssClasses = [] }) {
        super();
        this.tagName = tagName;
        this.displayType = displayType;
        this.selfClosing = selfClosing;
        this.cssClasses = cssClasses;
        this.children = [];
    }

    addChild(node) {
        if (!this.selfClosing) this.children.push(node);
    }

    get innerHTML() {
        return this.children.map(child => child.outerHTML).join('');
    }

    get outerHTML() {
        const classAttr = this.cssClasses.length > 0 ? ` class="${this.cssClasses.join(' ')}"` : '';

        if (this.selfClosing) {
            return `<${this.tagName}${classAttr} />`;
        } else {
            return `<${this.tagName}${classAttr}>${this.innerHTML}</${this.tagName}>`;
        }
    }
}

module.exports = LightElementNode;