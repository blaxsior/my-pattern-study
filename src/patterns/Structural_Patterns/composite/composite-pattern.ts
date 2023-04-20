import {stdout} from 'process';

export abstract class Figure {
    parent?: Figure;
    abstract draw(): void;
    abstract move(): void;
    add(f: Figure) {
        throw new Error("must implemented before use");
    }
    remove(f: Figure) {
        throw new Error("must implemented before use");
        // nothing
    };
    getChild(num: number): Figure|undefined {
        throw new Error("must implemented before use");
    }
    get composite(): Figure|null {
        return null; // composite 객체에서는 다시 구현!
        // gof 책에서 설명한 패턴 중 하나.
        // 단, 이 방식은 비효율적. 연산이 가능한지 비교하는 것과 동일.
        // if문 돌리는 것과 다르지 않음.
    }
}

export class Circle extends Figure {
    draw() {
        console.log("●: circle!");
    }
    move() {
        console.log("->●: circle move!");
    }
}

export class Triangle extends Figure {
    draw() {
        console.log("▲: triangle!");
    }
    move() {
        console.log("->▲: triangle move!");
    }
}

export class Line extends Figure {
    draw() {
        console.log("↕:Line!");
    }
    move() {
        console.log("↗:Line move!");
    }
}

export class Group extends Figure {
    private name: number;
    private figures: Figure[];
    constructor(name: number) {
        super();
        this.name = name;
        this.figures = [];
    }
    draw(): void {
        console.log("Group!");
        this.figures.forEach(it => {
            stdout.write(`  ${this.name} `);
            it.draw();
        });
    }
    move(): void {
        console.log("Group move!");
        this.figures.forEach(it => {
            stdout.write(`  ${this.name} `);
            it.move();
        });
    }
    override add(f: Figure) {
        f.parent = this;
        this.figures.push(f);
    }

    override remove(f: Figure) {
        const didx = this.figures.indexOf(f);
        if(didx >= 0) { // 존재하면
            this.figures.splice(didx,1); // 자식에서 제거
            delete f.parent;
        }
    }

    override getChild(num: number) {
        return this.figures[num];
    }

    override get composite() {
        return this;
    }
}