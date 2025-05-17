class VectorRenderer {
    render(shapeName) {
        console.log(`Drawing ${shapeName} as lines.`);
    }
}

class RasterRenderer {
    render(shapeName) {
        console.log(`Drawing ${shapeName} as pixels.`);
    }
}

module.exports = { VectorRenderer, RasterRenderer };