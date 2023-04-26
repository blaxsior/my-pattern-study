abstract class Animal3 {
    abstract cry(): void;
    abstract eat(): void;
    abstract move(): void;
}

interface IFlyable {
    fly(): void;
}

class Dog3 extends Animal3 {
    override cry(): void {
        console.log("멍멍");
    }
    override eat(): void {
        console.log("밥 먹는중");
    }
    override move(): void {
        console.log("네발로 걷는 중");
    }
}

class Cat3 extends Animal3 {
    override cry(): void {
        console.log("야옹");
    }
    override eat(): void {
        console.log("밥 먹는중");
    }
    override move(): void {
        console.log("네발로 걷는 중");
    } 
}

class Bird3 extends Animal3 implements IFlyable {
    override cry(): void {
        console.log("짹짹");
    }
    override eat(): void {
        console.log("밥 먹는중");
    }
    override move(): void {
        console.log("총총 걷는 중");
    } 
    fly(): void {
        console.log("날고 있어요")
    }     
}