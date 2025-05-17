class LightNode {
    get outerHTML() {
        throw new Error("Must implement outerHTML");
    }

    get innerHTML() {
        throw new Error("Must implement innerHTML");
    }
}

module.exports = LightNode;