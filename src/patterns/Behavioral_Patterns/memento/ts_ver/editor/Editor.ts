import { Memento, TextArea } from "./TextStuff";

export class Editor {
    private readonly mementos: Memento[];
    private textArea: TextArea;
    
    constructor(textArea: TextArea) {
        this.mementos = [];
        this.textArea = textArea;
    }

    write(text: string) {
        this.textArea.setText(text);
        this.mementos.push(this.textArea.createMemento());
    }

    get canUndo() {
        return this.mementos.length > 0;
    }

    undo() {
        if(this.canUndo) {
            this.textArea.restore(this.mementos.pop()!);
        }
    }
}