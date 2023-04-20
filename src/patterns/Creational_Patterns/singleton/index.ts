import { MazeFactory } from "./singleton-pattern2.js";
import * as dotenv from 'dotenv';
dotenv.config();

export function main() {
    console.log(process.env.MAZE_TYPE);
    const singleton = MazeFactory.getInstance();
    singleton.hello();
}