const fs = require('fs');
const renderBook = require('./renderTextAsLightHTML');

function run() {
    const filePath = 'book.txt';


    const lines = fs.readFileSync(filePath, 'utf8').split('\n');

    const htmlRoot = renderBook(lines);

    console.log("HTML Output:\n");
    console.log(htmlRoot.outerHTML);

    const memory = Buffer.byteLength(htmlRoot.outerHTML, 'utf8');
    console.log(`\n Estimated memory usage: ${memory} bytes`);
}

run();