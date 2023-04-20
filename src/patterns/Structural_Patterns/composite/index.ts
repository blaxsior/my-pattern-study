import { Circle, Group, Line, Triangle } from './composite-pattern.js';

export function main() {
    const base2 = new Group(1);
    base2.add(new Triangle());
    base2.add(new Triangle());
    base2.add(new Triangle());


    const base3 = new Group(2);
    base3.add(new Circle());
    base3.add(new Triangle());
    base3.add(new Line());

    const base = new Group(3);
    base.add(new Circle());
    base.add(new Circle());
    base.add(base2);
    base.add(new Circle());
    base.add(new Triangle());
    base.add(base3);
    base.add(new Line());
    base.add(new Line());
    base.getChild(2).composite?.add(new Line()); // 이런 동작이 가능해진다.
    base.getChild(5).composite?.add(new Line()); // Composite 객체인 것을 몰라도 동작 가능
    
    console.log(base2.parent);
    console.log(base3.parent);

    base.move();
    base.draw();

    base.remove(base2);
    console.log(base2.parent);
}

