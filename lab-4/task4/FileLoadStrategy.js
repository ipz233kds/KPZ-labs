class FileLoadStrategy {
    load(href) {
        console.log(`Завантаження зображення з файлової системи: ${href}`);
    }
}

module.exports = FileLoadStrategy;