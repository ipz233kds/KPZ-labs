class Logger {
    log(message) {
        console.log(`\x1b[32m[LOG]\x1b[0m ${message}`); // зелений
    }

    warn(message) {
        console.warn(`\x1b[33m[WARN]\x1b[0m ${message}`); // оранжевий
    }

    error(message) {
        console.error(`\x1b[31m[ERROR]\x1b[0m ${message}`); // червоний
    }
}

module.exports = Logger;