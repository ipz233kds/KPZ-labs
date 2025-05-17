const SmartTextReader = require('./SmartTextReader');

class SmartTextChecker {
    constructor() {
        this.reader = new SmartTextReader();
    }

    read(filePath) {
        console.log(`Opening file: ${filePath}`);
        const data = this.reader.read(filePath);
        console.log(`File read successfully: ${filePath}`);
        console.log(`Lines: ${data.length}`);
        const symbols = data.reduce((acc, line) => acc + line.length, 0);
        console.log(`Total symbols: ${symbols}`);
        console.log(`Closing file: ${filePath}`);
        return data;
    }
}

module.exports = SmartTextChecker;