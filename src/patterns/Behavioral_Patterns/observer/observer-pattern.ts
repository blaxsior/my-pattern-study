interface Observer {
    update(): void;
}

interface Subject {
    attach(o: Observer): void;
    detach(o: Observer): void;
    notify(): void;
}

class TextTyper implements Subject {
    observers: Observer[];
    private _str: string;
    private _lastTyped: string;

    constructor() {
        this._str = '';
        this._lastTyped = '';
        this.observers = [];
    }

    get str() {
        return this._str;
    }

    get lastTyped() {
        return this._lastTyped;
    }

    clear() {
        this._str = '';
        this._lastTyped = '';
        this.notify();
    }

    stroke(ch: string) {
        this._str += ch;
        this._lastTyped = ch;
        this.notify();
    }

    backspace() {
        if(this._str.length >= 0) {
            this._str = this._str.slice(0,-1);
        }
        this._lastTyped = '[backspace]';
        this.notify();
    }

    attach(o: Observer): void {
        this.observers.push(o);
    }
    detach(o: Observer): void {
        const idx = this.observers.indexOf(o);
        if(idx >= 0) {
            this.observers.splice(idx, 1);
        }
    }

    notify(): void {
        for(const ob of this.observers) {
            ob.update();
        }
    }
}

class ConsolePrinter implements Observer {
    private sub?: TextTyper;

    update() {
        console.log(this.sub!.str);
    }
}

const format = new Intl.DateTimeFormat('ko-kr', {
    year:"numeric",
    month: "2-digit",
    day: "2-digit",
    hour:"2-digit",
    minute: "2-digit",
    second: "2-digit"
});

class Logger implements Observer {
    private loggedList: string[];
    private sub?: TextTyper;

    constructor() {
        this.loggedList = [];
    }

    set setSub(sub: TextTyper) {
        this.sub = sub;
    }

    update() {
        const clicked = this.sub!.lastTyped;
        if(clicked != '') { // clear에는 반응 안함
            this.loggedList.push(`${format.format(new Date())}: Typed ${clicked}`);
        }
    }

    get getLog(): readonly string[] {
        return this.loggedList;
    } 
}