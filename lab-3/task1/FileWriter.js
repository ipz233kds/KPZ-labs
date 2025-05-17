const fs = require('fs');

class FileWriter {
    constructor(filename = 'log.txt') {
        this.filename = filename;
    }

    write(message) {
        fs.appendFileSync(this.filename, message + '\n');
    }

    writeLine(message) {
        this.write(message); // аналог write, бо в нас текстовий режим
    }
}

module.exports = FileWriter;