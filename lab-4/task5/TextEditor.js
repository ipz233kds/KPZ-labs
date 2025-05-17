const { TextDocument, DocumentMemento } = require('./TextDocument');

class TextEditor {
    constructor() {
        this.document = new TextDocument();
        this.history = [];
    }

    write(text) {
        this.document.append(text);
    }

    save() {
        this.history.push(this.document.createMemento());
    }

    undo() {
        if (this.history.length > 0) {
            const lastState = this.history.pop();
            this.document.restore(lastState);
        } else {
            console.log("Немає попередніх версій для відновлення.");
        }
    }

    show() {
        console.log("Поточний документ:\n" + this.document.getContent());
    }
}

module.exports = TextEditor;