const LightTextNode = require('./LightTextNode');
const LightElementNode = require('./LightElementNode');

function run() {
    const ul = new LightElementNode({ tagName: 'ul', cssClasses: ['list'], displayType: 'block' });

    const li1 = new LightElementNode({ tagName: 'li' });
    li1.addChild(new LightTextNode('Item 1'));

    const li2 = new LightElementNode({ tagName: 'li' });
    li2.addChild(new LightTextNode('Item 2'));


    li1.addEventListener('click', () => console.log('Item 1 clicked!'));
    li2.addEventListener('mouseover', () => console.log('Hovered over Item 2!'));


    ul.addChild(li1);
    ul.addChild(li2);

    console.log(" innerHTML:");
    console.log(ul.innerHTML);

    console.log("\n outerHTML:");
    console.log(ul.outerHTML);

    console.log("\nSimulating events:");
    li1.triggerEvent('click');
    li2.triggerEvent('mouseover');
    li2.triggerEvent('click');
}

run();