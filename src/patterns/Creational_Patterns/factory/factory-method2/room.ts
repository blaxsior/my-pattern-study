import type { MapSite } from "./mapsite.js";

export enum RoomSide {
    North = 0,
    East,
    South,
    West
}

export class Room implements MapSite {
    sides: MapSite[];
    constructor(
        public readonly roomNumber: number
    ) {
        this.sides = new Array(4);
    }
    enter(): void {
        console.log("enter the room")
    }
    setSide(direction: RoomSide, site: MapSite) {
        this.sides[direction] = site;
    }
    getSide(direction: RoomSide): MapSite {
        return this.sides[direction];
    }
}

export class RoomWithBomb extends Room {
    override enter(): void {
        console.log("Room: booomed!")
    }
}

export class EnchantedRoom extends Room {
    override enter(): void {
        console.log("you entered enchanted room...");
    }
}