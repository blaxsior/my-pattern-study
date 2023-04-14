import { AComDvrAdptController, AComDvrController } from "./legacyCont/ACom.js";
import { BComDvrAdptController, BComDvrController } from "./legacyCont/BCom.js";
import { CComDvrAdptController, CComDvrController } from "./legacyCont/CCom.js";

export interface DVRController {
    playBack: (startTime: Date) => void; // do something
    record: () => void;
}

export class OurDvrController implements DVRController {
    playBack(startTime: Date) {
        console.log("Our start from!", startTime);
    };
    record() {
        console.log("our record");
        // do something
    }
}

export class DVRContFactory {
    static getController(type: string): DVRController | null {
        switch (type) {
            case "OUR":
                const c1 = new OurDvrController();
                return c1;
            case "ACom":
                const c2 = new AComDvrAdptController(new AComDvrController());
                return c2;
            case "BCom":
                const c3 = new BComDvrAdptController(new BComDvrController());
                return c3;
            case "CCom":
                const c4 = new CComDvrAdptController(new CComDvrController());
                return c4;
            default:
                return null;
        }
    }
}