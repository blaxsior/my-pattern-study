import { Door, DoorNeedingSpell } from "./door.js";
import { Maze } from "./maze.js";
import { EnchantedRoom, Room, RoomWithBomb } from "./room.js";
import { BombedWall, Wall } from "./wall.js";

export abstract class MazeFactory {
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
}

export class BombedMazeFactory extends MazeFactory {
    override makeWall(): Wall {
        return new BombedWall();
    }

    override makeRoom(n: number): Room {
        return new RoomWithBomb(n);
    }
}

export class EnchantedMazeFactory extends MazeFactory {
    override makeRoom(n: number): Room {
        return new EnchantedRoom(n);
    }

    override makeDoor(r1: Room, r2: Room): Door {
        return new DoorNeedingSpell(r1, r2);
    }
}