const Virus = require('./Virus');

function run() {

    const parent = new Virus("Alpha", "RNA", 2, 1.5);
    const child1 = new Virus("Beta", "RNA", 1, 1.0);
    const child2 = new Virus("Gamma", "DNA", 1, 0.8);
    const grandchild = new Virus("Delta", "DNA", 0.5, 0.6);

    child1.addChild(grandchild);
    parent.addChild(child1);
    parent.addChild(child2);

    console.log(" Оригінальне сімейство:");
    parent.print();

    const clone = parent.clone();

    console.log("\n Клоноване сімейство:");
    clone.print();
}

run();