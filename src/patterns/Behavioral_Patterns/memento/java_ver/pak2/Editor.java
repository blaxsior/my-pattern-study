package pak2;

import java.util.Deque;

/**
 * Caretaker에 대응되는 클래스
 */
public class Editor {
    private Deque<TextArea.Memento> history;
    private TextArea textarea;

    public Editor(TextArea textArea) {
        this.textarea = textArea;
    }

    public void write(String text) {
        textarea.setText(text);
        history.push(textarea.takeSnapshot()); // 스냅샷을 찍어서 저장
    }

    public void undo() {
        if(!this.history.isEmpty())
            textarea.restore(this.history.pop());
    }
}
