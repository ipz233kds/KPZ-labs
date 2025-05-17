const fs = require('fs');

class SmartTextReader {
    read(filePath) {
        const content = fs.readFileSync(filePath, 'utf8');
        return content.split('\n').map(line => line.split(''));
    }
}

module.exports = SmartTextReader;