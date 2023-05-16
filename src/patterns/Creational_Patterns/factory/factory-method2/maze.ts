import { Room } from "./room.js";

export class Maze {
    protected rooms: Room[];
    constructor() {
        this.rooms = [];
    }

    addRoom(room: Room) {
        if (!this.rooms.includes(room))
            this.rooms.push(room);
    }

    roomNo(no: number) {
        return this.rooms.find(it => it.roomNumber === no);
    }
}