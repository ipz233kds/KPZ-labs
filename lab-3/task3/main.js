const { Circle, Square, Triangle } = require('./Shape');
const { VectorRenderer, RasterRenderer } = require('./Renderer');

function run() {
    const vector = new VectorRenderer();
    const raster = new RasterRenderer();

    const shapes = [
        new Circle(vector),
        new Square(raster),
        new Triangle(vector),
        new Triangle(raster),
    ];

    shapes.forEach(shape => shape.draw());
}

run();