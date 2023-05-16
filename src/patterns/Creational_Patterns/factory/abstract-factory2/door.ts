import type { MapSite } from "./mapsite.js";
import { Room } from "./room.js";

export class Door implements MapSite {
    private isOpen: boolean;
    constructor(
        private r1: Room,
        private r2: Room) {
        this.isOpen = false;
    }

    enter() {
        if (this.isOpen) {
            console.log("enter");
        } else {
            console.log("cannot open");
        }
    }
}

export class DoorNeedingSpell extends Door { }