abstract class Animal2 {
    abstract cry(): void;
    abstract eat(): void;
    abstract move(): void;
    abstract fly(): void;
}

class Dog2 extends Animal2 {
    override cry(): void {
        console.log("멍멍");
    }
    override eat(): void {
        console.log("밥 먹는중");
    }
    override move(): void {
        console.log("네발로 걷는 중");
    }
    override fly(): void {
        throw new Error("개는 날개가 없어요");
    }
}

class Cat2 extends Animal2 {
    override cry(): void {
        console.log("야옹");
    }
    override eat(): void {
        console.log("밥 먹는중");
    }
    override move(): void {
        console.log("네발로 걷는 중");
    } 
    override fly(): void {
        throw new Error("고양이는 날개가 없어요");
    }     
}

class Bird extends Animal2 {
    override cry(): void {
        console.log("짹짹");
    }
    override eat(): void {
        console.log("밥 먹는중");
    }
    override move(): void {
        console.log("총총 걷는 중");
    } 
    override fly(): void {
        console.log("날고 있어요")
    }     
}