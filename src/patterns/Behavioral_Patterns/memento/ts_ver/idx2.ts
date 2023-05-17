import readline from 'readline/promises';
import { Editor } from './editor/Editor.js';
import { TextArea } from './editor/TextStuff.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false // 입력 값 터미널에 출력하는거 막기
});

export async function main() {
    let buffer: string = "   ";
    const textArea = new TextArea();
    const editor = new Editor(textArea);
    console.log("Read While you write nothing...");
    
    do {
        buffer = await rl.question('> ');
        if(buffer.length > 0) {
            editor.write(buffer);
        }
    } while(buffer.length > 0);
    rl.close();

    while(editor.canUndo) {
        editor.undo();
        console.log(textArea.getText());
    }
    // console.log(textArea.getText());

    const memento = textArea.createMemento();
    interface T {
        new (...args:any): any
    }
    const ctor = memento.constructor as T;
    if(ctor != null) {
        const newMemento = new ctor("In fact, we can make History class");
        console.log(newMemento.getSavedText());
        console.log(`the name of ctor is ${ctor.name}`);
    } else {
        console.log("cannot get constructor of memento");
    }
}