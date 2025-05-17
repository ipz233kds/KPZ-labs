const fs = require('fs');
const SmartTextChecker = require('./SmartTextChecker');
const SmartTextReaderLocker = require('./SmartTextReaderLocker');


const filePath = 'example.txt';
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, [
        "Hello world!",
        "I love reading books",
        "I want to go to the shop"
    ].join('\n'));
    console.log(`Файл '${filePath}' створено.`);
}

console.log("\nChecker Proxy");
const checker = new SmartTextChecker();
const checkedData = checker.read(filePath);
console.log("Двовимірний масив:\n", checkedData);

console.log("\nLocker Proxy");
const locker = new SmartTextReaderLocker(/secret|forbidden/i);

console.log("\nЧитання дозволеного файлу:");
const allowed = locker.read(filePath);
console.log("Вміст:\n", allowed);

console.log("\nСпроба читання забороненого файлу:");
locker.read('secret-data.txt');

