import { Caretaker, Originator } from "./t01.js";

export function main() {

    const originator = new Originator("init"); // 데이터 주로 쓰는 놈
    const caretaker = new Caretaker(originator);

    originator.setState("state1");
    caretaker.backup();
    originator.setState("state2");
    caretaker.backup();
    originator.setState("state3");
    caretaker.backup();
    originator.setState("state4");
    caretaker.backup();
    // const ctor = originator.save().constructor;
    // const memento = new ctor("hello");
    // console.log(memento.getState());

    caretaker.undo();
    console.log(originator.getState());
    caretaker.undo();
    console.log(originator.getState());
    caretaker.undo();
    console.log(originator.getState());
    caretaker.undo();
    console.log(originator.getState());
}