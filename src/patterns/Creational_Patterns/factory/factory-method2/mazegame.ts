// 미로, 방, 문 등이 변경될 수 있는데, 이걸 직접 코딩?

import { Door, DoorNeedingSpell } from "./door.js";
import { Maze } from "./maze.js";
import { EnchantedRoom, Room, RoomSide, RoomWithBomb } from "./room.js";
import { BombedWall, Wall } from "./wall.js";

// -> 팩토리 메서드 사용하자.
export abstract class MazeGame {
    // C++ 기준으로는 virtual function으로 설정되어 있으나
    // typescript에서는 abstract 선언하면 구현 자체가 불가능.
    // 기본 구현이라고 생각하자.
    makeMaze(): Maze {
        return new Maze();
    }

    /**
     * @abstract
     */
    makeRoom(n: number): Room {
        return new Room(n);
    }

    /**
     * @abstract
     */
    makeWall(): Wall {
        return new Wall();
    }

    makeDoor(r1: Room, r2: Room): Door {
        return new Door(r1, r2);
    }

    createMaze() {
        const maze = this.makeMaze(); // maze 생성

        const r1 = this.makeRoom(1); // 팩토리 메서드 사용
        const r2 = this.makeRoom(2); // 팩토리 메서드 사용
        const door = this.makeDoor(r1, r2); // 팩토리 메서드 사용

        maze.addRoom(r1);
        maze.addRoom(r2);

        r1.setSide(RoomSide.North, this.makeWall());
        r1.setSide(RoomSide.East, door);
        r1.setSide(RoomSide.South, this.makeWall());
        r1.setSide(RoomSide.West, this.makeWall());


        r2.setSide(RoomSide.North, this.makeWall());
        r2.setSide(RoomSide.East, this.makeWall());
        r2.setSide(RoomSide.South, this.makeWall());
        r2.setSide(RoomSide.West, door);

    }
}

export class BombedMazeGame extends MazeGame {
    override makeWall(): Wall {
        return new BombedWall();
    }

    override makeRoom(n: number): Room {
        return new RoomWithBomb(n);
    }
}

export class EnchantedMazeGame extends MazeGame {
    override makeRoom(n: number): Room {
        return new EnchantedRoom(n);
    }

    override makeDoor(r1: Room, r2: Room): Door {
        return new DoorNeedingSpell(r1, r2);
    }
}