import { DVRController } from "../index.Cont.js";

export class CComDvrController {
    playBack(startDate: string, startTime: string) {
        console.log("C start from!", startDate, startTime);
        //do something
    }
    dvRecord() {
        console.log("C Record");
    }
}

export class CComDvrAdptController implements DVRController {
    private cont: CComDvrController;

    constructor(cont: CComDvrController) {
        this.cont = cont;
    }
    
    playBack(startTime: Date) {
        const tf = new Intl.DateTimeFormat('en-US', {
            timeStyle: "long",
        });
        const df = new Intl.DateTimeFormat('en-US', {
            dateStyle: "long"
        });
        this.cont.playBack(df.format(startTime),tf.format(startTime));
    }

    record() {
        this.cont.dvRecord();
    }
}

