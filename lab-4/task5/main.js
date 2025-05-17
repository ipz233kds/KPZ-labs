const TextEditor = require('./TextEditor');

function run() {
    const editor = new TextEditor();

    editor.write("Привіт!");
    editor.save();

    editor.write("-rep Євробаченню ");
    editor.save();

    editor.write("Ще одне речення.");
    editor.show();

    console.log("\nUndo 1");
    editor.undo();
    editor.show();

    console.log("\nUndo 2");
    editor.undo();
    editor.show();
}

run();