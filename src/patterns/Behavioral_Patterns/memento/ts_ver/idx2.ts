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

    // for await (const line of rl) {
    //     if(line.length > 0)
    //         editor.write(line); 
    //     else
    //         rl.close();
    // }

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

}