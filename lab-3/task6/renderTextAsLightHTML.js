const LightTextNode = require('./LightTextNode');
const LightElementNode = require('./LightElementNode');
const LightTagFactory = require('./LightTagFactory');

function cloneNode(protoNode, text) {
    const clone = new LightElementNode({
        tagName: protoNode.tagName,
        displayType: protoNode.displayType,
        selfClosing: protoNode.selfClosing,
        cssClasses: [...protoNode.cssClasses]
    });
    clone.addChild(new LightTextNode(text));
    return clone;
}

function renderBook(lines) {
    const factory = new LightTagFactory();
    const root = new LightElementNode({ tagName: 'div' });

    lines.forEach((line, index) => {
        let tag = 'p';
        if (index === 0) tag = 'h1';
        else if (line.length < 20) tag = 'h2';
        else if (line.startsWith(' ')) tag = 'blockquote';

        const proto = factory.get(tag);
        const node = cloneNode(proto, line);
        root.addChild(node);
    });

    return root;
}

module.exports = renderBook;