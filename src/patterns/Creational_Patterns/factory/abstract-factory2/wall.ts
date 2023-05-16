import type { MapSite } from "./mapsite.js";

export class Wall implements MapSite {
    enter(): void {
        console.log("cannot enter the wall.");
    }
}

export class BombedWall extends Wall {
    override enter(): void {
        console.log("wall: booom!");
    }
}