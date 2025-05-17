class Virus {
    constructor(name, type, age, weight) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.weight = weight;
        this.children = [];
    }

    addChild(virus) {
        this.children.push(virus);
    }

    clone() {
        const cloned = new Virus(this.name, this.type, this.age, this.weight);

        this.children.forEach(child => {
            cloned.addChild(child.clone());
        });
        return cloned;
    }

    print(indent = 0) {
        console.log(`${' '.repeat(indent)} ${this.name}, ${this.type}, Age: ${this.age}, Weight: ${this.weight}`);
        this.children.forEach(child => child.print(indent + 2));
    }
}

module.exports = Virus;