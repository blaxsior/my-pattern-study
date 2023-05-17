export class Originator {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public save(): IMemento {
        return new Memento(this.state);
    }

    public restore(memento: IMemento) {
        this.state = memento.getState();
    }

    public getState() {
        return this.state;
    }

    public setState(state: string) {
        this.state = state;
    }
}

export interface IMemento {
    getState(): string;
}

class Memento implements IMemento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}

export class Caretaker {
    private mementos: IMemento[] = [];

    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public backup() {
        this.mementos.push(this.originator.save());
    }

    public undo() {
        if(this.mementos.length > 0) {
            this.originator.restore(this.mementos.pop()!);
        }
    }

    public showHistory() {
        for(const mem of this.mementos) {
            console.log(mem.getState());
        }
    }
}