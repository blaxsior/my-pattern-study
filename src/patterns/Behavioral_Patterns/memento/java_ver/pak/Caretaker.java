package pak;

import java.util.Deque;

public class Caretaker {
    private Deque<Originator.Memento> mementos;
    private Originator originator;
    public Caretaker(Originator originator) {
        this.originator = originator;
    }

    public void backup() {
        mementos.add(originator.createMemento());
    }

    public void undo() {
        if(!mementos.isEmpty()) {
            final var memento = mementos.pop();
            originator.restore(memento);
        }
    }
}
