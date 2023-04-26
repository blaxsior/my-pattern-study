abstract class Animal {
    abstract cry(): void;
    abstract eat(): void;
    abstract move(): void;
}

class Dog extends Animal {
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

class Cat extends Animal {
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
