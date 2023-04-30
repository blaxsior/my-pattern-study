class Display1 {
    private history: string;

    constructor(private historyLength: number) {
        this.history = "";
    }

    addChar(ch: string) {
        this.history += ch;
    }

    resetHistory() {
        this.history = "";
        this.historyLength = 0;
    }

    getHistory() {
        return this.history;
    }

    isHistoryEmpty() {
        return this.history.length <= 0;
    }

    isHistoryFull() {
        return this.history.length >= this.historyLength;
    }

    canWrite() {
        return this.history.length >= 0 && !this.isHistoryFull();
    }

    display() {
        console.log(this.history);
    }
}

class LED1 {
    blink() {
        console.log("*");
    }
}

class AlphaButton {
    constructor(
        private alpha: string,
        private display: Display1,
        private led: LED1) {
    }

    press() {
        this.display.addChar(this.alpha);
        this.display.display();
        this.led.blink();
    }
}

class SaveButton {
    constructor(
        private display: Display1,
        private led: LED1) {
    }

    press() {
        this.led.blink();
        this.save();
    }

    private save() {
        return this.display.getHistory();
    }
}

class ResetButton {
    constructor(
        private display: Display1,
        private led: LED1) {
    }

    press() {
        this.led.blink();
        this.reset();
        this.display.display();
    }

    private reset() {
        this.display.resetHistory();
    }
}