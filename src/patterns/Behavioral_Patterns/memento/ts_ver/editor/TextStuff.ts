export class TextArea {
    private text: string = '';

    setText(text: string) {
        this.text = text;
    }

    getText() {
        return this.text;
    }

    createMemento() { // 외부에는 구체적인 타입을 노출하지 않아야 함.
        return new History(this.text);
    }

    restore(memento: Memento) {
        this.text = memento.getSavedText();
    }
}

export interface Memento {
    getSavedText(): string;
}

class History implements Memento {
    constructor(
        private readonly text: string
    ) { }

    getSavedText(): string {
        return this.text;
    }
}