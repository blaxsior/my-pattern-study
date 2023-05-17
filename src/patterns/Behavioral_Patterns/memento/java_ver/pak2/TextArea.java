package pak2;

//https://www.youtube.com/watch?v=_Q5rXfGuyLQ
public class TextArea {
    private String text;

    public void setText(String text) {
        this.text = text;
    }

    public String getText() {
        return this.text;
    }

    public Memento takeSnapshot() {
        return new Memento(this.text);
    }

    public void restore(Memento memento) {
        this.text = memento.getSavedText();
    }
    /**
     * Memento에 대응되는 클래스
     * */
    public static class Memento {
        private final String text;

        private Memento(String text) {
            this.text = text;
        }

        private String getSavedText() {
            return this.text;
        }
    }
}
