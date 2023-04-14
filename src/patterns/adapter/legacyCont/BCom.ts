import { DVRController } from "../index.Cont.js";

export class BComDvrController {
    startPlayBack(timetick: number) {
        console.log("B start from!", timetick);
        //do something
    }
    vRec() {
        console.log("B record");
    }
}

export class BComDvrAdptController implements DVRController {
    private cont: BComDvrController;

    constructor(cont: BComDvrController) {
        this.cont = cont;
    }
    
    playBack(startTime: Date) {
        this.cont.startPlayBack(startTime.getTime());
    }

    record() {
        this.cont.vRec();
    }
}

