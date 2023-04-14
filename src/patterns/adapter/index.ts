import { DVRContFactory } from "./index.Cont.js";

export function main() {
    const c1 = DVRContFactory.getController('OUR');
    c1?.playBack(new Date());

    const c2 = DVRContFactory.getController('ACom');
    c2?.playBack(new Date());

    const c3 = DVRContFactory.getController('BCom');
    c3?.playBack(new Date());

    const c4 = DVRContFactory.getController('CCom');
    c4?.playBack(new Date());
}