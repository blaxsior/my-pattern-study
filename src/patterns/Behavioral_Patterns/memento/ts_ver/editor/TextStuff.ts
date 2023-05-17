/**
 * Originator에 대응되는 클래스
 */
export class TextArea {
    private text: string = '';

    setText(text: string) {
        this.text = text;
    }

    getText() {
        return this.text;
    }

    // 외부에 구체적인 메멘토 객체를 노출하지 않기 위해 Memento 인터페이스로 반환.
    createMemento(): Memento {
        const history = new History(this.text); // 내부에서는 구체적인 메멘토 클래스 사용
        Object.defineProperty(history, 'constructor', { // 생성자를 null로 정의
            value: null
        });

        return history;
    }

    restore(memento: Memento) {
        this.text = memento.getSavedText();
    }
}

/**
 * Memento 클래스를 캡슐화하기 위한 인터페이스
 */
export interface Memento {
    getSavedText(): string;
}

/**
 * 구체적인 Memento 클래스.   
 * export 없이 현재 파일 내에서만 접근 가능하도록 유도
 */
class History implements Memento {
    constructor(
        private readonly text: string
    ) { }

    getSavedText(): string {
        return this.text;
    }
}