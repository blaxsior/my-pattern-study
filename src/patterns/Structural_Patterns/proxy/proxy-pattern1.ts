// 코드 아이디어 출처: https://www.youtube.com/watch?v=WcAV9rOGjxw&list=PL8B19C3040F6381A2&index=5

interface Zerg {
    move(xPos: number, yPos: number): void;
}

interface IConstructor<T> {
    new(...args: any[]): T;
}

interface IInitInfo<T> {
    Target: IConstructor<T>
    time: number; // 생성에 걸리는 시간
    // 이외로 자원 등의 정보 포함될 수 있을듯?
}

interface IZergInitInfo extends IInitInfo<Zerg> { }

class Drone implements Zerg {

    move(xPos: number, yPos: number) {
        console.log(`Drone: move to (${xPos},${yPos})`);
    }
}


class Cocoon implements Zerg {
    private target?: Zerg;
    private rallyPoint?: Point;
    private t: NodeJS.Timeout;

    constructor({
        time,
        Target
    }: IZergInitInfo) {
        this.t = setTimeout(() => {
            console.log("Time Completed");
            this.onTimerComplete(Target);
        }, time);
    }

    private onTimerComplete(target: IConstructor<Zerg>) {
        this.target = new target();
        if (this.rallyPoint) {
            this.target.move(this.rallyPoint.x, this.rallyPoint.y);
        }
    }

    cancel() {
        clearTimeout(this.t);
        // remove this...
    }

    move(xPos: number, yPos: number): void {
        if (this.target) {
            this.target.move(xPos, yPos);
        } else {
            this.rallyPoint = new Point(xPos, yPos);
            console.log("Cocoon: save rallypoint");
        }
    }
}

class Point {
    constructor(
        public readonly x: number,
        public readonly y: number) { }
}

export function main() {
    const droneInitInfo: IZergInitInfo = {
        time:3000,
        Target: Drone
    };

    const drone = new Cocoon(droneInitInfo);
    drone.move(1, 3);
    drone.move(4, 2);
}