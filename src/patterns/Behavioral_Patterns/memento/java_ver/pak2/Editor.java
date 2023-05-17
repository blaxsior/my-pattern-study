package pak2;

import java.util.Deque;

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
