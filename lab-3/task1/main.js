const Logger = require('./Logger');
const FileWriter = require('./FileWriter');
const FileLoggerAdapter = require('./FileLoggerAdapter');

function run() {
    console.log("Console Logger");
    const consoleLogger = new Logger();
    consoleLogger.log("Успішне підключення");
    consoleLogger.warn("Попередження: використано багато пам’яті");
    consoleLogger.error("Помилка з’єднання з сервером");

    console.log("\nFile Logger");
    const fileLogger = new FileLoggerAdapter(new FileWriter('log.txt'));
    fileLogger.log("Файл: лог успішний");
    fileLogger.warn("Файл: попередження");
    fileLogger.error("Файл: помилка");
}

run();