const LightTextNode = require('./LightTextNode');
const LightElementNode = require('./LightElementNode');

function run() {
    const ul = new LightElementNode({ tagName: 'ul', cssClasses: ['list'], displayType: 'block' });

    const li1 = new LightElementNode({ tagName: 'li' });
    li1.addChild(new LightTextNode('Item 1'));

    const li2 = new LightElementNode({ tagName: 'li' });
    li2.addChild(new LightTextNode('Item 2'));

    ul.addChild(li1);
    ul.addChild(li2);

    console.log(" innerHTML:");
    console.log(ul.innerHTML);

    console.log("\n outerHTML:");
    console.log(ul.outerHTML);
}

run();