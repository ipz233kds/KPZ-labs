const SmartTextReader = require('./SmartTextReader');

class SmartTextReaderLocker {
    constructor(blockedRegex) {
        this.reader = new SmartTextReader();
        this.blockedRegex = blockedRegex;
    }

    read(filePath) {
        if (this.blockedRegex.test(filePath)) {
            console.log('Access denied!');
            return null;
        }
        return this.reader.read(filePath);
    }
}

module.exports = SmartTextReaderLocker;
