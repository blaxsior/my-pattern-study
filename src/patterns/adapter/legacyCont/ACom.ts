import { DVRController } from "../index.Cont.js";

export class AComDvrController {
    beginPlayBack(startTime: Date) {
        console.log("A start from!", startTime);
        //do something
    }
    videoRecord() {
        console.log("A record");
    }
}

export class AComDvrAdptController implements DVRController {
    private cont: AComDvrController;

    constructor(cont: AComDvrController) {
        this.cont = cont;
    }
    
    playBack(startTime: Date) {
        this.cont.beginPlayBack(startTime);
    }

    record() {
        this.cont.videoRecord
    }
}

