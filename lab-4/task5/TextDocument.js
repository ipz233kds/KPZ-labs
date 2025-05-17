class TextDocument {
    constructor() {
        this.content = '';
    }

    append(text) {
        this.content += text;
    }

    getContent() {
        return this.content;
    }

    createMemento() {
        return new DocumentMemento(this.content);
    }

    restore(memento) {
        this.content = memento.getState();
    }
}

class DocumentMemento {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}

module.exports = { TextDocument, DocumentMemento };