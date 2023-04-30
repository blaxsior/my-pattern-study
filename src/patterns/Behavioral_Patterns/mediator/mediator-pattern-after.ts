class Mediator {
    constructor(private display: Display2,
        private led: LED2,
        private alphaButtons: AlphaButton2[],
        private saveButton: SaveButton2,
        private resetButton: ResetButton2
    ) { }

    setAlpha(ch: string) {
        if(this.display.canWrite()) {
            this.display.addChar(ch);
        }
        this.led.blink();
    }

    save() {
        const message = this.display.getHistory();
        // message을 메인 컴퓨터에 넘기는 로직
        this.led.blink();
    }

    reset() {
        this.display.resetHistory();
        this.led.blink();
    }
}

class Display2 {
    private history: string;

    constructor(private historyLength: number) {
        this.history = "";
    }

    addChar(ch: string) {
        // 허용량 이상 작성하면 에러난다고 가정.
        this.history += ch;
        this.historyLength += 1;
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

class LED2 {
    blink() {
        console.log("*");
    }
}

class AlphaButton2 {
    constructor(
        private mediator: Mediator,
        private alpha: string,
    ) {
    }

    press() {
        this.mediator.setAlpha(this.alpha);
    }
}

class SaveButton2 {
    constructor(private mediator: Mediator) {
    }

    press() {
        this.mediator.save();
    }
}

class ResetButton2 {
    constructor(private mediator: Mediator) {
    }

    press() {
        this.mediator.reset();
    }
}