import { MazeFactory } from "./maze_factory.js";
import { RoomSide } from "./room.js";

export abstract class MazeGame {

    createMaze(factory: MazeFactory) {
        const maze = factory.makeMaze(); 

        const r1 = factory.makeRoom(1); 
        const r2 = factory.makeRoom(2); 
        const door = factory.makeDoor(r1, r2); 

        maze.addRoom(r1);
        maze.addRoom(r2);

        r1.setSide(RoomSide.North, factory.makeWall());
        r1.setSide(RoomSide.East, door);
        r1.setSide(RoomSide.South, factory.makeWall());
        r1.setSide(RoomSide.West, factory.makeWall());


        r2.setSide(RoomSide.North, factory.makeWall());
        r2.setSide(RoomSide.East, factory.makeWall());
        r2.setSide(RoomSide.South, factory.makeWall());
        r2.setSide(RoomSide.West, door);

    }
}