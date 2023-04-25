abstract class Paint {
    protected _impl: Implementor;
    constructor(impl: Implementor) {
        this._impl = impl;
    }
    set impl(impl: Implementor) {
        this._impl = impl;
    }

    abstract draw(): void;
}

class Circle extends Paint {
    protected _r: number; // 반지름?

    get r() {
        return this._r;
    }
    set r(r: number) {
        this._r = r;
    }

    draw() {
        this._impl.drawCircle();
    }

    constructor(r: number, impl: Implementor) {
        super(impl);
        this._r = r;
    }
}

class Rectangle extends Paint {
    protected _width: number;
    protected _height: number;

    get width() {
        return this.width
    };
    
    set width(_width: number) {
        this._width = _width;
    }

    get height() {
        return this._height;
    }

    set height(_height: number) {
        this._height = _height;
    }

    draw() {
        this._impl.drawRectangle();
    }

    constructor(width: number, height: number, impl: Implementor) {
        super(impl);
        this._width = width;
        this._height = height;
    }
}

class Triangle extends Paint {
    protected _side: number;

    get side() {
        return this._side
    };
    
    set side(_side: number) {
        this._side = _side;
    }

    draw() {
        this._impl.drawTriangle();
    }

    constructor(side: number, impl: Implementor) {
        super(impl);
        this._side = side;
    }
}


interface Implementor {
    drawCircle(): void;
    drawRectangle(): void;
    drawTriangle(): void;
}

class TextImpl implements Implementor {
    drawCircle() {
        console.log("Circle");
    }

    drawRectangle() {
        console.log("Rectangle");
    }
    
    drawTriangle() {
        console.log("Triangle");
    }
}

class CharImpl implements Implementor {
    drawCircle() {
        console.log("◎");
    }

    drawRectangle() {
        console.log("■");
    }

    drawTriangle() {
        console.log("▲");
    }
}