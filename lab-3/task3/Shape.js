class Shape {
    constructor(renderer) {
        this.renderer = renderer;
    }

    draw() {
        throw new Error("draw() must be implemented by subclass");
    }
}

class Circle extends Shape {
    draw() {
        this.renderer.render("Circle");
    }
}

class Square extends Shape {
    draw() {
        this.renderer.render("Square");
    }
}

class Triangle extends Shape {
    draw() {
        this.renderer.render("Triangle");
    }
}

module.exports = { Shape, Circle, Square, Triangle };