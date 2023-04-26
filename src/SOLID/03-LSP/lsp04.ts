class Heap<E> {
    private list: E[];
    // 이외의 변수들...
    constructor() {
        this.list = [];
    }
    insert(data: E) {
        // 데이터의 순서를 찾는 코드... O(log2 N)
        this.list.push(data); // 여러 로직들...
    }
    delete(): E {
        return this.list.splice(0,1)[0];
    }
}

class Stack<E> {
    private list: E[];
    //이외의 변수들...
    constructor() {
        this.list = [];
    }
    push(data: E) {
        this.list.push(data);
    }
    pop() {
        return this.list.pop();
    }
    peak() {
        return this.list.at(-1);
    }
}


function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;
function add(a: number, b: number, c: number, d: string): string;

function add(a: number, b:number, c?:number, d?: string): number|string {
    if(c != undefined) {
        if(d != undefined) {
            return a + b + c + d;
        }
        return a + b + c;
    }
    return a + b;
}

abstract class Add {
    abstract add(a: number, b: number, c?: number, d?: string): number|string;
}

class Add1 extends Add {
    override add(a: number, b: number, c?: number | undefined, d?: string | undefined):number {
        return a + b;
    }
}

class Add2 extends Add {
    override add(a: number, b: number, c: number, d?: string | undefined): number {
        return a + b + c;
    }
}

class Add3 extends Add {
    override add(a: number, b: number, c: number, d: string): string {
        return a + b + c + d;
    }
}