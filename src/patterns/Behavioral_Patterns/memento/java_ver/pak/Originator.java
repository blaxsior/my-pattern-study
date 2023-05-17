package pak;

public class Originator {
    private String state;

    public Originator(String state) {
        this.state = state;
    }

    public Memento createMemento(){
        return new Memento(this.state);
    }

    public String getState() {
        return this.state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public void restore(Memento memento) {
        this.state = memento.getState();
    }

    public static class Memento {
        private final String state;

        private Memento(String state) {
            this.state = state;
        }

        private String getState() {
            return this.state;
        }
    }
}
