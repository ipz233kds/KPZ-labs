const LightNode = require('./LightNode');

class LightElementNode extends LightNode {
    constructor({ tagName, displayType = 'block', selfClosing = false, cssClasses = [] }) {
        super();
        this.tagName = tagName;
        this.displayType = displayType;
        this.selfClosing = selfClosing;
        this.cssClasses = cssClasses;
        this.children = [];
        this.eventListeners = {}; // <== Додаємо сховище обробників подій
    }

    addChild(node) {
        if (!this.selfClosing) this.children.push(node);
    }

    addEventListener(eventType, callback) {
        if (!this.eventListeners[eventType]) {
            this.eventListeners[eventType] = [];
        }
        this.eventListeners[eventType].push(callback);
    }

    triggerEvent(eventType) {
        const listeners = this.eventListeners[eventType];
        if (listeners) {
            listeners.forEach(callback => callback());
        }
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