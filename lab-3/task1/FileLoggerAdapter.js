const Logger = require('./Logger');
const FileWriter = require('./FileWriter');

class FileLoggerAdapter extends Logger {
    constructor(fileWriter) {
        super();
        this.fileWriter = fileWriter;
    }

    log(message) {
        this.fileWriter.writeLine(`[LOG] ${message}`);
    }

    warn(message) {
        this.fileWriter.writeLine(`[WARN] ${message}`);
    }

    error(message) {
        this.fileWriter.writeLine(`[ERROR] ${message}`);
    }
}

module.exports = FileLoggerAdapter;